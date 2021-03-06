import React, { Component } from 'react'
import { View, TouchableHighlight, Text } from 'react-native'
import { styles, constants } from '../styles'

export default class ListItem extends Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress}>
                <View style={styles.li}>
                    <Text style={styles.liText}>{this.props.item.title}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}