import React, { Component } from 'react';
import { Container, Content, Header, Title, Icon, Text, Button, Right, Left, Body, TabHeading, Card, CardItem, Item, Footer, FooterTab, width } from "native-base";
import { AsyncStorage, StatusBar, StyleSheet, ScrollView, View, Image, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, FlatList, Alert, LayoutAnimation, Platform, UIManager } from 'react-native';
import styles from './Style';
import { connect, Provider } from 'react-redux';
import { logout } from '../redux/actions/auth';
import { profile_bg } from '../components/ImagePath';
//import commonColor from 'native-base-theme';
class ProfileScreen extends Component {

  constructor(props) {
    super(props);
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    const { params } = this.props.navigation.state;
    this.state = {
      data_user : [],
      textLayoutHeight: 0,
      updatedHeight: 0,
      expand: false,
      buttonText: 'Data Profile 1',
    }
  }
  
  componentDidMount() {
    this._getData();
  }

  _getData() {
    AsyncStorage.getItem('user', (error, result) => {
      if (result != 0 & result != null) {
        this.setState({
          data_user: JSON.parse(result)
        })
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

  render() {
    const { navigate } = this.props.navigation;
    const { data_user } = this.state;
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
            <Button transparent onPress={() => navigate('MenuEditCustomers', { refresh: this._onRefresh, data_user: this.state.data_user })}>
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
        </ScrollView>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      isLoggedIn: state.auth.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onLogout: () => { dispatch(logout()); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);