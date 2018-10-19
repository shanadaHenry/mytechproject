import React, { Component } from "react";
import { StyleSheet, ScrollView, Image, View, TextInput, Button, Text, Keyboard, TouchableOpacity, ImageBackground, } from "react-native";
import { Container, Content, Form, Item, Label, Input } from "native-base";
import { TextField } from 'react-native-material-textfield';
import styles from './styles';
//import { Dropdown } from 'react-native-material-dropdown';

class signUpCust extends Component {
    constructor(props) {
        super(props);

        this.state = {
            no_hp: '',
            email: '',
            password: '',
            confirm_password: '',

        };
    }

    handleNoHp = (text) => {
        this.setState({ no_hp: text })
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }

    handlePassword = (text) => {
        this.setState({ password: text })
    }

    handleConfirmPass = (text) => {
        this.setState({ confirm_pass: text })
    }

    signUp = (no_hp, email, password, confirm_pass) => {
        alert(' No Handphone: ' + no_hp + 'Email: ' + email + ' Password: ' + password + ' Konfirmsi Password: ' + confirm_pass)
    }


    render() {
        const { navigate } = this.props.navigation;

        let { 
            no_hp,
            email,
            password,
            confirm_pass,
        } = this.state;

        return (
            <ImageBackground source={require('../assets/background.png')}
                style={styles.container}>
                <ScrollView>
                    <Container style={styles.container}>
                        {/* <ScrollView> */}
                        {/* <Content style={styles.containerContent}> */}

                        <View style={{ borderWidth: 2, borderColor: 'white', margin: 30 }}>
                            <Text style={styles.submitButtonText}> SignUp customer</Text>
                            <Text style={styles.submitButtonText}>Buat Akun</Text>
                            <TextField
                                label='No. Handphone'
                                value={no_hp}
                                onChangeText={(no_hp) => this.setState({ no_hp })}
                                //multiline
                                returnKeyType={'default'}
                                autocorrect={'false'}
                                onChangeText={this.handleNoHp}
                                //controlled={true}
                            />
                            <TextField
                                label='E-mail (optional)'
                                value={email}
                                onChangeText={(email) => this.setState({ email })}
                                //multiline
                                returnKeyType={'default'}
                                autocorrect={'false'}
                                onChangeText={this.handleEmail}
                                controlled={true}
                            />
                            <TextField
                                label='Kata Sandi'
                                value={password}
                                onChangeText={(password) => this.setState({ password })}
                                //multiline
                                returnKeyType={'default'}
                                autocorrect={'false'}
                                onChangeText={this.handlePassword}
                                controlled={true}
                            />
                            <TextField
                                label='Konfirmasi kata sandi'
                                value={confirm_pass}
                                onChangeText={(confirm_pass) => this.setState({ confirm_pass })}
                                //multiline
                                returnKeyType={'default'}
                                autocorrect={'false'}
                                onChangeText={this.handleConfirmPass}
                                controlled={true}
                            />
                            <Text style={styles.submitButtonText}> Dengan mendaftar saya setuju dengan Syarat dan kondisional</Text>


                            <TouchableOpacity
                                style={styles.submitButton}
                                onPress={
                                    () => this.signUp(this.state.no_hp, this.state.email, this.state.password, this.state.confirm_pass)
                                }>
                                <Text style={styles.submitButtonText}> LANJUTKAN </Text>
                            </TouchableOpacity>

                            {/* <Text style={styles.submitButtonText}> atau </Text>

                        <TouchableOpacity style={styles.submitButton}>
                            <Text style={styles.submitButtonText}
                                onPress={() => navigate('signInTech')}>TEKNISI </Text>
                        </TouchableOpacity> */}

                        </View>
                        {/* </Content> */}
                        {/* </ScrollView> */}
                    </Container>
                </ScrollView>
            </ImageBackground>
        );
    }
}

export default signUpCust;

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