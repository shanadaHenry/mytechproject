import React, { Component } from 'react';
import { Container, Content,  Text } from 'native-base';
import styles from './Style';

class UserDataScreen extends Component {
    constructor(props) {  
        super(props);   
        this.state =
        {
        }
    }

    render() {
        return (
            <Container>
                <Content padder>   
                    <Text>This screen page</Text>
                </Content>
            </Container>
        );
    }
}


export default UserDataScreen;