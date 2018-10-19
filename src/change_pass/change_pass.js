import React, { Component } from "react";
import { ScrollView, View, Text, Image, KeyboardAvoidingView, Picker, DatePickerAndroid, TouchableOpacity, TouchableHighlight } from "react-native";
import { Container, Header, Button, Left, Icon, Body, Title, Content, Form, Item, Label, ListItem, List, Right, Grid, Col, Row } from 'native-base';
import { TextField } from 'react-native-material-textfield';

import styles from './styles';


class Change_Pass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            confirmPass: '',

        };
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }

    handlePassword = (text) => {
        this.setState({ password: text })
    }

    handleConfirmPass = (text) => {
        this.setState({ confirmPass: text })
    }

    signIn = (email, password, confirmPass) => {
        alert('Email: ' + email + ' Password: ' + password + 'Confirm Password' + confirmPass )
    }


    render() {
        const { navigate } = this.props.navigation;

        let { email,
            password,
            confirmPass
        } = this.state;

        return (
            <Container>
               <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Ganti Kata Sandi</Title>
                    </Body>
                    <Right />
                </Header>
                <View style={styles.content}>
                    {/* <View> */}
                        <View style={styles.textView}>
                            <TextField
                                label='E-mail'
                                value={email}
                                onChangeText={(email) => this.setState({ email })}
                                //multiline
                                returnKeyType={'default'}
                                autocorrect={'false'}
                                onChangeText={this.handleEmail}
                                controlled={true}
                            />
                        </View>
                        <View style={styles.textViewPass}>
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
                        </View>
                        <View style={styles.textViewconfPass}>
                            <TextField
                                label='Konfirmasi Kata Sandi'
                                value={confirmPass}
                                onChangeText={(confirmPass) => this.setState({ confirmPass })}
                                //multiline
                                returnKeyType={'default'}
                                autocorrect={'false'}
                                onChangeText={this.handleConfirmPassword}
                                controlled={true}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={
                                () => this.signIn(this.state.email, this.state.password, this.state.confirmPass)
                            }>
                            <Text style={styles.submitButtonText}> Ganti </Text>
                        </TouchableOpacity>
                    </View>
                {/* </View> */}


            </Container>
        );
    }
}

export default Change_Pass;