import React, {useState} from 'react';
import styles from '../DetailsScreen/DetailsScreen.style';
import {
  Animated,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import ImageContainer from '../../components/DetailsScreen/ImageContainer';
import BottomContainer from '../../components/DetailsScreen/BottomContainer';
import COLORS from '../../styles/COLORS';
import {Rating} from 'react-native-ratings';

const DetailsScreen = ({route}) => {
  const item = route.params;
  console.log(item);
  const image = {uri: item.photo};
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  return (
    <View style={[styles.container]}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ImageContainer
          scrollY={scrollY}
          imageSource={image}
          imageHeight={450}
        />
        <BottomContainer scrollY={scrollY} imageHeight={450}>
          <View
            style={{
              marginTop: 40,
              marginLeft: 20,
              marginRight: 20,
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Text
                style={{
                  color: COLORS.tabIconDefault,
                  fontSize: 20,
                  paddingRight: 70,
                  fontWeight: 'bold',
                }}>
                {item.breed}
              </Text>
              <Text
                style={{
                  color: COLORS.tabIconDefault,
                  fontSize: 20,
                }}>
                {item.breedType}
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                color: COLORS.tabIconDefault,
                fontSize: 15,
                marginLeft: 35,
              }}>
              {item.origin}
            </Text>
          </View>
          <Rating
            type="heart"
            startingValue={3}
            style={{marginTop: 10}}
            ratingCount={5}
            readonly
            imageSize={60}
          />
          <ScrollView horizontal={true}>
            <View style={styles.SquareShapeView}>
              <Text style={styles.label}>Age</Text>
              <Text style={styles.value}>{item.age}</Text>
            </View>
            <View style={styles.SquareShapeView}>
              <Text style={styles.label}>Sex</Text>
              <Text style={styles.value}>{item.sex}</Text>
            </View>
            <View style={styles.SquareShapeView}>
              <Text style={styles.label}>Color</Text>
              <Text style={styles.value}>{item.color}</Text>
            </View>
            <View style={styles.SquareShapeView}>
              <Text style={styles.label}>Length</Text>
              <Text style={styles.value}>{item.length}</Text>
            </View>
            <View style={styles.SquareShapeView}>
              <Text style={styles.label}>Weight</Text>
              <Text style={styles.value}>{item.weight}</Text>
            </View>
          </ScrollView>
        </BottomContainer>
      </SafeAreaView>
    </View>
  );
};

export default DetailsScreen;
