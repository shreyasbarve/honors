import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const Splash = ({ navigation }) => {
  // used to display splash screen for 2 seconds only
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.bigFont}>Name: Shreyas Barve</Text>
      <Text style={styles.bigFont}>Roll No.: A - 75</Text>
      <Text style={styles.bigFont}>Shift: 1</Text>
      <Text style={styles.bigFont}>Sem: 7</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  bigFont: {
    fontSize: 24,
    letterSpacing: 2,
    fontWeight: 'bold',
  },
});

export default Splash;
