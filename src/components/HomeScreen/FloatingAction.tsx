import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import COLORS from '../../styles/COLORS';
import Strings from '../../styles/Strings';

function FloatingAction() {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="plus" size={19} color={COLORS.tabIconDefault} />
      <Text style={styles.addnew}>{Strings.ADD_NEW}</Text>
    </TouchableOpacity>
  );
}

export default FloatingAction;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.tabIconSelected,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    position: 'absolute',
    bottom: 13,
    right: 16,
    height: 50,
    backgroundColor: COLORS.grey,
    borderRadius: 70,
    elevation: 10,
  },
  addnew: {
    fontSize: 8,
    color: COLORS.tabIconDefault,
  },
});
