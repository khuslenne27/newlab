import React from 'react'
import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';

const index = () => {
  return (
    <View style={styles.container}>
      <Text>index</Text>
        <Image
        style={{height:250, width:'90%', }}
        source={require('../assets/aimag/gazriinzurag1050x510.png')}
        // placeholder={{ blurhash }}
        // contentFit="cover"
        transition={1000}
      />
    </View>
  )
}

export default index;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: '#0553',
  },
});
