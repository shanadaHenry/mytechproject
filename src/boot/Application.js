import React, { Component } from "react";
import { StyleProvider } from "native-base";
import { AsyncStorage, View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { Stack, Login } from "../Navigation";
import { login, logout } from '../redux/actions/auth';
import getTheme from "../theme/components";
import variables from "../theme/variables/platform";

class Application extends Component {
    constructor(props){
        super(props);
        this._getData();
    }

    _getData() {
        AsyncStorage.getItem('user', (error, result) => {
            if (result != 0 & result !=null) {
                var parsed_result = JSON.parse(result);
                var user_role = parsed_result.status;
                this.props.onLogin(user_role);
            } else {
                this.props.onLogout()
            }
        });
    }
    
    render() {
        if (this.props.isLoggedIn) {
            return(
                <StyleProvider style={getTheme(variables)}>
                    <Stack/>
                </StyleProvider>
                );
        } else {
        if(this.props.isRenderLogin){
            return (
                <StyleProvider style={getTheme(variables)}>
                    <Login/>
                </StyleProvider>
                );
            } else {
                return(
                    <View style={styles.container}>
                        <View style={styles.view_indicator}>
                            <ActivityIndicator style={styles.indicator}/>
                        </View>
                        <View style={styles.view_text}>
                            <Text style={styles.text}>Mengecek data login...</Text>
                        </View>
                    </View>
                );
            }
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
        isRenderLogin: state.auth.isRenderLogin,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (user_role) => { dispatch(login(user_role)); },
        onLogout: () => { dispatch(logout()); },
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view_indicator: {
        marginBottom: 20,
    },
    indicator: {
        fontSize: 100,
        color: '#73E859',
    },
    view_text: {
        padding: 10
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#7F7F7F'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Application);

