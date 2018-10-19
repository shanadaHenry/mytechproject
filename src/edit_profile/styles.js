const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  container: {
    backgroundColor: Platform.OS === 'ios' ? '#EFEFEF' : '#E5E5E5',

  },

  title: {
    color: Platform.OS === 'ios' ? '#000' : '#FFF',
  },
  header: {
    backgroundColor: '#508ffb',
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
  contentIcon: {
    margin: 0,
    marginTop: 10,
    marginBottom: 10,
    height: 60,
    marginLeft: 0,
    borderBottomWidth: 0,
    flexDirection: 'row',
    borderWidth: 1,
  },
  contentIconTahun: {
    //margin: 0,
    //marginTop: 10,
    //marginBottom: 30,
    height: 60,
    marginLeft: 0,
    //borderBottomWidth: 0,
    flexDirection: 'row',
    borderWidth: 1,
    //position: 'absolute'
    
  },
  content: {
    borderWidth: 1,
  },
  itemIcon: {
    color: '#557BFF',
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
    marginRight: 15,
    marginTop: 10
  },

  checkboxItem: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },

  submitButton: {
    backgroundColor: '#4286f4',
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
};




