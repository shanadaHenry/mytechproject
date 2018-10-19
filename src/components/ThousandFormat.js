import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class ThousandFormatter extends Component {

    static propTypes = {
        numberValue: PropTypes.string.isRequired,
        numberStyles: PropTypes.oneOfType([
          PropTypes.array,
          PropTypes.number,
          PropTypes.shape({}),
        ]),
        kursValue: PropTypes.string,
        kursStyles: PropTypes.oneOfType([
          PropTypes.array,
          PropTypes.number,
          PropTypes.shape({}),
        ]),
    }

    ThousandFormat(input) {
        var output = input
        if (parseFloat(input)) {
            input = new String(input); 
            var parts = input.split("."); 
            parts[0] = parts[0].split("").reverse().join("").replace(/(\d{3})(?!$)/g, "$1.").split("").reverse().join("");
            output = parts.join(".");
        }
        return (output);
    }

    render = () => {
        const { numberStyles, numberValue, kursValue, kursStyles } = this.props;
        const number = this.ThousandFormat(numberValue);
        
        return (
            <View style={styles.container}>
                <Text style={kursStyles}>{kursValue}</Text>
                <Text style={numberStyles}>{number}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row'
    }
})

export default ThousandFormatter;