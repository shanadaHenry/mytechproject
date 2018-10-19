import React, { Component } from 'react';
import { SwipeableFlatList, RefreshControl, StatusBar, StyleSheet, ScrollView, View, Image, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, FlatList, Alert, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Container, Content, Header, List, ListItem, Title, Icon, Text, Button, Right, Left, Body, TabHeading, Card, CardItem, Item, Footer, Grid, Col, FooterTab, width, Thumbnail } from "native-base";
import styles from './Style';
import { connect } from 'react-redux';
import { requestData } from '../API/FunctionApi';
import Loader from '../components/ModalLoading';
import LoadingData from '../components/LoadingData';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import Ripple from 'react-native-material-ripple';
import { profile_bg } from '../components/ImagePath';
//import commonColor from 'native-base-theme';

const CustomTitle = ({ title }) => (
  <View style={styles.custom_title_view}>
    <Text style={styles.custom_title}>{title}</Text>
  </View>
);
class Permohonan extends Component {
  constructor(props) {
    console.warn(props);
    super(props);
    const { params } = this.props.navigation.state;
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

    this.state = {
      detail_menu: params.data,
      id_kategori: 1,
      data_menu: [],
      loading: false,
      loader: false,
      refresh: false,
      empty_data: false,
      textLayoutHeight: 0,
      updatedHeight: 0,
      expand: false,
      buttonText: 'Perincian'
    }
  }
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerTitle: <CustomTitle title={params.data.nama_kategori} />,
    };
  };

  expand_collapse_Function = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    if (this.state.expand == false) {
      this.setState({
        updatedHeight: this.state.textLayoutHeight,
        expand: true,
        buttonText: 'Perincian'
      });
    }
    else {
      this.setState({
        updatedHeight: 0,
        expand: false,
        buttonText: 'Perincian'
      });
    }
  }
  getHeight(height) {
    this.setState({ textLayoutHeight: height });
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
    const request_url = "TECHNISI";
    requestData(headers, body, request_url).then((data) => {
      console.warn(data);
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
            <View style={{ flexdirection: 'row' }}>
              <Content style={{ margin: 0, marginLeft: 0 }}>
                <Grid>
                  <Col
                    style={{ width: 110 }}>
                    <Image
                      source={require('../assets/drawer-cover.png')}
                      style={{ width: 100, height: 100, borderRadius: 50, margin: 10 }}
                    />
                  </Col>
                  <Col style={{ borderWidth: 1, borderColor: '#000' }}>
                    <Text style={styles.ticketsTextJudulPermohonan}>{item.nama_tech}</Text>
                    <Text style={styles.ticketsTextJudulPermohonan}>Pengalaman kerja {item.pengalaman}</Text>
                    <Text style={styles.ticketsTextJudulPermohonan}>Harga Rp. {item.harga}</Text>
                  </Col>
                </Grid>
              </Content>
              <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, }}>
              </View>
            </View>
            <TouchableOpacity>
              <View style={{ padding: 7, alignItems: 'flex-end' }}>
                <Icon
                  name="plus"
                  style={{ marginRight: 15 }}
                />
              </View>
            </TouchableOpacity>
          </Card>

        </View>
        {/* </TouchableOpacity> */}
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
            <Text style={styles.menu_empty_text}>TIDAK ADA TEKNISI SAAT INI</Text>
          </View>
        </View>
      )
    }
  }

  _renderDataTechnisi() {
    const { data_menu, loading, loader } = this.state;
    const { user_role } = this.props;
    return (
      <Container>
        <View style={{ margin: 10 }}>
          <Text>Teknisi yang tersedia</Text>
        </View>
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
            keyExtractor={(item) => item.id_menu}
            bounceFirstRowOnMount={(user_role === "admin") ? true : false}
            maxSwipeDistance={(user_role === "admin") ? responsiveWidth(40) : 0}
          // renderQuickActions={this._renderQuickActions.bind(this)}
          />
          {this._renderEmptyData()}
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
              <View>
                <Text style={styles.textJudul}>Dibuat September, 19</Text>
                <Text style={styles.textJudul}>{detail_menu.masalah}</Text>
                <Text style={styles.textJudul}>Untuk tanggal bulan dan waktu //belum</Text>


              </View>
            </View>

            <View style={styles.ChildView}>
              <TouchableOpacity activeOpacity={0.7}
                onPress={this.expand_collapse_Function}
                style={styles.item}>
                <Text style={styles.TouchableOpacityTitleText}>{this.state.buttonText}</Text>
              </TouchableOpacity>
              <View style={{ height: this.state.updatedHeight, overflow: 'hidden' }}>
                <Text style={styles.ExpandViewInsideText}
                  onLayout={(value) => this.getHeight(value.nativeEvent.layout.height)}>
                  <Text>kategori{('\n')}{detail_menu.nama_kategori}{('\n')}{('\n')}</Text>
                  <Text>Nama Daerah, kota{('\n')}{detail_menu.lokasi}{('\n')}{('\n')}</Text>
                  <Text>Penjelasan masalah anda{('\n')}{detail_menu.desk_masalah}{('\n')}{('\n')}</Text>
                  <Text>Nomor Telepon{('\n')}0898898909</Text>

                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
        {this._renderDataTechnisi()}
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user_role: state.auth.user_role,
  }
}

