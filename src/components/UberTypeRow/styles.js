import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    height: 70,
    width: 80,
    resizeMode: 'contain',
  },
  middleContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  rightContainer: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,
  },
  time: {
    color: '#5e5e5e',
  },
  type: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default styles;
