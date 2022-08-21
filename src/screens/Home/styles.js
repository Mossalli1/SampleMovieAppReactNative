import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalAmountContainer: {
    // backgroundColor: 'red',
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  expenseCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    backgroundColor: '#fff',
    marginBottom: 15,
    padding: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 5,
  },
  buttonStyle: {
    alignSelf: 'flex-end',
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: '#007AFF',
    height: 50,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // alignSelf: '',
    // top: 0,
    // bottom: -100,
  },
  modalItemContainer: {
    backgroundColor: '#fff',
    height: '60%',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 30,
    // alignSelf: 'flex-end',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  emptyListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height / 1.8,
  },
});
