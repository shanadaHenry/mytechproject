import React, { Component } from "react";
import { StatusBar, ScrollView, View, Text, KeyboardAvoidingView, CheckBox, DatePickerAndroid, TouchableOpacity } from "react-native";
import { Container, Header, Button, Left, Icon, Body, Title, Content, Form, Item, Label, ListItem, List, Right, } from 'native-base';
import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-modal-datetime-picker';
import TimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
// import { CheckBox } from 'react-native-elements';

import styles from './styles';

const CustomTitle = ({ title }) => (
  <View style={styles.custom_title_view}>
    <Text style={styles.custom_title}>{title}</Text>
  </View>
);
class InputCategory extends Component {

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
        empty_data: false,
        located: '',
        no_rumah: '',
        no_telp: '',
        masalah: '',
        desk_masalah: '',
        trueCheckBoxIsOn: true,
        falseCheckBoxIsOn: false,
        isVisibleDate: false,
        isVisibleTime: false,
        chosenDate: '',
        chosenTime: '',
      }
     
  }
  

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerTitle: <CustomTitle title={params.nama} />
    };
  };

  handleDatePicker = (date) => {
    this.setState({
      isVisibleDate: false,
      chosenDate: moment(date).format('DD MMMM'),
    })
  }

  showDatePicker = () => {
    this.setState({
      isVisibleDate: true
    })
  }

  hideDatePicker = () => {
    this.setState({
      isVisibleDate: false,
    })
  }
  //====================Time==================
  handleTimePicker = (time) => {
    this.setState({
      isVisibleTime: false,
      chosenTime: moment(time).format('HH:mm'),
    })
  }

  showTimePicker = () => {
    this.setState({
      isVisibleTime: true
    })
  }

  hideTimePicker = () => {
    this.setState({
      isVisibleTime: false,
    })
  }

  //=======================//
  handleLocated = (text) => {
    this.setState({ located: text })
  }

  handleNo_rumah = (text) => {
    this.setState({ no_rumah: text })
  }

  handleNo_telp = (text) => {
    this.setState({ no_telp: text })
  }

  handleMasalah = (text) => {
    this.setState({ masalah: text })
  }

  handleDesk_masalah = (text) => {
    this.setState({ desk_masalah: text })
  }

  kirim = (located, no_rumah, no_telp, masalah, desk_masalah) => {
    alert('Located: ' + located + ' No Rumah: ' + no_rumah + 'No Telepon: ' + no_telp + ' Masalah: ' + masalah + 'Deskripsi Masalah' + desk_masalah)
  }

  render() {
    const { navigate } = this.props.navigation;

    let { typography,
      name,
      code,
      sample,
      located,
      no_rumah,
      no_telp,
      masalah,
      desk_masalah, } = this.state;
    const colorNameData = [
      { value: 'Tanggal Kedatangan' },
    ];
    return (
      <Container>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.screen}>
            <View style={styles.container}>
              <KeyboardAvoidingView behavior='padding'>

                <Content style={styles.content}>

                  <ListItem icon style={styles.contentIcon}>
                    <Icon name="plane" style={styles.itemIcon} />
                    <Body>
                      <TouchableOpacity style={styles.textfield}>
                        <TextField
                          label='Lokasi Permintaan Anda'
                          value={located}
                          onChangeText={(located) => this.setState({ located })}
                          returnKeyType={'default'}
                          autocorrect={'false'}
                          onChangeText={this.handleLocated}
                        //controlled={true}
                        />
                      </TouchableOpacity>
                    </Body>
                  </ListItem>

                  <ListItem icon style={styles.contentIcon}>
                    <Icon name="plane" style={styles.itemIcon} /><Body>
                      <TouchableOpacity style={styles.textfield}>
                        <TextField
                          label='Nomor Rumah/Nomor Apt'
                          value={no_rumah}
                          onChangeText={(no_rumah) => this.setState({ no_rumah })}
                          returnKeyType={'next'}
                          onSubmitEditing={() => this.refs.no_telp.focus()}
                          onChangeText={this.handleNo_rumah}

                        />
                      </TouchableOpacity>
                    </Body>
                  </ListItem>
                  <ListItem icon style={styles.contentIcon}>
                    <Icon name="plane" style={styles.itemIcon} /><Body>
                      <TouchableOpacity style={styles.textfield}>
                        <TextField
                          ref={'no_telp'}
                          label='Nomor Telepon'
                          value={no_telp}
                          onChangeText={(no_telp) => this.setState({ no_telp })}
                          returnKeyType={'next'}
                          keyboardType={'phone-pad'}
                          onSubmitEditing={() => this.refs.masalah.focus()}
                          onChangeText={this.handleNo_telp}
                        />
                      </TouchableOpacity>
                    </Body>
                  </ListItem>

                  <TextField
                    ref={'masalah'}
                    label={'Masalah'}
                    value={masalah}
                    onChangeText={(masalah) => this.setState({ masalah })}
                    onChangeText={this.handleMasalah}
                  />

                  <TextField
                    label='Deskripsi Masalah'
                    value={desk_masalah}
                    onChangeText={(desk_masalah) => this.setState({ desk_masalah })}
                    returnKeyType={'done'}
                    onChangeText={this.handleDesk_masalah}


                  />
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                      {/* <Dropdown
                        isVisible={this.state.isVisibleDate}
                        onConfirm={this.handleDatePicker}
                        onCancel={this.hideDatePicker}
                        mode={'date'}
                      // ref={this.nameRef}
                      // value={name}
                      // onChangeText={this.onChangeText}
                      // data={colorNameData}
                      />
                      <Label
                        style={{ justifyContent: 'center', paddingTop: 4, }}>
                        Sepanjang Hari</Label>
                      <CheckBox
                        style={{ marginLeft: 225 }}
                        onValueChange={value => this.setState({ falseCheckBoxIsOn: value })}
                        value={this.state.falseCheckBoxIsOn}
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
                        isVisible={this.state.isVisibleDate}
                        onConfirm={this.handleDatePicker}
                        onCancel={this.hideDatePicker}
                        mode={'date'}
                      //datePickerModeAndroid={'spinner'}
                      //is24Hour={false}
                      />
                      <TouchableOpacity style={styles.button} onPress={this.showTimePicker}>
                        <Text style={styles.text}>Show TimePicker</Text>
                      </TouchableOpacity>
                      <TimePicker
                        isVisible={this.state.isVisibleTime}
                        onConfirm={this.handleTimePicker}
                        onCancel={this.hideTimePicker}
                        mode={'time'}
                        is24Hour={true}
                      //datePickerModeAndroid={'spinner'}
                      /> */}
                      <TouchableOpacity
                        style={styles.submitButton}
                        onPress={
                          () => this.kirim(this.state.located, this.state.no_rumah, this.state.no_telp, this.state.masalah, this.state.desk_masalah)
                        }>
                        <Text style={styles.submitButtonText}> Submit </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Content>

              </KeyboardAvoidingView>
            </View>


          </View>
        </ScrollView>
      </Container >
    );
  }
}

