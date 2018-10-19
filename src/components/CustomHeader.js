import React from "react";
import { Header } from "react-navigation";
import { View, Platform, StatusBar } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styles from '../screen/Style';

export const CustomHeader = props => {
    const statusBarAndroid =
        <StatusBar
            backgroundColor="#3980fb"
            barStyle="light-content"
        />;
    const statusBarIos = null;
    const statusBar = Platform.select({
        android: statusBarAndroid,
        ios: statusBarIos
    });
    return (
        <View>
            {statusBar}
            <LinearGradient colors={['#508ffb', '#508ffb']}
                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }} >
                <View style={styles.default_header}>
                    <Header {...props} />
                </View>
                {/* <LinearGradient
                    colors={['#508ffb', '#508ffb', '#508ffb']}
                    start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                    style={styles.default_line_header} >
                </LinearGradient> */}
            </LinearGradient>
        </View>
    );
};

export const CustomHeaderHome = props => {
    const statusBarAndroid =
        <StatusBar
            backgroundColor="#EAEAEA"
            barStyle="light-content"
        />;
    const statusBarIos = null;
    const statusBar = Platform.select({
        android: statusBarAndroid,
        ios: statusBarIos
    });
    return (
        <View>
            {statusBar}
            <View style={styles.default_header}>
                <Header {...props} />
            </View>
            <LinearGradient
                colors={['#EAEAEA', '#FFFFFF', '#EAEAEA']}
                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                style={styles.default_line_header} >
            </LinearGradient>
        </View>
    );
};

export const CustomProfile = props => {
    const statusBarAndroid =
        <StatusBar
            backgroundColor="#EAEAEA"
            barStyle="light-content"
        />;
    const statusBarIos = null;
    const statusBar = Platform.select({
        android: statusBarAndroid,
        ios: statusBarIos
    });
    return (
        <View>
            {statusBar}
            <View style={styles.default_header}>
                <Header {...props} />
            </View>
            <LinearGradient
                colors={['#EAEAEA', '#FFFFFF', '#EAEAEA']}
                start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                style={styles.default_line_header} >
            </LinearGradient>
        </View>
    );
};