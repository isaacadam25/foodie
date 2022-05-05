import React from 'react';
import { View, StyleSheet } from 'react-native';

/* Colors Imports */
import colors from '../../config/colors';

const ItemSepator = () => {
  return <View style={styles.sepator} />;
};

const styles = StyleSheet.create({
  sepator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.secondary,
  },
});

export default ItemSepator;
