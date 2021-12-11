import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View, StyleSheet, TextInput} from 'react-native';
import TopBar from './components/TopBar';

const BmiDisplay = ({route, navigation}) => {
    const {bmi}= route.params;
  return (
    <View style={styles.mainContainer}>
      <TopBar
        title="BMI"
        onPress={() => {
          navigation.navigate("BMI");
        }}
      />
      <View style={styles.displayView}>
        <Text>{bmi}</Text>
        <View style={styles.bmiDisplay}>
          <Text>Your BMI is:</Text>
          <Text style={{fontSize: 61, color: 'red'}}>{bmi}</Text>
        </View>
        <View style={styles.category}>
          <View style={{marginRight: 10, height: 51, justifyContent: 'center'}}>
            <Text>UNDERWEIGHT</Text>
          </View>
          <View
            style={{
              marginRight: 10,
              backgroundColor: 'red',
              height: 51,
              justifyContent: 'center',
              padding: 12,
            }}>
            <Text>NORMAL</Text>
          </View>
          <View style={{marginRight: 10, height: 51, justifyContent: 'center'}}>
            <Text>OVERWEIGHT</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text
          style={{
            marginBottom: 10,
            fontSize: 24,
            fontWeight: 'bold',
            color: 'black',
          }}>
          RISK
        </Text>
        <Text style={{textAlign: 'center'}}>
          High risk of developing heart disease, high blood pressure, stroke,
          diabetes
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'white',
  },
  displayView: {
    flex: 3,
    marginTop: '20%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bmiDisplay: {
    alignItems: 'center',
  },
  category: {
    flexDirection: 'row',
    elevation: 5,
    padding: 10,
    borderRadius: 50,
    backgroundColor: 'white',
    height: 51,
    alignItems: 'center',
  },
  footer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    // borderWidth:1
  },
});

export default BmiDisplay;
