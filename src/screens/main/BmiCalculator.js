import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import TopBar from './components/TopBar';

const BmiCalculator = ({route, navigation}) => {
    const {hello} = route.params;
  return (
    <View style={styles.mainContainer}>
      <TopBar
        title="BMI"
        onPress={() => {
          navigation.goBack(null);
        }}
      />
      <ScrollView>
          <View><Text>{hello}</Text></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
  });

export default BmiCalculator;
