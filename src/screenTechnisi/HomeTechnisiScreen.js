import React, { Component } from "react";
import { FlatList, TouchableOpacity, RefreshControl, StatusBar, Animated, Dimensions, TouchableWithoutFeedback, Platform, Text, View, Image } from 'react-native';
import { Container, Content, Body, Header, List, ListItem as Item, ScrollableTab, Tab, Tabs, Title, Left, Right, width, Button, Icon, Card, CardItem, Footer, FooterTab, Thumbnail } from "native-base";
import Swiper from 'react-native-swiper';
import styles from '../screen/Style';
import { connect } from 'react-redux';
import Loader from '../components/ModalLoading';
import { requestData } from '../API/FunctionApi';
import LoadingData from '../components/LoadingData';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import Ripple from 'react-native-material-ripple';

const slide1 = require("../assets/IconMyTech/Banner/Banner_Teknisi.jpeg");
const slide2 = require("../assets/IconMyTech/Banner/Banner_Cust_Teknisi.jpg");
const NAVBAR_HEIGHT = 56;
const { width: SCREEN_WIDTH } = Dimensions.get("window");
const COLOR = "rgb(80, 143, 251)";
const TAB_PROPS = {
    tabStyle: { width: SCREEN_WIDTH / 2, backgroundColor: COLOR },
    activeTabStyle: { width: SCREEN_WIDTH / 2, backgroundColor: COLOR },
    textStyle: { color: "white" },
    activeTextStyle: { color: "white" }
};

