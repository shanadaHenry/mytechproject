
import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator, createTabBarBottom } from 'react-navigation';
import { StyleSheet, View, Easing, Animated } from 'react-native';
import { Icon, Text } from 'native-base';
import { CustomHeader, CustomHeaderHome } from './components/CustomHeader';
import { transitionConfig } from './components/CustomTransition';
import styles from './screen/Style';
import Ripple from 'react-native-material-ripple';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
// Import TabNavigator screens


//Get Started
import GetStartedScreen from './screen/GetStartedScreen';
//Home 
import PermohonanScreen from './screen/PermohonanScreen';
import HomeScreen from './screen/HomeScreen';

//import BaruHomeScreen from './screens/BaruHomeScreen';
//import HomeScreenRest from './screens/HomeScreen';
//Mytechscreen
import MenuTicketsScreen from './screen/MenuTicketsScreen';
import MenuAddTicketsScreen from './screen/MenuAddTicketsScreen';
import MenuDetailTicketsScreen from './screen/MenuDetailTicketsScreen';
//Login
import LoginCustomersScreen from './screen/LoginCustomersScreen';
import LoginTechnisiScreen from './screen/LoginTechnisiScreen';
//Daftar
import DaftarCustomersScreen from './screen/DaftarCustomersScreen';
import DaftarTechnisiScreen from './screen/DaftarTechnisiScreen';
//LupaPass
import LupaPassCustomersScreen from './screen/LupaPassCustomersScreen';
import LupaPassTechnisiScreen from './screen/LupaPassTechnisiScreen';

//Category
import CategoryScreen from './screen/CategoryScreen';
import InputCategoryScreen from './screen/InputCategoryScreen';
//Profile
import ProfileScreen from './screen/ProfileScreen';
import ProfileTest from './screen/ProfileTest';
import ProfileRestScreen from './screen/ProfileRestScreen';
import MenuEditCustomersScreen from './screen/MenuEditCustomersScreen';
//Technisi
import MenuDetailTechnisiScreen from './screen/MenuDetailTechnisiScreen';

//screenTechnisi
import HomeTechnisiScreen from './screenTechnisi/HomeTechnisiScreen';
import PermohonanTechnisiScreen from './screenTechnisi/PermohonanTechnisiScreen';
import acoordion from './screenTechnisi/accordion';
import ProfileTechnisiScreen from './screenTechnisi/ProfileTechnisiScreen';
import MenuEditTechnisiScreen from './screenTechnisi/MenuEditTechnisiScreen';

const defaultBg = '#F7F9F8';
const BackButton = ({ navigation }) => {
  const onPress = () => navigation.goBack();
  return (
    <Ripple style={{ flex: 1 }}
      rippleColor='#3CE5E2' rippleOpacity={0.25} rippleSize={100} rippleDuration={200}
      onPress={onPress}
    >
      <Icon
        name="angle-left"
        style={styles.default_back}
      />
    </Ripple>
  );
};

const CustomTitle = ({ title }) => (
  <View style={styles.custom_title_view}>
    <Text style={styles.custom_title}>{title}</Text>
  </View>
);

const CustomTitleHome = ({ title }) => (
  <View style={styles.custom_title_view_home}>
    <Text style={styles.custom_title_home}>{title}</Text>
    <Icon name="arrow-left" style={styles.header_home_icon}/>
  </View>
);


let headerDefaultTab = {
  header: {
    visible: true
  },
  headerStyle: {
    backgroundColor: "transparent"
  },
  headerLeft: null,
};


