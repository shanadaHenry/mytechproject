const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {

  ContentContainer: {
    backgroundColor: Platform.OS === 'ios' ? '#FFF' : '#FFF',
    borderWidth: 2,
  },
  contentButton: {
    backgroundColor: Platform.OS === 'ios' ? '#FBBF26' : '#FBBF26',
    marginRight: Platform.OS === 'ios' ? 20 : 20,
    position: 'absolute',
    alignSelf: 'flex-end',
    flex: 1,

  },
  buttonIcon: {
    color: Platform.OS === 'ios' ? '#FFF' : '#FFF',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 3 : 2.5,
  },
  item: {
    flex: 1,
    justifyContent: 'space-between',
    //alignItems: 'center',
    padding: 20,
    borderBottomWidth: 0.5,
  },
  // MainContainer: {
  //     flex: 1,
  //     //justifyContent: 'center',
  //     paddingTop: (Platform.OS === 'ios') ? 20 : 0
  // },
  ChildView: {
    borderBottomWidth: 0.5,
    borderColor: '#ff6699',
    //margin: 5
  },

  TouchableOpacityStyle: {
    padding: 10,
    backgroundColor: '#ff6699'
  },

  TouchableOpacityTitleText: {
    //textAlign: 'center',
    //color: '#000',
    //fontSize: 20
  },

  ExpandViewInsideText: {
    //fontSize: 16,
    //color: '#000',
    padding: Platform.OS === 'ios' ? 90 : 20,
  },
  ViewButtonCustomers: {
    flexDirection: 'row',
    borderWidth: 1,
    marginBottom: 20,
    margin: 0
  },
  ViewTextCustomers: {
    //flex: 3,
    padding: 10,
    paddingRight: Platform.OS === 'ios' ? 26 : 62,
    borderWidth: 1,
    alignSelf: 'center'
  },
  ViewButtonSettings: {
    flexDirection: 'row',
    margin: 0, 
    borderWidth: 1,
    //marginBottom: 15
  },
  ViewTextSettings: {
    padding: 10,
    paddingRight: Platform.OS === 'ios' ? 175 : 210,
    borderWidth: 1,
    alignSelf: 'center'
  },
  buttonCustomers: {
    width: 50,
    height: 50,
    borderRadius: 30,
  }

};



// const React = require("react-native");
// const { Platform, Dimensions } = React;

// const deviceHeight = Dimensions.get("window").height;
// const deviceWidth = Dimensions.get("window").width;



// export default {
//   container : {
//       backgroundColor: Platform.OS === 'ios' ? '#EFEFEF' : '#E5E5E5',
//   },

//   title : {
//       color: Platform.OS === 'ios' ? '#000' : '#FFF',
//   },


//   //=============HOME SCREEN==================
//   fill: {
//     flex: 1,
//   },
//   content: {
//     flex: 1,
//   },
//   header: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: '#03A9F4',
//     overflow: 'hidden',
//     height: HEADER_MAX_HEIGHT,
//   },
//   backgroundImage: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     width: null,
//     height: HEADER_MAX_HEIGHT,
//     resizeMode: 'cover',
//   },
//   bar: {
//     backgroundColor: 'transparent',
//     marginTop: Platform.OS === 'ios' ? 28 : 38,
//     height: 32,
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//   },
//   title: {
//     color: 'white',
//     fontSize: 18,
//   },
//   scrollViewContent: {
//     // iOS uses content inset, which acts like padding.
//     paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
//   },
//   row: {
//     height: 40,
//     margin: 16,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   fill: {
//     flex: 1,
//   },
//   content: {
//     flex: 1,
//   },
//   header: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: '#3e83f7',
//     overflow: 'hidden',
//     height: HEADER_MAX_HEIGHT,
//     borderWidth: 2,
//     borderColor: 'red'
//   },
//   backgroundImage: {
//     position: 'relative',
//     width: 120,
//     height: 120,
//     borderWidth: 2,
//     borderColor: 'grey',
//     alignSelf: 'center',
//     top: 80
//   },
//   backgroundImage2: {
//     position: 'relative',
//     width: 200,
//     height: 50,
//     borderWidth: 2,
//     borderColor: 'grey',
//     alignSelf: 'center',
//     top: 80
//   },
//   backgroundImage3: {
//     position: 'absolute',
//     backgroundColor: 'transparent',
//     width: 50,
//     height: 50,
//     borderWidth: 2,
//     borderColor: 'grey',
//     alignSelf: 'center',
//   },
//   //merubah title jangan center
//   bar: {
//     flex: 1,
//     position: 'absolute',
//     borderWidth: 2,
//     borderColor: 'white'
//   },
//   title: {
//     color: 'white',
//     fontSize: 20,
//     marginTop: 7,
//     marginLeft: 27,
//   },
//   titleImage: {
//     color: 'white',
//     fontSize: 20,
//     alignSelf: 'center'
//   },

//   titleImageAge: {
//     color: 'white',
//     fontSize: 16,
//     alignSelf: 'center'
//   },
//   scrollViewContent: {
//     // iOS uses content inset, which acts like padding.
//     paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
//   },
//   row: {
//     height: 40,
//     margin: 10,
//     backgroundColor: '#D3D3D3',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonIcon: {
//     position: 'relative',
//     marginTop: 30,
//     color: Platform.OS === 'ios' ? '#FFF' : '#FFF',
//     backgroundColor: 'transparent',
//   },
//   separator: {
//     flex: 1,
//     backgroundColor: '#8E8E8E',
//   },
// };