export default InputCategory;


// import React, { Component } from "react";
// import { StatusBar, ScrollView, View, Text, KeyboardAvoidingView, CheckBox, DatePickerAndroid, TouchableOpacity } from "react-native";
// import { Container, Header, Button, Left, Icon, Body, Title, Content, Form, Item, Label, ListItem, List, Right, } from 'native-base';
// import { TextField } from 'react-native-material-textfield';
// import { Dropdown } from 'react-native-material-dropdown';
// import DatePicker from 'react-native-modal-datetime-picker';
// import TimePicker from 'react-native-modal-datetime-picker';
// import moment from 'moment';
// // import { CheckBox } from 'react-native-elements';

// import styles from './styles';

// const CustomTitle = ({ title }) => (
//   <View style={styles.custom_title_view}>
//     <Text style={styles.custom_title}>{title}</Text>
//   </View>
// );
// class InputCategory extends Component {

//   constructor(props) {
//     super(props);
//     const { params } = this.props.navigation.state;
//     this.state =
//       {
//         data_menu: [],
//         id_kategori: params.id,
//         loading: false,
//         loader: false,
//         refresh: false,
//         empty_data: false,

//         located: '',
//         no_rumah: '',
//         no_telp: '',
//         masalah: '',
//         desk_masalah: '',
//         trueCheckBoxIsOn: true,
//         falseCheckBoxIsOn: false,
//         isVisibleDate: false,
//         isVisibleTime: false,
//         chosenDate: '',
//         chosenTime: '',
//       }
     
