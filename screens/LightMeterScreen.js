/*
NAME
    LightMeterScreen

PURPOSE
    Screen for calculating the exposure settings. Will replace 
    <Text> in the right column with actual inputs later. 

NOTES
    The states {isoResult, apertureResult, speedResult} are used to act like
    radio buttons, meaning, only one can be true at any given time.

    Example: When isoResult is true, we will be using Aperture and Speed
    as inputs in order to calculate ISO. The corresponding input for ISO is
    disabled, since this is what we're calculating, not choosing.
*/

import React from 'react';
import { StyleSheet, Text, View, StatusBar, Slider, Platform, TouchableOpacity } from 'react-native';
import { CircleButton } from '../components/CircleButton';

export class LightMeterScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isoResult: false,
            apertureResult: false,
            speedResult: false
        }
    }

    changeTextState = (selected) => {
        if (selected === 0) {
            console.log("ISO");
            this.setState({isoResult: true, apertureResult: false, speedResult: false});
        }
        else if (selected === 1) {
            console.log("APERTURE");
            this.setState({isoResult: false, apertureResult: true, speedResult: false});
        }
        else {
            console.log("SPEED");
            this.setState({isoResult: false, apertureResult: false, speedResult: true});
        }
    }

    render() {
        return (
            <View style={styles.standardView}>
                <StatusBar barStyle='dark-content'/>

                <View style={styles.labelsColumn}>
                    <View style={{flex: 5}}></View>
                    <Text style={styles.leftText}>LUX</Text>
                    <Text 
                        style={[styles.leftText, this.state.isoResult && styles.leftTextActivated]} 
                        onPress={() => this.changeTextState(0)}>
                        ISO
                    </Text>
                    <Text 
                        style={[styles.leftText, this.state.apertureResult && styles.leftTextActivated]} 
                        onPress={() => this.changeTextState(1)}>
                        Aperture
                    </Text>
                    <Text 
                        style={[styles.leftText, this.state.speedResult && styles.leftTextActivated]} 
                        onPress={() => this.changeTextState(2)}>
                        Speed (mm)
                    </Text>
                    <View style={{flex: 5}}></View>
                </View>

                <View style={styles.resultsColumn}>
                    <View style={{flex: 5}}></View>
                    <Text style={styles.rightText}>500</Text>
                    <Text style={styles.rightText}>3200</Text>
                    <Text style={styles.rightText}>f/1.8</Text>
                    <Text style={styles.rightText}>1/500s</Text>
                    <View style={{flex: 5}}>
                        <CircleButton 
                            style={styles.bottomRightButton} 
                            label="RESULT"/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    standardView: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ffffff'
    },

    leftText: {
        flex: 1,
        color: '#ffffff',
        paddingRight: '4%',
        textAlign: 'right',
        fontSize: 22
    },

    leftTextActivated: {
        color: '#212121'
    },

    rightText: {
        flex: 1,
        color: '#212121',
        paddingLeft: '4%',
        textAlign: 'left',
        fontSize: 22
    },

    labelsColumn: {
        flex: 2,
        backgroundColor: '#09aa9a',
        flexDirection: 'column'
    },

    resultsColumn: {
        flex: 3
    },

    bottomRightButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginBottom: '5%',
        marginRight: '5%',
        borderRadius: 50
    }
  });