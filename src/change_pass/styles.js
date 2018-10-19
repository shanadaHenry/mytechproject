const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {

    content: {
        flex: 1,
        backgroundColor: Platform.OS === 'ios' ? '#FFF' : '#FFF',
        borderWidth: 1,
        borderColor: 'white',
        padding: 20,
        height: 666,
        //backgroundColor: 'grey',
        flexDirection: 'column',
        //justifyContent: 'center',
        //alignItems: 'center',
      },
      textView: {
        //borderWidth: 1,
        marginTop: 10
          //padding: 0
      },
      textViewPass: {
        //borderWidth: 2,
          //padding: 0,
          //marginBottom: 50
      },
      textViewconfPass: {
        //borderWidth: 2,
        padding: 0,
        //marginBottom: 50
    },
    
      submitButton: {
        marginTop: 20,
        backgroundColor: '#4286f4',
        padding: 10,
        //margin : 15,
        height: 40,
      },
    
      submitButtonText: {
        color: 'white',
        textAlign: 'center',
      },
}