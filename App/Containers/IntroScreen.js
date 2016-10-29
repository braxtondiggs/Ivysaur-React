import React from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Images from '../Themes/Images'
// external libs
import Swiper from 'react-native-swiper'
import {FBLogin, FBLoginManager} from 'react-native-facebook-login'

// Styles
import styles from './Styles/IntroScreenStyle'

class IntroScreen extends React.Component {
  componentWillMount () {
    let windowHeight = Dimensions.get('window').height
    this.setState({windowHeight: windowHeight - 100})
  }
  render () {
    return (
      <View style={{flex: 1}}>
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
          <FBLogin
            style={styles.facebook}
            ref={(fbLogin) => { this.fbLogin = fbLogin }}
            loginBehavior={FBLoginManager.LoginBehaviors.Native}
            permissions={['email', 'user_friends']}
            onLogin={function (e) { console.log(e) }}
            onLoginFound={function (e) { console.log(e) }}
            onLoginNotFound={function (e) { console.log(e) }}
            onLogout={function (e) { console.log(e) }}
            onCancel={function (e) { console.log(e) }}
            onPermissionsMissing={function (e) { console.log(e) }}
                      />
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

export default connect(mapStateToProps, mapDispatchToProps)(IntroScreen)
