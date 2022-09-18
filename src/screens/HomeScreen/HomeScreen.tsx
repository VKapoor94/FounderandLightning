import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './HomeScreen.styles';
import {DATA} from '../../data/HomeScreenData';
import renderItem from '../../components/HomeScreen/ListItemHome';
import {useNavigation} from '@react-navigation/native';
import {useIsFocused} from '@react-navigation/native';

function HomeScreen(props) {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    //Update the state you want to be updated
    setData(DATA[0].dogBreeds);
  }, [isFocused]);

  const onDelete = item => {
    const idToRemove = item.id;
    const filteredDog = data.filter(item => item.id !== idToRemove);
    setData(filteredDog);
  };

  const onEdit = item => {
    navigation.navigate('AddNewNavigation', item);
  };
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={item => renderItem(item, props, onDelete, onEdit)}
        keyExtractor={item => item.breed}
        extraData={props}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
