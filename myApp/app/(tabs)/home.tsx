import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { colors, spacing, fontSize, borderRadius } from '../../constants/xend-theme';
import { SupportChatButton } from '../../constants/SupportChatButton';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello, User 👋</Text>
          <Text style={styles.balanceLabel}>Your Balance</Text>
          <Text style={styles.balance}>$0.00</Text>
        </View>

        <View style={styles.actions}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionRow}>
            <View style={styles.actionButton}>
              <Text style={styles.actionIcon}>📤</Text>
              <Text style={styles.actionText}>Send</Text>
            </View>
            <View style={styles.actionButton}>
              <Text style={styles.actionIcon}>📥</Text>
              <Text style={styles.actionText}>Receive</Text>
            </View>
            <View style={styles.actionButton}>
              <Text style={styles.actionIcon}>💱</Text>
              <Text style={styles.actionText}>Exchange</Text>
            </View>
          </View>
        </View>

        <View style={styles.recentSection}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>📭</Text>
            <Text style={styles.emptyText}>No recent transactions</Text>
          </View>
        </View>
      </ScrollView>
      <SupportChatButton onPress={() => {}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.surface,
    padding: spacing.xl,
    paddingTop: spacing.xxl,
    borderBottomLeftRadius: borderRadius.xl,
    borderBottomRightRadius: borderRadius.xl,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: colors.border,
  },
  greeting: {
    fontSize: fontSize.md,
    color: colors.textLight,
    marginBottom: spacing.sm,
  },
  balanceLabel: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
  },
  balance: {
    fontSize: fontSize.xxxl,
    fontWeight: '200',
    color: colors.primary,
  },
  actions: {
    padding: spacing.lg,
    marginTop: -spacing.lg,
  },
  sectionTitle: {
    fontSize: fontSize.lg,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.md,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButton: {
    backgroundColor: colors.surface,
    padding: spacing.lg,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    width: 100,
    borderWidth: 1,
    borderColor: colors.border,
  },
  actionIcon: {
    fontSize: 28,
    marginBottom: spacing.sm,
  },
  actionText: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
  },
  recentSection: {
    padding: spacing.lg,
  },
  emptyState: {
    backgroundColor: colors.surface,
    padding: spacing.xl,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  emptyIcon: {
    fontSize: 40,
    marginBottom: spacing.md,
  },
  emptyText: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
  },
});