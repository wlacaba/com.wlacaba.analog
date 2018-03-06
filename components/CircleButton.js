/*
NAME
    CircleButton

PURPOSE
    Circular button, similar to Android's Floating Action Button, but not floating.

PROPS
    label: Text to be put in the <Text> component
    onPress: Function to be called when button is pressed. Same as other onPress.
    style: Additional style outside of basic CircleButton style.
*/

import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export class CircleButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            myStyle: this.props.style ? [styles.button, this.props.style] : styles.button
        }
    }

    render() {
        return (
        <TouchableOpacity style={this.state.myStyle} onPress={this.props.onPress}>
            <Text style={styles.buttonText}>
            {this.props.label ? this.props.label : "NULL"}
            </Text>
        </TouchableOpacity>);
    }
}

const styles = StyleSheet.create({
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 12,
        borderRadius: 50
    },
    
    button: {
        overflow: 'hidden', //Prevents text rectangle from getting out of circle
        backgroundColor: '#09aa9a',
        justifyContent: 'center',
        height: 80,
        width: 80,
        borderRadius: 50
    }
})