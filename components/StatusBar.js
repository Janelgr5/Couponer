import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from 'react-native-elements'
import { styles, constants } from '../styles'

export default class StatusBar extends Component {
    render() {
        return (
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: `${this.props.title}`, style: styles.navbarTitle }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    outerContainerStyles={styles.navbar}
                />
        )
    }
}

