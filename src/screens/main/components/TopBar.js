import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const primaryColor = '#FF0000';
// const NunitoSans = 'NunitoSans-Regular';

const TopBar = ({onPress, title}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 70,
        backgroundColor: primaryColor,
        borderBottomStartRadius: 0,
        borderBottomEndRadius: 0,
        elevation: 2,
        justifyContent: 'center',
        // flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
      }}>
     
      <View>
        <Text style={{color: 'white', fontSize: 20,}}>{title}</Text>
      </View>
      <Pressable
        style={{
          position: 'absolute',
          top: 10,
          alignSelf: 'center',
          left: 15,
          width: 50,
          height: 50,
        }}
        onPress={onPress}>
        <Image
          resizeMode="contain"
          source={require('./images/back.png')}
          style={{
            height: 50,
            width: 50,
          }}
         onPress={onPress} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TopBar;
