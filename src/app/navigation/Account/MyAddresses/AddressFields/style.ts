import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  fields: {
    width: '90%',
    alignSelf: 'center',
  },
  input: {
    marginBottom: 15,
    borderBottomColor: '#a1a1a1',
    borderBottomWidth: 1,
    fontSize: 16,
  },
  required: {
    color: 'red',
  },
  scrollView: {
    flex: 1,
  },
  error: {
    color: 'red',
  },
});
