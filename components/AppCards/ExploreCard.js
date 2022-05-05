import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';

const ExploreCard = ({ title }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require('../../assets/food.jpg')}
        resizeMode="stretch"
        borderRadius={6}
      >
        <Text style={styles.topText}>{title}</Text>
        <View style={styles.bottomText}>
          <Text style={styles.bottomTextStyle}>
            We all scream for icecream. get it for $1
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 180,
    padding: 4,
    borderRadius: 16,
  },
  background: {
    flex: 1,
    justifyContent: 'space-between',
    borderRadius: 16,
  },
  topText: {
    backgroundColor: '#fff',
    fontSize: 14,
    color: '#000',
    width: 60,
    marginTop: 6,
    marginLeft: 5,
    textAlign: 'center',
    borderRadius: 4,
  },
  bottomText: {
    height: 60,
    backgroundColor: 'rgba(28, 27, 24, 0.6)',
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowColor: '#000',
    elevation: 6,
  },
  bottomTextStyle: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    padding: 5,
  },
});

export default ExploreCard;
