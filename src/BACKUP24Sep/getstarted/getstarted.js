import React, { Component } from 'react'
import { View, Image, StatusBar, Dimensions, Text, TouchableHighlight, ScrollView, TextInput, Button, Keyboard, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { Container, Content, Form, Item, Label, Input } from "native-base";
export default class extends Component {
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

        let { email, password } = this.state;
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../assets/background/2x_1baru.png')}
                    style={styles.imgBackground}
                />
                <View style={styles.content}>
                        <View>
                            <View style={styles.textView}>
                                <Text style={styles.text}>Siapakah Anda ?</Text>
                            </View>

                            <TouchableHighlight style={styles.submitButton}>
                                <Text style={styles.submitButtonText}
                                     onPress={() => navigate('LoginCustomers')}> PELANGGAN </Text>
                            </TouchableHighlight>

                            <TouchableHighlight>
                                <Text style={styles.textText}> atau </Text>
                            </TouchableHighlight>

                            <TouchableHighlight style={styles.submitButton}>
                                <Text style={styles.submitButtonText}
                                    onPress={() => navigate('LoginTechnisi')}>TEKNISI </Text>
                            </TouchableHighlight>
                        </View>

                </View>
            </View>
        )
    }
}
const { width, height } = Dimensions.get('window')

const styles = {
    wrapper: {
        // backgroundColor: '#f00'
    },

    slide: {
        flex: 1,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'red'

    },
    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'red',
        justifyContent: 'center',
    },

    imgBackground: {
        width,
        height,
        backgroundColor: 'transparent',
        position: 'absolute'
    },

    image: {
        width,
        height,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    submitButton: {
        backgroundColor: '#FBBF26',
        padding: 10,
        height: 40,
        margin: 30
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center'
    },
}
