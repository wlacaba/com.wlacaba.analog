/*
Screen for calculating the depth of field. Will replace 
<Text> in the right column with actual inputs later. 
*/

import React from 'react';
import { StyleSheet, Text, View, StatusBar, Slider, Platform, TouchableOpacity } from 'react-native';
import { CircleButton } from '../components/CircleButton';

export class DofScreen extends React.Component {
    render() {
        return (
            <View style={styles.standardView}>
                <StatusBar barStyle='dark-content'/>

                <View style={styles.labelsColumn}>
                    <View style={{flex: 3}}></View>
                    <Text style={styles.leftText}>Format</Text>
                    <Text style={styles.leftText}>Aperture</Text>
                    <Text style={styles.leftText}>Distance</Text>
                    <Text style={styles.leftText}>Focal Length</Text>
                    <Text style={styles.leftText}>Hyperfocal</Text>
                    <Text style={styles.leftText}>Near Limit</Text>
                    <Text style={styles.leftText}>Far Limit</Text>
                    <Text style={styles.leftText}>Total</Text>
                    <View style={{flex: 3}}></View>
                </View>

                <View style={styles.resultsColumn}>
                    <View style={{flex: 3}}></View>
                    <Text style={styles.rightText}>35mm</Text>
                    <Text style={styles.rightText}>f/2.8</Text>
                    <Text style={styles.rightText}>Input Distance</Text>
                    <Text style={styles.rightText}>50mm</Text>
                    <Text style={styles.rightText}>00.00</Text>
                    <Text style={styles.rightText}>00.00</Text>
                    <Text style={styles.rightText}>00.00</Text>
                    <Text style={styles.rightText}>00.00</Text>
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