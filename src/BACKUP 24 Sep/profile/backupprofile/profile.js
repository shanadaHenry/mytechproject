import React, { Component } from 'react';
import { Container, Content, Header, Title, Icon, Text, Button, Right, Left, Body, TabHeading, Card, CardItem, Item, Footer, FooterTab, width } from "native-base";
import { StatusBar, StyleSheet, ScrollView, View, Image, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, FlatList, Alert, LayoutAnimation, Platform, UIManager } from 'react-native';
import styles from './styles';
//import commonColor from 'native-base-theme';


class Profile extends Component {
  constructor() {
    super();

    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

    this.state = {
      textLayoutHeight: 0,
      updatedHeight: 0,
      expand: false,
      buttonText: 'Data Profile 1'
    }
  }
  expand_collapse_Function = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    if (this.state.expand == false) {
      this.setState({
        updatedHeight: this.state.textLayoutHeight,
        expand: true,
        buttonText: 'Data Profile 2'
      });
    }
    else {
      this.setState({
        updatedHeight: 0,
        expand: false,
        buttonText: 'Data Profile 1'
      });
    }
  }
  getHeight(height) {
    this.setState({ textLayoutHeight: height });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.ContentContainer}>
        <Header style={{ backgroundColor: '#508ffb' }}>
          <StatusBar barStyle="light-content" backgroundColor='#3980fb' />
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon
                style={styles.buttonIcon}
                name="arrow-back" />
            </Button>
          </Left>
          <Body />
          <Right>
            <Button transparent onPress={() => navigate('EditProfile')}>
              <Icon
                style={styles.buttonIcon}
                name='md-create' />
            </Button>
          </Right>
        </Header>
        <View >
          <ScrollView>
            <View style={styles.ChildView}>
              <TouchableOpacity activeOpacity={0.7}
                onPress={this.expand_collapse_Function}
                style={styles.item}>
                <Text style={styles.TouchableOpacityTitleText}>{this.state.buttonText}</Text>
              </TouchableOpacity>
              <View style={{ height: this.state.updatedHeight, overflow: 'hidden' }}>
                <Text style={styles.ExpandViewInsideText}
                  onLayout={(value) => this.getHeight(value.nativeEvent.layout.height)}>
                  heii semuanyaa

                </Text>
              </View>
            </View>

            <View style={styles.item}>
              <TouchableHighlight>
                <View style={styles.ViewButtonCustomers}>
                  <Button
                    style={styles.buttonCustomers}
                    onPress={() => navigate('Setting')}>
                    <Icon
                      name="md-settings"
                      style={styles.buttonIcon}
                    />
                  </Button>
                  <Text style={styles.ViewTextCustomers} onPress={() => navigate('Setting')}>Hubungi customers service kami</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight>
                <View style={styles.ViewButtonSettings}>
                  <Button
                    style={styles.buttonCustomers}
                    onPress={() => navigate('Setting')}>
                    <Icon
                      name="md-settings"
                      style={styles.buttonIcon}
                    />
                  </Button>
                  <Text style={styles.ViewTextSettings} onPress={() => navigate('Setting')}>Pengaturan </Text>
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.item}>
              <Text> Heii</Text>
            </View>


          </ScrollView>
        </View>

      </Container>
    );
  }
}
export default Profile;


// import React, { Component } from 'react';

// import { StyleSheet, View, Text, TouchableOpacity, LayoutAnimation, UIManager, Platform } from 'react-native';

// class Profile extends Component {
//   constructor() {
//     super();
//     if (Platform.OS === 'android') {
//       UIManager.setLayoutAnimationEnabledExperimental(true);
//     }
//     this.state = {
//       textLayoutHeight: 0,
//       updatedHeight: 0,
//       expand: false,
//       buttonText: 'Click Here To Expand'
//     }
//   }
//   expand_collapse_Function = () => {
//     LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

//     if (this.state.expand == false) {
//       this.setState({
//         updatedHeight: this.state.textLayoutHeight,
//         expand: true,
//         buttonText: 'Click Here To Collapse'
//       });
//     }
//     else {
//       this.setState({
//         updatedHeight: 0,
//         expand: false,
//         buttonText: 'Click Here To Expand'
//       });
//     }
//   }
//   getHeight(height) {
//     this.setState({ textLayoutHeight: height });
//   }
//   render() {
//     return (
//       <View style={styles.MainContainer}>

//         <View style={styles.ChildView}>
//           <TouchableOpacity activeOpacity={0.7}
//             onPress={this.expand_collapse_Function}
//             style={styles.TouchableOpacityStyle}>
//             <Text style={styles.TouchableOpacityTitleText}>{this.state.buttonText}</Text>
//           </TouchableOpacity>
//           <View style={{ height: this.state.updatedHeight, overflow: 'hidden' }}>
//             <Text style={styles.ExpandViewInsideText}
//               onLayout={(value) => this.getHeight(value.nativeEvent.layout.height)}>

//               Hello Developers, A warm welcome on ReactNativeCode.com, The best website for react native developers.
//               You can find high quality dynamic type of tutorials with examples on my website and to support us please like our Facebook page.
//             </Text>
//           </View>
//         </View>

//       </View>
//     );
//   }
// }
// export default Profile;