export class HomeTechnisiScreen extends Component {
    scroll = new Animated.Value(0);
    headerY;
    constructor(props) {
        super(props);
        this.headerY = Animated.multiply(Animated.diffClamp(this.scroll, 0, NAVBAR_HEIGHT), -1);
        this.state = {
            data_menu: [],
            id_kategori: 1,
            loading: false,
            loader: false,
            refresh: false,
            empty_data: false
        }
    }
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
            <TouchableOpacity
                style={styles.menu_list}
                onPress={() => navigate('PermohonanTechnisi', { data: item })} >
                <View>
                    <Card>
                        {/* <CardItem>
                            <Text style={styles.homeTextTanggal}>{item.lokasi}</Text>
                            <Right style={{ flexDirection: 'row' }}>
                                <TouchableWithoutFeedback
                                    onPress={() => navigate('HomeTechnisi', { data: item })} >
                                    <Icon
                                        name="trash"
                                    />
                                </TouchableWithoutFeedback>
                            </Right>
                        </CardItem> */}
                        <View style={styles.homeTextJudulTech}>
                            <Text>dibuat pada tanggal//belum</Text>
                        </View>
                        <View style={styles.homeTextJudulTech}>
                            <Text>{item.masalah}</Text>
                        </View>
                        <View style={styles.homeTextJudulTech}>
                            <Text>Untuk tanggal bulan dan waktu/ sepnajang hari</Text>
                        </View>
                        <View style={styles.homeTextJudulTech}>
                            <Text>{item.lokasi}</Text>
                        </View>
                        <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, }}>
                        </View>
                        <TouchableOpacity>
                            <CardItem>
                                <View style={styles.homeImageTech} >
                                    <Button
                                        onPress={() => navigate('Category')}>
                                        <Icon
                                            name="plus"
                                            style={styles.buttonIcon}
                                        />
                                    </Button>
                                </View>

                                <Text style={styles.homeNamaCust}>{item.nama_cust}</Text>

                                <View style={styles.homeNamaCust}>
                                    <TouchableWithoutFeedback
                                        onPress={() => navigate('MenuAddTickets', { data: item, refresh: this._onRefresh })}>
                                        <Text>Tambahkan Ke Order Sekarang</Text>
                                    </TouchableWithoutFeedback>
                                </View>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                </View>
            </TouchableOpacity >
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
    _renderDataTickets() {
        const { data_menu, loading, loader } = this.state;
        const { user_role } = this.props;
        return (
            <Container>
                <Content>
                    <Loader loading={loader} />
                    <LoadingData loading={loading} style={styles.loading} />
                    <FlatList
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refresh}
                                onRefresh={this._onRefresh}
                            />
                        }
                        data={data_menu}
                        renderItem={this._renderDataMenu.bind(this)}
                        keyExtractor={(item) => item.id_menu}
                        bounceFirstRowOnMount={(user_role === "admin") ? true : false}
                        maxSwipeDistance={(user_role === "admin") ? responsiveWidth(40) : 0}
                        renderQuickActions={this._renderQuickActions.bind(this)}
                    />
                    {this._renderEmptyData()}
                </Content>
            </Container>
        );
    }
    render() {
        const { navigate } = this.props.navigation;
        const lefttabContent = (
            <View>
                <Swiper
                    height={175}
                    dot={
                        <View style={{ backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                    activeDot={
                        <View style={{ backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                    paginationStyle={{ bottom: 0 }}
                    //loop 
                    autoplay>
                    <TouchableWithoutFeedback onPress={() => navigate('acoordion', { image: slide1, name: 'Promo Merah' })}>
                        <View>
                            <Image source={slide1} style={{ height: 175, width, }} />
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigate('acoordion', { image: slide2, name: 'Promo Biru' })}>
                        <View>
                            <Image source={slide2} style={{ height: 175, width }} />
                        </View>
                    </TouchableWithoutFeedback>
                </Swiper>
                {this._renderDataTickets()}
            </View>
        );
        const righttabContent = (
            <View>
                <Swiper
                    height={175}
                    dot={
                        <View style={{ backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                    activeDot={
                        <View style={{ backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                    paginationStyle={{ bottom: 0 }}
                    //loop 
                    autoplay>
                    <TouchableWithoutFeedback onPress={() => navigate('MenuOrderTickets', { image: slide1, name: 'Promo Merah' })}>
                        <View>
                            <Image source={slide1} style={{ height: 175, width, }} />
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigate('MenuOrderTickets', { image: slide2, name: 'Promo Biru' })}>
                        <View>
                            <Image source={slide2} style={{ height: 175, width }} />
                        </View>
                    </TouchableWithoutFeedback>
                </Swiper>

                <Text>Haii Bang Dull
                </Text>
            </View>
        );
        const tabY = Animated.add(this.scroll, this.headerY);
        return (
            <View>
                {Platform.OS === "ios" &&
                    <View
                        style={{ backgroundColor: COLOR, height: 20, width: "100%", position: "absolute", zIndex: 2 }}
                    />
                }
                <Animated.View style={{
                    width: "100%",
                    position: "absolute",
                    transform: [{
                        translateY: this.headerY
                    }],
                    elevation: 0,
                    flex: 1,
                    zIndex: 1,
                    backgroundColor: COLOR
                }}>
                    <Header style={{ backgroundColor: "transparent" }} hasTabs>
                        <StatusBar barStyle="light-content" backgroundColor='#3980fb' />
                        <Left>
                            <Button transparent>
                                <Icon name='image' />
                            </Button>
                        </Left>
                        <Body>
                        </Body>
                        <Right>
                            <Button transparent
                                onPress={() => navigate('ProfileTechnisi')}>
                                <Icon
                                    name='user' />
                            </Button>
                        </Right>
                    </Header>
                </Animated.View>
                <Animated.ScrollView
                    scrollEventThrottle={1}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    style={{ zIndex: 0, height: "100%", elevation: -1 }}
                    contentContainerStyle={{ paddingTop: NAVBAR_HEIGHT }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.scroll } } }],
                        { useNativeDriver: true },
                    )}
                    overScrollMode="never">
                    <Tabs renderTabBar={(props) => <Animated.View
                        style={[{
                            transform: [{ translateY: tabY }],
                            zIndex: 1,
                            width: "100%",
                            backgroundColor: COLOR
                        }, Platform.OS === "ios" ? { paddingTop: 20 } : null]}>
                        <ScrollableTab {...props} underlineStyle={{ backgroundColor: "white" }} />
                    </Animated.View>
                    }>
                        <Tab heading="PERMINTAAN" {...TAB_PROPS}>
                            {lefttabContent}
                        </Tab>
                        <Tab heading="SEKARANG" {...TAB_PROPS}>
                            {righttabContent}
                        </Tab>
                    </Tabs>
                </Animated.ScrollView>
            </View >
        );
    }
}


export default HomeTechnisiScreen;