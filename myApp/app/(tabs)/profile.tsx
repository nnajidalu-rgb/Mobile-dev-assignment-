import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { colors, spacing, fontSize, borderRadius } from '../../constants/xend-theme';

export default function Profile() {
  const menuItems = [
    { icon: '👤', title: 'Personal Details', onPress: () => {} },
    { icon: '🏦', title: 'Bank Accounts', onPress: () => {} },
    { icon: '🔔', title: 'Notifications', onPress: () => {} },
    { icon: '🔒', title: 'Security', onPress: () => {} },
    { icon: '❓', title: 'Help & Support', onPress: () => {} },
    { icon: '📋', title: 'Terms & Conditions', onPress: () => {} },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
        </View>

        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>U</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>User</Text>
            <Text style={styles.userEmail}>user@example.com</Text>
          </View>
        </View>

        <View style={styles.menuSection}>
          {menuItems.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.menuItem}
              onPress={item.onPress}
            >
              <Text style={styles.menuIcon}>{item.icon}</Text>
              <Text style={styles.menuTitle}>{item.title}</Text>
              <Text style={styles.menuArrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.signOutButton}
          onPress={() => router.replace('/(auth)/welcome')}
        >
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
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
    letterSpacing: 1,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    padding: spacing.lg,
    marginTop: -spacing.md,
    marginHorizontal: spacing.lg,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.goldAccent,
  },
  avatarText: {
    fontSize: 28,
    color: colors.black,
    fontWeight: 'bold',
  },
  profileInfo: {
    marginLeft: spacing.md,
  },
  userName: {
    fontSize: fontSize.lg,
    fontWeight: '600',
    color: colors.text,
  },
  userEmail: {
    fontSize: fontSize.sm,
    color: colors.textSecondary,
    marginTop: 2,
  },
  menuSection: {
    margin: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  menuIcon: {
    fontSize: 20,
    marginRight: spacing.md,
  },
  menuTitle: {
    flex: 1,
    fontSize: fontSize.md,
    color: colors.text,
  },
  menuArrow: {
    fontSize: 24,
    color: colors.textLight,
  },
  signOutButton: {
    margin: spacing.lg,
    padding: spacing.lg,
    backgroundColor: 'transparent',
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.error,
  },
  signOutText: {
    fontSize: fontSize.md,
    color: colors.error,
    fontWeight: '600',
  },
});