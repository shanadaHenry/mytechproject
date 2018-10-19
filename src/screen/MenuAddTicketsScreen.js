import React, { Component } from 'react';
import { Container, Header, Button, Left, Icon, Body, Title, Content, Form, Item, Label, ListItem, List, Right, } from 'native-base';
import { StatusBar, TextInput, Image, Alert, ScrollView, View, Text, KeyboardAvoidingView, CheckBox, DatePickerAndroid, TouchableOpacity } from "react-native";
import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-modal-datetime-picker';
import TimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { connect } from 'react-redux';
import styles from './Style';
import { form_icon } from '../components/ImagePath';
import { requestData } from '../API/FunctionApi';

const CustomTitle = ({ title }) => (
    <View style={styles.custom_title_view}>
        <Text style={styles.custom_title}>{title}</Text>
    </View>
);

class MenuAddTicketsScreen extends Component {
    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;
        console.warn(params);
        this.state =
            {

                menu_id: (params.data != null) ? params.data.id_tickets : '',
                menu_id_kategori: (params.data != null) ? params.data.id_kategori : '',
                menu_kategori: (params.data != null) ? params.data.nama_kategori : '',
                menu_lokasi: (params.data != null) ? params.data.lokasi : '',
                menu_no_rumah: (params.data != null) ? params.data.no_rumah : '',
                menu_telp_cust: (params.data != null) ? params.data.telp_cust : '',
                menu_order_date: (params.data != null) ? params.data.order_date : '',
                menu_masalah: (params.data != null) ? params.data.masalah : '',
                menu_desk_masalah: (params.data != null) ? params.data.desk_masalah : '',
                data_user: [],
                allday: false,
                dateCond: false,
                timeCond: false,
                chooseDate: null,
                chooseTime: null
            }
    }
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        const title = (params.data != null) ? "Edit Tiket" : "Buat Tiket";
        return {
            headerTitle: <CustomTitle title={params.nama} />,
        };
    };

    _saveData = () => {
        const { menu_id, menu_lokasi, menu_no_rumah, menu_telp_cust, menu_order_date, menu_masalah, menu_desk_masalah, menu_id_kategori } = this.state;
        var url_name = (menu_id != '') ? 'EDIT-TICKETS' : 'TAMBAH-TICKETS';
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        const body = {
            require_code: "pm-fmb-apps",
            id_tickets: menu_id,
            lokasi: menu_lokasi,
            no_rumah: menu_no_rumah,
            telp_cust: menu_telp_cust,
            masalah: menu_masalah,
            desk_masalah: menu_desk_masalah,
            order_date: menu_order_date,
            id_kategori: menu_id_kategori,
        };
        const request_url = url_name;
        requestData(headers, body, request_url).then((data) => {
            var lokasi_menu = data.data[0].lokasi;
            var status = data.status;
            var masalah = (request_url === "EDIT-TICKETS") ? "perubahan" : "penambahan";
            if (status == 200) {
                Alert.alert(
                    'Berhasil',
                    'Berhasil melakukan ' + masalah + ' data ' + lokasi_menu + ' kedalam database'
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
        const { navigate } = this.props.navigation;
        navigate('Home');
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

    showDatePicker=()=>{
        this.setState({
            dateCond: !this.state.dateCond
        })
    }

    showTimePicker=()=>{
        this.setState({
            timeCond: !this.state.timeCond
        })
    }

    handleDatePicker = (date) => {
        this.setState({
            dateCond: !this.state.dateCond,
            chooseDate: moment(date).format('DD MMMM'),
        })
    } 
    
    handleTimePicker = (time) => {
        this.setState({
            timeCond: !this.state.timeCond,
            chooseTime: moment(time).format('HH:mm'),
        })
      }

    showTime = () => {
        if (this.state.allday == false) {
            return (
                <View>
                    <TouchableOpacity style={styles.button} onPress={this.showTimePicker}>
                        <Text style={styles.text}>Show TimePicker</Text>
                    </TouchableOpacity>
                    <TimePicker
                        isVisible={this.state.timeCond}
                        onConfirm={this.handleTimePicker}
                        onCancel={this.showTimePicker}
                        mode={'time'}
                        is24Hour={true}
                    //datePickerModeAndroid={'spinner'}
                    />
                </View>
            )
        }
    }

    render() {
        const { menu_id, menu_lokasi, menu_no_rumah, menu_telp_cust, menu_order_date, menu_masalah, menu_desk_masalah, chooseDate, chooseTime, menu_id_kategori } = this.state;
        const { data_user } = this.state;
        console.warn(data_user);
        return (

            <Container style={{ margin: 15 }}>
                <Content style={styles.content}>
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        borderWidth: .5,
                        borderColor: 'red',
                        margin: 10
                    }}>
                        <View style={styles.formCategory}>
                            <Icon
                                name='plus'
                                style={styles.formImage} />
                            <View style={styles.textField}>
                                <TextField
                                    keyboardType='number-pad'
                                    value={menu_lokasi}
                                    onChangeText={value => this.setState({ menu_lokasi: value })}
                                    label='Lokasi Permintaan Anda'
                                    multiline />
                            </View>
                        </View>

                        <View style={styles.formCategory}>
                            <Icon
                                name='plus'
                                style={styles.formImage} />
                            <View style={styles.textField}>
                                <TextField
                                    label='Nomor Rumah/Nomor Apt'
                                    autoCapitalize='sentences'
                                    value={menu_no_rumah}
                                    onChangeText={value => this.setState({ menu_no_rumah: value })}
                                    multiline />
                            </View>
                        </View>
                        <View style={styles.formCategory}>
                            <Icon
                                name='plus'
                                style={styles.formImage} />
                            <View style={styles.textField}>
                                <TextField
                                    label='Nomor Telepon'
                                    autoCapitalize='sentences'
                                    value={menu_telp_cust}
                                    onChangeText={value => this.setState({ menu_telp_cust: value })}
                                />
                            </View>
                        </View>
                    </View>
                    <TextField
                        label={'Masalah'}
                        autoCapitalize='sentences'
                        value={menu_masalah}
                        onChangeText={value => this.setState({ menu_masalah: value })}
                    />
                    <TextField
                        label='Deskripsi Masalah'
                        autoCapitalize='sentences'
                        value={menu_desk_masalah}
                        onChangeText={value => this.setState({ menu_desk_masalah: value })}
                    />
                    <TextField
                        label='Tanggal pesan'
                        autoCapitalize='sentences'
                        value={menu_order_date}
                        onChangeText={value => this.setState({ menu_order_date: value })}
                    />


                    <Label
                        style={{ justifyContent: 'center', paddingTop: 4, }}>
                        Sepanjang Hari</Label>
                    <CheckBox
                        style={{ marginLeft: 225 }}
                        onValueChange={value => this.setState({ allday: value })}
                        value={this.state.allday}
                    />

                    <Text style={{ color: 'red', fontSize: 20, marginBottom: 10 }}>
                        {this.state.chosenDate}
                    </Text>
                    <Text style={{ color: 'red', fontSize: 20, marginTop: 20 }}>
                        {this.state.chosenTime}
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={this.showDatePicker}>
                        <Text style={styles.text}>Show DatePicker</Text>
                    </TouchableOpacity>

                    <DatePicker
                        isVisible={this.state.dateCond}
                        onConfirm={this.handleDatePicker}
                        onCancel={this.showDatePicker}
                        mode={'date'}
                    //datePickerModeAndroid={'spinner'}
                    //is24Hour={false}
                    />

                    {this.showTime()}

                   <Text>{chooseDate}</Text>
                   <Text>{chooseTime}</Text>

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
export default connect(mapStateToProps)(MenuAddTicketsScreen);