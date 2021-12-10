import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Sidebar from './Sidebar';
import HomeScreen from './HomeScreen';

const MainController = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerStyle={{
        backgroundColor: '#1AA3F7',
        borderRightWidth: 0,
        borderTopEndRadius: 40,
        borderBottomEndRadius: 40,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowOffset: {width: 1, height: 2},
        shadowRadius: 15,
        elevation: 10, // Android
        width: '70%',
      }}
      drawerContent={props => <Sidebar {...props} />}
      initialRouteName="HomeScreen">
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default MainController;