// const styles = StyleSheet.create(
//   {
//     MainContainer:
//       {
//         flex: 1,
//         //justifyContent: 'center',
//         paddingTop: (Platform.OS === 'ios') ? 20 : 0
//       },
//     ChildView:
//       {
//         borderWidth: 1,
//         borderColor: '#00BCD4',
//         margin: 5
//       },

//     TouchableOpacityStyle:
//       {
//         padding: 10,
//         backgroundColor: '#00BCD4'
//       },

//     TouchableOpacityTitleText:
//       {
//         textAlign: 'center',
//         color: '#fff',
//         fontSize: 20
//       },

//     ExpandViewInsideText:
//       {
//         fontSize: 16,
//         color: '#000',
//         padding: 12
//       }
//   });

// import React, { Component } from 'react';
// import {
//   Animated,
//   Platform,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
//   RefreshControl,
//   TouchableOpacity,
//   ListView
// } from 'react-native';
// import { Container, Content, Item, Input, Header, Left, Button, Body, Icon, Title, Right, ListItem, List, Thumbnail, Separator } from 'native-base';

// const HEADER_MAX_HEIGHT = 300;
// const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 50 : 56;
// const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

// export default class Profile extends Component {

//   constructor() {
//     super();


//     this.state = {
//       scrollY: new Animated.Value(
//         // iOS has negative initial scroll value because content inset...
//         Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
//       ),
//       refreshing: false,
//       controlsOpacity: 1,
//       headerX: 20,
//       headerY: 20,
//     };
//   }

//   _renderScrollViewContent() {
//     return (
//       <View style={styles.scrollViewContent}>
//        <Container>
//          </Container>
//       </View>
//     );
//   }

//   render() {
//     const { navigate } = this.props.navigation;
//     // Because of content inset the scroll value will be negative on iOS so bring
//     // it back to 0.
//     const scrollY = Animated.add(
//       this.state.scrollY,
//       Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
//     );
//     const headerTranslate = scrollY.interpolate({
//       inputRange: [0, HEADER_SCROLL_DISTANCE],
//       outputRange: [0, -HEADER_SCROLL_DISTANCE],
//       extrapolate: 'clamp',
//     });

//     const imageOpacity = scrollY.interpolate({
//       inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
//       outputRange: [1, 1, 0],
//       extrapolate: 'clamp',
//     });
//     const imageTranslate = scrollY.interpolate({
//       inputRange: [0, HEADER_SCROLL_DISTANCE],
//       outputRange: [0, 100],
//       extrapolate: 'clamp',
//     });

//     const controlsOpacity = scrollY.interpolate({
//       inputRange: [0, HEADER_SCROLL_DISTANCE],
//       outputRange: [0, 1],
//       extrapolate: 'clamp',
//     });
//     const headerX = scrollY.interpolate({
//       inputRange: [0, HEADER_SCROLL_DISTANCE],
//       outputRange: [20, 60],
//       extrapolate: 'clamp',
//     });
//     const headerY = scrollY.interpolate({
//       inputRange: [0, HEADER_SCROLL_DISTANCE],
//       outputRange: [230, 245],
//       extrapolate: 'clamp',
//     });


//     return (
//       <View style={styles.fill}>

//         <Animated.ScrollView
//           style={styles.fill}
//           scrollEventThrottle={1}
//           onScroll={Animated.event(
//             [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
//             { useNativeDriver: true },
//           )}
//           refreshControl={
//             <RefreshControl
//               refreshing={this.state.refreshing}
//               onRefresh={() => {
//                 this.setState({ refreshing: true });
//                 setTimeout(() => this.setState({ refreshing: false }), 1000);
//               }}
//               // Android offset for RefreshControl
//               progressViewOffset={HEADER_MAX_HEIGHT}
//             />
//           }
//           // iOS offset for RefreshControl
//           contentInset={{
//             top: HEADER_MAX_HEIGHT,
//           }}
//           contentOffset={{
//             y: -HEADER_MAX_HEIGHT,
//           }}
//         >
//           {this._renderScrollViewContent()}

//         </Animated.ScrollView>




//         <Animated.View
//           pointerEvents="none"
//           style={[
//             styles.header,
//             { transform: [{ translateY: headerTranslate }] },
//           ]}
//         >
//           <Animated.View
//             style={[
//               styles.bar,
//               {
//                 opacity: controlsOpacity,
//                 transform: [
//                   { translateX: headerX },
//                   { translateY: headerY },
//                   //{ translateY: titleTranslate },
//                 ],
//               },
//             ]}
//           >
//             <Text style={styles.title}>Profile</Text>
//           </Animated.View>


//           <Animated.Image
//             style={[
//               styles.backgroundImage,
//               {
//                 opacity: imageOpacity,
//                 transform: [
//                   { translateY: imageTranslate }
//                 ],
//               },
//             ]}
//             source={require('../assets/icon.png')}
//           />

//           <Animated.View
//             style={[
//               styles.backgroundImage2,
//               {
//                 opacity: imageOpacity,
//                 transform: [
//                   { translateY: imageTranslate }
//                 ],
//               },
//             ]}
//           >
//             <Text style={styles.titleImage}>Shanada</Text>
//             <Text style={styles.titleImageAge}>Umur </Text>
//           </Animated.View>


//         </Animated.View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
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
//     //alignItems: 'center',

//     //marginTop: Platform.OS === 'ios' ? 3 : 2.5,
//   },
//   separator: {
//     flex: 1,
//     height: StyleSheet.hairlineWidth,
//     backgroundColor: '#8E8E8E',
//   },
// });