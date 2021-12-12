import React, { useEffect, useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TopBar from './components/TopBar';

const BmiDisplay = ({ route, navigation }) => {
  const { bmi } = route.params;
  const [underWeight, setUnderWeight] = useState(0);
  const [normalWeight, setNormalWeight] = useState(0);
  const [overWeight, setOverWeight] = useState(0);

  useEffect(() => {
    if (bmi < 18.6) {
      setUnderWeight(1)
      setOverWeight(0)
      setNormalWeight(0)
    } else if (bmi >= 18.6 && bmi < 24.9) {
      setNormalWeight(1)
      setOverWeight(0)
      setUnderWeight(0)
    } else {
      setOverWeight(1)
      setNormalWeight(0)
      setUnderWeight(0)
    }
  });

  return (
    <View style={styles.mainContainer}>
      <TopBar
        title="BMI"
        onPress={() => {
          navigation.navigate("BMI");
        }}
      />
      <View style={styles.displayView}>
        <View style={styles.bmiDisplay}>
          <Text>Your BMI is:</Text>
          <Text style={{ fontSize: 61, color: 'red' }}>{bmi}</Text>
        </View>

        {
          normalWeight == 1 ?
            <View style={styles.category}>
              <View style={{ marginRight: 10, height: 51, justifyContent: 'center', padding:10 }}>
                <Text>UNDERWEIGHT</Text>
              </View>
              <View
                style={{
                  marginRight: 10,
                  backgroundColor: 'red',
                  height: 51,
                  justifyContent: 'center',
                  padding: 10,
                }}>
                <Text>NORMAL</Text>
              </View>
              <View style={{ marginRight: 10, height: 51, justifyContent: 'center', padding:10 }}>
                <Text>OVERWEIGHT</Text>
              </View>
            </View> :
            (underWeight == 1) ?
              <View style={styles.category}>
                <View style={{ height: 51, justifyContent: 'center', backgroundColor: 'red', padding:10}}>
                  <Text >UNDERWEIGHT</Text>
                </View>
                <View
                  style={{
                    height: 51,
                    justifyContent: 'center',
                    padding: 10
                  }}>
                  <Text>NORMAL</Text>
                </View>
                <View style={{ marginRight: 10, height: 51, justifyContent: 'center', padding:10}}>
                  <Text>OVERWEIGHT</Text>
                </View>
              </View> :
              (overWeight == 1) ?
                <View style={styles.category}>
                  <View style={{ marginRight: 10, height: 51, justifyContent: 'center' , padding:10}}>
                    <Text>UNDERWEIGHT</Text>
                  </View>
                  <View
                    style={{
                      marginRight: 10,
                      height: 51,
                      justifyContent: 'center',
                      padding: 10,
                    }}>
                    <Text>NORMAL</Text>
                  </View>
                  <View style={{ marginRight: 10, height: 51, justifyContent: 'center', backgroundColor: 'red', padding:10 }}>
                    <Text>OVERWEIGHT</Text>
                  </View>
                </View> : <></>}
      </View>
      {/* <View style={styles.riskDetails}>
        <Text
          style={{
            marginBottom: 10,
            fontSize: 24,
            fontWeight: 'bold',
            color: 'black',
          }}>
          RISK
        </Text>
        <Text style={{ textAlign: 'center' }}>
          High risk of developing heart disease, high blood pressure, stroke,
          diabetes
        </Text>
      </View> */}
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
    elevation: 6,
    padding: 25,
    borderRadius: 50,
    backgroundColor: 'white',
    height: 51,
    alignItems: 'center',
  },
  riskDetails: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default BmiDisplay;
