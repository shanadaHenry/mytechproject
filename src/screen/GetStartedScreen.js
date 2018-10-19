import React, { Component } from 'react'
import { View, Image, StatusBar, Dimensions, Text, TouchableHighlight, ScrollView, TextInput, Button, Keyboard, TouchableOpacity, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { Container, Content, Form, Item, Label, Input } from "native-base";
export default class extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { navigate } = this.props.navigation;
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
                            <View style={styles.textView}>
                                <Text style={styles.textText}> atau </Text>
                            </View>
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
    textView: {
        alignSelf: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    textText: {
        fontSize: 14,
        color: '#fff',
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
