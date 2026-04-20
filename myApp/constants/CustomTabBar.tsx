import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Tabs, useSegments } from 'expo-router';
import { colors, spacing } from './xend-theme';

interface TabBarProps {
  tabs: Array<{
    name: string;
    title: string;
    icon: string;
  }>;
}

export const CustomTabBar = ({ tabs }: TabBarProps) => {
  const segments = useSegments();

  const getActiveTab = () => {
    const path = segments[0] || '';
    return path;
  };

  const activeTab = getActiveTab();

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.name;
        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tab}
            onPress={() => {
              // Navigate to tab using router
            }}
          >
            <Text style={[styles.icon, isActive && styles.activeIcon]}>
              {tab.icon}
            </Text>
            <Text style={[styles.title, isActive && styles.activeTitle]}>
              {tab.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingBottom: spacing.sm,
    paddingTop: spacing.sm,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xs,
  },
  icon: {
    fontSize: 24,
    color: colors.textLight,
  },
  activeIcon: {
    color: colors.primary,
  },
  title: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: 2,
  },
  activeTitle: {
    color: colors.primary,
    fontWeight: '600',
  },
});