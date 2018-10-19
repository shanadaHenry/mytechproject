import React, { Component } from "react";
import { StyleSheet, ScrollView, Image, View, TextInput, Button, Text, Keyboard, TouchableOpacity, ImageBackground, } from "react-native";
import { Container, Content, Form, Item, Label, Input } from "native-base";
import { TextField } from 'react-native-material-textfield';
import styles from './Style_login';
import Loader from '../components/ModalLoading';
import { customers_bg } from '../components/ImagePath';
//import { Dropdown } from 'react-native-material-dropdown';

class LupaPassCustomersScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',

        };
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }

    handlePassword = (text) => {
        this.setState({ password: text })
    }

    signIn = (email, password) => {
        alert('Email: ' + email + ' Password: ' + password)
    }


    render() {
        const { navigate } = this.props.navigation;

        let { email,
            password,
        } = this.state;

        return (
            <ImageBackground source={customers_bg}
                style={styles.container}>

                <View>
                    <ScrollView>
                        <Loader loading={this.state.loading} />
                        <Text style={styles.submitButtonText}> Kata sandi pemulihan</Text>
                        <TextField
                            baseColor='rgb(255,255,255)'
                            tintColor='rgb(255,255,255)'
                            textColor='rgb(255,255,255)'
                            label='E-mail'
                            value={email}
                            onChangeText={(email) => this.setState({ email })}
                            //multiline
                            returnKeyType={'default'}
                            autocorrect={'false'}
                            onChangeText={this.handleEmail}
                            controlled={true}
                        />


                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={
                                () => this.signIn(this.state.email, this.state.password)
                            }>
                            <Text style={styles.submitButtonText}> MASUK </Text>
                        </TouchableOpacity>

                        {/* <Text style={styles.submitButtonText}> atau </Text>

                        <TouchableOpacity style={styles.submitButton}>
                            <Text style={styles.submitButtonText}
                                onPress={() => navigate('signInTech')}>TEKNISI </Text>
                        </TouchableOpacity> */}

                    </ScrollView>
                </View>
            </ImageBackground>
        );
    }
}

export default LupaPassCustomersScreen;