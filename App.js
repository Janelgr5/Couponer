import React, { Component } from 'react'
import { StyleSheet, Text, View, ListView, TouchableHighlight, AlertIOS } from 'react-native'
import styles from './styles'

//COMPONENTS
import ActionButton from './components/ActionButton'
import ListItem from './components/ListItem'
import StatusBar from './components/StatusBar'

//FIREBASE SETUP
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


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    }
  // The app’s state is a ListView.DataSource, which is a class that provides efficient data processing to a ListView component. 


    // Create Realtime Database reference as a property in the constructor
    this.itemsRef = firebaseApp.database().ref();

  }

  //METHODS
  _renderItem(item) {
    const onPress = () => {
      AlertIOS.alert(
        'Complete',
        null,
        [
          {
            text: 'Complete',
            onPress: text => this.itemsRef.child(item._key).remove()
          }, {
            text: 'Cancel', 
            onPress: text => console.log('Cancelled')
          }
        ]
      )
    }
    return (
      <ListItem item={item} onPress={onPress} />
    )
  }

  // creates a value listener for all grocery items. Whenever an item is added, changed, or removed, you’ll get the entire result set back as a DataSnapshot, from the Firebase SDK. 
  listenForItems(itemsRef) {
    itemsRef.on('value', snap => {
      // get children as an array
      let items = [];

      // Using the DataSnapshot, call forEach(child), which iterates through all of the children and adds them to an array as a grocery list item.
      snap.forEach(child => {
        items.push({
          title: child.val().title,

          // a _key property is created from the DataSnapshot's .key() value.
          _key: child.key
        })
      })

      // update the dataSource property on state using dataSource.cloneWithRows(items). The cloneWithRows() function is just a convenience method for creating a new ListView.DataSource based on the same DataSource previously defined.
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      })
    })
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef)
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar title='Couponer'/>
        <ListView 
          datasource={this.state.dataSource}
          renderrow={this._renderItem.bind(this)}
          enableEmptySections={true}
          style={styles.listview}
        />
        <ActionButton onPress={this._addItem.bind(this)} title='Add' />
      </View>
    )
  }
}