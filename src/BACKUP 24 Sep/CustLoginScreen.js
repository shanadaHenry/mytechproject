import React, { Component } from 'react';
import { Text, Button, Icon, Form, Item, Input } from 'native-base';
import { View, Alert, StatusBar, Platform, ImageBackground, AsyncStorage } from 'react-native';
//import LinearGradient from 'react-native-linear-gradient';
import styles from './Style';
import { connect } from 'react-redux';
import { login } from '../redux/actions/auth';
//thimport { YellowBox } from 'react-native';
import { requestData } from '../API/FunctionApi';
import Loader from '../components/ModalLoading';
import { default_bg } from '../components/ImagePath';
import { Stack } from '../Navigation';
//YellowBox.ignoreWarnings(['Warning: Failed prop type: Invalid prop'])

class CustLoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email_cust: '',
      password: '',
      loading: false,
    };
  }

  _userLogin() {
    this.setState({ loading: true })
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };
    const body = {
      require_code: "pm-fmb-apps",
      email_cust: this.state.email_cust,
      password: this.state.password,
    };
    const request_url = "CUSTOMERS-LOGIN";
    requestData(headers, body, request_url).then((data) => {
      var data_user = {
        id_cust: data.user.user_id,
        email_cust: data.user.email_cust,
        nama_cust: data.user.nama_cust,
        status: data.user.status
      }
      var status = data.status;
      var user_role = data.user.status
      var error = data.error;
      if (status.code == 200) {
        this._saveData(data_user)
        this.props.onLogin(user_role)
        this.setState({ loading: false })
      } else {
        this.setState({ loading: false })
        Alert.alert(
          'Login Gagal',
          '' + error.message
        )
      }
    })
  }

  _saveData(value) {
    AsyncStorage.setItem('user', JSON.stringify(value));
  }

  render() {
    const statusBarAndroid =
      <StatusBar
        backgroundColor="#7A7A7A"
        barStyle="light-content"
      />;
    const statusBarIos = null;
    const statusBar = Platform.select({
      android: statusBarAndroid,
      ios: statusBarIos
    });
    return (
      <ImageBackground source={default_bg} style={styles.login_bg}>
        <View style={styles.overlay} />
        <View style={styles.login_content}>
          {statusBar}
          <View>
          </View>
          <Loader loading={this.state.loading} />
          <View style={styles.login_view_form}>
            <Form>
              <Item style={styles.login_form_item}>
                <Icon active name='user' style={{ color: '#DBDBDB' }} />
                <Input
                  style={styles.login_form_input}
                  placeholder='Email'
                  autoCapitalize='none'
                  autoCorrect={false}
                  selectionColor="#FFF"
                  value={this.state.email_cust}
                  placeholderTextColor='#FFF'
                  onChangeText={(text) => this.setState({ email_cust: text })} />
              </Item>
              <Item style={styles.login_form_item}>
                <Icon active name='lock' style={{ color: '#DBDBDB' }} />
                <Input
                  style={styles.login_form_input}
                  placeholder='Password'
                  autoCapitalize='none'
                  autoCorrect={false}
                  secureTextEntry={true}
                  selectionColor="#FFF"
                  value={this.state.password}
                  placeholderTextColor='#FFF'
                  onChangeText={(text) => this.setState({ password: text })} />
              </Item>
            </Form>
          </View>

          <View style={styles.login_view_button}>
            <Button block rounded success onPress={() => this._userLogin()}>
              <Text>LOGIN</Text>
            </Button>
          </View>

          <View style={styles.login_view_button}>
            <Text>Lupa kata Sandi</Text>
          </View>

        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (user_role) => { dispatch(login(user_role)); },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustLoginScreen)
