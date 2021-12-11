import React, {useContext} from 'react';
import { Text, View,Image, StyleSheet } from 'react-native';
import auth, {firebase} from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import GlobalState from '../context/GlobalState';
const Login = () => {
    // Global state or context for getting sign in info
  const [loggedIn, setLoggedin] = useContext(GlobalState);
  const onGoogleButtonPress = async () => {
    try {
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('user cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('operation (e.g. sign in) is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('play services not available or outdated');
      } else {
        console.log(error);
      }
    }
  };

  // Sign in user and add into async storage
  auth().onAuthStateChanged(user => {
    if (user) {
      storeLoginData('true');
      console.log(auth().currentUser);
    }
  });

  // store sign in value into async storage
  const storeLoginData = async value => {
    try {
      await AsyncStorage.setItem('@loggedInStatus', value);
      setLoggedin(loggedIn => ({...loggedIn, isLoggedIn: value}));
    } catch (e) {
      // saving error
      console.log(e);
    }
  };


    return (
        <View style={styles.mainContainer}>
          <Image
            style={styles.welcome}
            source={require('./images/welcome.png')}
          />
          <Image
            style={styles.front_img}
            source={require('./images/front_img.png')}
          />
          <View>
            <Text style={styles.text_div}>
              Medic - makes your life easier
            </Text>
          </View>
          <GoogleSigninButton
            style={{width: 250, height: 50, marginTop: '10%'}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
            onPress={() => onGoogleButtonPress()}
          />
        </View>
    );

}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',
  },
  welcome: {
    width: '100%',
    resizeMode: 'contain',
    height: '10%',
    paddingBottom: '50%'
  },
  front_img: {
    width: '100%',
    resizeMode: 'contain',
    height: '40%',
  },
  text_div: {
    textAlign: 'center',
    padding: 10,
    color: 'black',
    fontWeight: 'bold'
  }
});

export default Login;