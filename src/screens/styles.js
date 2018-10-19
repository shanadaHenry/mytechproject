const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {


  //=============KATEGORI SCREEN==================
kategori_gridView : {
  paddingTop: 1,
  flex: 1
},
kategori_itemContainer : {
  height: 152,
  borderWidth: 1,
  borderColor: "lightgray",
  alignItems: 'center',
  marginLeft: -6,
  marginRight: -6,
  marginBottom: -10,
  marginTop: -1,
},
kategori_itemName : {
  fontSize: 16,
  color: '#000',
  fontWeight: '600',
  alignSelf: 'center'
},
kategori_itemDesc : {
  fontWeight: '600',
  fontSize: 12,
  color: '#000',
  alignSelf: 'center'
},
kategori_itemIcon : {
  color: '#ffffff',
  fontSize: 80,
  alignSelf: 'center'
},
kategori_itemImage : {
  alignSelf: 'center',
  width: 125,
  height: 125
},
lideImage : {
  flex: 1,
  height: 200,
  width: null,
},

// home_slide : {
//   flex: 1,
//   backgroundColor: 'transparent'
// },

// home_slideImage : {
//   flex: 1
// },

//=============SWIPER==================
// slide1: {
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundColor: '#9DD6EB',
// },
// slide2: {
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundColor: '#97CAE5',
// },
// slide3: {
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
//   backgroundColor: '#92BBD9',
// },

    

  //=============HOME SCREEN==================
  
// //=============SIDE-BAR==================
//   drawer_cover: {
//     alignSelf: "stretch",
//     height: deviceHeight / 3.5,
//     width: null,
//     position: "relative",
//     marginBottom: 10
//   },
//   drawer_image: {
//     position: "absolute",
//     left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 9,
//     top: Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 12,
//     width: 210,
//     height: 75,
//     resizeMode: "cover"
//   },
//   drawer_text: {
//     fontWeight: Platform.OS === "ios" ? "500" : "400",
//     fontSize: 16,
//     marginLeft: 20
//   },

  


// //=============EVENT LIST==================
// eventlist_actionContainer : {
//   flex: 1,
//   flexDirection: 'row',
//   justifyContent: 'flex-end',
//   alignItems: 'center',
// },
// eventlist_actionButton : {
//   padding : 10,
//   width: 80,
//   backgroundColor : '#14E22C'
// },
// eventlist_actionButtonDestructive : {
//   padding: 10,
//   width: 80,
//   backgroundColor : '#F2171B'
// },
// eventlist_actionButtonText : {
//   textAlign : 'center',
//   color : '#fff'
// },
// eventlist_row : {
//   flexDirection: 'row',
//   justifyContent: 'center',
//   alignItems: 'center',
//   padding: 10,
//   backgroundColor: '#F6F6F6'
// },
// eventlist_rowData : {
//   flex: 1
// }


buttonStyle: {
  marginTop: 15,
  flex: 1
}
};