const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  //Check project repo for styles
  form: {
    flex: 1,
    flexDirection: 'column',
  },
  formText: {
    color: COLORS.tabIconDefault,
    fontSize: 20,
    margin: 20,
  },
  input: {
    height: 35,
    margin: 20,
    borderWidth: 1,
    borderColor: COLORS.tabIconDefault,
    borderRadius: 5,
    padding: 10,
  },
  label: {
    color: COLORS.tabIconDefault,
    fontSize: 15,
    margin: 5,
    marginLeft: 15,
  },
});

export default styles;
