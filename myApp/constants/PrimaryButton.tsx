import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { colors, borderRadius, fontSize, spacing } from './xend-theme';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const PrimaryButton = ({ title, onPress, loading, disabled, style, textStyle }: PrimaryButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.goldAccent,
  },
  disabled: {
    backgroundColor: colors.textLight,
    borderColor: colors.border,
  },
  text: {
    color: colors.black,
    fontSize: fontSize.md,
    fontWeight: '700',
    letterSpacing: 1,
  },
});