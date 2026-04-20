import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, fontSize, spacing } from './xend-theme';

export const TrustFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.secureText}>🔒 Secure & Trusted</Text>
      <Text style={styles.descText}>Your data is protected with bank-level security</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: spacing.lg,
  },
  secureText: {
    fontSize: fontSize.sm,
    fontWeight: '600',
    color: colors.primary,
  },
  descText: {
    fontSize: fontSize.xs,
    color: colors.textLight,
    marginTop: spacing.xs,
  },
});