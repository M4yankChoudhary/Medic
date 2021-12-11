import React, {useEffect, useState} from 'react';
import { ScrollView, Text, View, StyleSheet, TextInput } from 'react-native';
import TopBar from './components/TopBar';
import MyButton from './components/MyButton';


const Covid_screen = ({ navigation }) => {

  const [data, setData] = useState([]);

  const getCovidData = async () => {
      try {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise[0].recovered);
        setData(actualData.statewise[0].recovered);
      } catch(err) {
          console.log(err);
      }
  }

  useEffect(() => {
      getCovidData();
  }, []);

  return (
    <View style={styles.mainContainer}>
        <TopBar
          title="Covid Updates"
          onPress={() => {
            navigation.goBack(null);
          }}
        />
        <ScrollView>
            <View>
              <MyButton title={data} />
            </View>
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
});

export default Covid_screen;
