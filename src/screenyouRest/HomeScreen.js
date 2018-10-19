import React, { Component } from 'react';
import { Container, Content, Text, Icon } from "native-base";
import { ScrollView, Platform, StatusBar, View, Image } from 'react-native';
import GridView from "react-native-super-grid";
import Ripple from 'react-native-material-ripple';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { connect, Provider } from 'react-redux';
//import LinearGradient from 'react-native-linear-gradient';
import styles from './Style';

import { YellowBox } from 'react-native';
import { banner_img } from '../components/ImagePath';
import LinearGradient from 'react-native-linear-gradient';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        data_user: this.props.data_user,
        banner: [
          { id: 1, name: "One", image: banner_img[0] },
          { id: 1, name: "Two", image: banner_img[1] },
          { id: 1, name: "Three", image: banner_img[2] },
        ],
        active_slide: null,
      }
  }
  renderItemBanner({ item }, parallaxProps) {
    return (
      <View key={item.id}>
        <ParallaxImage
          source={item.image}
          containerStyle={styles.home_banner}
          style={styles.home_banner_img}
          parallaxFactor={0.4}
          {...parallaxProps}
          onSnapToItem={(index) => this.setState({ active_slide: index })}
        />
        {this.pagination}
      </View>
    );
  }

  get pagination() {
    const { banner, active_slide } = this.state;
    return (
      <Pagination
        dotsLength={banner.length}
        activeDotIndex={active_slide}
        containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)'
        }}
        inactiveDotStyle={{
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    const menu = [
      { id: 1, name: "Makanan", icon: "cutlery", screen: "Menu", color: '#73E859', color_dark: '#' },
      { id: 2, name: "Minuman", icon: "coffee", screen: "Menu", color: '#73E859', color_dark: '#' },
      { id: 3, name: "Snack", icon: "window-maximize", screen: "Menu", color: '#73E859', color_dark: '#' },
      { id: 4, name: "History", icon: "list-alt", screen: "History", color: '#73E859', color_dark: '#' },
      { id: 5, name: "Laporan", icon: "pie-chart", screen: "Laporan", color: '#73E859', color_dark: '#' },
      { id: 6, name: "Data User", icon: "users", screen: "DataUser", color: '#73E859', color_dark: '#' },
      { id: 7, name: "About", icon: "quote-right", screen: "About", color: '#73E859', color_dark: '#' },
    ];

    const statusBarAndroid =
      <StatusBar
        backgroundColor="#DDDDDD"
        barStyle="light-content"
      />;
    const statusBarIos = null;
    const statusBar = Platform.select({
      android: statusBarAndroid,
      ios: statusBarIos
    });

    return (
      <Container style={styles.home_container}>
        {statusBar}
        <Content style={{ flex: 1 }}>

          {/* <Carousel
              ref={c => this._slider1Ref = c}
              data={this.state.banner}
              renderItem={this.renderItemBanner}
              sliderWidth={responsiveWidth(100)}
              itemWidth={responsiveWidth(85)}
              hasParallaxImages={true}
              firstItem={0}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.7}
              // inactiveSlideShift={20}
              containerCustomStyle={styles.home_slider}
              contentContainerCustomStyle={styles.home_slider_container}
              loop={true}
              //loopClonesPerSide={2}
              autoplay={true}
              autoplayDelay={500}
              autoplayInterval={3000}
            /> */}

          <GridView
            style={styles.home_gridview}
            itemDimension={responsiveWidth(35)}
            items={menu}
            spacing={20}
            renderItem={menu => (
              <LinearGradient colors={[menu.color, '#42AA2A']} style={styles.home_menu}>
                <Ripple rippleColor='#3CE5E2' rippleOpacity={0.25} rippleSize={400} rippleDuration={400}
                  style={styles.home_menu_button}
                  onPress={() => navigate(menu.screen, { id: menu.id, nama: menu.name })}
                  keyExtractor={(menu) => menu.id_kategori}>
                  {/* keyExtractor = {(item) => item.id_menu} */}

                  <View style={styles.home_view_menu_icon}>
                    {/* <Icon name={menu.icon} style={styles.home_menu_icon}/> */}
                  </View>
                  <View style={styles.home_view_menu_text}>
                    <Text style={styles.home_menu_name}>{menu.name}</Text>
                  </View>
                </Ripple>
              </LinearGradient>

            )}


          />


        </Content>
      </Container>

    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data_user: state.auth.data_user
  };
}

export default connect(mapStateToProps)(HomeScreen);
