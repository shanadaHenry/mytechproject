import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import Modal from 'react-native-modal';
import { responsiveFontSize, responsiveWidth } from '../../node_modules/react-native-responsive-dimensions';

const Loader = props => {
  const { loading } = props;

  return (
    <Modal isVisible={loading} style={{flex:1, alignItems: 'center'}}>
        <View style={styles.modal}>
            <View style={styles.modal_row}>
                <View style={styles.modal_indicator}>
                    <ActivityIndicator size='small'/>
                </View>
                <View>
                    <Text style={styles.modal_text}>
                        Proses... Mohon tunggu
                    </Text>
                </View>
            </View>
        </View>
    </Modal> 
  )
}

const styles = StyleSheet.create({
    modal : {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 20,
        width: responsiveWidth(70),
    },
    modal_row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    modal_indicator: {
        marginRight: 10
    },
    modal_text: {
        fontSize: responsiveFontSize(1.8)
    }
});

export default Loader;