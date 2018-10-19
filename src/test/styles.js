const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {

//=============SIDE-BAR==================
  drawer_cover: {
    alignSelf: "stretch",
    height: deviceHeight / 3.5,
    width: null,
    position: "relative",
    marginBottom: 10
  },
  drawer_image: {
    position: "absolute",
    left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 9,
    top: Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 12,
    width: 210,
    height: 75,
    resizeMode: "cover"
  },
  drawer_text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft: 20
  },

  
//=============HOME SCREEN==================
home_gridView : {
  paddingTop: 10,
  flex: 1
},
home_itemContainer : {
  justifyContent: 'flex-end',
  borderRadius: 5,
  padding: 10,
  height: 150
},
home_itemName : {
  fontSize: 16,
  color: '#fff',
  fontWeight: '600',
  alignSelf: 'center'
},
home_itemDesc : {
  fontWeight: '600',
  fontSize: 12,
  color: '#fff',
  alignSelf: 'center'
},
home_itemIcon : {
  color: '#fff',
  fontSize: 80,
  alignSelf: 'center'
},
home_itemImage : {
  width: 200,
  heiht: 50
},
home_slide : {
  flex: 1,
  backgroundColor: 'transparent'
},

home_slideImage : {
  flex: 1
},


//=============EVENT LIST==================
eventlist_actionContainer : {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
},
eventlist_actionButton : {
  padding : 10,
  width: 80,
  backgroundColor : '#14E22C'
},
eventlist_actionButtonDestructive : {
  padding: 10,
  width: 80,
  backgroundColor : '#F2171B'
},
eventlist_actionButtonText : {
  textAlign : 'center',
  color : '#fff'
},
eventlist_row : {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  backgroundColor: '#F6F6F6'
},
eventlist_rowData : {
  flex: 1
}
};
