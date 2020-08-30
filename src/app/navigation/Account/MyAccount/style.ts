import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#fff',
  },
  myAccount: {
    width: '100%',
    marginTop: 30,
  },
  buttonWrapper: {
    marginBottom: 30,
  },
  item: {
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    marginBottom: 13,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 4,
    fontWeight: 'normal',
  },
  title: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#4b4848',
    letterSpacing: 0.65,
  },
  arrow: {
    height: 10,
    width: 10,
    borderRightColor: '#cccccc',
    borderRightWidth: 2,
    borderTopColor: '#cccccc',
    borderTopWidth: 2,
    transform: [
      {
        rotateZ: '45deg',
      },
    ],
  },
});