export const Stack = createStackNavigator({

  //Tabs
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },

  Permohonan: {
    screen: PermohonanScreen,
    navigationOptions: {
      header: props => <CustomHeader {...props} />,
    }
  },
  PermohonanTechnisi: {
    screen: PermohonanTechnisiScreen,
    navigationOptions: {
      header: props => <CustomHeader {...props} />,
    }
  },
  //MenuTickets
  MenuTickets: {
    screen: MenuTicketsScreen,
    navigationOptions: {
      header: props => <CustomHeader {...props} />,
    }
  },

  MenuDetailTickets: {
    screen: MenuDetailTicketsScreen,
    navigationOptions: {
      header: props => <CustomHeader {...props} />,
    }
  },

  //Menu Add
  MenuAddTickets: {
    screen: MenuAddTicketsScreen,
    navigationOptions: {
      header: props => <CustomHeader {...props} />,
    }
  },

  Category: {
    screen: CategoryScreen,
    navigationOptions: {
      header: props => <CustomHeader {...props} />,
      headerTitle: <CustomTitle title="Pilih kategori anda" />
    }
  },

  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      header: null
    }
  },

  ProfileRest: {
    screen: ProfileRestScreen,
    navigationOptions: {
      header: null
    }
  },

  InputCategory: {
    screen: InputCategoryScreen,
    navigationOptions: {
      header: props => <CustomHeader {...props} />,
    }
  },

  MenuDetailTechnisi: {
    screen: MenuDetailTechnisiScreen,
    navigationOptions: {
      header: props => <CustomHeader {...props} />,
    }
  },
  MenuEditCustomers: {
    screen: MenuEditCustomersScreen,
    navigationOptions: {
      header: props => <CustomHeader {...props} />,
      headerTitle: <CustomTitle title="Ubah Profile Anda" />
    }
  },
  ProfileTest: {
    screen: ProfileTest,
    navigationOptions: {
      header: null
    }
  },
  HomeTechnisi: {
    screen: HomeTechnisiScreen,
    navigationOptions: {
      header: null
    }
  },
  acoordion: {
    screen: acoordion,
    navigationOptions: {
      header: null
    }
  },
  ProfileTechnisi: {
    screen: ProfileTechnisiScreen,
    navigationOptions: {
      header: null
    }
  },
  MenuEditTechnisi: {
    screen: ProfileTechnisiScreen,
    navigationOptions: {
      header: null
    }
  },

  

},
  //==========BASIC SETTING NAVIGATION================
  {
    transitionConfig,
    cardStyle: { backgroundColor: defaultBg },
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "transparent"
      },
      headerLeft: <BackButton navigation={navigation} />,
      
    }),
  }
)


export const Login = createStackNavigator({
 
  GetStarted: {
    screen: GetStartedScreen,
    navigationOptions: {
      header: null
    }
  },
  LoginCustomers: {
    screen: LoginCustomersScreen,
    navigationOptions: {
      header: null
    }
  },
  LoginTechnisi: {
    screen: LoginTechnisiScreen,
    navigationOptions: {
      header: null
    }
  },

  DaftarCustomers: {
    screen: DaftarCustomersScreen,
    navigationOptions: {
      header: null
    }
  },

  DaftarTechnisi: {
    screen: DaftarTechnisiScreen,
    navigationOptions: {
      header: null
    }
  },

  LupaPassCustomers: { 
    screen: LupaPassCustomersScreen,
    navigationOptions: {
      header: null
    }
  },
  LupaPassTechnisi: { 
    screen: LupaPassTechnisiScreen,
    navigationOptions: {
      header: null
    }
  },
},
  {
    initialRouteName: "GetStarted",
    headerMode: 'none',
    transitionConfig,
  }
)

//Mytech dahulu

// import React from "react";
// import {
//   Animated,
//   Easing
// } from 'react-native'
// import { createStackNavigator, DrawerNavigator } from "react-navigation";

// //memanggil page yang akan digunakan
// import HomeScreen from './home/home';
// //import CategoryScreen from './category/category';
// //import InputCategory from './inputcategory/inputcategory';
// // import Setting from './setting/setting';
// // import ProfileScreen from './profile/profile';
// // import EditProfile from './edit_profile/edit_profile';
// // import Change_Pass from './change_pass/change_pass';
// // import Bahasa from './bahasa/bahasa';
// import GetStarted from './getstarted/getstarted';
// import SignInCust from './signIn/signIn_cust';
// import SignInTech from './signIn/signIn_tech';
// import SignUpCust from './signup/signup_cust';
// import SignUpTech from './signup/signup_tech';
// import ForgotPassTech from './signIn/forgot_pass_tech';
// import ForgotPassCust from './signIn/forgot_pass_cust';
// // import Expand from './profile/expand';
// // import Login_Activity from './test/login_activity';
// // import Profile_Activity from './test/profile_activity';
// // import SignUp from'./test/signup';
// // import Permohonan from './permohonan/permohonan';
// // import TestFetch from './test/testfetch';
// // import SignUpTechTest from './test/signup_tech';

