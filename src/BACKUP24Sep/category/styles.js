const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  container: {
    backgroundColor: Platform.OS === 'ios' ? '#FFF' : '#FFF',
    //position: 'realtive'
  },

  contentContainer: {
    backgroundColor: Platform.OS === 'ios' ? '#FFF' : '#FFF',
  },

  header: {
    backgroundColor: '#ffcc00',
  },

  buttonIcon: {
    color: Platform.OS === 'ios' ? '#FFF' : '#FFF',
    marginTop: Platform.OS === 'ios' ? 3 : 5,
  },

  titleHeader: {
    color: Platform.OS === 'ios' ? '#FFF' : '#FFF',
    //flex: 3,
    //textAlign: 'center',
  },

  //=============KATEGORI SCREEN==================

  kategori_gridView: {
    flex: 1,
    flexDirection: 'row',
  },
  kategori_itemContainer: {
    height: Platform.OS === 'ios' ? 149 : 149,
    borderWidth: 0.3,
    borderColor: "lightgray",
    alignItems: 'center',
  },
  kategori_itemImage: {
    flex: 3,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignSelf: 'center',
    borderColor: '#3980fb',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  kategori_itemName: {
    fontSize: 16,
    color: '#3980fb',
    fontWeight: '100',
    alignSelf: 'stretch',
    textAlign: 'center',
    flex: 2,
  },
  slideImage: {
    flex: 1,
    height: 200,
    width: null,
  },
  buttonStyle: {
    paddingTop: 15,
    flex: 1,
    color: 'yellow'
  },
};