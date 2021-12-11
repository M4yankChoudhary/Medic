import React, {useState, useRef} from 'react';
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
import {RNCamera} from 'react-native-camera';
import TextRecognition from 'react-native-text-recognition';

const Camera = ({navigation}) => {
  let cameraRef = useRef(null);
  const [camType, setcamType] = useState(RNCamera.Constants.Type.back);
  const [flash, setflash] = useState(RNCamera.Constants.FlashMode.on);
  const [ocrElements, setOcr] = useState();
  const takePicture = async () => {
    if (cameraRef) {
      const options = {
        quality: 0.5,
        base64: true,
      };
      const data = await cameraRef.current.takePictureAsync(options);
      console.log(data.uri);
      const result = await TextRecognition.recognize(data.uri);
      console.log(result);
      navigation.navigate("Results",{uri:data.uri})
    }
  };
  const flipCamera = async () => {
    if (camType === RNCamera.Constants.Type.back) {
      setcamType(RNCamera.Constants.Type.front);
    } else {
      setcamType(RNCamera.Constants.Type.back);
    }
  };
  const toggleFlash = async () => {
    if (flash === RNCamera.Constants.FlashMode.on) {
      setflash(RNCamera.Constants.FlashMode.off);
    } else {
      setflash(RNCamera.Constants.FlashMode.on);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.extra_div}></View>
      <RNCamera
        ref={cameraRef}
        ratio={'4:4'}
        style={styles.preview}
        type={camType}
        flashMode={flash}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
      </RNCamera>
      <View style={styles.extra_div}></View>
      <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => toggleFlash()}
            style={styles.capture}>
            <Text style={{fontSize: 14}}> Flash </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => takePicture()}
            style={styles.capture}>
            <Text style={{fontSize: 14}}> SNAP </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => flipCamera()} style={styles.capture}>
            <Text style={{fontSize: 14}}> TURN </Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '50%',
    marginLeft: '25%'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  extra_div: {
    height: '40%'
  }
});

export default Camera;