export default connect(mapStateToProps)(Permohonan);


// import React, { Component } from 'react';
// import { StatusBar, StyleSheet, ScrollView, View, Image, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, FlatList, Alert, LayoutAnimation, Platform, UIManager } from 'react-native';
// import { Container, Content, Header, List, ListItem, Title, Icon, Text, Button, Right, Left, Body, TabHeading, Card, CardItem, Item, Footer, FooterTab, width, Thumbnail } from "native-base";
// import styles from './styles';
// import { connect } from 'react-redux';
// //import commonColor from 'native-base-theme';

// const CustomTitle = ({ title }) => (
//   <View style={styles.custom_title_view}>
//     <Text style={styles.custom_title}>{title}</Text>
//   </View>
// );
// class Permohonan extends Component {
//   constructor(props) {
//     super(props);
//     const { params } = this.props.navigation.state;
//     UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

//     this.state = {
//       detail_menu: params.data,
//       textLayoutHeight: 0,
//       updatedHeight: 0,
//       expand: false,
//       buttonText: 'Perincian'
//     }
//   }
//   static navigationOptions = ({ navigation }) => {
//     const { params = {} } = navigation.state;
//     return {
//       headerTitle: <CustomTitle title={params.data.nama_kategori} />,
//     };
//   };

//   expand_collapse_Function = () => {
//     LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

//     if (this.state.expand == false) {
//       this.setState({
//         updatedHeight: this.state.textLayoutHeight,
//         expand: true,
//         buttonText: 'Perincian'
//       });
//     }
//     else {
//       this.setState({
//         updatedHeight: 0,
//         expand: false,
//         buttonText: 'Perincian'
//       });
//     }
//   }
//   getHeight(height) {
//     this.setState({ textLayoutHeight: height });
//   }
//   _renderButton() {
//     const { navigate } = this.props.navigation;
//     if (this.props.user_role === "user") {
//       return (
//         <View>
//           <Button block rounded success>
//             <Text>Pesan</Text>
//           </Button>
//         </View>
//       )
//     } else {
//       return (
//         null
//       )
//     }
//   }
//   render() {
//     const { detail_menu } = this.state;
//     return (
//       <Container style={styles.ContentContainer}>
//         <View >
//           <ScrollView>
//             <View style={styles.item}>
//               <View>
//                 <Text style={styles.textJudul}>Dibuat September, 19</Text>
//                 <Text style={styles.textJudul}>{detail_menu.masalah}</Text>
//                 <Text style={styles.textJudul}>Untuk tanggal bulan dan waktu</Text>


//               </View>
//             </View>

//             <View style={styles.ChildView}>
//               <TouchableOpacity activeOpacity={0.7}
//                 onPress={this.expand_collapse_Function}
//                 style={styles.item}>
//                 <Text style={styles.TouchableOpacityTitleText}>{this.state.buttonText}</Text>
//               </TouchableOpacity>
//               <View style={{ height: this.state.updatedHeight, overflow: 'hidden' }}>
//                 <Text style={styles.ExpandViewInsideText}
//                   onLayout={(value) => this.getHeight(value.nativeEvent.layout.height)}>
//                   <Text>kategori{('\n')}{detail_menu.nama_kategori}{('\n')}{('\n')}</Text>
//                   <Text>Nama Daerah, kota{('\n')}{detail_menu.lokasi}{('\n')}{('\n')}</Text>
//                   <Text>Penjelasan masalah anda{('\n')}{detail_menu.desk_masalah}{('\n')}{('\n')}</Text>
//                   <Text>Nomor Telepon{('\n')}0898898909</Text>

//                 </Text>
//               </View>
//             </View>
//           </ScrollView>
//         </View>

//         <Content padder>
//           <TouchableOpacity style={{ margin: 5 }} onPress={() => navigate('Permohonan')}>
//             <Card>
//               <CardItem borderer>
//                 <Image
//                   source={require('../assets/drawer-cover.png')}
//                   style={{ width: 50, height: 50, borderRadius: 25, borderWidth: 1, }} />
//                 <Text>Di buat Agustus 10</Text>
//               </CardItem>
//               <CardItem footer bordered>
//                 <Left />
//                 <Body />
//                 <Right style={styles.textChat}>
//                   <Button style={{ backgroundColor: "#007AFF" }}>
//                     <Icon active name="wifi" />
//                   </Button>
//                 </Right>
//               </CardItem>
//             </Card>
//           </TouchableOpacity>
//         </Content>
//       </Container>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     user_role: state.auth.user_role,
//   }
// }

// export default connect(mapStateToProps)(Permohonan);

