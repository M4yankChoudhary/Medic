import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
const primaryColor = '#FF0000';
const NunitoSans = 'NunitoSans-Regular';

const MyButton = ({onPress, title}) => {
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
          width: 150,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20%',
          elevation: 3,
          borderRadius: 50,
          backgroundColor: primaryColor,
        },
      ]}
      onPress={onPress}>
      <Text style={{fontFamily: NunitoSans, color: 'white', fontSize: 20}}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default MyButton;
