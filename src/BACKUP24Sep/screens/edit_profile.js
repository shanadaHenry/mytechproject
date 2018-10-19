import React, { Component } from "react";
import { Text, SwipeableFlatList, ActivityIndicator, TouchableHighlight, Alert } from "react-native";
import { Container, Item, Input, Header, Left, Button, Content, Switch, Body, Icon, Title, Right, ListItem, List, Thumbnail } from 'native-base';
import styles from './styles';

class EditProfile extends Component {
  render(){
    return (
      <Container>
      <Header>
        <Left>
          <Button transparent 
          transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back"/>
          </Button>
        </Left>
        <Body>
          <Title>Lengkapi Profilmu</Title>
        </Body>
        <Right/>
      </Header>
    </Container>
    );
  }
}
export default EditProfile;