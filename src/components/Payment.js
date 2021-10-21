import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text,
  ActivityIndicator,
  Image,
  StyleSheet,
  View,
} from 'react-native';

const Payment = ({ route }) => {
  // getting the amount from previous screen
  const { amount } = route.params;

  // content of the message
  const [message, setMessage] = useState('Verifying Identity');

  // state used to display the last msg if payment successfull
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMessage('Contacting Bank');
      setTimeout(() => {
        setMessage('Processing the transaction');
        setTimeout(() => {
          setSuccess(true);
        }, 2000);
      }, 2000);
    }, 2000);
  }, []);

  return success ? (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.image} source={require('../assets/tick.png')} />
        <Text style={styles.bigFont}>
          Your Payment of ₹{amount} was Successfull.
        </Text>
      </View>
    </SafeAreaView>
  ) : (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" />
      <Text style={styles.bigFont}>{message}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    height: '60%',
    width: '80%',
    elevation: 10,
    padding: '5%',
    borderRadius: 25,
  },
  bigFont: {
    fontSize: 24,
    letterSpacing: 2,
    fontWeight: 'bold',
  },
  image: { width: 100, height: 100 },
});

export default Payment;
