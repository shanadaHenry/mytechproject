import React, { Component } from "react";
import { StatusBar, StyleSheet, View, Image, TouchableOpacity, ListView } from 'react-native';
import { Container, Content, Header, Title, Text, Button, Icon, Tabs, Tab, Right, Left, Body, TabHeading, Card, CardItem, } from "native-base";
import GridView from 'react-native-super-grid'; //install plugin >> npm install react-native-super-grid ##cari dokumentasinya di github dari google dengan query "react native super grid"
import styles from './styles';
//import Swiper from 'react-native-swiper'; //install plugin >> npm i react-native-swiper --save ##cari dokumentasinya di github dari google dengan query "react native swiper" *note: swiper masih development karena dari get api
const CustomTitle = ({ title }) => (
  <View style={styles.custom_title_view}>
    <Text style={styles.custom_title}>{title}</Text>
  </View>
);
class CategoryScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false,
      loader: false,
      refresh: false,
      empty_data: false
    }
  };

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerTitle: <CustomTitle title={params.nama} />
    };
  };
  render() {
    const { navigate } = this.props.navigation;
    const menu = [
      { id: 1, name: 'Kamar mandi', desc: '', code: '#1abc9c', image: require("../assets/myTech/Icon-Kamar-Mandi.jpg"), screen: 'MenuAddTickets', color: '#73E859' },
      { id: 2, name: 'Pengecatan', desc: '', code: '#2ecc71', image: require("../assets/myTech/Icon-Pengecatan.jpg"), icon: 'md-globe', screen: 'MenuAddTickets', color: '#73E859' },
      { id: 3, name: 'Dinding', desc: '', code: '#9b59b6', image: require("../assets/myTech/Icon-Dinding.jpg"), icon: 'md-paw', screen: 'MenuAddTickets', color: '#73E859' },
      { id: 4, name: 'Pemindahan', desc: '', code: '#1abc9c', image: require("../assets/myTech/Icon-Pemindahan.jpg"), icon: 'md-plane', screen: 'MenuAddTickets', color: '#73E859' },
      { id: 5, name: 'Lainnya', desc: '', code: '#2ecc71', image: require("../assets/myTech/Icon-Lainnya.jpg"), icon: 'md-globe', screen: 'MenuAddTickets', color: '#73E859' },
      { id: 6, name: 'Pembersihan', desc: '', code: '#9b59b6', image: require("../assets/myTech/Icon-Ledeng.jpg"), icon: 'md-paw', screen: 'MenuAddTickets', color: '#73E859' },// { name: 'Adventure', desc:'', code: '#e67e22', image: require("../../assets/img/adventure.jpg"), icon: 'ios-walk', screen: 'Qrcode' },
      { id: 7, name: 'AC', desc: '', code: '', image: require("../assets/myTech/Icon-AC.jpg"), icon: 'md-plane', screen: 'MenuAddTickets', color: '#73E859' },
      { id: 8, name: 'Ledeng/Pompa\nair', desc: '', code: '#2ecc71', image: require("../assets/myTech/Icon-Ledeng.jpg"), icon: 'md-globe', screen: 'MenuAddTickets', color: '#73E859' },
      { id: 9, name: 'Atap', desc: '', code: '', image: require("../assets/myTech/Icon-Atap.jpg"), icon: 'md-paw', screen: 'MenuAddTickets', color: '#73E859' },// { name: 'Corporate Solution', desc:'', code: '#3498db', image: require("../../assets/img/corporatesolution.jpg"), icon: 'ios-contacts', screen: 'Rank' }, 
      { id: 10, name: 'Tukang', desc: '', code: '', image: require("../assets/myTech/Icon-Tukang.jpg"), icon: 'md-plane', screen: 'MenuAddTickets', color: '#73E859' },
      { id: 11, name: 'Lantai', desc: '', code: '', image: require("../assets/myTech/LANTAI.jpg"), icon: 'md-globe', screen: 'MenuAddTickets', color: '#73E859', },
      { id: 12, name: 'Parabola', desc: '', code: '', image: require("../assets/myTech/Icon-Parabola.jpg"), icon: 'md-paw', screen: 'MenuAddTickets', color: '#73E859' },// { name: 'Travel Concultant', desc:'', code: '#f1c40f', image: require("../../assets/img/travelconsultant.jpg"), icon: 'ios-people', screen: 'JavaScript' }, 
      { id: 13, name: 'Internet/Wifi', desc: '', code: '', image: require("../assets/myTech/Icon-Jaringan.jpg"), icon: 'md-plane', screen: 'MenuAddTickets', color: '#73E859' },
      { id: 14, name: 'Listrik', desc: '', code: '', image: require("../assets/myTech/LISTRIK.jpg"), icon: 'md-globe', screen: 'MenuAddTickets', color: '#73E859' },
      { id: 15, name: 'Mesin Cuci', desc: '', code: '', image: require("../assets/myTech/WASH-MACHINE.jpg"), icon: 'md-paw', screen: 'MenuAddTickets', color: '#73E859' },//{ name: 'Login', desc:'', code: '#e74c3c', icon: 'ios-undo', screen: 'Login' },
      { id: 16, name: 'TV', desc: '', code: '', image: require("../assets/myTech/TELEVISI.jpg"), icon: 'md-plane', screen: 'MenuAddTickets', color: '#73E859' },
      { id: 17, name: 'Kulkas', desc: '', code: '', image: require("../assets/myTech/KULKAS.jpg"), icon: 'md-globe', screen: 'MenuAddTickets', color: '#73E859' },
      { id: 18, name: 'Printer', desc: '', code: '', image: require("../assets/myTech/Printer.jpg"), icon: 'md-paw', screen: 'MenuAddTickets', color: '#73E859' },
      { id: 19, name: 'Komputer', desc: '', code: '', image: require("../assets/myTech/Komputer.jpg"), icon: 'md-plane', screen: 'MenuAddTickets', color: '#73E859' },
      { id: 20, name: 'Mobil Derek', desc: '', code: '', image: require("../assets/myTech/Icon-Mobil-Derek.jpg"), icon: 'md-globe', screen: 'MenuAddTickets', color: '#73E859' },
      { id: 21, name: 'Dapur', desc: '', code: '', image: require("../assets/myTech/Icon-Dapur.jpg"), icon: 'md-paw', screen: 'MenuAddTickets', color: '#73E859' },
      { id: 22, name: 'Service Mobil', desc: '', code: '', image: require("../assets/myTech/Service-Mobil.jpg"), icon: 'md-plane', screen: 'MenuAddTickets', color: '#73E859' },

    ];
    return (
      <Container>
        <Content style={styles.contentContainer}>
          <GridView
            style={styles.kategori_gridView}
            itemDimension={130}
            items={menu}
            spacing={0}
            renderItem={menu => (
              <TouchableOpacity
                style={[styles.kategori_itemContainer, { backgroundColor: '#fff' }]}
                onPress={() => navigate(menu.screen, { id: menu.id, nama: menu.name })}
                key={menu.id}>
                <Image style={styles.kategori_itemImage} source={menu.image} />
                <Text style={styles.kategori_itemName}>{menu.name}</Text>

                {/* <Icon style={styles.kategori_itemIcon} name={gridItem.icon} /> */}
                {/*<Text style={styles.kategori_itemDesc}>{gridItem.desc}</Text>*/}
              </TouchableOpacity>
            )}
          />
        </Content>
      </Container>
    );
  }
}
export default CategoryScreen;