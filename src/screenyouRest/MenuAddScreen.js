import React, { Component } from 'react';
import { Container, Content,  Text, Button, Input, Picker } from 'native-base';
import { View, Image, Alert } from 'react-native';
import { connect } from 'react-redux';
import styles from './Style';
import { form_icon } from '../components/ImagePath';
import { requestData } from '../API/FunctionApi';

const ItemPicker = Picker.Item;

const CustomTitle = ({ title }) => (
    <View style={styles.custom_title_view}>
        <Text style={styles.custom_title}>{title}</Text>
    </View>
);

class MenuAddScreen extends Component {
    constructor(props) {  
        super(props);  
        const {params} = this.props.navigation.state;
        this.state =
        {
            menu_id: (params.data != null) ? params.data.id_menu : '',
            menu_nama: (params.data != null) ? params.data.nama : '',
            menu_harga: (params.data != null) ? params.data.harga : '',
            menu_keterangan: (params.data != null) ? params.data.keterangan : '',
            menu_id_kategori:(params.data != null) ? params.data.id_kategori : '',
            menu_kategori:(params.data != null) ? params.data.nama_kategori : '',
            menu_foto:(params.data != null) ? params.data.foto_menu : '',
            kategori: []
        }
    }

    componentDidMount () {
        this._getKategori();
    }

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        const title = (params.data != null) ? "Edit Menu" : "Tambah Menu";
        return {
            headerTitle: <CustomTitle title={title}/>,
        };
    };

    _getKategori() {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        const body = {
            require_code: "pm-fmb-apps"
        };
        const request_url = "KATEGORI";
        requestData(headers, body, request_url).then((data) => {
            var data_kategori = data.data
            var status = data.status;
            if(status == 200){
                this.setState({kategori: data_kategori})
            }else{
                Alert.alert(
                    'Gagal mendapatkan data kategori'
                )
            }
        })
    }

    _selectKategori=(id_kategori)=>{
        const {kategori} = this.state;
        var nama_kategori = '';
        kategori.map(function (item) {
            if (id_kategori == item.id_kategori) {
                nama_kategori = item.nama_kategori;
            return item;
            } else {
                return null;
            }
        });
        this.setState({
          menu_id_kategori: id_kategori,
          menu_kategori: nama_kategori,
        });
    }

    _saveData = () => {
        const {menu_id, menu_nama, menu_harga, menu_keterangan, menu_id_kategori} = this.state;
        var url_name = (menu_id != '') ? 'EDIT-MENU' : 'TAMBAH-MENU';
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        const body = {
            require_code: "pm-fmb-apps",
            id_menu: menu_id,
            nama: menu_nama,
            harga: menu_harga,
            keterangan: menu_keterangan,
            id_kategori: menu_id_kategori
        };
        const request_url = url_name;
        requestData(headers, body, request_url).then((data) => {
            var nama_menu = data.data[0].nama;
            var status = data.status;
            var keterangan = (request_url === "EDIT-MENU")?"perubahan":"penambahan";
            if(status == 200){
                Alert.alert(
                    'Berhasil',
                    'Berhasil melakukan '+keterangan+' data '+nama_menu+' kedalam database'
                )
                this._refreshMenu();
            }else{
                Alert.alert(
                    'Gagal',
                    'Terjadi kesalahan dalam menambahkan data'
                )
            }
        })
    }

    _refreshMenu = () => {
        this.props.navigation.state.params.refresh();
        this.props.navigation.goBack();
    }

    _renderButton(){
        if(this.state.menu_id != ''){
            return (
                <View style={styles.menu_add_view_btn}>
                    <Button block success onPress={this._saveData}>
                        <Text>Update</Text>
                    </Button>
                </View>
            )
        } else {
            return (
                <View style={styles.menu_add_view_btn}>
                    <Button block success onPress={this._saveData}>
                        <Text>Tambah</Text>
                    </Button>
                </View>
            ) 
        }
    }

    render() {
        const {menu_id, menu_nama, menu_harga, menu_keterangan, menu_id_kategori, kategori} = this.state;
        return (
            <Container>
                <Content padder>
                    <View style={styles.menu_add_view_input}>
                        <Text style={styles.menu_add_text}>Nama Menu</Text>
                        <Input
                            style={styles.menu_add_input}
                            autoCapitalize='words'
                            returnKeyType='next'
                            value={menu_nama}
                            onChangeText={value => this.setState({ menu_nama: value })}
                        />
                        <Image source={form_icon[0]} style={styles.menu_add_img}/>
                    </View>
                    <View style={styles.menu_add_view_input}>
                        <Text style={styles.menu_add_text}>Harga Menu</Text>
                        <Input
                            style={styles.menu_add_input}
                            returnKeyType='next'
                            keyboardType='number-pad'
                            value={menu_harga}
                            onChangeText={value => this.setState({ menu_harga: value })}
                        />
                        <Image source={form_icon[1]} style={styles.menu_add_img}/>
                    </View>
                    <View style={styles.menu_add_view_input}>
                        <Text style={styles.menu_add_text}>Keterangan</Text>
                        <Input
                            style={styles.menu_add_input}
                            autoCapitalize='sentences'
                            returnKeyType='next'
                            value={menu_keterangan}
                            onChangeText={value => this.setState({ menu_keterangan: value })}
                        />
                        <Image source={form_icon[2]} style={styles.menu_add_img}/>
                    </View>
                    <View style={styles.menu_add_view_input}>
                        <Text style={styles.menu_add_text}>Kategori</Text>
                        <Picker
                            mode="dropdown"
                            selectedValue={menu_id_kategori}
                            onValueChange={this._selectKategori}>
                            <ItemPicker label='Pilih kategori...' value={null} key={null}/>
                            {kategori.map(function(item){
                                return(
                                    <ItemPicker label={item.nama_kategori} value={item.id_kategori} key={item.id_kategori}/>  
                                )
                            })}
                        </Picker>
                        <View style={styles.menu_add_underline}/>
                        <Image source={form_icon[3]} style={styles.menu_add_img}/>
                    </View>
                    <View style={styles.menu_add_view_btn}>
                        <Button block success onPress={this._saveData}>
                            <Text>{(menu_id != '')?"Update":"Tambah"}</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user_role: state.auth.user_role,
    }
}

export default connect(mapStateToProps)(MenuAddScreen);