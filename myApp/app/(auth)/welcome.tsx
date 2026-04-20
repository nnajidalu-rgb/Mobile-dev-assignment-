import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { colors, spacing, fontSize, borderRadius } from '../../constants/xend-theme';
import { XendLogo } from '../../constants/XendLogo';
import { PrimaryButton } from '../../constants/PrimaryButton';
import { TrustFooter } from '../../constants/TrustFooter';

export default function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <XendLogo />
        </View>
        
        <View style={styles.heroSection}>
          <Text style={styles.welcomeText}>Welcome to Xend</Text>
          <Text style={styles.subtitle}>
            Send money globally with ease. Fast, secure, and reliable.
          </Text>
        </View>

        <View style={styles.features}>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>🌍</Text>
            <Text style={styles.featureText}>Global Coverage</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>🔒</Text>
            <Text style={styles.featureText}>Secure Payments</Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureIcon}>⚡</Text>
            <Text style={styles.featureText}>Instant Transfers</Text>
          </View>
        </View>

        <TrustFooter />

        <View style={styles.buttons}>
          <PrimaryButton
            title="Get Started"
            onPress={() => router.push('/email')}
          />
          <PrimaryButton
            title="Sign In"
            onPress={() => router.push('/login')}
            style={styles.secondaryButton}
            textStyle={styles.secondaryButtonText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xxl,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  heroSection: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  welcomeText: {
    fontSize: fontSize.xxxl,
    fontWeight: '200',
    color: colors.primary,
    marginBottom: spacing.sm,
    letterSpacing: 2,
  },
  subtitle: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
    textAlign: 'center',
    paddingHorizontal: spacing.lg,
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: spacing.xl,
  },
  featureItem: {
    alignItems: 'center',
    flex: 1,
  },
  featureIcon: {
    fontSize: 32,
    marginBottom: spacing.sm,
  },
  featureText: {
    fontSize: fontSize.xs,
    color: colors.textLight,
    textAlign: 'center',
  },
  buttons: {
    gap: spacing.md,
    paddingBottom: spacing.xl,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  secondaryButtonText: {
    color: colors.primary,
  },
});