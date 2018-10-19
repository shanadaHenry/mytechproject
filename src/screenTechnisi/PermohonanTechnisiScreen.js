import React, { Component } from 'react';
import { SwipeableFlatList, RefreshControl, StatusBar, StyleSheet, ScrollView, View, Image, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, FlatList, Alert, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Container, Content, Header, List, ListItem, Title, Icon, Text, Button, Right, Left, Body, TabHeading, Card, CardItem, Item, Footer, FooterTab, width, Thumbnail } from "native-base";
import styles from '../screen/Style';
import { connect } from 'react-redux';
import { requestData } from '../API/FunctionApi';
import Loader from '../components/ModalLoading';
import LoadingData from '../components/LoadingData';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import Ripple from 'react-native-material-ripple';
//import commonColor from 'native-base-theme';

const CustomTitle = ({ title }) => (
    <View style={styles.custom_title_view}>
        <Text style={styles.custom_title}>{title}</Text>
    </View>
);
class PermohonanTechnisi extends Component {
    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;

        this.state = {
            detail_menu: params.data,
            data_menu: [],
            loading: false,
            loader: false,
            refresh: false,
            empty_data: false,
        }
    }
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerTitle: <CustomTitle title={params.data.nama_kategori} />,
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
        const request_url = "NEW-TICKETS";
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
                onPress={() => navigate('MenuDetailTechnisi', { data: item })} >
                {/* <TouchableOpacity style={{ margin: 10 }} onPress={() => navigate('Permohonan')}> */}
                <View>
                    <Card>
                        <CardItem>
                            <Button small primary>
                                <Text>Buka</Text>
                            </Button>
                            <Text style={styles.textTanggal}>{item.nama_cust}</Text>
                            <Right style={{ borderWidth: 1, }}>
                                <Icon
                                    name="plus"
                                />
                            </Right>
                        </CardItem>
                        <View>
                            <Text style={styles.textJudul}>Untuk tanggal bulan dan waktu</Text>
                        </View>
                    </Card>
                </View>
                {/* </TouchableOpacity> */}
            </Ripple>
        )
    }


    _renderDataCustomers() {
        const { detail_menu } = this.state;
        return (
            <Container>
                <Text>Permohonan Pelanggan</Text>
                <Content>
                    <View>
                        <Text>{detail_menu.id_cust}</Text>
                        <Text>{detail_menu.nama_cust}</Text>
                    </View>
                </Content>
            </Container>
        );
    }

    render() {
        const { detail_menu } = this.state;
        return (
            <Container style={styles.ContentContainer}>
                <View >
                    <ScrollView>
                        <View style={styles.item}>
                            <Text style={styles.textJudul}>Dibuat September, 19</Text>
                            <Text style={styles.textJudul}>{detail_menu.masalah}</Text>
                            <Text style={styles.textJudul}>Untuk tanggal bulan dan waktu</Text>
                        </View>
                        <View style={styles.item}>
                            <Text>
                                <Text style={styles.textJudul}>Penjelasan masalah anda{('\n')}{detail_menu.desk_masalah}{('\n')}{('\n')}</Text>
                                <Text style={styles.textJudul}>Nama Daerah, kota{('\n')}{detail_menu.lokasi}{('\n')}{('\n')}</Text>

                            </Text>
                        </View>
                        <View style={styles.itemPermohonanPelanggan}>
                            <Text>Permohonan Pelanggan</Text>
                            <View style={{ flexDirection: 'row', padding: 10 }}>
                                <Image
                                    source={require('../assets/drawer-cover.png')}
                                    style={{ width: 100, height: 100, borderRadius: 50, marginTop: 5 }}
                                />
                                <View style={{ padding: 10 }}>
                                    <Text style={styles.textJudul}>{detail_menu.nama_cust}</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </Container>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user_role: state.auth.user_role,
    }
}
export default connect(mapStateToProps)(PermohonanTechnisi);
