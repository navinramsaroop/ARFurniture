import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  row: {
    paddingVertical: 15,
    flexDirection: 'row',
    paddingHorizontal: 5
  },
  nameView: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flex: 1
  },
  priceView: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flex: 1
  },
  name: {
    color: '#343434',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  dimensions: {
    color: '#343434',
    fontSize: 13,
    justifyContent: 'center'
  },
  price: {
    color: '#343434',
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  image: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  separator: {
    backgroundColor: '#E2E2E2',
    height: StyleSheet.hairlineWidth,
    flex: 1,
    marginLeft: 20
  }
});
