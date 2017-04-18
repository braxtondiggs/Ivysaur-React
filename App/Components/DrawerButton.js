import React, { Component, PropTypes } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './Styles/DrawerButtonStyles'
import Icon from 'react-native-vector-icons/FontAwesome'
import ExamplesRegistry from '../Services/ExamplesRegistry'

// Example
ExamplesRegistry.addComponentExample('Drawer Button', () =>
  <DrawerButton
    text='Example left drawer button'
    icon='rocket'
    onPress={() => window.alert('Your drawers are showing')}
  />
)

class DrawerButton extends Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
  }

  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
        <Icon name={this.props.icon} size={16} color='#fff' style={styles.icon} />
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

export default DrawerButton
