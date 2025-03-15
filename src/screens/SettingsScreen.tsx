"use client"

import type React from "react"
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Switch, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/Feather"
import { useTheme } from "../context/ThemeContext"
import { Card } from "../components/ui/Card"

const SettingsScreen: React.FC = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDark ? "#111827" : "#F9FAFB" }]}>
      <ScrollView style={styles.scrollView}>
        <Text style={[styles.screenTitle, { color: isDark ? "#F9FAFB" : "#111827" }]}>Settings</Text>

        <Card style={styles.card}>
          <View style={styles.settingGroup}>
            <Text style={[styles.settingGroupTitle, { color: isDark ? "#F9FAFB" : "#111827" }]}>Appearance</Text>

            <View style={[styles.settingItem, { borderBottomColor: isDark ? "#374151" : "#E5E7EB" }]}>
              <View style={styles.settingItemLeft}>
                <Icon name={isDark ? "moon" : "sun"} size={20} color="#00BFFF" style={styles.settingIcon} />
                <Text style={[styles.settingLabel, { color: isDark ? "#F9FAFB" : "#111827" }]}>Dark Mode</Text>
              </View>
              <Switch
                value={isDark}
                onValueChange={toggleTheme}
                trackColor={{ false: "#E5E7EB", true: "#00BFFF" }}
                thumbColor="#FFFFFF"
              />
            </View>
          </View>

          <View style={styles.settingGroup}>
            <Text style={[styles.settingGroupTitle, { color: isDark ? "#F9FAFB" : "#111827" }]}>Notifications</Text>

            <View style={[styles.settingItem, { borderBottomColor: isDark ? "#374151" : "#E5E7EB" }]}>
              <View style={styles.settingItemLeft}>
                <Icon name="bell" size={20} color="#00BFFF" style={styles.settingIcon} />
                <Text style={[styles.settingLabel, { color: isDark ? "#F9FAFB" : "#111827" }]}>Push Notifications</Text>
              </View>
              <Switch value={true} trackColor={{ false: "#E5E7EB", true: "#00BFFF" }} thumbColor="#FFFFFF" />
            </View>

            <View style={[styles.settingItem, { borderBottomColor: isDark ? "#374151" : "#E5E7EB" }]}>
              <View style={styles.settingItemLeft}>
                <Icon name="clock" size={20} color="#00BFFF" style={styles.settingIcon} />
                <Text style={[styles.settingLabel, { color: isDark ? "#F9FAFB" : "#111827" }]}>Reminders</Text>
              </View>
              <Switch value={true} trackColor={{ false: "#E5E7EB", true: "#00BFFF" }} thumbColor="#FFFFFF" />
            </View>
          </View>

          <View style={styles.settingGroup}>
            <Text style={[styles.settingGroupTitle, { color: isDark ? "#F9FAFB" : "#111827" }]}>Account</Text>

            <TouchableOpacity>
              <View style={[styles.settingItem, { borderBottomColor: isDark ? "#374151" : "#E5E7EB" }]}>
                <View style={styles.settingItemLeft}>
                  <Icon name="user" size={20} color="#00BFFF" style={styles.settingIcon} />
                  <Text style={[styles.settingLabel, { color: isDark ? "#F9FAFB" : "#111827" }]}>Profile</Text>
                </View>
                <Icon name="chevron-right" size={20} color={isDark ? "#9CA3AF" : "#6B7280"} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[styles.settingItem, { borderBottomColor: isDark ? "#374151" : "#E5E7EB" }]}>
                <View style={styles.settingItemLeft}>
                  <Icon name="shield" size={20} color="#00BFFF" style={styles.settingIcon} />
                  <Text style={[styles.settingLabel, { color: isDark ? "#F9FAFB" : "#111827" }]}>Privacy</Text>
                </View>
                <Icon name="chevron-right" size={20} color={isDark ? "#9CA3AF" : "#6B7280"} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.settingItem}>
                <View style={styles.settingItemLeft}>
                  <Icon name="help-circle" size={20} color="#00BFFF" style={styles.settingIcon} />
                  <Text style={[styles.settingLabel, { color: isDark ? "#F9FAFB" : "#111827" }]}>Help & Support</Text>
                </View>
                <Icon name="chevron-right" size={20} color={isDark ? "#9CA3AF" : "#6B7280"} />
              </View>
            </TouchableOpacity>
          </View>
        </Card>

        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>Health.ai v1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    padding: 0,
    overflow: "hidden",
  },
  settingGroup: {
    paddingVertical: 16,
  },
  settingGroupTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
  },
  settingItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingIcon: {
    marginRight: 12,
  },
  settingLabel: {
    fontSize: 16,
  },
  footer: {
    marginTop: 24,
    marginBottom: 16,
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
  },
})

export default SettingsScreen

