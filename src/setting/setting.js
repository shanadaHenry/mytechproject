import React, { Component } from "react";
import { StatusBar, ScrollView, View, Text, Image, KeyboardAvoidingView, Picker, DatePickerAndroid, TouchableOpacity, TouchableHighlight } from "react-native";
import { Container, Header, Button, Left, Icon, Body, Title, Content, Form, Item, Label, ListItem, List, Right, Grid, Col, Row } from 'native-base';
import { CheckBox } from 'react-native-elements';

import styles from './styles';


class Setting extends Component {


    render() {
        const { navigate } = this.props.navigation;
        return (

            <Container style={styles.ContentContainer}>
                <Header style={{ backgroundColor: '#508ffb' }}>
                    <StatusBar barStyle="light-content" backgroundColor='#3980fb' />
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Pengaturan</Title>
                    </Body>
                    <Right />
                </Header>
                {/* <Content> */}
                <View >
                    <ScrollView>
                        <View style={styles.item}>
                            <TouchableHighlight>
                                <View style={styles.ViewButton}>
                                    <Button
                                        style={styles.buttonCustomers}
                                        onPress={() => navigate('Change_Pass')}>
                                        <Icon
                                            name="md-settings"
                                            style={styles.buttonIcon}
                                        />
                                    </Button>
                                    <Text style={styles.ViewText} onPress={() => navigate('Change_Pass')}>Ganti Kata Sandi</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.item}>
                            <TouchableHighlight>
                                <View style={styles.ViewButton}>
                                    <Button
                                        style={styles.buttonCustomers}
                                        onPress={() => navigate('Bahasa')}>
                                        <Icon
                                            name="md-settings"
                                            style={styles.buttonIcon}
                                        />
                                    </Button>
                                    <Text style={styles.ViewText2} onPress={() => navigate('Bahasa')}>Bahasa</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.item}>
                            <TouchableHighlight>
                                <View style={styles.ViewButton}>
                                    <Button
                                        style={styles.buttonCustomers}
                                        onPress={() => navigate('Setting')}>
                                        <Icon
                                            name="md-settings"
                                            style={styles.buttonIcon}
                                        />
                                    </Button>
                                    <Text style={styles.ViewText3} onPress={() => navigate('Setting')}>Keluar </Text>
                                </View>
                            </TouchableHighlight>
                        </View>

                    </ScrollView>
                </View>
                {/* </Content> */}
            </Container >
        );
    }
}

export default Setting;