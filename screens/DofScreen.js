/*
Screen for calculating the depth of field. Will replace 
<Text> in the right column with actual inputs later. 
*/

import React from 'react';
import { StyleSheet, Text, View, StatusBar, Slider, Platform, TouchableOpacity } from 'react-native';
import { CircleButton } from '../components/CircleButton';

export class DofScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formatText: "35mm",
            apertureText: "f/2.8",
            distanceText: "100m",
            lengthText: "50mm",
            hyperfocalText: "0.00m",
            nearText: "0.00m",
            farText: "0.00m",
            totalText: "0.00m",
            changedText: "TEXT CHANGED"
        }
    }

    changeText = () => {
        this.setState({
            formatText: "MEDIUM FORMAT"
        });
    }

    render() {
        return (
            <View style={styles.standardView}>
                <StatusBar barStyle='dark-content'/>

                <View style={styles.labelsColumn}>
                    <View style={{flex: 3}}></View>
                    <Text style={styles.leftText}>Format</Text>
                    <Text style={styles.leftText}>Aperture</Text>
                    <Text style={styles.leftText}>Distance</Text>
                    <Text style={styles.leftText}>Length (mm)</Text>
                    <Text style={styles.leftText}>Hyperfocal</Text>
                    <Text style={styles.leftText}>Near Limit</Text>
                    <Text style={styles.leftText}>Far Limit</Text>
                    <Text style={styles.leftText}>Total</Text>
                    <View style={{flex: 3}}></View>
                </View>

                <View style={styles.resultsColumn}>
                    <View style={{flex: 3}}></View>
                    <Text style={styles.rightText} onPress={this.changeText}>{this.state.formatText}</Text>
                    <Text style={styles.rightText}>{this.state.apertureText}</Text>
                    <Text style={styles.rightText}>{this.state.distanceText}</Text>
                    <Text style={styles.rightText}>{this.state.lengthText}</Text>
                    <Text style={styles.rightText}>{this.state.hyperfocalText}</Text>
                    <Text style={styles.rightText}>{this.state.nearText}</Text>
                    <Text style={styles.rightText}>{this.state.farText}</Text>
                    <Text style={styles.rightText}>{this.state.totalText}</Text>
                    <View style={{flex: 3}}>
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