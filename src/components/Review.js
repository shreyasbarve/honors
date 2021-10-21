import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Button,
  TextInput,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';

const Review = ({ navigation }) => {
  // state for amount to be paid
  const [amount, setAmount] = useState(null);

  // state for handling disabled state of button
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleChangeAmount = amt => {
    setAmount(amt);
    if (Number.parseInt(amt) > 0) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleClearAmount = () => {
    setAmount(null);
    setIsButtonDisabled(true);
  };

  // function to navigate to Payment screen
  const handlePayment = () => {
    // amount is the value we paid passed as param to next screen
    var amt = amount;
    Alert.alert('Confirmation', `Are you sure want to pay ₹${amt}?`, [
      {
        text: 'Cancel',
        style: 'destructive',
      },
      {
        text: 'Confirm',
        onPress: () => {
          setAmount(null);
          navigation.navigate('Payment', { amount: amt });
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.card}>
        <Image style={styles.image} source={require('../assets/shop.png')} />

        <TextInput
          placeholder="Enter the amount in ₹"
          underlineColorAndroid="blue"
          value={amount}
          onChangeText={amt => handleChangeAmount(amt)}
          keyboardType="numeric"
          style={styles.textInput}
        />

        <View style={styles.buttonsView}>
          <Button
            onPress={handlePayment}
            title="Make Payment"
            disabled={isButtonDisabled}
            color="teal"
          />

          <Button
            onPress={handleClearAmount}
            title="Clear"
            disabled={isButtonDisabled}
            color="red"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '80%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    elevation: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    height: '90%',
  },
  image: { width: 200, height: 200 },
  textInput: { width: '70%' },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
});

export default Review;
