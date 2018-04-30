import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { styles, constants } from '../styles'

export default class StatusBar extends Component {
    render() {
        return (
            <View styles={styles.statusbar}>
                <View styles={styles.navbar}>
                    <Text style={styles.navbarTitle}>{this.props.title}</Text>
                </View>
            </View>
        )
    }
}

