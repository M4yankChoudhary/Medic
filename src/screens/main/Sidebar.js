import React, {useState,useContext, useEffect} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import MyButton from './components/MyButton';
import auth, {firebase} from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';


import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import GlobalState from '../../context/GlobalState';

const Sidebar = ({navigation}) => {
    const [loggedIn, setLoggedin] = useContext(GlobalState);
    const [user, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const getUser = auth().currentUser;
      setCurrentUser(getUser);
      setLoading(false);
    });
  
    if (loading) {
      return <></>;
    }
    const Logout = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          auth()
            .signOut()
            .then(() => {
              console.log('User signed out!');
              AsyncStorage.clear();
              setLoggedin(loggedIn => ({...loggedIn, isLoggedIn: 'false'}));
            });
          // Logout();
          // setloggedIn(false);
          // setuserInfo([]);
        } catch (error) {
          console.error(error);
        }
      };
  return (
    <View style={styles.mainContainer}>
      <MyButton title="BMI Calculator" onPress={() => navigation.navigate("BMI")} />
      <MyButton title="Log out" onPress={() => Logout()} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default Sidebar;
