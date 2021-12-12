import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
const primaryColor = '#FF0000';
const NunitoSans = 'NunitoSans-Regular';

const NewButton = ({onPress, title}) => {
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
        },
      ]}
      onPress={onPress}>
      <Text style={{fontFamily: NunitoSans, color: 'black', fontSize: 15, fontWeight: 'bold'}}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({});

export default NewButton;
