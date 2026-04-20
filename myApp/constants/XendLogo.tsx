import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from './xend-theme';

export const XendLogo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>X</Text>
      </View>
      <Text style={styles.brandName}>end</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.goldAccent,
  },
  logoText: {
    color: colors.black,
    fontSize: 26,
    fontWeight: 'bold',
  },
  brandName: {
    fontSize: 26,
    fontWeight: '300',
    color: colors.primary,
    marginLeft: 12,
    letterSpacing: 2,
  },
});
