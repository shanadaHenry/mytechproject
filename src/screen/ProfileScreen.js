import React, { Component } from 'react';
import { Container, Content, Header, Title, Icon, Text, Button, Right, Left, Body, TabHeading, Card, CardItem, Item, Footer, FooterTab, width } from "native-base";
import { AsyncStorage, StatusBar, StyleSheet, RefreshControl, ScrollView, View, Image, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, FlatList, Alert, LayoutAnimation, Platform, UIManager } from 'react-native';
import styles from './Style';
import Loader from '../components/ModalLoading';
import LoadingData from '../components/LoadingData';
import { requestData } from '../API/FunctionApi';
import { connect, Provider } from 'react-redux';
import { logout } from '../redux/actions/auth';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { profile_bg } from '../components/ImagePath';
//import commonColor from 'native-base-theme';
class ProfileScreen extends Component {

  constructor(props) {
    super(props);

    const { params } = this.props.navigation.state;
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    this.state = {
      data_user: [],
      data_menu: [],
      id_kategori: 1,
      loading: false,
      loader: false,
      refresh: false,
      empty_data: false,
      textLayoutHeight: 0,
      updatedHeight: 0,
      expand: false,
      buttonText: 'Data Profile 1',
    }
  }

  //constructor
  //render
  //componentDidMount

  componentDidMount() {
    this._getData();
    this._getDataMenu();
  }

  _getData() {
    AsyncStorage.getItem('user', (error, result) => {
      if (result != 0 & result != null) {
        this.setState({
          data_user: JSON.parse(result)
        })
        console.warn('test' + result)
      } else {
        null
      }
    });
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

  _onRefresh = () => {
    this.setState({ refresh: true });
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
    const request_url = "MESSAGE";
    requestData(headers, body, request_url).then((data) => {
      console.warn(data);
      var data_menu = data.data;
      var status = data.status.code;
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
    if (this.props.user_role === "admin") {
      return (
        <View style={{ margin: 10 }}>
          <Text style={styles.homeTextJudul}>{item.date}</Text>
          <View style={styles.homeTextJudul}>
            <Text>{item.title}</Text>
          </View>
          <View style={styles.homeTextJudul}>
            <Text>{item.message}</Text>
          </View>
          <View style={styles.homeTextJudul}>
            <Text>Untuk tanggal bulan dan waktu</Text>
          </View>
          <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, }}>
          </View>
        </View>
      )
    }
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

  _renderDataMessage() {
    const { data_menu, loading, loader } = this.state;
    const { user_role } = this.props;
    return (
      <Container>
        <View style={{ margin: 10 }}>
          <Text>News Update</Text>
        </View>
        <Content>
          <Loader loading={loader} />
          <LoadingData loading={loading} style={styles.loading} />
          <FlatList
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
          //renderQuickActions={this._renderQuickActions.bind(this)}
          />
          {this._renderEmptyData()}
        </Content>
      </Container>
    );
  }
  render() {
    const { navigate } = this.props.navigation;
    const { data_user, data_menu } = this.state;
    return (
      <Container style={styles.ContentContainer}>
        <Header style={{ backgroundColor: '#508ffb' }}>
          <StatusBar barStyle="light-content" backgroundColor='#3980fb' />
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon
                style={styles.buttonIcon}
                name="arrow-left" />
            </Button>
          </Left>
          <Body />
          <Right>
            <Button transparent onPress={() => navigate('MenuEditCustomers', { refresh: this._onRefresh, data: data_user })}>
              <Icon
                style={styles.buttonIcon}
                name='pencil' />
            </Button>
          </Right>
        </Header>
        <ScrollView>
          {/* {this._renderUser()} */}
          <View>
            <View style={{ borderWidth: 1, borderColor: 'red', padding: 15 }}>
              <Image source={profile_bg} style={styles.profile_banner_img} />
              <Text style={{ alignSelf: 'center' }}>{data_user.nama_cust}{data_user.nama_akhir}</Text>
              <Text style={{ alignSelf: 'center' }}>{data_user.telp_cust}</Text>
              <Text style={{ alignSelf: 'center' }}>{data_user.email_cust}</Text>
              <View style={styles.profile_overlay} />
            </View>

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
                      name="phone"
                      style={styles.buttonIconProfile}
                    />
                  </Button>
                  <Text style={styles.ViewTextCustomers} onPress={() => navigate('Setting')}>Hubungi customers service kami</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight>
                <View style={styles.ViewButtonFAQ}>
                  <Button
                    style={styles.buttonCustomers}
                    onPress={() => navigate('FAQ')}>
                    <Icon
                      name="power-off"
                      style={styles.buttonIconProfile}
                    />
                  </Button>
                  <Text style={styles.ViewTextSettings} onPress={() => navigate('FAQ')}>FAQ </Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight>
                <View style={styles.ViewButtonSettings}>
                  <Button
                    style={styles.buttonCustomers}
                    onPress={() => navigate('Setting')}>
                    <Icon
                      name="anchor"
                      style={styles.buttonIconProfile}
                    />
                  </Button>
                  <Text style={styles.ViewTextSettings} onPress={() => navigate('Setting')}>Pengaturan </Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
          {this._renderDataMessage()}
        </ScrollView>

      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user_role: state.auth.user_role,
  }
}
export default connect(mapStateToProps)(ProfileScreen);