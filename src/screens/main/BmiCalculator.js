import React, {useState} from 'react';
import { ScrollView, Text, View, StyleSheet, TextInput } from 'react-native';
import TopBar from './components/TopBar';
import MyButton from './components/MyButton';


const BmiCalculator = ({ navigation }) => {
  // const { hello } = route.params;
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');

   const checkBmi = () => {
        const value = weight / (height * height);
        const user_bmi = value.toFixed();
        setBmi(user_bmi)
        // console.log(bmi)
      } 
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
              placeholder="What's your weight?"
              onChangeText={(value) => setWeight(value)} />
            <TextInput placeholder="Kg" />
          </View>
          <View style={styles.textInputView}>
            <TextInput
              placeholder="What's your height?"
              onChangeText={(value) => setHeight(value)} />
            <TextInput placeholder="cm" />
          </View>
        </View>
        <View style={styles.submitButton}>
          <MyButton onPress={() => {checkBmi(), navigation.navigate("BmiDisplay", {bmi:bmi})}} title="SUBMIT" />
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
    backgroundColor: 'white'
  },
  form: {
    flex: 5,
    backgroundColor: "white",
    paddingTop: 50,
    justifyContent: 'center',
    height: 440
  },
  textInputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20, borderBottomWidth: 1,
    paddingLeft: 40, paddingRight: 40,
    borderColor: 'grey',
    width: '90%'
  },
  submitButton: {
    flex: 1,
    alignItems: 'center'
  }
});

export default BmiCalculator;
