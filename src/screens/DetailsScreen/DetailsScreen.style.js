import COLORS from '../../styles/COLORS';

const {StyleSheet} = require('react-native');
import {Dimensions} from 'react-native';
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    flex: 1,
    height: deviceHeight,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    alignContent: 'center',
    height: 400,
    borderRadius: 100,
  },
  breed: {
    color: COLORS.tabIconDefault,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  backButton: {
    flexDirection: 'row',
    padding: 5,
    margin: 5,
    justifyContent: 'flex-start',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  RectangleShapeView: {
    marginTop: 320,
    width: '95%',
    marginLeft: 10,
    height: 520,
    backgroundColor: '#FFC107',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  SquareShapeView: {
    width: 80,
    height: 80,
    marginTop: 15,
    margin: 10,
    backgroundColor: COLORS.grey,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'column',
  },
  label: {
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
    color: COLORS.tabIconDefault,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 15,
    margin: 5,
    padding: 5,
    textAlign: 'center',
    color: COLORS.black,
    fontWeight: 'bold',
  },
});

export default styles;
