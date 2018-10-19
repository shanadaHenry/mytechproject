import React, { Component } from "react";
import { StatusBar, ScrollView, Alert, View, Text, Image, KeyboardAvoidingView, Picker, DatePickerAndroid, TouchableOpacity } from "react-native";
import { Container, Header, Button, Left, Icon, Body, Title, Content, Form, Item, Label, ListItem, List, Right, Grid, Col, Row } from 'native-base';
import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';
// import DatePicker from 'react-native-modal-datetime-picker';
// import TimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
// import { CheckBox } from 'react-native-elements';
import styles from './styles';
class EditProfile extends Component {
  

  constructor(props) {
    super(props);

    this.state = {
      textField_nama_cust: '',
      textField_tahun_lahir: '',
      textField_telp_cust: '',
      textField_home_address: '',
      textField_home_no: '',
      textField_office_address: '',
      textField_office_no: '',
    };
    //console.log('');
  }
  InsertCustomers = () => {
    fetch('http://192.168.0.210/advanced/backend/web/api/customers/create-customers', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nama_cust: this.state.textField_nama_cust,
        tahun_lahir: this.state.textField_tahun_lahir,
        telp_cust: this.state.textField_telp_cust,
        home_address: this.state.textField_home_address,
        home_no: this.state.textField_home_no,
        office_address: this.state.textField_office_address,
        office_no: this.state.textField_office_no,

      })

    }).then((response) => response.json())
      .then((responseJson) => {

        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);

      }).catch((error) => {
        console.error(error);
      });

  }
  render() {
    const { navigate } = this.props.navigation;
    return (

      <Container>
        <Header style={styles.header}>
          <StatusBar barStyle="light-content" backgroundColor='#3980fb' />
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Lengkapi Profilmu</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.screen}>
            <View style={styles.container}>
              <KeyboardAvoidingView behavior='padding'>

                <Content style={{ margin: 0, marginLeft: 0 }}>
                  <Grid>
                    <Col
                      style={{ width: 110 }}>
                      <Image
                        source={require('../assets/drawer-cover.png')}
                        style={{ width: 100, height: 100, borderRadius: 50, marginTop: 20 }}
                      />
                    </Col>
                    <Col style={{ borderWidth: 1, borderColor: '#000' }}>
                      <ListItem
                        underline='false'
                        style={styles.contentIcon}>
                        <Body style={{ marginLeft: 10, marginBottom: 15 }}>
                          <TouchableOpacity style={styles.textfield}>
                            <TextField
                              label='Nama'
                              onChangeText={TextInputValue => this.setState({ textField_nama_cust: TextInputValue })}
                            />
                          </TouchableOpacity>
                        </Body>
                      </ListItem>
                    </Col>
                  </Grid>
                </Content>

                <Content style={{ margin: 0, marginLeft: 0 }}>

                  <ListItem icon style={styles.contentIcon}>
                    <Icon name="plane" style={styles.itemIcon} /><Body>
                      <TouchableOpacity style={styles.textfield}>
                        <TextField
                          ref={'tahun_lahir'}
                          label='Tahun Kelahiran'
                          //value={tahun_lahir}
                          onChangeText={TextInputValue => this.setState({ textField_tahun_lahir: TextInputValue })}
                          returnKeyType={'next'}
                          keyboardType={'phone-pad'}
                          onSubmitEditing={() => this.refs.telp_cust.focus()}
                        //onChangeText={this.handleTahun_lahir}
                        />
                      </TouchableOpacity>
                    </Body>
                  </ListItem>

                  <ListItem icon style={styles.contentIcon}>
                    <Icon name="plane" style={styles.itemIcon} /><Body>
                      <TouchableOpacity style={styles.textfield}>
                        <TextField
                          ref={'telp_cust'}
                          label='Nomor Telepon'
                          //value={telp_cust}
                          onChangeText={TextInputValue => this.setState({ textField_telp_cust: TextInputValue })}
                          returnKeyType={'next'}
                          keyboardType={'phone-pad'}
                          onSubmitEditing={() => this.refs.home_address.focus()}
                        //onChangeText={this.handleNo_telp}
                        />
                      </TouchableOpacity>
                    </Body>
                  </ListItem>

                  <ListItem icon style={styles.contentIcon}>
                    <Icon name="plane" style={styles.itemIcon} /><Body>
                      <TouchableOpacity style={styles.textfield}>
                        <TextField
                          ref={'home_address'}
                          label='Alamat Rumah'
                          //value={home_address}
                          onChangeText={TextInputValue => this.setState({ textField_home_address: TextInputValue })}
                          returnKeyType={'next'}
                          onSubmitEditing={() => this.refs.home_no.focus()}
                        //onChangeText={this.handleAlamat_rumah}
                        />
                      </TouchableOpacity>
                    </Body>
                  </ListItem>

                  <ListItem icon style={styles.contentIcon}>
                    <Icon name="plane" style={styles.itemIcon} />
                    <Body>
                      <TouchableOpacity style={styles.textfield}>
                        <TextField
                          ref={'home_no'}
                          label='Nomor Rumah/Nomor Apt'
                          // value={home_no}
                          onChangeText={TextInputValue => this.setState({ textField_home_no: TextInputValue })}
                          returnKeyType={'next'}
                          onSubmitEditing={() => this.refs.office_address.focus()}
                        //onChangeText={this.handleNo_rumah}
                        />
                      </TouchableOpacity>
                    </Body>
                  </ListItem>

                  <ListItem icon style={styles.contentIcon}>
                    <Icon name="md-key" style={styles.itemIcon} /><Body>
                      <TouchableOpacity style={styles.textfield}>
                        <TextField
                          ref={'office_address'}
                          label='Alamat Kantor'
                          //value={office_address}
                          onChangeText={TextInputValue => this.setState({ textField_office_address: TextInputValue })}
                          returnKeyType={'next'}
                          onSubmitEditing={() => this.refs.office_no.focus()}
                        //onChangeText={this.handleAlamat_kantor}
                        />
                      </TouchableOpacity>
                    </Body>
                  </ListItem>

                  <ListItem icon style={styles.contentIcon}>
                    <Icon name="md-key" style={styles.itemIcon} /><Body>
                      <TouchableOpacity style={styles.textfield}>
                        <TextField
                          ref={'office_no'}
                          label='Nomor Ruangan'
                          //value={office_no}
                          onChangeText={TextInputValue => this.setState({ textField_office_address: TextInputValue })}
                        //onChangeText={this.handleNo_ruang}
                        />
                      </TouchableOpacity>
                    </Body>
                  </ListItem>
                  <TouchableOpacity onPress={this.InsertCustomers} >

                    <Text style={styles.TextStyle}> INSERT STUDENT RECORD TO SERVER </Text>

                  </TouchableOpacity>
                </Content>

              </KeyboardAvoidingView>
            </View>

            {/* <TouchableOpacity
                style={styles.submitButton}
                onPress={this.InsertCustomers}>
                <Text style={styles.submitButtonText}> Submit </Text>
              </TouchableOpacity> */}

            {/* <View style={[styles.container, styles.textContainer]}>
              <Text style={textStyle} >{sample}</Text>
            </View> */}

            {/* <Text style={{ color: 'red', fontSize: 20, marginBottom: 10 }}>
              {this.state.chosenDate}
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

            {/* <Text style={{ color: 'red', fontSize: 20, marginTop: 20 }}>
              {this.state.chosenTime}
            </Text> */}

          </View>

        </ScrollView>
      </Container >
    );
  }
}

export default EditProfile;