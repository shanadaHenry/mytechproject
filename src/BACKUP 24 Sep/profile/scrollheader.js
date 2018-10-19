import React, { Component } from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  TouchableOpacity,
  ListView
} from 'react-native';
import { Container, Content, Item, Input, Header, Left, Button, Body, Icon, Title, Right, ListItem, List, Thumbnail, Separator } from 'native-base';

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 50 : 56;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class Profile extends Component {

  constructor() {
    super();


    this.state = {
      scrollY: new Animated.Value(
        // iOS has negative initial scroll value because content inset...
        Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
      ),
      refreshing: false,
      controlsOpacity: 1,
      headerX: 20,
      headerY: 20,
    };
  }

  _renderScrollViewContent() {
    return (
      <View style={styles.scrollViewContent}>
       <Container>
         </Container>
      </View>
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    // Because of content inset the scroll value will be negative on iOS so bring
    // it back to 0.
    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
    );
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });

    const controlsOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    const headerX = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [20, 60],
      extrapolate: 'clamp',
    });
    const headerY = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [230, 245],
      extrapolate: 'clamp',
    });


    return (
      <View style={styles.fill}>

        <Animated.ScrollView
          style={styles.fill}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true },
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => {
                this.setState({ refreshing: true });
                setTimeout(() => this.setState({ refreshing: false }), 1000);
              }}
              // Android offset for RefreshControl
              progressViewOffset={HEADER_MAX_HEIGHT}
            />
          }
          // iOS offset for RefreshControl
          contentInset={{
            top: HEADER_MAX_HEIGHT,
          }}
          contentOffset={{
            y: -HEADER_MAX_HEIGHT,
          }}
        >
          {this._renderScrollViewContent()}

        </Animated.ScrollView>




        <Animated.View
          pointerEvents="none"
          style={[
            styles.header,
            { transform: [{ translateY: headerTranslate }] },
          ]}
        >
          <Animated.View
            style={[
              styles.bar,
              {
                opacity: controlsOpacity,
                transform: [
                  { translateX: headerX },
                  { translateY: headerY },
                  //{ translateY: titleTranslate },
                ],
              },
            ]}
          >
            <Text style={styles.title}>Profile</Text>
          </Animated.View>


          <Animated.Image
            style={[
              styles.backgroundImage,
              {
                opacity: imageOpacity,
                transform: [
                  { translateY: imageTranslate }
                ],
              },
            ]}
            source={require('../assets/icon.png')}
          />

          <Animated.View
            style={[
              styles.backgroundImage2,
              {
                opacity: imageOpacity,
                transform: [
                  { translateY: imageTranslate }
                ],
              },
            ]}
          >
            <Text style={styles.titleImage}>Shanada</Text>
            <Text style={styles.titleImageAge}>Umur </Text>
          </Animated.View>


        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#3e83f7',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
    borderWidth: 2,
    borderColor: 'red'
  },
  backgroundImage: {
    position: 'relative',
    width: 120,
    height: 120,
    borderWidth: 2,
    borderColor: 'grey',
    alignSelf: 'center',
    top: 80
  },
  backgroundImage2: {
    position: 'relative',
    width: 200,
    height: 50,
    borderWidth: 2,
    borderColor: 'grey',
    alignSelf: 'center',
    top: 80
  },
  backgroundImage3: {
    position: 'absolute',
    backgroundColor: 'transparent',
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: 'grey',
    alignSelf: 'center',
  },
  //merubah title jangan center
  bar: {
    flex: 1,
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'white'
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginTop: 7,
    marginLeft: 27,
  },
  titleImage: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center'
  },

  titleImageAge: {
    color: 'white',
    fontSize: 16,
    alignSelf: 'center'
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,

  },
  row: {
    height: 40,
    margin: 10,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    position: 'relative',
    marginTop: 30,
    color: Platform.OS === 'ios' ? '#FFF' : '#FFF',
    backgroundColor: 'transparent',
    //alignItems: 'center',

    //marginTop: Platform.OS === 'ios' ? 3 : 2.5,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});