//   }
  

//   static navigationOptions = ({ navigation }) => {
//     const { params = {} } = navigation.state;
//     return {
//       headerTitle: <CustomTitle title={params.nama} />
//     };
//   };

//   handleDatePicker = (date) => {
//     this.setState({
//       isVisibleDate: false,
//       chosenDate: moment(date).format('DD MMMM'),
//     })
//   }

//   showDatePicker = () => {
//     this.setState({
//       isVisibleDate: true
//     })
//   }

//   hideDatePicker = () => {
//     this.setState({
//       isVisibleDate: false,
//     })
//   }
//   //====================Time==================
//   handleTimePicker = (time) => {
//     this.setState({
//       isVisibleTime: false,
//       chosenTime: moment(time).format('HH:mm'),
//     })
//   }

//   showTimePicker = () => {
//     this.setState({
//       isVisibleTime: true
//     })
//   }

//   hideTimePicker = () => {
//     this.setState({
//       isVisibleTime: false,
//     })
//   }

//   //=======================//
//   handleLocated = (text) => {
//     this.setState({ located: text })
//   }

//   handleNo_rumah = (text) => {
//     this.setState({ no_rumah: text })
//   }

//   handleNo_telp = (text) => {
//     this.setState({ no_telp: text })
//   }

//   handleMasalah = (text) => {
//     this.setState({ masalah: text })
//   }

//   handleDesk_masalah = (text) => {
//     this.setState({ desk_masalah: text })
//   }

//   kirim = (located, no_rumah, no_telp, masalah, desk_masalah) => {
//     alert('Located: ' + located + ' No Rumah: ' + no_rumah + 'No Telepon: ' + no_telp + ' Masalah: ' + masalah + 'Deskripsi Masalah' + desk_masalah)
//   }

//   render() {
//     const { navigate } = this.props.navigation;

//     let { typography,
//       name,
//       code,
//       sample,
//       located,
//       no_rumah,
//       no_telp,
//       masalah,
//       desk_masalah, } = this.state;
//     const colorNameData = [
//       { value: 'Tanggal Kedatangan' },
//     ];
//     return (
//       <Container>
//         <ScrollView style={styles.scrollContainer}>
//           <View style={styles.screen}>
//             <View style={styles.container}>
//               <KeyboardAvoidingView behavior='padding'>

//                 <Content style={styles.content}>

//                   <ListItem icon style={styles.contentIcon}>
//                     <Icon name="plane" style={styles.itemIcon} />
//                     <Body>
//                       <TouchableOpacity style={styles.textfield}>
//                         <TextField
//                           label='Lokasi Permintaan Anda'
//                           value={located}
//                           onChangeText={(located) => this.setState({ located })}
//                           returnKeyType={'default'}
//                           autocorrect={'false'}
//                           onChangeText={this.handleLocated}
//                         //controlled={true}
//                         />
//                       </TouchableOpacity>
//                     </Body>
//                   </ListItem>

//                   <ListItem icon style={styles.contentIcon}>
//                     <Icon name="plane" style={styles.itemIcon} /><Body>
//                       <TouchableOpacity style={styles.textfield}>
//                         <TextField
//                           label='Nomor Rumah/Nomor Apt'
//                           value={no_rumah}
//                           onChangeText={(no_rumah) => this.setState({ no_rumah })}
//                           returnKeyType={'next'}
//                           onSubmitEditing={() => this.refs.no_telp.focus()}
//                           onChangeText={this.handleNo_rumah}