// const transitionConfig = () => {
//   return {
//     transitionSpec: {
//       duration: 500,
//       easing: Easing.out(Easing.poly(4)),
//       timing: Animated.timing,
//       useNativeDriver: true,
//     },
//     screenInterpolator: sceneProps => {
//       const { position, layout, scene, index, scenes } = sceneProps
//       const toIndex = index
//       const thisSceneIndex = scene.index
//       const height = layout.initHeight
//       const width = layout.initWidth

//       const translateX = position.interpolate({
//         inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
//         outputRange: [width, 0, 0]
//       })

//       // Since we want the card to take the same amount of time
//       // to animate downwards no matter if it's 3rd on the stack
//       // or 53rd, we interpolate over the entire range from 0 - thisSceneIndex
//       const translateY = position.interpolate({
//         inputRange: [0, thisSceneIndex],
//         outputRange: [height, 0]
//       })

//       const slideFromRight = { transform: [{ translateX }] }
//       const slideFromBottom = { transform: [{ translateY }] }

//       const lastSceneIndex = scenes[scenes.length - 1].index

//       // Test whether we're skipping back more than one screen
//       if (lastSceneIndex - toIndex > 1) {
//         // Do not transoform the screen being navigated to
//         if (scene.index === toIndex) return
//         // Hide all screens in between
//         if (scene.index !== lastSceneIndex) return { opacity: 0 }
//         // Slide top screen down
//         return slideFromBottom
//       }

//       return slideFromRight
//     },
//   }
// }


// // const Drawer = DrawerNavigator(
// //   {
// //     Home: { screen: HomeScreen },
// // }, {
// //     initialRouteName: "Home",

// //     contentOptions: {
// //     activeTintColor: "#e91e63"
// //   },
// //   //contentComponent: props => <SideBar {...props}/>
// // });

// //mengatur routing page (dalam html biasa disebut dengan link)
// const App = createStackNavigator(
//   {
//     //Drawer: { screen: Drawer },
//     Home: { screen: HomeScreen },
//     //Category: { screen: CategoryScreen },
//     // InputCategory: { screen: InputCategory },
//     // ProfileScreen: { screen: ProfileScreen },
//     // EditProfile: { screen: EditProfile },
//     // Change_Pass: { screen: Change_Pass },
//     // Bahasa: { screen: Bahasa },
//     // Setting: { screen: Setting },
//     GetStarted: { screen: GetStarted },
//     SignInCust: { screen: SignInCust },
//     SignInTech: { screen: SignInTech },
//     SignUpCust: { screen: SignUpCust },
//     SignUpTech: { screen: SignUpTech },
//     ForgotPassTech: { screen: ForgotPassTech },
//     ForgotPassCust: { screen: ForgotPassCust },
//     // Expand: { screen: Expand },
//     // Login_Activity: { screen: Login_Activity },
//     // Profile_Activity: { screen: Profile_Activity },
//     // SignUp: { screen: SignUp },
//     // Permohonan: { screen: Permohonan },
//     // TestFetch: { screen: TestFetch },
//     // SignUpTechTest: { screen: SignUpTechTest }
//   },
//   {
//     initialRouteName: "GetStarted",
//     headerMode : 'none',
//     transitionConfig,
//   }
// );

// export default App;


