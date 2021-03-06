import React from 'react'
import { Text, View, Image, Dimensions, AsyncStorage } from 'react-native'
import Images from '../Themes/Images'
import { connect } from 'react-redux'
import Swiper from 'react-native-swiper'
import Spinner from 'react-native-loading-spinner-overlay'
import {FBLogin, FBLoginManager} from 'react-native-facebook-login'
import { Actions as NavigationActions } from 'react-native-router-flux'
import firebase from 'firebase/app'

// Styles
import styles from './Styles/IntroStyle'

class Intro extends React.Component {
  constructor (props) {
    super()
    this.state = {
      visible: false
    }
  }
  componentWillMount () {
    let windowHeight = Dimensions.get('window').height
    this.setState({windowHeight: windowHeight - 100})
  }

  componentWillUnmount () {
    if (this.unsubscribe) {
      this.unsubscribe()
    }
  }
  login (data) {
    let credential = firebase.auth.FacebookAuthProvider.credential(data.credentials.token)
    var _this = this
    this.setState({visible: true})
    firebase.auth().signInWithCredential(credential).then(function (result) {
      let user = result.providerData[0]
      firebase.database().ref('Users/' + user.uid).update(user)
      _this.setState({ user: user, visible: false })
      AsyncStorage.setItem('@User', JSON.stringify(user))
    }).catch(function (error) {
      console.log(error)
      // TODO Implement Error Catch
    })
  }
  loginFound (data) {
    NavigationActions.homeScreen({type: 'replace'})
  }
  render () {
    var _this = this
    return (
      <View style={{flex: 1}}>
        <Spinner visible={this.state.visible} />
        <Swiper style={styles.wrapper} loop={false} height={this.state.windowHeight}>
          <View style={styles.slide}>
            <View>
              <Text style={styles.slideText}>Anonymously "like" or "pass" {'\n'} on people Impromptu suggests</Text>
              <Image source={Images.intro} style={styles.image} />
            </View>
          </View>
          <View style={styles.slide}>
            <Text style={styles.slideText}>If someone you've liked {'\n'} happens to like you back&#8230;</Text>
            <Image source={Images.intro} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Text style={styles.slideText}>Chat with your matches inside {'\n'} the app</Text>
            <Image source={Images.intro} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Text style={styles.slideText}>Capture and share moments {'\n'} with all your matches</Text>
            <Image source={Images.intro} style={styles.image} />
          </View>
        </Swiper>
        <View style={styles.terms}>
          <Text style={styles.termsText}>By continuing, you agree to our Terms of Service and Privacy Policy</Text>
          <View style={styles.facebook}>
            <FBLogin
              ref={(fbLogin) => { this.fbLogin = fbLogin }}
              loginBehavior={FBLoginManager.LoginBehaviors.Native}
              permissions={['email', 'user_friends', 'public_profile', 'user_birthday']}
              onLogin={(data) => { _this.login(data) }}
              onLoginFound={function (data) { _this.loginFound(data) }}
              onLoginNotFound={function () { _this.setState({ user: null }) }}
              onLogout={function () { _this.setState({ user: null }) }} />
          </View>
        </View>
      </View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intro)
