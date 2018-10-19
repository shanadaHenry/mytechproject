
import React, { Component } from 'react';
import { Container, Content,  Text, Button, Icon } from 'native-base';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styles from './Style';

const CustomTitle = ({ title }) => (
    <View style={styles.custom_title_view}>
        <Text style={styles.custom_title}>{title}</Text>
    </View>
);

class MenuDetailScreen extends Component {
    constructor(props) {  
        super(props);  
        const {params} = this.props.navigation.state;
        this.state =
        {
            detail_menu: params.data,
        }
    }

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        return {
            headerTitle: <CustomTitle title={params.data.nama}/>,
        };
    };

    _renderButton(){
        const {navigate} = this.props.navigation;
        if(this.props.user_role === "user"){
            return (
                <View>
                    <Button block rounded success>
                        <Text>Pesan</Text>
                    </Button>
                </View>
            )
        } else {
            return (
                null
            ) 
        }
    }

    render() {
        const {detail_menu} = this.state;
        return (
            <Container>
                <Content padder>   
                    <View>
                        <Text>{detail_menu.nama}</Text>
                        <Text>{detail_menu.id_kategori}</Text>
                    </View>
                    {this._renderButton()}
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user_role: state.auth.user_role,
    }
}

export default connect(mapStateToProps)(MenuDetailScreen);