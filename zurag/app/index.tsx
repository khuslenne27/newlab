import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, Text, Dimensions } from 'react-native';


const screenWidth = Dimensions.get('window').width;

const Index = () => {
  return (
    <View style={styles.container}>
      <Text>index</Text>

      <Image
        style={styles.mainImage}
        source={require('../assets/aimag/gazriinzurag1050x510.png')}
        transition={1000}
      />
      
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: '#0553',
  },
  baseImage: {
    width: screenWidth,
    backgroundColor: "rgba(2, 2, 0, 0.05)", 
  },
  mainImage: {
    height: 250,
    width: '90%',
  },
  overlayImage: {
    position: "absolute",
    resizeMode: "contain"
  }
});