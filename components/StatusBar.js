import React, { Component } from 'react'
import {StyleSheet, Text, View } from 'react-native'
import styles from '../styles'

export default class StatusBar extends Component {
    render() {
        return (
            <View>
                <View styles={styles.statusbar} />
                <View styles={styles.navbar}>
                    <Text styles={styles.navbarTitle}>Couponer</Text>
                </View>
            </View>
        )
    }
}

