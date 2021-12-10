import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainController from './src/screens/main/MainController';
import Login from './src/screens/Login';
import GlobalState from './src/context/GlobalState'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
const Stack = createStackNavigator();
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);

const App = () => {
  const [loggedin, setLoggedin] = useState({});
  const LOADING_TIME = 0; // The loading screen will show for 2 Seconds.
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '227245405286-su1j4krbofat8v12ltauesgf0d3fupge.apps.googleusercontent.com',
      offlineAccess: true,
    });
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@loggedInStatus');
        if (value !== null) {
          // value previously stored
          setLoggedin(loggedIn => ({...loggedIn, isLoggedIn: value}));
        }
      } catch (e) {
        // error reading value
      }
      setTimeout(() => setIsLoading(false), LOADING_TIME);
    };
    getData();
  }, []);

  if (isLoading) {
    // we haven't finished checking for the token yet
    return <></>;
  }

  return (
    <NavigationContainer>
    <GlobalState.Provider value={[loggedin, setLoggedin]}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {loggedin.isLoggedIn === "true" ? (
          <>
            <Stack.Screen name="MainController" component={MainController} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
          </>
        )}
      </Stack.Navigator>
    </GlobalState.Provider>
  </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
