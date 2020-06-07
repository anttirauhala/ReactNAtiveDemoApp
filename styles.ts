import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  scrollView: {
    backgroundColor: 'lightblue',
  },
  body: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainText: {
    fontSize: 16,
    color: 'black',
    padding: 20,
  },
  defaultBackground: {
    backgroundColor: '#ffffff',
  },
  button: {
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: '#E0E0E0',
    margin: 5,
    padding: 5,
  },
});

export default styles;

export const colors = {
  red: '#EE007F',
  yellow: '#E3EF41',
  green: '#30DC7B',
  lightBlue: '#CCE5FF',
};
