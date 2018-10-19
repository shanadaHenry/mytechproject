import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, TextInput, View, Alert, Button } from 'react-native';
 
class SignUpTechTest extends Component {
 
constructor(props) {
 
    super(props)
 
    this.state = {
 
      TextInputName: '',
      TextInputEmail: '',
      TextInputTelp_Tech: ''
 
    }
 
  }
 
  InsertDataToServer = () =>{

 
 const { TextInputName }  = this.state ;
 const { TextInputEmail }  = this.state ;
 const { TextInputTelp_Tech }  = this.state ;

 

fetch('http://192.168.0.210/advanced/backend/web/api/technisi/signup-technisi', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({

    nama_tech: TextInputName,

    email: TextInputEmail,

    telp_tech: TextInputTelp_Tech

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
    return (
 
<View style={styles.MainContainer}>
  
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Name"
 
          onChangeText={TextInputName => this.setState({TextInputName})}

          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />

        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Email"
 
          onChangeText={TextInputEmail => this.setState({TextInputEmail})}

          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />

        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Phone Number"
 
          onChangeText={TextInputTelp_Tech => this.setState({TextInputTelp_Tech})}

          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
 
        <Button title="Insert Text Input Data to Server" onPress={this.InsertDataToServer} color="#2196F3" />
      
  
 
</View>
            
    );
  }
}
export default SignUpTechTest;
 
const styles = StyleSheet.create({
 
MainContainer :{
 
justifyContent: 'center',
flex:1,
margin: 10
},

TextInputStyleClass: {

textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
// Set border Hex Color Code Here.
 borderColor: '#FF5722',
 
// Set border Radius.
 //borderRadius: 10 ,
}
 
});
 