import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { colors, spacing, fontSize, borderRadius } from '../../constants/xend-theme';

interface Transaction {
  id: string;
  type: 'sent' | 'received';
  amount: string;
  description: string;
  date: string;
}

const transactions: Transaction[] = [];

export default function History() {
  const renderItem = ({ item }: { item: Transaction }) => (
    <View style={styles.transactionItem}>
      <View style={styles.transactionIcon}>
        <Text style={styles.icon}>{item.type === 'sent' ? '📤' : '📥'}</Text>
      </View>
      <View style={styles.transactionInfo}>
        <Text style={styles.transactionDesc}>{item.description}</Text>
        <Text style={styles.transactionDate}>{item.date}</Text>
      </View>
      <Text style={[styles.transactionAmount, item.type === 'sent' ? styles.sent : styles.received]}>
        {item.type === 'sent' ? '-' : '+'}${item.amount}
      </Text>
    </View>
  );

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyIcon}>📭</Text>
      <Text style={styles.emptyTitle}>No Transactions Yet</Text>
      <Text style={styles.emptySubtitle}>
        Your transaction history will appear here
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>History</Text>
        <Text style={styles.subtitle}>View all your transactions</Text>
      </View>

      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={renderEmpty}
        contentContainerStyle={[
          styles.listContent,
          transactions.length === 0 && styles.emptyList,
        ]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.surface,
    padding: spacing.xl,
    paddingTop: spacing.xxl,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: colors.border,
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
  listContent: {
    padding: spacing.lg,
  },
  emptyList: {
    flex: 1,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  transactionIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  icon: {
    fontSize: 20,
  },
  transactionInfo: {
    flex: 1,
    marginLeft: spacing.md,
  },
  transactionDesc: {
    fontSize: fontSize.md,
    fontWeight: '500',
    color: colors.text,
  },
  transactionDate: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
    marginTop: 2,
  },
  transactionAmount: {
    fontSize: fontSize.lg,
    fontWeight: '600',
  },
  sent: {
    color: colors.error,
  },
  received: {
    color: colors.primary,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: spacing.lg,
    opacity: 0.5,
  },
  emptyTitle: {
    fontSize: fontSize.xl,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  emptySubtitle: {
    fontSize: fontSize.md,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});