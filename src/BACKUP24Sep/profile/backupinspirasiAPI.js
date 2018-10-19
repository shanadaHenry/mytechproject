import React, { Component } from 'react';

import { StyleSheet, ActivityIndicator, ListView, Text, View, Alert, RefreshControl } from 'react-native';

export default class Project extends Component {

    constructor(props) {

        super(props);

        this.state = {

            isLoading: true,

            refreshing: false

        }

        this.webCall();

    }

    GetItem(fruit_name) {

        Alert.alert(fruit_name);

    }


    webCall = () => {

        return fetch('https://reactnativecode.000webhostapp.com/FruitsList.php')
            .then(
                (response) => response.json()
            )
            .then(
                (responseJson) => {
                    let ds = new ListView.DataSource(
                        { rowHasChanged: (r1, r2) => r1 !== r2 }
                    );
                    this.setState(
                        {
                            isLoading: false,
                            dataSource: ds.cloneWithRows(responseJson),
                        }, function () {
                            // In this block you can do something with new state.
                        });
                })
            .catch(
                (error) => {
                    console.error(error);
                }
            );
    }

    ListViewItemSeparator = () => {
        return (
            <View
                style={{
                    height: .5,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    }

    onRefresh() {

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.setState({ dataSource: ds.cloneWithRows([]) })

        this.webCall();

    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (

            <View style={styles.MainContainer}>

                <ListView

                    dataSource={this.state.dataSource}

                    renderSeparator={this.ListViewItemSeparator}

                    enableEmptySections={true}

                    renderRow={(rowData) => <Text style={styles.rowViewContainer}
                        onPress={this.GetItem.bind(this, rowData.fruit_name)} >{rowData.fruit_name}</Text>}

                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh.bind(this)}
                        />
                    }

                />

            </View>
        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        margin: 10

    },

    rowViewContainer: {
        fontSize: 20,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    }

});