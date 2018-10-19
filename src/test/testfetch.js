import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator, TouchableHighlight, Alert } from "react-native";
import { Container, Item, Input, Header, Left, Button, Body, Icon, Title, Right, ListItem, List, Thumbnail } from 'native-base';
import styles from './styles';

class TestFetch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
        };
    }

    componentDidMount() {
        this.setState({ flag: true });
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const { page, seed } = this.state;
        const url = 'http://192.168.0.210/advanced/backend/web/api/customers/list-customers';
        this.setState({ loading: true });

        setTimeout(() => {
            fetch(url)
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        data: page === 1 ? res.data : [...this.state.data, ...res.data],
                        error: res.error || null,
                        loading: false,
                        refreshing: false,
                    });

                })
                .catch(error => {
                    this.setState({ error, loading: false });
                });
        }, 1500);
    };

    handleRefresh = () => {
        this.setState(
            {
                page: 1,
                seed: this.state.seed + 1,
                refreshing: true
            },
            () => {
                this.makeRemoteRequest();
            }
        );
    };


    renderFooter = () => {
        if (!this.state.loading) return null;
        return (
            <View
                style={{
                    paddingVertical: 10,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}
            >
                <ActivityIndicator animating size="small" />
            </View>
        );
    };

    _renderQuickActions = function ({ item }: Object): ?React.Element<any> {
        return (
            <View style={styles.eventlist_actionContainer}>
            </View>
        );
    };

    _renderItem = function ({ item }): ?React.Element<any> {
        const { navigate } = this.props.navigation;
        return (
            <ListItem avatar onPress={() => navigate('EventDetail', '${item.nama_cust}')}
                style={styles.eventlist_row} >
                <Body style={styles.eventlist_rowData}>
                    <Text>{item.nama_cust}</Text>
                    <Text>{item.tahun_lahir}</Text>
                    <Text>{item.email_cust}</Text>
                </Body>
            </ListItem>
        )
    };

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Data Customers</Title>
                    </Body>
                    <Right />
                </Header>
                <FlatList
                    data={this.state.data}
                    bounceFirstRowOnMount={true}
                    maxSwipeDistance={160}
                    renderItem={this._renderItem.bind(this)}
                    renderQuickActions={this._renderQuickActions.bind(this)}
                    keyExtractor={item => item.nama_cust}
                    ListFooterComponent={this.renderFooter}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                />
            </Container>
        );
    }
}

export default TestFetch;