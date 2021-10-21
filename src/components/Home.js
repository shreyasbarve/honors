import React, { useState } from 'react';
import {
  Text,
  Switch,
  SafeAreaView,
  Button,
  View,
  StyleSheet,
  Image,
} from 'react-native';

const Home = ({ navigation }) => {
  // toggle state customer and merchant
  const [isCustomer, setIsCustomer] = useState(true);

  // function to handle the toggle
  const toggleSwitch = () => setIsCustomer(prevState => !prevState);

  const handleNavigateReview = () => {
    navigation.navigate('Review');
  };

  return (
    <SafeAreaView style={styles.container}>
      {isCustomer ? (
        <Image style={styles.image} source={require('../assets/card.png')} />
      ) : (
        <Image style={styles.image} source={require('../assets/cardd.jpg')} />
      )}

      <View style={styles.card}>
        <Text style={styles.bigFont}>
          {isCustomer ? 'Customer Mode' : 'Merchant Mode'}
        </Text>

        <Switch
          trackColor={{ false: '#767577', true: 'lightblue' }}
          thumbColor={isCustomer ? 'teal' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isCustomer}
          style={styles.switch}
        />

        <View style={{ marginTop: '10%' }}>
          <Button
            onPress={handleNavigateReview}
            title="Go to Review Screen"
            color="teal"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image: { width: 350, height: 200 },
  card: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    height: '50%',
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
  switch: {
    marginTop: '10%',
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }, { rotate: '90deg' }],
  },
});

export default Home;
