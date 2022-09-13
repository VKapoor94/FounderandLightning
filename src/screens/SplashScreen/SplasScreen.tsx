import React from 'react';
import FastImage from 'react-native-fast-image';

function SplasScreen({navigation}) {
  return (
    <FastImage
      style={{width: '100%', height: '100%'}}
      source={{
        uri: 'https://c.tenor.com/hiLmX6ohXgQAAAAC/desertstorm-lightning.gif', //give your url here
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.contain}
      onLoad={() => {
        setTimeout(() => {
          //navigate to another screen after some times
          navigation.navigate('MainNavigation');
        }, 15000);
      }}
    />
  );
}

export default SplasScreen;
