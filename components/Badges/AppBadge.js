import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/* colors module */
import colors from '../../config/colors';

const AppBadge = ({ title, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.badgeText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 3,
    backgroundColor: colors.badgePrimary,
    borderRadius: 160,
    marginVertical: 1,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'center',
  },
});

export default AppBadge;