//                         />
//                       </TouchableOpacity>
//                     </Body>
//                   </ListItem>
//                   <ListItem icon style={styles.contentIcon}>
//                     <Icon name="plane" style={styles.itemIcon} /><Body>
//                       <TouchableOpacity style={styles.textfield}>
//                         <TextField
//                           ref={'no_telp'}
//                           label='Nomor Telepon'
//                           value={no_telp}
//                           onChangeText={(no_telp) => this.setState({ no_telp })}
//                           returnKeyType={'next'}
//                           keyboardType={'phone-pad'}
//                           onSubmitEditing={() => this.refs.masalah.focus()}
//                           onChangeText={this.handleNo_telp}
//                         />
//                       </TouchableOpacity>
//                     </Body>
//                   </ListItem>

//                   <TextField
//                     ref={'masalah'}
//                     label={'Masalah'}
//                     value={masalah}
//                     onChangeText={(masalah) => this.setState({ masalah })}
//                     onChangeText={this.handleMasalah}
//                   />

//                   <TextField
//                     label='Deskripsi Masalah'
//                     value={desk_masalah}
//                     onChangeText={(desk_masalah) => this.setState({ desk_masalah })}
//                     returnKeyType={'done'}
//                     onChangeText={this.handleDesk_masalah}


//                   />
//                   <View style={{ flexDirection: 'row' }}>
//                     <View style={{ flex: 1 }}>
//                       {/* <Dropdown
//                         isVisible={this.state.isVisibleDate}
//                         onConfirm={this.handleDatePicker}
//                         onCancel={this.hideDatePicker}
//                         mode={'date'}
//                       // ref={this.nameRef}
//                       // value={name}
//                       // onChangeText={this.onChangeText}
//                       // data={colorNameData}
//                       />
//                       <Label
//                         style={{ justifyContent: 'center', paddingTop: 4, }}>
//                         Sepanjang Hari</Label>
//                       <CheckBox
//                         style={{ marginLeft: 225 }}
//                         onValueChange={value => this.setState({ falseCheckBoxIsOn: value })}
//                         value={this.state.falseCheckBoxIsOn}
//                       />

//                       <Text style={{ color: 'red', fontSize: 20, marginBottom: 10 }}>
//                         {this.state.chosenDate}
//                       </Text>
//                       <Text style={{ color: 'red', fontSize: 20, marginTop: 20 }}>
//                         {this.state.chosenTime}
//                       </Text>
//                       <TouchableOpacity style={styles.button} onPress={this.showDatePicker}>
//                         <Text style={styles.text}>Show DatePicker</Text>
//                       </TouchableOpacity>

//                       <DatePicker
//                         isVisible={this.state.isVisibleDate}
//                         onConfirm={this.handleDatePicker}
//                         onCancel={this.hideDatePicker}
//                         mode={'date'}
//                       //datePickerModeAndroid={'spinner'}
//                       //is24Hour={false}
//                       />
//                       <TouchableOpacity style={styles.button} onPress={this.showTimePicker}>
//                         <Text style={styles.text}>Show TimePicker</Text>
//                       </TouchableOpacity>
//                       <TimePicker
//                         isVisible={this.state.isVisibleTime}
//                         onConfirm={this.handleTimePicker}
//                         onCancel={this.hideTimePicker}
//                         mode={'time'}
//                         is24Hour={true}
//                       //datePickerModeAndroid={'spinner'}
//                       /> */}
//                       <TouchableOpacity
//                         style={styles.submitButton}
//                         onPress={
//                           () => this.kirim(this.state.located, this.state.no_rumah, this.state.no_telp, this.state.masalah, this.state.desk_masalah)
//                         }>
//                         <Text style={styles.submitButtonText}> Submit </Text>
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                 </Content>

//               </KeyboardAvoidingView>
//             </View>


//           </View>
//         </ScrollView>
//       </Container >
//     );
//   }
// }

// export default InputCategory;
