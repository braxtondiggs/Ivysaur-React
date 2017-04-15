import React, { Component } from 'react'
import { ScrollView, BackAndroid } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import DrawerButton from '../Components/DrawerButton'
import Share, {ShareSheet, Button} from 'react-native-share'
import { Actions as NavigationActions } from 'react-native-router-flux'

class DrawerContent extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressHome= () => {
    this.toggleDrawer()
    NavigationActions.homeScreen()
  }

  handlePressMessages = () => {
    this.toggleDrawer()
    // TODO Messages
  }

  handlePressPreference = () => {
    this.toggleDrawer()
    // TODO Preference
  }

  handlePressSettings = () => {
    this.toggleDrawer()
    NavigationActions.settingsScreen()
  }

  handlePressShare = () => {
    this.toggleDrawer()
    Share.open({
      title: 'Impromptu App',
      message: 'Check out Impromptu... it shows you who like you nearby!',
      url: 'http://impromptu.app/',
      subject: 'Impromptu App'
    })
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <DrawerButton text='Home' icon='map-marker' onPress={this.handlePressHome} />
        <DrawerButton text='Messages' icon='commenting-o' onPress={this.handlePressMessages} />
        <DrawerButton text='Preference' icon='gear' onPress={this.handlePressPreference} />
        <DrawerButton text='Settings' icon='sliders' onPress={this.handlePressSettings} />
        <DrawerButton text='Share Impromptu' icon='share-alt' onPress={this.handlePressShare} />
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
