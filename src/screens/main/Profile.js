import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StyleSheet, TextInput, Image, Label } from 'react-native';
import TopBar from './components/TopBar';
import auth, { firebase } from '@react-native-firebase/auth';


const Profile = ({ navigation }) => {
    const [user, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getUser = auth().currentUser;
        setCurrentUser(getUser);
        setLoading(false);
    });
    if (loading) {
        return <></>;
    }

    return (

        <View style={styles.mainContainer}>

            {console.log(auth().currentUser)}
            <TopBar
                title="Profile"
                onPress={() => {
                    navigation.goBack(null);
                }}
            />
            <View style={styles.profileView}>
                <ScrollView>
                    <View style={styles.profileHeader}>
                        <Image
                            style={styles.profileIcon}
                            resizeMode="stretch"
                            source={{ uri: user?.photoURL }}
                        />
                        <View style={styles.profileHeaderDetails}>
                            <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>{user.displayName}</Text>
                            <Text style={{ color: 'grey' }}>{user.email}</Text>
                        </View>
                    </View>
                    {/* <View style={styles.profileDetails}>
                        <View style={styles.userDetailView}>
                            <Text style={styles.detailsLabel}>User name</Text>
                            <Text>{user.displayName}</Text>
                        </View>
                        <View style={styles.userDetailView}>
                            <Text style={styles.detailsLabel}>Phone Number</Text>
                            <Text>{user.phoneNumber}</Text>
                        </View>
                        <View style={styles.userDetailView}>
                            <TextInput
                                placeholder="Select your gender"
                                onChangeText={value => {
                                    setHeight(value);
                                }}
                            />
                        </View>
                        <View style={styles.userDetailView}>
                            <TextInput
                                placeholder="Date of birth"
                                onChangeText={value => setWeight(value)}
                            />
                        </View>
                    </View> */}
                </ScrollView>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        display: 'flex',
        backgroundColor: 'white',
        // borderWidth:1
    },
    profileView: {
        flex: 1
    },
    profileHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },
    profileIcon: {
        width: 90,
        height: 90,
        borderRadius: 20,
    },
    profileHeaderDetails: {
        alignItems: 'center', marginTop: 20
    },
    profileDetails: {
        flex: 4, justifyContent: 'center', padding: 30
    },
    userDetailView: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        // alignItems: 'center',
        marginBottom: 15,
        borderBottomWidth: 1,
        borderColor: 'grey',
        width: '100%',
    },
    detailsLabel:{
        marginBottom:5
    }

});

export default Profile;
