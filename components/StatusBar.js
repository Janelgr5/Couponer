import React, { Component } from 'react'
import {StyleSheet, Text, View } from 'react-native'
const styles = require('../styles')

export default class StatusBar extends Component {
    render() {
        return (
            <View>
                <View styles={styles.statusbar} />
                <View styles={styles.navbar}>
                    <Text styles={styles.navbarTitle}>{this.props.title}</Text>
                </View>
            </View>
        )
    }
}

