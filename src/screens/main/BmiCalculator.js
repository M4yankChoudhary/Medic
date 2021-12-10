import React from 'react';
import { Text, View } from 'react-native';
import TopBar from './components/TopBar';

const BmiCalculator = ({navigation}) => {

    return (
        <View><TopBar title="BMI" onPress={() => {navigation.goBack(null)}}/><Text>Bmi Calculator</Text></View>
    );

}

export default BmiCalculator;