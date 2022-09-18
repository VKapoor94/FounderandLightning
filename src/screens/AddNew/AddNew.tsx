import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {DATA} from '../../data/HomeScreenData';

import {Picker} from '@react-native-picker/picker';
import COLORS from '../../styles/COLORS';
import styles from './AddNew.style';
import {launchImageLibrary} from 'react-native-image-picker';
import MultiselectComponent from '../../components/HomeScreen/MultiselectComponent';

import {useNavigation} from '@react-navigation/native';
import MultiSelectComp from '../../components/HomeScreen/Multiselect';

const AddNew = ({route}) => {
  const item = route.params;
  console.log(item ? item.breed : '');
  const itemDef = item === undefined;
  const [origin, setOrigin] = useState('Canada');
  const [breed, setBreed] = React.useState('');
  const [breedType, setBreedType] = React.useState('');
  const [age, setAge] = React.useState('');
  const [sex, setSex] = React.useState('Male');
  const [image, setImage] = React.useState('');
  const [data, setData] = React.useState(DATA);
  const navigation = useNavigation();
  console.log(breed);
  const AddNew = () => {
    const length = DATA[0].dogBreeds;
    const newDog = {
      id: length + 1,
      breed: breed,
      breedType: breedType,
      age: age,
      sex: sex,
      color: 'white',
      length: '6-9',
      weight: '20',
      origin: origin,
      popularity: '11',
      temperament: ['Playful', 'Friendly', 'Devoted', 'Loyal'],
      hypoallergenic: 'No',
      intelligence: 48,
      photo: image,
    };
    console.log(newDog);
    const newD = DATA[0].dogBreeds.unshift(newDog);
    console.log(newD);
    setData(DATA[0].dogBreeds);
    navigation.navigate('Home', data);
  };
  const UploadImage = async () => {
    const options = {
      mediaType: 'mixed',
    };
    const result = await launchImageLibrary(options);
    console.log(result.assets[0].uri);
    setImage(result.assets[0].uri);
  };
  return (
    <ScrollView nestedScrollEnabled={true} style={styles.form}>
      <Text style={styles.formText}> Add new Dog to the list </Text>
      <View style={styles.form}>
        <Text style={styles.label}> Breed </Text>
        <TextInput
          style={styles.input}
          onChangeText={setBreed}
          value={item && item.breed ? item.breed : breed}
          placeholder="breed"
          placeholderTextColor={COLORS.tabIconDefault}
        />
        <Text style={styles.label}>BreedType</Text>

        <TextInput
          onChangeText={setBreedType}
          value={item && item.breedType ? item.breedType : breedType}
          style={styles.input}
          placeholder="breedType"
          placeholderTextColor={COLORS.tabIconDefault}
        />
        <Text style={styles.label}>Origin</Text>
        <View
          style={{
            borderColor: COLORS.tabIconDefault,
            borderWidth: 1,
            margin: 15,
            justifyContent: 'center',
            height: 40,
          }}>
          <Picker
            mode="dropdown"
            dropdownIconColor={COLORS.tabIconDefault}
            dropdownIconRippleColor={COLORS.tabIconDefault}
            itemStyle={{
              backgroundColor: COLORS.tabIconDefault,

              fontSize: 17,
            }}
            style={{color: COLORS.tabIconSelected}}
            selectedValue={item && item.origin ? item.origin : origin}
            onValueChange={currentOrigin => setOrigin(currentOrigin)}>
            <Picker.Item label="Canada" value="Canada" />
            <Picker.Item label="Germany" value="Germany" />
            <Picker.Item label="United Kingdom" value="United Kingdom" />
            <Picker.Item label="France" value="France" />
          </Picker>
        </View>
        <Text style={styles.label}>Age</Text>

        <TextInput
          onChangeText={setAge}
          value={item && item.age ? item.age : age}
          style={styles.input}
          placeholder="Age"
          placeholderTextColor={COLORS.tabIconDefault}
        />
        <Text style={styles.label}>Sex</Text>

        <View
          style={{
            borderColor: COLORS.tabIconDefault,
            borderWidth: 1,
            margin: 15,
            justifyContent: 'center',
            height: 40,
          }}>
          <Picker
            mode="dropdown"
            dropdownIconColor={COLORS.tabIconDefault}
            dropdownIconRippleColor={COLORS.tabIconDefault}
            itemStyle={{
              backgroundColor: COLORS.tabIconDefault,

              fontSize: 17,
            }}
            style={{color: COLORS.tabIconSelected}}
            selectedValue={item && item.sex ? item.sex : sex}
            onValueChange={currentSex => setSex(currentSex)}>
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
          </Picker>
        </View>
        <View style={{padding: 10, margin: 10}}>
          <Button
            color={COLORS.tabIconDefault}
            title={item && item.photo ? 'Change image' : 'Upload dog image'}
            onPress={() => UploadImage()} //change "function" with your function for the button pressing
          />
          <View style={{marginTop: 20}}>
            <MultiSelectComp temperament={item && item.temperament} />
          </View>
        </View>
        <View style={{padding: 10, margin: 10}}>
          <Button
            color={COLORS.tabIconSelected}
            title="Submit"
            onPress={() => AddNew()} //change "function" with your function for the button pressing
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AddNew;
