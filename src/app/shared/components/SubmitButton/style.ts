import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 50,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#f5c158',
    opacity: 1,
    shadowColor: '#000000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 1.9,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4b4848',
  },
  deleteButton: {
    backgroundColor: '#dc4439',
  },
  deleteText: {
    color: '#fff',
  },
});
