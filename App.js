import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainController from './src/screens/main/MainController';
import Login from './src/screens/Login';
import GlobalState from './src/context/GlobalState'
const Stack = createStackNavigator();
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);

const App = () => {
  const [loggedin, setLoggedin] = useState({});
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
