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

class CartScreen extends Component {
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
        { id: 1, name: 'Kamar mandi', desc: '', code: '#1abc9c', image: require("../assets/myTech/Icon-Kamar-Mandi.jpg"), screen: 'MenuTickets', color: '#73E859'},
        { id: 2, name: 'Pengecatan', desc: '', code: '#2ecc71', image: require("../assets/myTech/Icon-Pengecatan.jpg"), icon: 'md-globe', screen: 'MenuTickets' , color: '#73E859'},
        { id: 3, name: 'Dinding', desc: '', code: '#9b59b6', image: require("../assets/myTech/Icon-Dinding.jpg"), icon: 'md-paw', screen: 'MenuTickets' , color: '#73E859'},
        { id: 4, name: 'Pemindahan', desc: '', code: '#1abc9c', image: require("../assets/myTech/Icon-Pemindahan.jpg"), icon: 'md-plane', screen: 'MenuTickets' , color: '#73E859'},
        { id: 5, name: 'Lainnya', desc: '', code: '#2ecc71', image: require("../assets/myTech/Icon-Lainnya.jpg"), icon: 'md-globe', screen: 'MenuTickets' , color: '#73E859'},
        { id: 6, name: 'Pembersihan', desc: '', code: '#9b59b6', image: require("../assets/myTech/Icon-Ledeng.jpg"), icon: 'md-paw', screen: 'MenuTickets' , color: '#73E859'},// { name: 'Adventure', desc:'', code: '#e67e22', image: require("../../assets/img/adventure.jpg"), icon: 'ios-walk', screen: 'Qrcode' },
        { id: 7, name: 'AC', desc: '', code: '', image: require("../assets/myTech/Icon-AC.jpg"), icon: 'md-plane', screen: 'MenuTickets' , color: '#73E859'},
        { id: 8, name: 'Ledeng/Pompa\nair', desc: '', code: '#2ecc71', image: require("../assets/myTech/Icon-Ledeng.jpg"), icon: 'md-globe', screen: 'MenuTickets', color: '#73E859' },
        { id: 9, name: 'Atap', desc: '', code: '', image: require("../assets/myTech/Icon-Atap.jpg"), icon: 'md-paw', screen: 'MenuTickets' , color: '#73E859'},// { name: 'Corporate Solution', desc:'', code: '#3498db', image: require("../../assets/img/corporatesolution.jpg"), icon: 'ios-contacts', screen: 'Rank' }, 
        { id: 10, name: 'Tukang', desc: '', code: '', image: require("../assets/myTech/Icon-Tukang.jpg"), icon: 'md-plane', screen: 'MenuTickets' , color: '#73E859'},
        { id: 11, name: 'Lantai', desc: '', code: '', image: require("../assets/myTech/LANTAI.jpg"), icon: 'md-globe', screen: 'MenuTickets' , color: '#73E859', },
        { id: 12, name: 'Parabola', desc: '', code: '', image: require("../assets/myTech/Icon-Parabola.jpg"), icon: 'md-paw', screen: 'MenuTickets' , color: '#73E859'},// { name: 'Travel Concultant', desc:'', code: '#f1c40f', image: require("../../assets/img/travelconsultant.jpg"), icon: 'ios-people', screen: 'JavaScript' }, 
        { id: 13, name: 'Internet/Wifi', desc: '', code: '', image: require("../assets/myTech/Icon-Jaringan.jpg"), icon: 'md-plane', screen: 'MenuTickets' , color: '#73E859'},
        { id: 14, name: 'Listrik', desc: '', code: '', image: require("../assets/myTech/LISTRIK.jpg"), icon: 'md-globe', screen: 'MenuTickets' , color: '#73E859'},
        { id: 15, name: 'Mesin Cuci', desc: '', code: '', image: require("../assets/myTech/WASH-MACHINE.jpg"), icon: 'md-paw', screen: 'MenuTickets', color: '#73E859' },//{ name: 'Login', desc:'', code: '#e74c3c', icon: 'ios-undo', screen: 'Login' },
        { id: 16, name: 'TV', desc: '', code: '', image: require("../assets/myTech/TELEVISI.jpg"), icon: 'md-plane', screen: 'MenuTickets', color: '#73E859' },
        { id: 17, name: 'Kulkas', desc: '', code: '', image: require("../assets/myTech/KULKAS.jpg"), icon: 'md-globe', screen: 'MenuTickets' , color: '#73E859'},
        { id: 18, name: 'Printer', desc: '', code: '', image: require("../assets/myTech/Printer.jpg"), icon: 'md-paw', screen: 'MenuTickets', color: '#73E859' },
        { id: 19, name: 'Komputer', desc: '', code: '', image: require("../assets/myTech/Komputer.jpg"), icon: 'md-plane', screen: 'MenuTickets' , color: '#73E859'},
        { id: 20, name: 'Mobil Derek', desc: '', code: '', image: require("../assets/myTech/Icon-Mobil-Derek.jpg"), icon: 'md-globe', screen: 'MenuTickets' , color: '#73E859'},
        { id: 21, name: 'Dapur', desc: '', code: '', image: require("../assets/myTech/Icon-Dapur.jpg"), icon: 'md-paw', screen: 'MenuTickets' , color: '#73E859'},
        { id: 22, name: 'Service Mobil', desc: '', code: '', image: require("../assets/myTech/Service-Mobil.jpg"), icon: 'md-plane', screen: 'MenuTickets' , color: '#73E859'},
      ];
    // const menu = [
    //   { id: 1, name: "Kamar Mandi", icon: "cutlery", screen: "MenuTickets", color: '#73E859', color_dark: '#' },
    //   { id: 2, name: "Ac", icon: "coffee", screen: "MenuTickets", color: '#73E859', color_dark: '#' },
    //   { id: 3, name: "Parabola", icon: "window-maximize", screen: "MenuTickets", color: '#73E859', color_dark: '#' },
    //   { id: 4, name: "History", icon: "list-alt", screen: "History", color: '#73E859', color_dark: '#' },
    //   { id: 5, name: "Laporan", icon: "pie-chart", screen: "Laporan", color: '#73E859', color_dark: '#' },
    //   { id: 6, name: "Data User", icon: "users", screen: "DataUser", color: '#73E859', color_dark: '#' },
    //   { id: 7, name: "About", icon: "quote-right", screen: "About", color: '#73E859', color_dark: '#' },
    // ];

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
                  key={menu.id}>
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

export default connect(mapStateToProps)(CartScreen);
