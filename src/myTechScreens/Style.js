import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";

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

    custom_title_view : {
        flex: 1,
        justifyContent: 'flex-start',
    },

    custom_title_view_home : {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },

    custom_title : {
        fontWeight: "bold",
        color: "#FFF",
        fontSize: xl,
        marginLeft: 0,
        textAlign: 'left',
    },

    custom_title_home : {
        fontWeight: "bold",
        color: "#3AA522",
        fontSize: xl,
        marginLeft: 0,
        textAlign: 'left',
    },

    default_back : {
        margin: 20,
        color: '#FFF',
        fontSize: xxl
    },

    header_home_icon : {
        marginRight: 10,
        fontSize: sxl,
        color: '#3AA522'
    },
    
    default_line_header : {
        height: 3,
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10,
    },

    loading: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center'
    },

    //============ LOGIN ============= 

    login_lg_area: {
        height: responsiveHeight(100), 
    },

    login_content : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    login_icon : {
        fontSize: icon_size,
        color: '#FFF'
    },

    login_logo_text : {
        position: 'absolute',
        resizeMode: 'contain',
        marginTop: responsiveHeight(10),
        height: responsiveWidth(30),
        width: responsiveHeight(30),
    },

    login_view_form : {
        marginTop: responsiveHeight(5),
        width: responsiveWidth(70)
    },

    login_form_item : {
        borderColor: '#2FBF4A',
        borderBottomWidth: 1,
        marginLeft: 0,
        //paddingHorizontal: 20,
        marginTop: 10
    },

    login_form_input : {
        marginLeft: 10,
        color: '#FFF',
        height: 40
    },

    login_view_button : {
        marginVertical: responsiveHeight(3),
        width: responsiveWidth(70)
    },

    login_button_container: {
        paddingVertical: responsiveHeight(5),
        alignItems: 'center',
        justifyContent: 'center'
    },

    login_bg : {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor:'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(84, 84, 84, 0.8)',
    },

    //============ HOME ================

    home_container : {
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

    home_banner : {
        backgroundColor : '#D3D3D3',
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

    home_menu : {
        flex: 1,
        borderRadius: 15,
        paddingVertical: 10,
        height : responsiveWidth(35),
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
        flex:1
    },

    home_view_menu_icon: {
        justifyContent: 'center',
        flex: 3,
    },

    home_menu_icon : {
        fontSize: icon_size_h,
        color: '#FFF',
    },

    home_menu_name : {
        paddingTop : 2,
        //color: '#828282',
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: md,
    },

    //==============MENU=============

    menu_list : {
        padding: 10,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderColor: '#BCBCBC',
        flexDirection: 'row'
    },

    menu_view_pic : {
        marginRight: 10
    },

    menu_list_pic : {
        borderRadius: 10,
        height: responsiveWidth(15),
        width: responsiveWidth(15),
        resizeMode: 'contain'
    },

    menu_empty_view : {
        height: responsiveHeight(80),
        justifyContent: 'center',
        alignItems: 'center',
    },

    menu_empty_ic_view : {
        marginBottom: 20
    },

    menu_empty_icon : {
        fontSize: icon_size,
        color: '#ADADAD'
    },

    menu_empty_txt_view : {

    },

    menu_empty_text : {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#8E8E8E'
    },

    menu_list_name : {
        color: '#4F4F4F',
        fontSize: lg
    },

    menu_list_price : {
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
      containerInputCategory: {
        marginHorizontal: 4,
        marginVertical: 8,
        paddingHorizontal: 8,
        marginLeft: 8,
        marginRight: 8,
      },
      content: {
        marginTop: -10,
      },
      contentIcon: {
        margin: 0,
        marginTop: 5,
        marginBottom: 10,
        height: 60,
        marginLeft: 0,
      },
      itemIcon: {
        color: '#3980fb',
        width: 25,
        paddingLeft: 0,
        margin: 15,
        marginLeft: 5,
      },
      textfield: {
        height: 100,
        marginTop: 15,
      },
      text: {
        textAlign: 'center',
        marginLeft: 5,
        marginRight: 5
      },
      textContainer: {
        backgroundColor: 'white',
        borderRadius: 2,
        padding: 16,
        elevation: 1,
        shadowRadius: 1,
        shadowOpacity: 0.3,
        justifyContent: 'center',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        marginLeft: 10,
        marginRight: 10
      },
      Button: {
        marginLeft: 15,
        marginRight: 15
      },
    
      checkboxItem: {
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 10,
      },
    
      submitButton: {
        backgroundColor: '#3980fb',
        padding: 10,
        margin: 15,
        height: 40,
      },
      submitButtonText: {
        color: 'white', 
        textAlign: 'center'
      },
      menu_add_view_input: {
        padding: 5,
        position: 'relative',
        flex: 1
      },

      menu_add_text: {
        fontSize: md,
        color: '#939393',
      },

      menu_add_input : {
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

    //=========MENU DETAIL===========
    //=========PROFILE==============

    profile_banner_img: {
        resizeMode: "cover",
        height: responsiveHeight(20),
        width: null,
        position: "relative",
    },

    profile_overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(69, 209, 37, 0.5)',
    },
};
