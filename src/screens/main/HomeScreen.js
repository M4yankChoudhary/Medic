import React, {useState, useEffect} from 'react';
import {
  Text,
  Image,
  ToastAndroid,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import auth, {firebase} from '@react-native-firebase/auth';
import MyButton from './components/MyButton';

const HomeScreen = ({navigation}) => {
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
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topPanel}>
        <TouchableOpacity
          style={{marginLeft: 10}}
          onPress={() => navigation.openDrawer()}>
          <Image
            style={styles.openDrawerIcon}
            resizeMode="stretch"
            source={require('./images/Pulse.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.profileContainer}
          onPress={() => navigation.navigate("Profile")}>
          <Image
            style={styles.profileIcon}
            resizeMode="stretch"
            source={{uri: user?.photoURL}}
          />
        </TouchableOpacity>
      </View>

      <View style={[styles.topPanel, {marginTop: '10%'}]}>
        <Text style={styles.profileName}>
          Hello,{'\n'}
          {user?.displayName.split(' ')[0]}
        </Text>
        <TouchableOpacity
          style={styles.profileContainer}
          onPress={() => ToastAndroid.show("Have a nice day!", 1000)}>
          <Image
            style={styles.heartIcon}
            resizeMode="contain"
            source={require('./images/heart.png')}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.camContainer}
          onPress={() => navigation.navigate("Camera")}>
          <Image
            style={styles.camIcon}
            resizeMode="stretch"
            source={require('./images/cam.png')}
          />
          <Text>Search for medicines</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white',
  },
  topPanel: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    alignItems: 'center',
  },
  openDrawerIcon: {
    width: 35,
    height: 35,
    marginTop: 15,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginRight: '5%',
  },
  profileContainer: {
    borderRadius: 30,
    marginTop: '5%',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: '5%',
  },
  heartIcon: {
    marginRight: '8%',
    height: 100,
    width: 100,
  },
  camContainer: {
    marginTop: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camIcon: {
    width: 150,
    height: 150,
  }
});

export default HomeScreen;
