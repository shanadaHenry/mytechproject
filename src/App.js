import React from "react";
import {
  Animated,
  Easing
} from 'react-native'
import { StackNavigator, DrawerNavigator } from "react-navigation";

//memanggil page yang akan digunakan
import HomeScreen from './home/home';
import CategoryScreen from './category/category';
import InputCategory from './inputcategory/inputcategory';
import Setting from './setting/setting';
import ProfileScreen from './profile/profile';
import EditProfile from './edit_profile/edit_profile';
import Change_Pass from './change_pass/change_pass';
import Bahasa from './bahasa/bahasa';
import GetStarted from './getstarted/getstarted';
import SignInCust from './signIn/signIn_cust';
import SignInTech from './signIn/signIn_tech';
import SignUpCust from './signup/signup_cust';
import SignUpTech from './signup/signup_tech';
import ForgotPassTech from './signIn/forgot_pass_tech';
import ForgotPassCust from './signIn/forgot_pass_cust';
import Expand from './profile/expand';
import Login_Activity from './test/login_activity';
import Profile_Activity from './test/profile_activity';
import SignUp from'./test/signup';
import Permohonan from './permohonan/permohonan';
import TestFetch from './test/testfetch';
import SignUpTechTest from './test/signup_tech';

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 500,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { position, layout, scene, index, scenes } = sceneProps
      const toIndex = index
      const thisSceneIndex = scene.index
      const height = layout.initHeight
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
        outputRange: [width, 0, 0]
      })

      // Since we want the card to take the same amount of time
      // to animate downwards no matter if it's 3rd on the stack
      // or 53rd, we interpolate over the entire range from 0 - thisSceneIndex
      const translateY = position.interpolate({
        inputRange: [0, thisSceneIndex],
        outputRange: [height, 0]
      })

      const slideFromRight = { transform: [{ translateX }] }
      const slideFromBottom = { transform: [{ translateY }] }

      const lastSceneIndex = scenes[scenes.length - 1].index

      // Test whether we're skipping back more than one screen
      if (lastSceneIndex - toIndex > 1) {
        // Do not transoform the screen being navigated to
        if (scene.index === toIndex) return
        // Hide all screens in between
        if (scene.index !== lastSceneIndex) return { opacity: 0 }
        // Slide top screen down
        return slideFromBottom
      }

      return slideFromRight
    },
  }
}


const Drawer = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
}, {
    initialRouteName: "Home",
    
    contentOptions: {
    activeTintColor: "#e91e63"
  },
  //contentComponent: props => <SideBar {...props}/>
});

//mengatur routing page (dalam html biasa disebut dengan link)
const App = StackNavigator(
  {
    Drawer: { screen: Drawer },
    Home: { screen: HomeScreen },
    Category: { screen: CategoryScreen },
    InputCategory: { screen: InputCategory },
    ProfileScreen: { screen: ProfileScreen },
    EditProfile: { screen: EditProfile },
    Change_Pass: { screen: Change_Pass },
    Bahasa: { screen: Bahasa },
    Setting: { screen: Setting },
    GetStarted: { screen: GetStarted },
    SignInCust: { screen: SignInCust },
    SignInTech: { screen: SignInTech },
    SignUpCust: { screen: SignUpCust },
    SignUpTech: { screen: SignUpTech },
    ForgotPassTech: { screen: ForgotPassTech },
    ForgotPassCust: { screen: ForgotPassCust },
    Expand: { screen: Expand },
    Login_Activity: { screen: Login_Activity },
    Profile_Activity: { screen: Profile_Activity },
    SignUp: { screen: SignUp },
    Permohonan: { screen: Permohonan },
    TestFetch: { screen: TestFetch },
    SignUpTechTest: { screen: SignUpTechTest }
  },
  {
    initialRouteName: "Drawer",
    headerMode : 'none',
    transitionConfig,
  }
);

export default App;