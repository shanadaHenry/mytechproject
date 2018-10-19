import React, { Component } from "react";
import { StyleSheet, Alert, ScrollView, Image, View, TextInput, Button, Text, Keyboard, TouchableOpacity, ImageBackground, } from "react-native";
import { Container, Content, Form, Item, Label, Input } from "native-base";
import { TextField } from 'react-native-material-textfield';
import styles from './Style_login';
import { customers_bg } from '../components/ImagePath';
import Loader from '../components/ModalLoading';
import { requestData } from '../API/FunctionApi';

//import { Dropdown } from 'react-native-material-dropdown';

class DaftarCustomersScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            telp_cust: '',
            nama_cust: '',
            nama_akhir: '',
            email: '',
            password: '',    
        };
    }

    _userSignup() {
        this.setState({ loading: true })
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        const body = {
            require_code: "pm-fmb-apps",
            telp: this.state.telp_cust,
            first_name: this.state.nama_cust,
            last_name: this.state.nama_akhir,
            email: this.state.email,
            password: this.state.password,
            status: 'customer'
        };
        const request_url = "SIGNUP";
        requestData(headers, body, request_url).then((data) => {
            var status = data.status;
            var user_details = data.details;
            if(status.code == 200){
                Alert.alert(
                    'Berhasil Mendaftarkan Data Customers',
                )
                this._refreshMenu();
            }else {
                Alert.alert(
                    'Gagal',
                    'Lengkapi data anda terlebih dahulu'
                )
            }
        })
    }

    _refreshMenu = () => {
        const {navigate} = this.props.navigation;
        navigate('LoginCustomers');
    }


    render() {
        return (
            <ImageBackground source={customers_bg}
                style={styles.container}>
                <View>
                    <ScrollView>
                        <Text style={styles.submitButtonText}> Daftar Customers</Text>
                        <Text style={styles.submitButtonText}>Buat Akun</Text>
                        <TextField
                            textColor='rgb(255,255,255)'
                            baseColor='rgb(255,255,255)'
                            tintColor='rgb(255,255,255)'
                            autoCapitalize='none'
                            autoCorrect={false}
                            selectionColor="#FFF"
                            value={this.state.telp_cust}
                            onChangeText={(text) => this.setState({ telp_cust: text })}
                            placeholderTextColor='#FFF'
                            label='No. Handphone'
                        //controlled={true}
                        />
                        <TextField
                            textColor='rgb(255,255,255)'
                            baseColor='rgb(255,255,255)'
                            tintColor='rgb(255,255,255)'
                            autoCapitalize='none'
                            autoCorrect={false}
                            selectionColor="#FFF"
                            value={this.state.nama_cust}
                            onChangeText={(text) => this.setState({ nama_cust: text })}
                            placeholderTextColor='#FFF'
                            label='Nama Awal'
                        //controlled={true}
                        />
                        <TextField
                            textColor='rgb(255,255,255)'                        
                            baseColor='rgb(255,255,255)'
                            tintColor='rgb(255,255,255)'
                            label='Nama Akhir'
                            value={this.state.nama_akhir}
                            onChangeText={value => this.setState({ nama_akhir : value})}
                            //multiline
                            returnKeyType={'default'}
                            autocorrect={'false'}
                            controlled={true}
                        />
                        <TextField
                            baseColor='rgb(255,255,255)'
                            tintColor='rgb(255,255,255)'
                            textColor='rgb(255,255,255)'
                            autoCapitalize='none'
                            autoCorrect={false}
                            selectionColor="#FFF"
                            value={this.state.email}
                            onChangeText={(text) => this.setState({ email: text })}
                            placeholderTextColor='#FFF'
                            label='E-mail'
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
                        />
                        {/* <TextField
                            baseColor='rgb(255,255,255)'
                            tintColor='rgb(255,255,255)'
                            textColor='rgb(255,255,255)'
                            label='Konfirmasi kata sandi'
                            value={confirm_pass}
                            onChangeText={(confirm_pass) => this.setState({ confirm_pass })}
                            //multiline
                            returnKeyType={'default'}
                            autocorrect={'false'}
                            onChangeText={this.handleConfirmPass}
                            controlled={true}
                        /> */}
                        <Text style={styles.submitButtonText}> Dengan mendaftar saya setuju dengan Syarat dan kondisional</Text>
                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={() => this._userSignup()}>
                            <Text style={styles.submitButtonText}> LANJUTKAN </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </ImageBackground>
        );
    }
}

export default DaftarCustomersScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         borderWidth: 1,
//         borderColor: 'red',
//         justifyContent: 'center',
//     },

//     submitButton: {
//         backgroundColor: '#FBBF26',
//         padding: 10,
//         height: 40,
//         //margin: 30
//     },
//     submitButtonText: {
//         color: 'white',
//         textAlign: 'center'
//     },
// })