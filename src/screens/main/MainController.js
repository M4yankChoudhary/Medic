import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Sidebar from './Sidebar';
import HomeScreen from './HomeScreen';
import BmiCalculator from './BmiCalculator';
import Covid_screen from './Covid_screen';
import BmiDisplay from './BmiDisplay';
import Camera from './Camera';

import Profile from './Profile';

import Results from './Results';



const MainController = ({navigation}) => {
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
      <Drawer.Screen name="BMI" component={BmiCalculator} />
      <Drawer.Screen name="BmiDisplay" component={BmiDisplay} />
      <Drawer.Screen name="Covid" component={Covid_screen} />
      <Drawer.Screen name="Camera" component={Camera} />

      <Drawer.Screen name="Profile" component={Profile} />

      <Drawer.Screen name="Results" component={Results} />

    </Drawer.Navigator>
  );
};

export default MainController;