// Restoran APPs
// import React, { Component } from 'react';
// import { createStackNavigator, createBottomTabNavigator, createTabBarBottom } from 'react-navigation';
// import { View, Easing, Animated } from 'react-native';
// import { Icon, Text } from 'native-base';
// import { CustomHeader, CustomHeaderHome } from './components/CustomHeader';
// import { transitionConfig } from './components/CustomTransition';
// import styles from './screens/Style';
// import Ripple from 'react-native-material-ripple';
// // Import TabNavigator screens
// import HomeScreen from './screens/HomeScreen';
// import CartScreen from './screens/CartScreen';
// import ProfileScreen from './screens/ProfileScreen';
// import MenuScreen from './screens/MenuScreen';
// import MenuAddScreen from './screens/MenuAddScreen';
// import MenuDetailScreen from './screens/MenuDetailScreen';
// import UserDataScreen from './screens/UserDataScreen';
// import HistoryScreen from './screens/HistoryScreen';
// import LaporanScreen from './screens/LaporanScreen';
// import AboutScreen from './screens/AboutScreen';
// //Mytechscreen
// import MenuTicketsScreen from './myTechScreens/MenuTicketsScreen';
// import MenuAddTicketsScreen from './myTechScreens/MenuAddTicketsScreen';
// import MenuDetailTicketsScreen from './myTechScreens/MenuDetailTicketsScreen';
// //Login
// import LoginScreen from './screens/LoginScreen';
// import GetStartedScreen from './getstarted/getstarted';
// import SignInCustScreen from './signIn/signIn_cust';
// import SignInTechScreen from './signIn/signIn_tech';
// import CustLoginScreen from './signIn/CustLoginScreen';
// import TechLoginScreen from './signIn/TechLoginScreen';

// import { responsiveFontSize } from 'react-native-responsive-dimensions';

// const defaultBg = '#F7F9F8';
// const BackButton = ({ navigation }) => {
//   const onPress = () => navigation.goBack();
//   return (
//     <Ripple style={{ flex: 1 }}
//       rippleColor='#3CE5E2' rippleOpacity={0.25} rippleSize={100} rippleDuration={200}
//       onPress={onPress}
//     >
//       <Icon
//         name="angle-left"
//         style={styles.default_back}
//       />
//     </Ripple>
//   );
// };

// const CustomTitle = ({ title }) => (
//   <View style={styles.custom_title_view}>
//     <Text style={styles.custom_title}>{title}</Text>
//   </View>
// );

// const CustomTitleHome = ({ title }) => (
//   <View style={styles.custom_title_view_home}>
//     {/* <Icon name="cutlery" style={styles.header_home_icon}/> */}
//     <Text style={styles.custom_title_home}>{title}</Text>
//   </View>
// );


// let headerDefaultTab = {
//   header: {
//     visible: true
//   },
//   headerStyle: {
//     backgroundColor: "transparent"
//   },
//   headerLeft: null,
// };

// /*
// const CartStack = createStackNavigator ({
//   CartStack: {
//     screen: CartScreen,
//     navigationOptions:{
//       header: props => <CustomHeader {...props} />,
//       headerTitle: <CustomTitle title="Cart" />,
//     }
//   }
// },
//   {
//     cardStyle: {backgroundColor: defaultBg},
//     navigationOptions: {
//       ...headerDefaultTab
//     }
//   }
// );
// */

// //================ Tabs Navigation =====================
// export const TabsNavigation = createBottomTabNavigator({
//   Home: { 
//     screen: HomeScreen,
//     navigationOptions: {
//       tabBarLabel: 'Home'
//     }
//   },

//   Cart: {
//     screen: CartScreen,
//     navigationOptions: {
//       tabBarLabel: 'Jasa '
//     }
//   },
//   Profile: {
//     screen: ProfileScreen,
//     navigationOptions: {
//       tabBarLabel: 'Profile',
//       header: null
//     }
//   }
// },
//   {
//     navigationOptions: ({ navigation }) => ({
//       headerStyle: {
//         backgroundColor: "transparent"
//       },
//       headerLeft: null,
//       headerTitleStyle: {
//         fontWeight: "bold",
//         color: "#fff",
//         alignSelf: 'center',
//         fontSize: responsiveFontSize(1.8),
//         //lineHeight: 23,
//         marginLeft: 0
//       },
//       tabBarIcon: ({ focused }) => {
//         const { routeName } = navigation.state;
//         let icon_name;
//         let icon_color;
//         if (routeName === 'Home') {
//           icon_name = "home";
//           icon_color = focused ? '#3AA522' : '#B2B2B2'
//         } else if (routeName === 'Cart') {
//           icon_name = "list-alt";
//           icon_color = focused ? '#3AA522' : '#B2B2B2'
//         } else if (routeName === 'Profile') {
//           icon_name = "user";
//           icon_color = focused ? '#3AA522' : '#B2B2B2'
//         }
//         return <Icon
//           name={icon_name}
//           style={{ fontSize: responsiveFontSize(2.4), color: icon_color }}
//         />;
//       },
//     }
//     ),
//     tabBarOptions: {
//       activeTintColor: '#999999',
//       inactiveTintColor: '#B2B2B2',
//       activeBackgroundColor: '#EDEDED',
//       inactiveBackgroundColor: '#FFFFFF',
//     },
//     tabBarComponent: createTabBarBottom,
//     tabBarPosition: 'bottom',
//   }
// );


