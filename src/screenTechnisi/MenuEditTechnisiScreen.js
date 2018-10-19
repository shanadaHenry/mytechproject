import React, { Component } from 'react';
import { Container, Header, Button, Left, Icon, Body, Title, Content, Form, Item, Label, ListItem, List, Right, } from 'native-base';
import { StatusBar, Alert, ScrollView, View, Text, KeyboardAvoidingView, CheckBox, DatePickerAndroid, TouchableOpacity } from "react-native";
import { TextField } from 'react-native-material-textfield';
import { connect } from 'react-redux';
import styles from '../screen/Style';
import { form_icon } from '../components/ImagePath';
import { requestData } from '../API/FunctionApi';

const CustomTitle = ({ title }) => (
    <View style={styles.custom_title_view}>
        <Text style={styles.custom_title}>{title}</Text>
    </View>
);

class MenuEditTechnisiScreen extends Component {
    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;

        console.warn(params)
        this.state =
            {

                menu_id: (params.data != null) ? params.data.id_cust : '',
                menu_nama: (params.data != null) ? params.data.nama_cust : '',
                menu_tahun_lahir: (params.data != null) ? params.data.tahun_lahir : '',
                menu_telp_cust: (params.data != null) ? params.data.telp_cust : '',
                menu_home_address: (params.data != null) ? params.data.home_address : '',
                menu_home_no: (params.data != null) ? params.data.home_no : '',
                menu_office_address: (params.data != null) ? params.data.office_address : '',
                menu_office_no: (params.data != null) ? params.data.office_no : '',
            }

    }
    _saveData = () => {
        const { menu_id, menu_nama, menu_tahun_lahir, menu_telp_cust, menu_home_address, menu_home_no, menu_office_address, menu_office_no } = this.state;
        var url_name = (menu_id != null) ? 'EDIT-Technisi' : 'TAMBAH-Technisi';
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        const body = {
            require_code: "pm-fmb-apps",
            id_cust: menu_id,
            nama_cust: menu_nama,
            tahun_lahir: menu_tahun_lahir,
            telp_cust: menu_telp_cust,
            home_address: menu_home_address,
            home_no: menu_home_no,
            office_address: menu_office_address,
            office_no: menu_office_no
        };
        const request_url = url_name;
        requestData(headers, body, request_url).then((data) => {
            var nama_menu = data.data[0].nama;
            var status = data.status;
            var nama = (request_url === "EDIT_Technisi") ? "perubahan" : "penambahan";
            if (status == 200) {
                Alert.alert(
                    'Berhasil',
                    'Berhasil melakukan ' + nama + ' data ' + nama_menu + ' kedalam database'
                )
                this._refreshMenu();
            } else {
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
    _renderButton() {
        if (this.state.menu_id != '') {
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
        const { menu_id, menu_nama, menu_tahun_lahir, menu_telp_cust, menu_home_address, menu_home_no, menu_office_address, menu_office_no } = this.state;
        return (
            <Container style={styles.containerInputCategory}>
                <Content style={styles.content}>
                    <TextField
                        returnKeyType='next'
                        value={menu_nama}
                        onChangeText={value => this.setState({ menu_nama: value })}
                        label='Nama'
                        multiline
                    />
                    <TextField
                        returnKeyType='next'
                        value={menu_tahun_lahir}
                        onChangeText={value => this.setState({ menu_tahun_lahir: value })}
                        label='Tahun Kelahiran'
                        multiline
                    />
                    <TextField
                        returnKeyType='next'
                        value={menu_telp_cust}
                        onChangeText={value => this.setState({ menu_telp_cust: value })}
                        label='Nomor Telepon'
                        multiline
                    />
                    <TextField
                        returnKeyType='next'
                        value={menu_home_address}
                        onChangeText={value => this.setState({ menu_home_address: value })}
                        label='Alamat Rumah'
                        multiline
                    />
                    <TextField
                        returnKeyType='next'
                        value={menu_home_no}
                        onChangeText={value => this.setState({ menu_home_no: value })}
                        label='Nomor Rumah/Nomor Apt'
                        multiline
                    />
                    <TextField
                        returnKeyType='next'
                        value={menu_office_address}
                        onChangeText={value => this.setState({ menu_office_address: value })}
                        label='Alamat Kantor'
                        multiline
                    />
                    <TextField
                        returnKeyType='next'
                        value={menu_office_no}
                        onChangeText={value => this.setState({ menu_office_no: value })}
                        label='Nomor Ruangan'
                        multiline
                    />
                    <View style={styles.menu_add_view_btn}>
                        <Button block success onPress={this._saveData}>
                            <Text>{(menu_id != '') ? "Update" : "Tambah"}</Text>
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

export default connect(mapStateToProps)(MenuEditTechnisiScreen);

// import React, { Component } from 'react';
// import { Container, Content, Text, Button, Input, Picker } from 'native-base';
// import { View, Image, Alert } from 'react-native';
// import { connect } from 'react-redux';
// import styles from './Style';
// import { form_icon } from '../components/ImagePath';
// import { requestData } from '../API/FunctionApi';

// const ItemPicker = Picker.Item;

// const CustomTitle = ({ title }) => (
//     <View style={styles.custom_title_view}>
//         <Text style={styles.custom_title}>{title}</Text>
//     </View>
// );

// class MenuAddTicketsScreen extends Component {
//     constructor(props) {
//         super(props);
//         const { params } = this.props.navigation.state;
//         this.state =
//             {
//                 menu_id: (params.data != null) ? params.data.id_tickets : '',
//                 menu_lokasi: (params.data != null) ? params.data.lokasi : '',
//                 menu_no_rumah: (params.data != null) ? params.data.no_rumah : '',
//                 menu_masalah: (params.data != null) ? params.data.masalah : '',
//                 menu_desk_masalah: (params.data != null) ? params.data.desk_masalah : '',
//                 menu_id_kategori: (params.data != null) ? params.data.id_kategori : '',
//                 menu_kategori: (params.data != null) ? params.data.nama_kategori : '',
//                 // menu_foto: (params.data != null) ? params.data.foto_menu : '',
//                 kategori: []
//             }
//     }

//     componentDidMount() {
//         this._getKategori();
//     }

//     static navigationOptions = ({ navigation }) => {
//         const { params = {} } = navigation.state;
//         const title = (params.data != null) ? "Edit Tickets" : "Tambah Tickets";
//         return {
//             headerTitle: <CustomTitle title={title} />,
//         };
//     };

//     _getKategori() {
//         const headers = {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         };
//         const body = {
//             require_code: "pm-fmb-apps"
//         };
//         const request_url = "KATEGORI";
//         requestData(headers, body, request_url).then((data) => {
//             var data_kategori = data.data
//             var status = data.status;
//             if (status == 200) {
//                 this.setState({ kategori: data_kategori })
//             } else {
//                 Alert.alert(
//                     'Gagal mendapatkan data kategori'
//                 )
//             }
//         })
//     }

//     _selectKategori = (id_kategori) => {
//         const { kategori } = this.state;
//         var nama_kategori = '';
//         kategori.map(function (item) {
//             if (id_kategori == item.id_kategori) {
//                 nama_kategori = item.nama_kategori;
//                 return item;
//             } else {
//                 return null;
//             }
//         });
//         this.setState({
//             menu_id_kategori: id_kategori,
//             menu_kategori: nama_kategori,
//         });
//     }

//     _saveData = () => {
//         const { menu_id, menu_lokasi, menu_no_rumah, menu_masalah, menu_desk_masalah, menu_id_kategori } = this.state;
//         var url_name = (menu_id != '') ? 'EDIT-TICKETS' : 'TAMBAH-TICKETS';
//         const headers = {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         };
//         const body = {
//             require_code: "pm-fmb-apps",
//             id_tickets: menu_id,
//             lokasi: menu_lokasi,
//             no_rumah: menu_no_rumah,
//             masalah: menu_masalah,
//             desk_masalah: menu_desk_masalah,
//             id_kategori: menu_id_kategori
//         };
//         const request_url = url_name;
//         requestData(headers, body, request_url).then((data) => {
//             var lokasi_menu = data.data[0].lokasi;
//             var status = data.status;
//             var masalah = (request_url === "EDIT-TICKETS") ? "perubahan" : "penambahan";
//             if (status == 200) {
//                 Alert.alert(
//                     'Berhasil',
//                     'Berhasil melakukan ' + masalah + ' data ' + lokasi_menu + ' kedalam database'
//                 )
//                 this._refreshMenu();
//             } else {
//                 Alert.alert(
//                     'Gagal',
//                     'Terjadi kesalahan dalam menambahkan data'
//                 )
//             }
//         })
//     }

//     _refreshMenu = () => {
//         this.props.navigation.state.params.refresh();
//         this.props.navigation.goBack();
//     }

//     _renderButton() {
//         if (this.state.menu_id != '') {
//             return (
//                 <View style={styles.menu_add_view_btn}>
//                     <Button block success onPress={this._saveData}>
//                         <Text>Update</Text>
//                     </Button>
//                 </View>
//             )
//         } else {
//             return (
//                 <View style={styles.menu_add_view_btn}>
//                     <Button block success onPress={this._saveData}>
//                         <Text>Tambah</Text>
//                     </Button>
//                 </View>
//             )
//         }
//     }

//     render() {
//         const { menu_id, menu_lokasi, menu_no_rumah, menu_masalah, menu_desk_masalah, menu_id_kategori, kategori } = this.state;
//         return (
//             <Container>
//                 <Content padder>

//                     <View style={styles.menu_add_view_input}>
//                         <Text style={styles.menu_add_text}>lokasi</Text>
//                         <Input
//                             style={styles.menu_add_input}
//                             returnKeyType='next'
//                             keyboardType='number-pad'
//                             value={menu_lokasi}
//                             onChangeText={value => this.setState({ menu_lokasi: value })}
//                         />
//                         <Image source={form_icon[1]} style={styles.menu_add_img} />
//                     </View>

//                     <View style={styles.menu_add_view_input}>
//                         <Text style={styles.menu_add_text}>nomor rumah</Text>
//                         <Input
//                             style={styles.menu_add_input}
//                             autoCapitalize='sentences'
//                             returnKeyType='next'
//                             value={menu_no_rumah}
//                             onChangeText={value => this.setState({ menu_no_rumah: value })}
//                         />
//                         <Image source={form_icon[2]} style={styles.menu_add_img} />
//                     </View>

//                     <View style={styles.menu_add_view_input}>
//                         <Text style={styles.menu_add_text}>masalah</Text>
//                         <Input
//                             style={styles.menu_add_input}
//                             autoCapitalize='sentences'
//                             returnKeyType='next'
//                             value={menu_masalah}
//                             onChangeText={value => this.setState({ menu_masalah: value })}
//                         />
//                         <Image source={form_icon[2]} style={styles.menu_add_img} />
//                     </View>

//                     <View style={styles.menu_add_view_input}>
//                         <Text style={styles.menu_add_text}>desk masalah</Text>
//                         <Input
//                             style={styles.menu_add_input}
//                             autoCapitalize='sentences'
//                             returnKeyType='next'
//                             value={menu_desk_masalah}
//                             onChangeText={value => this.setState({ menu_desk_masalah: value })}
//                         />
//                         <Image source={form_icon[2]} style={styles.menu_add_img} />
//                     </View>

//                     <View style={styles.menu_add_view_btn}>
//                         <Button block success onPress={this._saveData}>
//                             <Text>{(menu_id != '') ? "Update" : "Tambah"}</Text>
//                         </Button>
//                     </View>

//                 </Content>
//             </Container>
//         );
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         user_role: state.auth.user_role,
//     }
// }

// export default connect(mapStateToProps)(MenuAddTicketsScreen);