import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const icon_size = responsiveFontSize(10);
const icon_size_h = responsiveFontSize(6);
const sxl = responsiveFontSize(4);
const xxl = responsiveFontSize(2.6);
const xl = responsiveFontSize(2.2);
const lg = responsiveFontSize(2);
const md =  responsiveFontSize(1.8);
const sm = responsiveFontSize(1.6);
const xs = responsiveFontSize(1.4);
const sxs = responsiveFontSize(1.2);

export default {
  slideImage: {
    flex: 1,
    height: 200,
    width: null,
  },
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
    borderWidth: 2,
    borderColor: 'red',
    justifyContent: 'flex-end',
    height: 50,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: Platform.OS === 'ios' ? '#FBBF26' : '#FBBF26',
    marginRight: Platform.OS === 'ios' ? 20 : 20,
    shadowOpacity: 0
  },
  buttonIcon: {
    color: Platform.OS === 'ios' ? '#FFF' : '#FFF',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 3 : 2.5,
  },
  bottomView: {
    alignSelf: 'flex-end',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20
  },
  MainContainer: {

    alignItems: 'center',
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff'

  },

  MainContainer_For_Show_StudentList_Activity: {

    flex: 1,
    paddingTop: (Platform.OS == 'ios') ? 20 : 0,
    marginLeft: 5,
    marginRight: 5

  },

  TextInputStyleClass: {

    textAlign: 'center',
    width: '90%',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#FF5722',
    borderRadius: 5,

  },

  TouchableOpacityStyle: {

    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 7,
    width: '90%',
    backgroundColor: '#00BCD4'

  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },

  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  textTanggal: {
    marginLeft: 10,
    marginRight: Platform.OS === 'ios' ? 80 : 100,
    borderWidth: 1,
    borderColor: '#FF5722',

  },
  textJudul: {
    marginLeft: 15,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#FF5722',
    marginBottom: 10
  },
  //////////////////////
  home_container: {
    flex: 1,
    backgroundColor: '#EFEFEF'
  },

  home_slider: {
    marginTop: 10,
    overflow: 'visible' // for custom animations
  },

  home_slider_container: {
    paddingVertical: 5 // for custom animation
  },

  home_banner: {
    backgroundColor: '#D3D3D3',
    height: responsiveHeight(30),
    borderRadius: 15
  },

  home_banner_img: {
    resizeMode: "cover",
    height: responsiveHeight(30),
    width: null,
    position: "relative",
  },

  home_gridview: {
    flex: 1,
    marginBottom: responsiveHeight(-2),
  },

  home_menu: {
    flex: 1,
    borderRadius: 15,
    paddingVertical: 10,
    height: responsiveWidth(35),
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },

  home_menu_button: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  },

  home_view_menu_text: {
    flex: 1
  },

  home_view_menu_icon: {
    justifyContent: 'center',
    flex: 3,
  },

  home_menu_icon: {
    fontSize: icon_size_h,
    color: '#FFF',
  },

  home_menu_name: {
    paddingTop: 2,
    //color: '#828282',
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: md,
  },

  //==============MENU=============

  menu_list: {
    padding: 10,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#BCBCBC',
    flexDirection: 'row'
  },

  menu_view_pic: {
    marginRight: 10
  },

  menu_list_pic: {
    borderRadius: 10,
    height: responsiveWidth(15),
    width: responsiveWidth(15),
    resizeMode: 'contain'
  },

  menu_empty_view: {
    height: responsiveHeight(80),
    justifyContent: 'center',
    alignItems: 'center',
  },

  menu_empty_ic_view: {
    marginBottom: 20
  },

  menu_empty_icon: {
    fontSize: icon_size,
    color: '#ADADAD'
  },

  menu_empty_txt_view: {

  },

  menu_empty_text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#8E8E8E'
  },

  menu_list_name: {
    color: '#4F4F4F',
    fontSize: lg
  },

  menu_list_price: {
    fontWeight: 'bold',
    color: '#1FAF26',
    fontSize: md
  },

  menu_fab: {
    backgroundColor: '#1AA534',
  },

  menu_icon_fab: {
    fontSize: sxl
  },

  menu_action_view: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  menu_action: {
    height: '100%',
    width: responsiveWidth(20),
    justifyContent: 'center',
    alignItems: 'center'
  },

  menu_action_icon: {
    color: '#FFF',
    fontSize: sxl
  },

  //========MENU ADD===========

  menu_add_view_input: {
    padding: 5,
    position: 'relative',
    flex: 1
  },

  menu_add_text: {
    fontSize: md,
    color: '#939393',
  },

  menu_add_input: {
    marginBottom: 10,
    color: '#3F3F3F',
    height: 40,
    borderBottomWidth: 2,
    borderColor: '#007207',
    paddingLeft: 0,
    paddingRight: responsiveWidth(8),
    fontSize: lg,
  },

  menu_add_view_img: {
    flex: 1,
    position: 'absolute',
    left: 0
  },

  menu_add_img: {
    position: 'absolute',
    height: responsiveWidth(6),
    width: responsiveWidth(6),
    bottom: 20,
    right: 5
  },

  menu_add_underline: {
    borderBottomWidth: 2,
    borderColor: '#007207',
  },

  menu_add_view_btn: {
    marginTop: responsiveHeight(5),
  },
};

