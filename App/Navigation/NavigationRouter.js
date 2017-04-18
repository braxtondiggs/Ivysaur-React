import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyles'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'

// screens identified by the router
import LaunchScreen from '../Containers/LaunchScreen'
import IntroScreen from '../Containers/IntroScreen'
import HomeScreen from '../Containers/HomeScreen'
import SettingsScreen from '../Containers/SettingsScreen'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene key='introScreen' component={IntroScreen} title='Intro' hideNavBar />
            <Scene initial key='homeScreen' component={HomeScreen} title='Impromptu' renderLeftButton={NavItems.hamburgerButton} />
            <Scene key='settingsScreen' component={SettingsScreen} title='Settings' />
            // <Scene initial key='launchScreen' component={LaunchScreen} title='LaunchScreen' hideNavBar />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
