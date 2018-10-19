import React, { Component } from 'react';
import { Container, Content, Text, Icon, Fab } from 'native-base';
import { SwipeableFlatList, Alert, View, Image, RefreshControl } from 'react-native';
import styles from './Style';
import LoadingData from '../components/LoadingData';
import { requestData } from '../API/FunctionApi';
import { dummy_pic } from '../components/ImagePath';
import Ripple from 'react-native-material-ripple';
//import ThousandFormatter from '../components/ThousandFormat';
import { connect } from 'react-redux';
import Loader from '../components/ModalLoading';
import { responsiveWidth } from 'react-native-responsive-dimensions';

const CustomTitle = ({ title }) => (
    <View style={styles.custom_title_view}>
        <Text style={styles.custom_title}>{title}</Text>
    </View>
);

class MenuTicketsScreen extends Component {
    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;
        this.state =
            {
                data_menu: [],
                id_kategori: params.id,
                loading: false,
                loader: false,
                refresh: false,
                empty_data: false
            }
    }

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerTitle: <CustomTitle title={params.nama} />
        };
    };

    _onRefresh = () => {
        this.setState({ refresh: true });
        this._getDataMenu();
    }

    componentDidMount() {
        this._getDataMenu();
    }

    _getDataMenu() {
        this.setState({ loading: true })
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        const body = {
            require_code: "pm-fmb-apps",
            id_kategori: this.state.id_kategori,
        };
        const request_url = "TICKETS";
        requestData(headers, body, request_url).then((data) => {
            var data_menu = data.data;
            var status = data.status;
            if (status == 200) {
                this.setState({
                    loading: false,
                    refresh: false,
                    data_menu: data_menu
                })
            } else if (status == 404) {
                this.setState({
                    loading: false,
                    refresh: false,
                    empty_data: true
                })
            } else {
                this.setState({
                    loading: false,
                    refresh: false
                })
                Alert.alert(
                    'Terjadi Kesalahan',
                    'Silahkan refresh page'
                )
            }
        })
    }

    _renderDataMenu = function ({ item }) {
        const { navigate } = this.props.navigation;
        return (
            <Ripple rippleColor='#93FF87' rippleOpacity={0.25} rippleSize={800} rippleDuration={500}
                style={styles.menu_list}
                onPress={() => navigate('MenuDetailTickets', { data: item })} >
                <View style={styles.menu_view_pic}>
                    <Image source={dummy_pic} style={styles.menu_list_pic} />
                </View>
                <View style={styles.reservation_list_item}>
                    <Text style={styles.menu_list_name}>{item.id_tickets}</Text>
                    <Text style={styles.menu_list_name}>{item.address}</Text>
                    <Text style={styles.menu_list_name}>{item.masalah}</Text>
                    <Text style={styles.menu_list_name}>{item.desk_masalah}</Text>
                    <Text style={styles.menu_list_name}>{item.nama_kategori}</Text>
                    <Text style={styles.menu_list_name}>{item.id_kategori}</Text>

                    {/* <ThousandFormatter
                        numberStyles={styles.menu_list_price} 
                        numberValue={item.harga}
                        kursValue="IDR " 
                        kursStyles={styles.menu_list_price} 
                    /> */}
                </View>
            </Ripple>
        )
    }

    _renderEmptyData = () => {
        if (this.state.empty_data) {
            return (
                <View style={styles.menu_empty_view}>
                    <View style={styles.menu_empty_ic_view}>
                        <Icon name='folder-open-o' style={styles.menu_empty_icon} />
                    </View>
                    <View style={styles.menu_empty_txt_view}>
                        <Text style={styles.menu_empty_text}>Menu belum ada...</Text>
                    </View>
                </View>
            )
        }
    }

    _renderAddButton = () => {
        const { navigate } = this.props.navigation;
        if (this.props.user_role === "admin") {
            return (
                <View>
                    <Fab style={styles.menu_fab}
                        position="bottomRight"
                        onPress={() => navigate('MenuAddTickets', { data: null, refresh: this._onRefresh })}>
                        <Icon name="plus" style={styles.menu_icon_fab} />
                    </Fab>
                </View>
            )
        }
    }

    _renderQuickActions = function ({ item }) {
        const { navigate } = this.props.navigation;
        if (this.props.user_role === "admin") {
            return (
                <View style={styles.menu_action_view}>
                    <Ripple
                        rippleColor='#FFF'
                        style={[styles.menu_action, { backgroundColor: '#2FBF4A' }]}
                        onPress={() => navigate('MenuAddTickets', { data: item, refresh: this._onRefresh })}>
                        <Icon name="pencil" style={styles.menu_action_icon} />
                    </Ripple>
                    <Ripple rippleColor='#FFF' style={[styles.menu_action, { backgroundColor: '#E51D1D' }]} onPress={() => {
                        Alert.alert(
                            'Hapus',
                            'Apakah anda yakin akan menghapus ' + item.address + '?',
                            [
                                { text: 'Yes', onPress: () => this._deleteMenu(item.id_tickets) },
                                { text: 'Cancel', onPress: () => console.log() },
                            ]
                        );
                    }}>
                        <Icon name="trash-o" style={styles.menu_action_icon} />
                    </Ripple>
                </View>
            );
        }
    }

    _deleteMenu(id) {
        this.setState({ loading: true })
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        const body = {
            require_code: "pm-fmb-apps",
            username: this.state.username,
            password: this.state.password,
        };
        const request_url = "LOGIN";
        requestData(headers, body, request_url).then((data) => {
            var data_user = {
                user_id: data.user.user_id,
                username: data.user.username,
                nama: data.user.nama_lengkap,
                status: data.user.status
            }
            var status = data.status;
            var error = data.error;
            if (status.code == 200) {
                this._saveData(data_user)
                this.props.onLogin(data.user.status)
                this.setState({ loading: false })
            } else {
                this.setState({ loading: false })
                Alert.alert(
                    'Login Gagal',
                    '' + error.message
                )
            }
        })
    }

    render() {
        const { data_menu, loading, loader } = this.state;
        const { user_role } = this.props;
        return (
            <Container>
                <Content>
                    <Loader loading={loader} />
                    <LoadingData loading={loading} style={styles.loading} />
                    <SwipeableFlatList
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refresh}
                                onRefresh={this._onRefresh}
                            />
                        }
                        data={data_menu}
                        renderItem={this._renderDataMenu.bind(this)}
                        keyExtractor={(item) => item.id_tickets}
                        bounceFirstRowOnMount={(user_role === "admin") ? true : false}
                        maxSwipeDistance={(user_role === "admin") ? responsiveWidth(40) : 0}
                        renderQuickActions={this._renderQuickActions.bind(this)}
                    />
                    {this._renderEmptyData()}
                </Content>
                {this._renderAddButton()}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user_role: state.auth.user_role,
    }
}

export default connect(mapStateToProps)(MenuTicketsScreen);