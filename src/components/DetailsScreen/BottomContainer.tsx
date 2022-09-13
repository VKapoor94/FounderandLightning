import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const BottomContainer = ({scrollY, imageHeight, ...props}) => {
  const animateBorderRadius = scrollY.interpolate({
    inputRange: [0, 450 - 100],
    outputRange: [40, 0],
  });
  return (
    <Animated.ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 200,
        backgroundColor: 'transparent',
        marginTop: -100,
      }}
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: scrollY}}}],
        {useNativeDriver: true},
        () => {}, // Optional async listener
      )}
      style={[{paddingTop: imageHeight}]}>
      <Animated.View
        style={[
          styles.block,
          {
            borderTopLeftRadius: animateBorderRadius,
            borderTopRightRadius: animateBorderRadius,
          },
        ]}>
        {props.children}
      </Animated.View>
      <View style={{height: 0.1 * deviceHeight}}></View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#fff',
    width: deviceWidth,
    height: deviceHeight,
  },
});

export default BottomContainer;
