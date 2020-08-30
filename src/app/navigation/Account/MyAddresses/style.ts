import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
  },
  detail: {
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 20,
    paddingBottom: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 4,
  },
  text: {
    fontWeight: 'bold',
    color: '#4b4848',
    fontSize: 16,
    marginBottom: 5,
  },
  deleteItem: {
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  textId: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  empty: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    padding: 15,
  },
});
