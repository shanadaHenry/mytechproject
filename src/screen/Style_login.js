const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  container: {
    backgroundColor: Platform.OS === 'ios' ? '#EFEFEF' : '#E5E5E5',
    borderWidth: 1,
    padding: 20,
    height: 666,
    flex: 1,
    justifyContent: 'center',
    // flexDirection: 'column',
    // justifyContent: 'center',
    //alignItems: 'center',
  },

  submitButton: {
    backgroundColor: '#FBBF26',
    padding: 10,
    margin: 5,
    height: 40,
  },

  submitButtonText: {
    color: 'white',
    textAlign: 'center',
  },

};
