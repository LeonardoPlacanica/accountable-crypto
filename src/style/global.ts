import {Dimensions, StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  h2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  margin: {
    margin: 10,
  },
  marginVertical: {
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
});

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;
