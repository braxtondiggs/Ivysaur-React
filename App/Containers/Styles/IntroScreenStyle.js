import { StyleSheet } from 'react-native'
import {Fonts} from '../../Themes/'

export default StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1
  },
  slideText: {
    color: '#2c3e50',
    fontSize: 22,
    paddingTop: 15,
    alignSelf: 'center',
    fontFamily: Fonts.base,
    textAlign: 'center'
  },
  terms: {
    flex: 1
  },
  termsText: {
    alignSelf: 'center',
    fontFamily: Fonts.base,
    fontSize: 8
  },
  image: {
    maxWidth: 300,
    maxHeight: 500,
    resizeMode: 'stretch',
    alignSelf: 'center'
  },
  facebook: {
    marginTop: 10,
    alignSelf: 'center'
  }
})
