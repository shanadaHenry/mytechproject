import React, { PureComponent } from "react";
import { StyleSheet, ScrollView, StatusBar, Platform, Image, View, TextInput, Button, Text, Keyboard, TouchableOpacity, ImageBackground, TouchableHighlight, AsyncStorage } from "react-native";
import { Container, Content, Form, Item, Label, Input } from "native-base";
import { TextField } from 'react-native-material-textfield';
import styles from './Style_login';
import { connect } from 'react-redux';
import { login } from '../redux/actions/auth';
import { requestData } from '../API/FunctionApi';
import Loader from '../components/ModalLoading';
import { technisi_bg } from '../components/ImagePath';
import { Stack } from '../Navigation';

//import { Dropdown } from 'react-native-material-dropdown';
//import { Transition } from 'react-navigation-fluid-transitions';

class signInTech extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            email_tech: '',
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
            email_tech: this.state.email_tech,
            password: this.state.password,
        };
        const request_url = "TECHNISI-LOGIN";
        requestData(headers, body, request_url).then((data) => {
            var data_user = {
                id_tech: data.user.user_id,
                email_tech: data.user.email_tech,
                nama_tech: data.user.nama_tech,
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

        const { navigate } = this.props.navigation;

        return (
            <ImageBackground source={technisi_bg}
                style={styles.container}>

                <View>
                    <ScrollView>
                        <Loader loading={this.state.loading} />
                        <Text style={styles.submitButtonText}> Login tech</Text>
                        <Text style={styles.submitButtonText}> Masuk atau Buat Akun</Text>
                        <TextField
                            baseColor='rgb(255,255,255)'
                            tintColor='rgb(255,255,255)'
                            textColor='rgb(255,255,255)'
                            autoCapitalize='none'
                            autoCorrect={false}
                            selectionColor="#FFF"
                            value={this.state.email_tech}
                            placeholderTextColor='#FFF'
                            onChangeText={(text) => this.setState({ email_tech: text })}
                            label='E-mail'
                            controlled={true}
                        //style={styles.login_form_input}
                        //placeholder='Email'
                        // value={email}
                        // onChangeText={(email) => this.setState({ email })}
                        // //multiline
                        // returnKeyType={'default'}
                        // autocorrect={'false'}
                        // onChangeText={this.handleEmail}
                        />
                        <TextField
                            baseColor='rgb(255,255,255)'
                            tintColor='rgb(255,255,255)'
                            textColor='rgb(255,255,255)'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={true}
                            selectionColor="#FFF"
                            value={this.state.password}
                            placeholderTextColor='#FFF'
                            onChangeText={(text) => this.setState({ password: text })}
                            label='Kata Sandi'
                            controlled={true}
                        //style={styles.login_form_input}
                        //placeholder='Kata Sandi'                             
                        // value={password}
                        // onChangeText={(password) => this.setState({ password })}
                        // //multiline
                        // returnKeyType={'default'}
                        // autocorrect={'false'}
                        // onChangeText={this.handlePassword}
                        />

                        <TouchableOpacity>
                            <Text style={styles.submitButtonText}
                                onPress={() => navigate('LupaPassTechnisi')}>Lupa kata sandi?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={() => this._userLogin()}>
                            <Text style={styles.submitButtonText}> MASUK </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.submitButtonText}
                                onPress={() => navigate('DaftarTechnisi')}>BUAT AKUN</Text>
                        </TouchableOpacity>
                    </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(signInTech)