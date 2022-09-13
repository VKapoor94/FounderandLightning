import React, {useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import COLORS from '../../styles/COLORS';
import styles from './AddNew.style';
const AddNew = () => {
  const [currency, setCurrency] = useState('US Dollar');
  const [text, onChangeText] = React.useState('Useless Text');

  return (
    <View style={styles.form}>
      <Text style={styles.formText}> Add new Dog to the list </Text>
      <View style={styles.form}>
        <Text style={styles.label}> Breed </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="breed"
          placeholderTextColor={COLORS.tabIconDefault}
        />
        <Text style={styles.label}>BreedType</Text>

        <TextInput
          onChangeText={onChangeText}
          value={text}
          style={styles.input}
          placeholder="breed"
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
            selectedValue={currency}
            onValueChange={currentCurrency => setCurrency(currentCurrency)}>
            <Picker.Item label="Canada" value="Canada" />
            <Picker.Item label="Germany" value="Germany" />
            <Picker.Item label="United Kingdom" value="United Kingdom" />
          </Picker>
        </View>
        <Text style={{color: 'blue'}}>Selected: {currency}</Text>
      </View>
    </View>
  );
};

export default AddNew;
