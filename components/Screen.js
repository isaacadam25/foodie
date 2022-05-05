import React from 'react';
import { SafeAreaView, Platform, StatusBar, StyleSheet } from 'react-native';

const Screen = (props) => {
  const { children } = props;

  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: (Platform.OS = 'android' ? StatusBar.currentHeight : 0),
  },
});

export default Screen;
