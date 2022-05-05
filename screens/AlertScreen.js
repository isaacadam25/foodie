import React from 'react';
import { Text, SafeAreaView, StatusBar } from 'react-native';

const AlertScreen = () => {
  return (
    <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
      <Text>Alert Screen</Text>
    </SafeAreaView>
  );
};

export default AlertScreen;
