import React from 'react';
import {Text, ToastAndroid, View} from 'react-native';
import MyButton from './components/MyButton';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <MyButton title="Open Drawer" onPress={() => navigation.openDrawer()} />
      <MyButton title="Open Camera" onPress={() => ToastAndroid.show("Add camera component",1000)} />
    </View>
  );
};

export default HomeScreen;
