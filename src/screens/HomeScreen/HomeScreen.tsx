import React from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './HomeScreen.styles';
import {DATA} from '../../data/HomeScreenData';
import renderItem from '../../components/HomeScreen/ListItemHome';
function HomeScreen(props) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA[0].dogBreeds}
        renderItem={item => renderItem(item, props)}
        keyExtractor={item => item.breed}
        extraData={props}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
