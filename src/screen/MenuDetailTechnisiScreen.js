
import React, { Component } from 'react';
import { Container, Header, Button, Left, Icon, Body, Title, Content, Form, Item, Label, ListItem, List, Right, Grid, Col, Row } from 'native-base';
import { StatusBar, FlatList, RefreshControl, ScrollView, Alert, View, Text, Image, KeyboardAvoidingView, Picker, DatePickerAndroid, TouchableOpacity } from "react-native";
import { TextField } from 'react-native-material-textfield';
import { connect } from 'react-redux';
import Loader from '../components/ModalLoading';
import LoadingData from '../components/LoadingData';
import styles from './Style';
import { responsiveWidth } from 'react-native-responsive-dimensions';

const CustomTitle = ({ title }) => (
    <View style={styles.custom_title_view}>
        <Text style={styles.custom_title}>{title}</Text>
    </View>
);

class MenuDetailTicketsScreen extends Component {
    constructor(props) {
        console.warn(props);
        super(props);
        const { params } = this.props.navigation.state;
        this.state =
            {
                detail_menu: params.data,
            }
    }

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            headerTitle: <CustomTitle title={params.data.no_rumah} />,
        };
    };

    _renderButton() {
        const { navigate } = this.props.navigation;
        if (this.props.user_role === "user") {
            return (
                <View>
                    <Button block rounded success>
                        <Text>Pesan</Text>
                    </Button>
                </View>
            )
        } else {
            return (
                null
            )
        }
    }
    _renderEmptyData = () => {
        if (this.state.empty_data) {
            return (
                <View style={styles.menu_empty_view}>
                    <View style={styles.menu_empty_ic_view}>
                        <Icon name='folder-open-o' style={styles.menu_empty_icon} />
                    </View>
                    <View style={styles.menu_empty_txt_view}>
                        <Text style={styles.menu_empty_text}>TIDAK ADA TEKNISI SAAT INI</Text>
                    </View>
                </View>
            )
        }
    }
    _renderDataUlasan() {
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
                        //renderItem={this._renderDataMenu.bind(this)}
                        keyExtractor={(item) => item.id_menu}
                        bounceFirstRowOnMount={(user_role === "admin") ? true : false}
                        maxSwipeDistance={(user_role === "admin") ? responsiveWidth(40) : 0}
                     
                    />
                    {this._renderEmptyData()}
                </Content>
            </Container>
        );
    }

    render() {
        const { detail_menu } = this.state;
        return (
            <Container>
                <Content padder>
                    <Content style={{ margin: 0, marginLeft: 0 }}>
                        <Grid>
                            <Col
                                style={{ width: 110 }}>
                                <Image
                                    source={require('../assets/drawer-cover.png')}
                                    style={{ width: 100, height: 100, borderRadius: 50, marginTop: 5 }}
                                />
                            </Col>
                            <Col style={{ borderWidth: 1, borderColor: '#000' }}>
                                <Text style={styles.detailTechTextJudulPermohonan}>{detail_menu.nama_tech}</Text>
                                <Text style={styles.detailTechTextJudulPermohonan}>Pengalaman kerja {detail_menu.pengalaman}</Text>
                                <Text style={styles.detailTechTextJudulPermohonan}>Umur //belum</Text>
                            </Col>
                        </Grid>
                        <View>
                            <Text style={styles.detailTechTextJudulPermohonan}>Jumlah Pekerjaan Yang Selesai // belum</Text>
                            <Text style={styles.detailTechTextJudulPermohonan}>{detail_menu.harga}  per jam</Text>
                            <View style={{ marginTop: 10 }}>
                                <Text style={styles.detailTechTextJudulPermohonan}>Tentang Saya</Text>
                                <Text style={styles.detailTechTextJudulPermohonan}>{detail_menu.desk_tech}</Text>
                            </View>
                        </View>
                        {this._renderButton()}


                    </Content>
                </Content>
                {this._renderDataUlasan()}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user_role: state.auth.user_role,
    }
}

export default connect(mapStateToProps)(MenuDetailTicketsScreen);