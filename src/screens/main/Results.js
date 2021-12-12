import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  ToastAndroid,
  View,
  Image,
} from 'react-native';
import TopBar from './components/TopBar';
import firestore from '@react-native-firebase/firestore';
const Results = ({route, navigation}) => {
  const {text} = route.params;
  console.log(text[0].split(' ')[0].toString().toLowerCase());
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const ref = firestore().collection('medicines').where('name', '>=', `${text.toString().toLowerCase()}`);

  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const {name, desc, img} = doc.data();
        list.push({
          name,
          desc,
          img,
        });
      });
      setResults(list);
      console.log(list)
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <></>;
  }
  return (
    <View style={styles.mainContainer}>
      <TopBar title="Results" />
      <ScrollView>
          {results == [] ? <Text>No results</Text>: <Text></Text>}
        <View style={styles.cardsContainer}>
          {results.map((id, key) => (
            <View key={key} style={styles.cards}>
              <Image
                style={styles.imageSize}
                resizeMode="stretch"
                source={{uri: id?.img}}
              />
             
              <Text style={styles.nameAndDescText}>Name</Text>
              <Text>{id.name}</Text>
              <Text style={styles.nameAndDescText}>Description</Text>
              <Text style={{fontWeight: '300', width: 250}}>{id.desc}</Text>
            </View>
          ))}
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
    alignItems: 'center',
    backgroundColor: 'white',
  },
  cardsContainer: {
    margin: 10,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cards: {
    borderWidth: 0,
  },
  imageSize: {
    width: 250,
    height: 250,
  },
  nameAndDescText: {
    fontWeight: 'bold',
    fontSize: 24,
    width: 250,
  },
});

export default Results;