// export const Stack = createStackNavigator({

//   //Tabs
//   Tabs: {
//     screen: TabsNavigation,
//     navigationOptions: {
//       header: props => <CustomHeaderHome {...props} />,
//       headerTitle: <CustomTitleHome title="simulation" />,
//       headerLeft: null
//     }
//   },
//   //Menu
//   Menu: {
//     screen: MenuScreen,
//     navigationOptions: {
//       header: props => <CustomHeader {...props} />,
//     }
//   },
//   //MenuTickets
//   MenuTickets: {
//     screen: MenuTicketsScreen,
//     navigationOptions: {
//       header: props => <CustomHeader {...props} />,
//     }
//   },

//   //Menu Add
//   MenuAddTickets: {
//     screen: MenuAddTicketsScreen,
//     navigationOptions: {
//       header: props => <CustomHeader {...props} />,
//     }
//   },

//   //Menu Add
//   MenuAdd: {
//     screen: MenuAddScreen,
//     navigationOptions: {
//       header: props => <CustomHeader {...props} />,
//     }
//   },
//   //Menu Detail
//   MenuDetail: {
//     screen: MenuDetailScreen,
//     navigationOptions: {
//       header: props => <CustomHeader {...props} />,
//     }
//   },
//   MenuDetailTickets: {
//     screen: MenuDetailTicketsScreen,
//     navigationOptions: {
//       header: props => <CustomHeader {...props} />,
//     }
//   },
//   //UserData (admin only)
//   UserData: {
//     screen: UserDataScreen,
//     navigationOptions: {
//       header: props => <CustomHeader {...props} />,
//       headerTitle: <CustomTitle title="Users Data" />
//     }
//   },
//   //History (admin only)
//   History: {
//     screen: HistoryScreen,
//     navigationOptions: {
//       header: props => <CustomHeader {...props} />,
//       headerTitle: <CustomTitle title="History" />
//     }
//   },
//   //Laporan (admin only)
//   Laporan: {
//     screen: LaporanScreen,
//     navigationOptions: {
//       header: props => <CustomHeader {...props} />,
//       headerTitle: <CustomTitle title="Laporan" />
//     }
//   },
//   //About
//   About: {
//     screen: AboutScreen,
//     navigationOptions: {
//       header: props => <CustomHeader {...props} />,
//       headerTitle: <CustomTitle title="About" />
//     }
//   },
// },
//   //==========BASIC SETTING NAVIGATION================
//   {
//     initialRouteName: 'Tabs',
//     cardStyle: { backgroundColor: defaultBg },
//     navigationOptions: ({ navigation }) => ({
//       headerStyle: {
//         backgroundColor: "transparent"
//       },
//       headerLeft: <BackButton navigation={navigation} />,
//     }),
//   }
// )


// export const Login = createStackNavigator({
//   Login: {
//     screen: LoginScreen,
//     navigationOptions: {
//       header: null
//     }
//   },
//   GetStarted: {
//     screen: GetStartedScreen,
//     navigationOptions: {
//       header: null
//     }
//   },

//   CustLogin: {
//     screen: CustLoginScreen,
//     navigationOptions: {
//       header: null
//     }
//   },
//   TechLogin: {
//     screen: TechLoginScreen,
//     navigationOptions: {
//       header: null
//     }
//   },


//   // SignInCust: {
//   //   screen: SignInCustScreen,
//   //   navigationOptions: {
//   //     header: null
//   //   }
//   // },
//   // SignInTech: {
//   //   screen: SignInTechScreen,
//   //   navigationOptions: {
//   //     header: null
//   //   }
//   // },

// },
//   {
//     initialRouteName: "GetStarted",
//     headerMode: 'none',
//     transitionConfig,
//   }
// )

