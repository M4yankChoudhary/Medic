import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
const primaryColor = '#FF0000';
const NunitoSans = 'NunitoSans-Regular';

const LogoutButton = ({onPress, title}) => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          borderWidth: pressed ? 0 : 2,
          borderColor: pressed ? primaryColor : 'white',
          // opacity: pressed ? 0.5 : 1,
          shadowColor: pressed ? 'white' : 'black',
        },
        {
          width: '90%',
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '5%',
          elevation: 3,
          borderRadius: 10,
          backgroundColor: 'white',
          marginTop: '150%'
        },
      ]}
      onPress={onPress}>
      <Text style={{fontFamily: NunitoSans, color: 'red', fontSize: 15, fontWeight: 'bold'}}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default LogoutButton;
