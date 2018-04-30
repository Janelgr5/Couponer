import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDHndLmDhxET-Q74ZivpuNPQqex3knh4FU",
  authDomain: "couponer-87cbc.firebaseapp.com",
  databaseURL: "https://couponer-87cbc.firebaseio.com",
  projectId: "couponer-87cbc",
  storageBucket: "couponer-87cbc.appspot.com",
  messagingSenderId: "959778964098"
}
const firebaseApp = firebase.initializeApp(firebaseConfig)

const styles = require('./styles.js')

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is an App</Text>
      </View>
    )
  }
}