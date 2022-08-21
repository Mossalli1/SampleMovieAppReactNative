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
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  expenseCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginBottom: 5,
    padding: 15,
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
  filterContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#00000010',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingHorizontal: 5,
  },
  filterTextContainer: {
    flexDirection: 'row',
    paddingRight: 30,
    alignItems: 'center',
  },
  emptyListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height / 1.8,
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
    // flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filteredItemContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  filteredItemButton: {
    padding: 10,
    maxWidth: '50%',
    backgroundColor: '#00000020',
    marginBottom: 5,
  },
});
