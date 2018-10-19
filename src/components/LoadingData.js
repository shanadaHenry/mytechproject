import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator, Text, Dimensions } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const { height } = Dimensions.get('window');

const LoadingData = props => {
    const { loading } = props;

    if(loading){
        return (
            <View style={styles.loading_data}>
                <View style={styles.loading_indicator}>
                    <ActivityIndicator size='large' color='#73E859'/>
                </View>
                <View>
                    <Text style={styles.loading_text}>Mohon tunggu...</Text>
                </View>
            </View>
        )
    } else {
        return (
            null
        )
    }
}

const styles = StyleSheet.create({
    loading_data: {
        //marginTop: height/2,
        flex: 1,
        justifyContent: 'center',
    },
    loading_indicator: {
        alignItems: 'center'
    },
    loading_text: {
        textAlign: 'center',
        fontSize: responsiveFontSize(1.8)
    }
});

export default LoadingData;