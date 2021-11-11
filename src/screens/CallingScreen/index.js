import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CallActionbox from '../../components/CallActionBox';

const CallScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>Zatannaa</Text>
        <Text style={styles.phoneNumber}>ringing 6178721712</Text>
      </View>

      <CallActionbox />
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    height: '100%',
    backgroundColor: '#7b4e80',
  },

  cameraPreview: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 50,
    marginBottom: 15,
  },
  phoneNumber: {
    fontSize: 20,
    color: 'white',
  },
});

export default CallScreen;
