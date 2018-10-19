import React, { Component } from "react";
import { ScrollView, View, Text, Image, KeyboardAvoidingView, Picker, DatePickerAndroid, TouchableOpacity, TouchableHighlight } from "react-native";
import { Container, Header, Button, Left, Icon, Body, Title, Content, Form, Item, Label, ListItem, List, Right, Grid, Col, Row } from 'native-base';
import { CheckBox } from 'react-native-elements';

import styles from './styles';


class Bahasa extends Component {


    render() {

        return (
            <Container style={styles.ContentContainer}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Pilih bahasa</Title>
                    </Body>
                    <Right />
                </Header>
            </Container >
        );
    }
}

export default Bahasa;