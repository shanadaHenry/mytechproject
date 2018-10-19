import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';
import { View, Image, AsyncStorage } from 'react-native';
import { connect, Provider } from 'react-redux';
import { logout } from '../redux/actions/auth';
import styles from './Style';
import { profile_bg } from '../components/ImagePath';

class ProfileScreen extends Component {
    constructor(props) {  
        super(props);   
        this.state =
        {
            data_user : [],
        }
    }

    componentDidMount(){
        this._getData();
    }

    _getData() {
        AsyncStorage.getItem('user', (error, result) => {
            if (result != 0 & result !=null) {
                this.setState({
                    data_user: JSON.parse(result)
                })
            } else {
                null
            }
        });
    }

    _renderLogout(){
        return(
            <View>
                <Button success block onPress={this._logout}>
                    <Text>LOGOUT</Text>
                </Button>
            </View>
        )
    }

    _logout = () => {
        try {
            AsyncStorage.removeItem('user');
            this.props.onLogout()
        } catch (error) {
            console.log("Error resetting data" + error);
        }
    }

    render() {
        const { data_user } = this.state;
        return (
            <Container>
                <Content>
                    <View>
                        <Image source={profile_bg} style={styles.profile_banner_img}/>
                        <View style={styles.profile_overlay}/>
                    </View>
                    <View>
                        <Text>{data_user.username}</Text>
                        <Text>{data_user.nama}</Text>
                        <Text>{data_user.status}</Text>
                    </View>
                    {this._renderLogout()}
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => { dispatch(logout()); }
    }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);