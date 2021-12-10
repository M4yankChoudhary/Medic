import React from 'react';
import { Text, View } from 'react-native';
import MyButton from './components/MyButton';

const HomeScreen = ({navigation}) => {

    return (
        <View><Text>Home Screen</Text><MyButton title="Open Drawer" onPress={() => navigation.openDrawer()}/></View>
    );

}

export default HomeScreen;