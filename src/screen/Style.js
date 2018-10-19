import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
const React = require("react-native");
const { Platform, Dimensions, StyleSheet } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const icon_size = responsiveFontSize(10);
const icon_size_h = responsiveFontSize(6);
const sxl = responsiveFontSize(4);
const xxl = responsiveFontSize(2.6);
const xl = responsiveFontSize(2.2);
const lg = responsiveFontSize(2);
const md = responsiveFontSize(1.8);
const sm = responsiveFontSize(1.6);
const xs = responsiveFontSize(1.4);
const sxs = responsiveFontSize(1.2);

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default {
    //============ LOGIN ============= 
    container: {
        backgroundColor: Platform.OS === 'ios' ? '#EFEFEF' : '#E5E5E5',
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'grey',
        // flexDirection: 'column',
        // justifyContent: 'center',
        //alignItems: 'center',
    },
    submitButton: {
        backgroundColor: '#4286f4',
        padding: 10,
        margin: 15,
        height: 40,
    },

    submitButtonText: {
        color: 'white',
        textAlign: 'center',
    },

    //HOME

    slideImage: {
        flex: 1,
        height: 200,
        width: null,
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
    homeImageTech: {
        alignSelf: 'flex-start',
        width: 30,
        height: 30,
        borderRadius: 20,
    },
    homeNamaCust: { 
        marginLeft: 10,
        borderWidth: 1,
        borderColor: '#FF5722',
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
    // textTanggal: {
    //     marginLeft: 10,
    //     marginRight: Platform.OS === 'ios' ? 80 : 100,
    //     borderWidth: 1,
    //     borderColor: '#FF5722',
    // },

    slideImage: {
        flex: 1,
        height: 200,
        width: null,
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
    homeTextTanggal: {
        marginLeft: 10,
        marginRight: Platform.OS === 'ios' ? 80 : 100,
        borderWidth: 1,
        borderColor: '#FF5722',

    },
    homeTextJudul: {
        marginLeft: 15,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#FF5722',
        marginBottom: 10,
    },
    homeTextJudulTech: {
        marginLeft: 15,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#FF5722',
        marginBottom: 10,
    },
    homeTextJudulline: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    dataTickets: {
        paddingLeft: 15,
        paddingRight: 20
    },
    //////////////////////
    //==============HOMESCREEN=============
    menu_list: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        backgroundColor: '#FFF',
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

    //==============Profile=============
    profile_banner_img: {
        resizeMode: "cover",
        height: responsiveHeight(20),
        width: 150,
        height: 150,
        borderRadius: 75,
        margin: 20,
        position: "relative",
        alignSelf: 'center',
    },

    contentButton: {
        backgroundColor: Platform.OS === 'ios' ? '#FBBF26' : '#FBBF26',
        marginRight: Platform.OS === 'ios' ? 20 : 20,
        position: 'absolute',
        alignSelf: 'flex-end',
        flex: 1,

    },
    buttonIconProfile: {
        color: Platform.OS === 'ios' ? '#FFF' : '#FFF',
        marginTop: Platform.OS === 'ios' ? 3 : 2.5,
        borderWidth: 1,
        borderColor: 'white',
        width: 25,
        height: 25,
        right: 0,
        left: 0

    },
    item: {
        flex: 1,
        justifyContent: 'space-between',
        //alignItems: 'center',
        padding: 15,
        borderBottomWidth: 0.5,
    },
    itemPermohonanPelanggan: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 15,
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

    ViewButtonSettings: {
        flexDirection: 'row',
        margin: 0,
        borderWidth: 1,
        marginBottom: 20,


    },
    ViewButtonUlasan: {
        flexDirection: 'row',
        margin: 0,
        borderWidth: 1,
        marginBottom: 10,

    },

    ViewButtonFAQ: {
        flexDirection: 'row',
        margin: 0,
        borderWidth: 1,
        marginBottom: 20,
    },
    ViewTextCustomers: {
        //flex: 3,
        padding: 10,
        paddingRight: Platform.OS === 'ios' ? 26 : 62,
        borderWidth: 1,
        alignSelf: 'center'
    },
    ViewTextSettings: {
        padding: 10,
        paddingRight: Platform.OS === 'ios' ? 175 : 210,
        borderWidth: 1,
        alignSelf: 'center'
    },
    ViewTextUlasan: {
        padding: 10,
        paddingRight: Platform.OS === 'ios' ? 175 : 210,
        borderWidth: 1,
        alignSelf: 'center'
    },
    buttonCustomers: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'red'
    },

    textTanggal: {
        marginLeft: 10,
        marginRight: Platform.OS === 'ios' ? 80 : 100,
        borderWidth: 1,
        borderColor: '#FF5722',

    },
    textJudul: {
        borderWidth: 1,
        borderColor: '#FF5722',
        marginBottom: 10
    },
    textChat: {
        borderWidth: 1,
        borderColor: '#FF5722',
        width: 40,
        height: 40
    },



    //========MENU ADD===========

    menu_add_view_input: {
        padding: 5,
        paddingRight: 10,
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

    //Menu ADD

    custom_title_view: {
        flex: 1,
        justifyContent: 'flex-start',
    },

    custom_title_view_home: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },

    custom_title: {
        fontWeight: "bold",
        color: "#FFF",
        fontSize: xl,
        marginLeft: 0,
        textAlign: 'left',
    },

    custom_title_home: {
        fontWeight: "bold",
        color: "#3AA522",
        fontSize: xl,
        marginLeft: 0,
        textAlign: 'left',
    },
    default_back: {
        margin: 20,
        color: '#FFF',
        fontSize: xxl
    },

    header_home_icon: {
        marginRight: 10,
        fontSize: sxl,
        color: '#3AA522'
    },

    default_line_header: {
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
    container: {
        backgroundColor: Platform.OS === 'ios' ? '#EFEFEF' : '#E5E5E5',

    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#3980fb',
        overflow: 'hidden',
    },

    title: {
        color: Platform.OS === 'ios' ? '#000' : '#FFF',
    },
    buttonIcon: {
        color: Platform.OS === 'ios' ? '#FFF' : '#FFF',
        marginTop: Platform.OS === 'ios' ? 3 : 5,
    },

    titleHeader: {
        color: Platform.OS === 'ios' ? '#FFF' : '#FFF',
        //flex: 3,
        textAlign: 'center',
    },

    //=============FORM CATEGORY==================
    scrollContainer: {
        flexDirection: 'column'
    },
    screen: {
        flex: 1,
        padding: 4,
        paddingTop: 0,
        backgroundColor: '#fff',
    },
    container: {
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

    Display2: { fontSize: 45 },
    Display1: { fontSize: 34 },
    Headline: { fontSize: 24 },
    Title: { fontSize: 20, fontWeight: '500' },
    Subheading: { fontSize: 16 },
    Body: { fontSize: 14 },
    Caption: { fontSize: 12 },

    Blue900: { color: '#0D47A1' },
    Blue700: { color: '#1976D2' },
    BlueA700: { color: '#2962FF' },
    BlueA400: { color: '#2979FF' },

    Teal900: { color: '#004D40' },
    Teal700: { color: '#00796B' },
    TealA700: { color: '#00BFA5' },
    TealA400: { color: '#1DE9B6' },

    Cyan900: { color: '#006064' },
    Cyan700: { color: '#0097A7' },
    CyanA700: { color: '#00E5FF' },
    CyanA400: { color: '#00B8D4' },

    formCategory: {
        flexDirection: 'row',
        height: 'auto',
        borderRadius: 5,
        borderWidth: .5,
        borderColor: '#000',
    },
    formImage: {
        padding: 0,
        height: 30,
        width: 30,
        resizeMode: 'stretch',
        justifyContent: 'flex-end',
        marginTop: 25,
        margin: 10,
        borderWidth: .5,
        borderColor: '#000'
    },
    formImage2: {
        padding: 0,
        height: 30,
        width: 30,
        resizeMode: 'stretch',
        justifyContent: 'flex-end',
        marginTop: 45,
        margin: 20,
        borderWidth: .5,
        borderColor: '#000'
    },
    textField: {
        marginTop: -10,
        flex: 1,
        borderWidth: .5,
        borderColor: '#000',
    },

    //Category

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
    ///////Permohonan///////
    profile_banner_img: {
        resizeMode: "cover",
        height: responsiveHeight(20),
        width: 100,
        height: 100,
        borderRadius: 55,
        margin: 0,
        position: "relative",
        alignSelf: 'center',
    },
    homeTextJudulPermohonan: {
        marginTop: 12,
        marginLeft: 15,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#FF5722',
    },
    ticketsTextJudulPermohonan: {
        marginTop: 12,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#FF5722',
    },
    detailTechTextJudulPermohonan: {
        marginTop: 10,
        //marginLeft: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#FF5722',
    },
};
