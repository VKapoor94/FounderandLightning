import React from 'react';

import {StyleSheet, Text, View, Pressable} from 'react-native';
import COLORS from '../../styles/COLORS';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dog} from '../../data/HomeScreenData';
import ImageModal from 'react-native-image-modal';

const renderItem = ({item}: {item: Dog}, props) => {
  function getTemperament(text: string) {
    return text.slice(0, 4).concat('...');
  }

  const onDelete = item => {
    console.log(item);
  };

  const onEdit = item => {
    console.log(item);
  };

  const {photo, breed, origin, breedType} = item;

  return (
    <View style={styles.item}>
      <View>
        <ImageModal
          resizeMode={'contain'}
          style={styles.image}
          source={{
            uri: photo,
          }}
        />
      </View>
      <Pressable
        onPress={() => props.navigation.navigate('Details', item)}
        android_ripple={{color: '#000000', radius: 60, borderless: true}}>
        <View style={styles.internalDetails}>
          <Text style={styles.title}>{breed}</Text>
          <Text style={styles.internalDetailsTitle}>
            {'Origin -'}
            {origin}
          </Text>

          <Text style={styles.internalDetailsTitle}>
            {'BreedType -'}
            {breedType}
          </Text>
          <Text style={styles.internalDetailsTitle}>
            {'temperament -'}
            {getTemperament(item.temperament[0])}
          </Text>
        </View>
      </Pressable>
      <View style={styles.delete}>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            onPress={() => onDelete(item)}
            size={24}
            color={COLORS.errorBackground}
            name="delete-alert"
          />
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            size={24}
            onPress={() => onEdit(item)}
            color={COLORS.edit}
            name="square-edit-outline"
          />
        </View>
      </View>
    </View>
  );
};

export default renderItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: COLORS.noticeText,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 18,
    color: COLORS.tabIconDefault,
    marginVertical: 10,
    fontWeight: 'bold',
    marginLeft: 15,
    maxWidth: '93%',
  },
  image: {
    width: 100,
    height: 70,
    borderColor: COLORS.tabIconSelected,
    borderWidth: 1,
    borderRadius: 45,
    margin: 10,
  },
  internalDetails: {
    flexDirection: 'column',
  },
  internalDetailsTitle: {
    fontSize: 12,
    color: COLORS.tabIconDefault,
    marginHorizontal: 12,
    fontWeight: '600',
    maxWidth: '93%',
  },
  delete: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginVertical: 30,
  },
  icon: {
    padding: 4,
  },
});
