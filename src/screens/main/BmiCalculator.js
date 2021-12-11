import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View, StyleSheet, TextInput} from 'react-native';
import TopBar from './components/TopBar';
import MyButton from './components/MyButton';

const BmiCalculator = ({navigation}) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  // const [bmi, setBmi] = useState('');
  // const { hello } = route.params;
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setHeight('');
      setWeight('');
    });
    unsubscribe;
  }, [navigation]);

  const checkBmi = () => {
    const value = weight / (height * height);
    const user_bmi = value.toFixed(2);
    navigation.navigate('BmiDisplay', {bmi: user_bmi});
    console.log(user_bmi);
  };
  return (
    <View style={styles.mainContainer}>
      <TopBar
        title="Calculate BMI"
        onPress={() => {
          navigation.goBack(null);
        }}
      />
      <ScrollView>
        {/* <View style={{display:'flex', flex:1, flexDirection:'column'}}> */}
        <View style={styles.form}>
          <View style={styles.textInputView}>
            <TextInput
              placeholder="What's your weight? (KG)"
              onChangeText={value => setWeight(value)}
              keyboardType="decimal-pad"
              defaultValue={weight}
            />
          </View>
          <View style={styles.textInputView}>
            <TextInput
              placeholder="What's your height? (CM)"
              onChangeText={value => {
                setHeight(value);
              }}
              defaultValue={height}
              keyboardType="decimal-pad"
            />
          </View>
        </View>
        <View style={styles.submitButton}>
          {(weight || height) === '' ? (
            <MyButton
              title="SUBMIT"
            />
          ) : (
            <MyButton
              onPress={() => {
                checkBmi();
              }}
              title="SUBMIT"
            />
          )}
        </View>
        {/* </View> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'white',
  },
  form: {
    flex: 5,
    backgroundColor: 'white',
    paddingTop: 50,
    justifyContent: 'center',
    height: 440,
  },
  textInputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    borderBottomWidth: 1,
    paddingLeft: 40,
    paddingRight: 40,
    borderColor: 'grey',
    width: '90%',
  },
  submitButton: {
    flex: 1,
    alignItems: 'center',
  },
});

export default BmiCalculator;
