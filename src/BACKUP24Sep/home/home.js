import React, { Component } from 'react';
import { SwipeableFlatList, RefreshControl, StatusBar, StyleSheet, View, Image, TouchableOpacity, TouchableWithoutFeedback, FlatList, Alert, ScrollView } from 'react-native';
import { Container, Content, Header, Title, Icon, Text, Button, Right, Left, Body, TabHeading, Card, CardItem, Item, Footer, FooterTab, width, Thumbnail } from "native-base";
import Swiper from 'react-native-swiper';
import styles from './styles';
import { connect } from 'react-redux';
import Loader from '../components/ModalLoading';
import { requestData } from '../API/FunctionApi';
import LoadingData from '../components/LoadingData';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import Ripple from 'react-native-material-ripple';
//import commonColor from 'native-base-theme';

const slide1 = require("../assets/IconMyTech/Banner/Banner_Cust(1).jpeg");
const slide2 = require("../assets/IconMyTech/Banner/Banner_Cust_Teknisi.jpg");
const CustomTitle = ({ title }) => (
  <View style={styles.custom_title_view}>
    <Text style={styles.custom_title}>{title}</Text>
  </View>
);

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    // const { params } = this.props.navigation.state;
    this.state =
      {
        data_menu: [],
        id_kategori: 1,
        loading: false,
        loader: false,
        refresh: false,
        empty_data: false
      }
  }


  // static navigationOptions = ({ navigation }) => {
  //   const { params = {} } = navigation.state;
  //   return {
  //     headerTitle: <CustomTitle title={params.nama} />
  //   };
  // };

  _onRefresh = () => {
    this.setState({ refresh: true });
    this._getDataMenu();
  }

  componentDidMount() {
    this._getDataMenu();
  }

  _getDataMenu() {
    this.setState({ loading: true })
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };
    const body = {
      require_code: "pm-fmb-apps",
      id_kategori: this.state.id_kategori,
    };
    const request_url = "NEW-TICKETS";
    requestData(headers, body, request_url).then((data) => {
      var data_menu = data.data;
      var status = data.status;
      if (status == 200) {
        this.setState({
          loading: false,
          refresh: false,
          data_menu: data_menu
        })
      } else if (status == 404) {
        this.setState({
          loading: false,
          refresh: false,
          empty_data: true
        })
      } else {
        this.setState({
          loading: false,
          refresh: false
        })
        Alert.alert(
          'Terjadi Kesalahan',
          'Silahkan refresh page'
        )
      }
    })
  }

  _renderDataMenu = function ({ item }) {
    const { navigate } = this.props.navigation;
    return (
      <Ripple rippleColor='#93FF87' rippleOpacity={0.25} rippleSize={800} rippleDuration={500}
        style={styles.menu_list}
        onPress={() => navigate('Permohonan', { data: item })} >
          <View>
            <Card>
              <CardItem>
                <Button small primary>
                  <Text>Buka</Text>
                </Button>
                <Text style={styles.textTanggal}>{item.lokasi}</Text>
                <Right style={{ borderWidth: 1, }}>
                  <Icon
                    name="plus"
                  />
                </Right>
              </CardItem>
              <View>
                <Text style={styles.textJudul}>{item.masalah}</Text>
                <Text style={styles.textJudul}>Untuk tanggal bulan dan waktu</Text>
              </View>
            </Card>
          </View>
      </Ripple>
    )
  }

  _renderEmptyData = () => {
    if (this.state.empty_data) {
      return (
        <View style={styles.menu_empty_view}>
          <View style={styles.menu_empty_ic_view}>
            <Icon name='folder-open-o' style={styles.menu_empty_icon} />
          </View>
          <View style={styles.menu_empty_txt_view}>
            <Text style={styles.menu_empty_text}>Menu belum ada...</Text>
          </View>
        </View>
      )
    }
  }

  _renderQuickActions = function ({ item }) {
    const { navigate } = this.props.navigation;
    if (this.props.user_role === "admin") {
      return (
        <View style={styles.menu_action_view}>
          <Ripple
            rippleColor='#FFF'
            style={[styles.menu_action, { backgroundColor: '#2FBF4A' }]}
            onPress={() => navigate('MenuAddTickets', { data: item, refresh: this._onRefresh })}>
            <Icon name="pencil" style={styles.menu_action_icon} />
          </Ripple>
          <Ripple rippleColor='#FFF' style={[styles.menu_action, { backgroundColor: '#E51D1D' }]} onPress={() => {
            Alert.alert(
              'Hapus',
              'Apakah anda yakin akan menghapus ' + item.address + '?',
              [
                { text: 'Yes', onPress: () => this._deleteMenu(item.id_tickets) },
                { text: 'Cancel', onPress: () => console.log() },
              ]
            );
          }}>
            <Icon name="trash-o" style={styles.menu_action_icon} />
          </Ripple>
        </View>
      );
    }
  }

  _renderDataTickets() {
    const { data_menu, loading, loader } = this.state;
    const { user_role } = this.props;
    return (
      <Container>
        <Content>
          <Loader loading={loader} />
          <LoadingData loading={loading} style={styles.loading} />
          <SwipeableFlatList
            refreshControl={
              <RefreshControl
                refreshing={this.state.refresh}
                onRefresh={this._onRefresh}
              />
            }
            data={data_menu}
            renderItem={this._renderDataMenu.bind(this)}
            keyExtractor={(item) => item.id_menu}
            bounceFirstRowOnMount={(user_role === "admin") ? true : false}
            maxSwipeDistance={(user_role === "admin") ? responsiveWidth(40) : 0}
            renderQuickActions={this._renderQuickActions.bind(this)}
          />
          {this._renderEmptyData()}
        </Content>
      </Container>
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header style={{ backgroundColor: '#508ffb' }}>
          <StatusBar barStyle="light-content" backgroundColor='#3980fb' />
          <Left>
            <Button transparent onPress={() => navigate('ProfileRest')}>
              <Icon
                style={styles.buttonIcon}
                name='image' />
            </Button>
          </Left>
          <Body />
          <Right>
            <Button transparent
              onPress={() => navigate('Profile')}>
              <Icon
                style={styles.buttonIcon}
                name='user' />
            </Button>
          </Right>
        </Header>
        <Content style={styles.ContentContainer}>
          <ScrollView>
            <View>
              <Swiper
                height={175}
                dot={
                  <View style={{ backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                activeDot={
                  <View style={{ backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                paginationStyle={{ bottom: 0 }}
                //loop 
                autoplay>
                <TouchableWithoutFeedback onPress={() => navigate('EditProfile', { image: slide1, name: 'Promo Merah' })}>
                  <View>
                    <Image source={slide1} style={{ height: 175, width, }} />
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigate('EditProfile', { image: slide2, name: 'Promo Biru' })}>
                  <View>
                    <Image source={slide2} style={{ height: 175, width }} />
                  </View>
                </TouchableWithoutFeedback>
              </Swiper>
            </View>
          </ScrollView>
          {this._renderDataTickets()}
        </Content>
        <View style={styles.bottomView} >
          <Button
            onPress={() => navigate('Category')}>
            <Icon
              name="plus"
              style={styles.buttonIcon}
            />
          </Button>
        </View>
      </Container>
    );
  }


}
const mapStateToProps = (state) => {
  return {
    user_role: state.auth.user_role,
  }
}

export default connect(mapStateToProps)(HomeScreen);