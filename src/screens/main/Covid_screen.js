import React, {useEffect, useState} from 'react';
import { ScrollView, Text, View, StyleSheet, TextInput } from 'react-native';
import TopBar from './components/TopBar';
import SelectDropdown from 'react-native-select-dropdown'
import MyButton from './components/MyButton';


const Covid_screen = ({ navigation }) => {

  const [data, setData] = useState([]);

  const getCovidData = async () => {
      try {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        // console.log(actualData.statewise[0]);
        setData(actualData.statewise[0]);
      } catch(err) {
          console.log(err);
      }
  }

  useEffect(() => {
      getCovidData();
  }, []);

  const countries = ["Egypt", "Canada", "Australia", "Ireland"]

  return (
    <View style={styles.mainContainer}>
        <TopBar
          title="Covid Updates"
          onPress={() => {
            navigation.goBack(null);
          }}
        />
        <ScrollView>
            {/* <View style={styles.selectBox_div}>
                <SelectDropdown
                	data={countries}
                	onSelect={(selectedItem, index) => {
                		console.log(selectedItem, index)
                	}}
                	buttonTextAfterSelection={(selectedItem, index) => {
                		// text represented after item is selected
                		// if data array is an array of objects then return selectedItem.property to render after item is selected
                		return selectedItem
                	}}
                	rowTextForSelection={(item, index) => {
                		// text represented for each item in dropdown
                		// if data array is an array of objects then return item.property to represent item in dropdown
                		return item
                	}}
                />
            </View> */}
            <View style={styles.top_value_div}>
              <Text>Covid Updates overall India</Text>
            </View>
            <View style={styles.value_div}>
              <Text>ACTIVE</Text>
              <Text>{data.active}</Text>
            </View>
            <View style={styles.value_div}>
              <Text>CONFIRMED</Text>
              <Text>{data.confirmed}</Text>
            </View>
            <View style={styles.value_div}>
              <Text>DEATHS</Text>
              <Text>{data.deaths}</Text>
            </View>
            <View style={styles.value_div}>
              <Text>RECOVERED</Text>
              <Text>{data.recovered}</Text>
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
  selectBox_div: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    borderBottomWidth: 1,
    paddingLeft: 40,
    paddingRight: 40,
    borderColor: 'grey',
    width: '90%',
  },
  top_value_div: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#E8E8E8',
    shadowOffset:{  width: 20,  height: 20,  },
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    marginBottom: 50,
  },
  value_div: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#E8E8E8',
    shadowOffset:{  width: 20,  height: 20,  },
    shadowColor: 'black',
    // shadowOpacity: 0.5,
    marginTop: 15,
    marginLeft: 25,
    marginRight: 25,
  }
});

export default Covid_screen;
