const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  container: {
    backgroundColor: Platform.OS === 'ios' ? '#EFEFEF' : '#E5E5E5',
    borderWidth: 1,
    borderColor: 'white',
    padding: 20,
    height: 666,
    backgroundColor: 'grey',
    flexDirection: 'column',
    justifyContent: 'center',
    //alignItems: 'center',
    },

//   submitButton: {
//     backgroundColor: '#4286f4',
//     padding: 10,
//     margin : 15,
//     height: 40,
//   },

//   submitButtonText: {
//     color: 'white',
//     textAlign: 'center',
//   },

};
