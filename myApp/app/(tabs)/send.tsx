import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { colors, spacing, fontSize, borderRadius } from '../../constants/xend-theme';
import { PrimaryButton } from '../../constants/PrimaryButton';
import { LabeledField } from '../../constants/LabeledField';

export default function Send() {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleSend = () => {
    // Handle send money
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Send Money</Text>
            <Text style={styles.subtitle}>Send money to anyone globally</Text>
          </View>

          <View style={styles.form}>
            <LabeledField
              label="Recipient Email or Phone"
              placeholder="Enter recipient details"
              value={recipient}
              onChangeText={setRecipient}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <LabeledField
              label="Amount (USD)"
              placeholder="0.00"
              value={amount}
              onChangeText={setAmount}
              keyboardType="decimal-pad"
            />

            <View style={styles.feeInfo}>
              <Text style={styles.feeLabel}>Fee:</Text>
              <Text style={styles.feeValue}>$0.00</Text>
            </View>
            <View style={styles.feeInfo}>
              <Text style={styles.feeLabel}>Total:</Text>
              <Text style={styles.feeValue}>${amount || '0.00'}</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton
              title="Send Money"
              onPress={handleSend}
              disabled={!recipient.trim() || !amount.trim()}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
  header: {
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: fontSize.xxl,
    fontWeight: '200',
    color: colors.text,
    marginBottom: spacing.xs,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
  },
  form: {
    marginBottom: spacing.xl,
  },
  feeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  feeLabel: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
  },
  feeValue: {
    fontSize: fontSize.md,
    fontWeight: '600',
    color: colors.primary,
  },
  buttonContainer: {
    marginTop: 'auto',
    paddingBottom: spacing.xl,
  },
});