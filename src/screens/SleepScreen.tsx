"use client"

import type React from "react"
import { Text, StyleSheet, SafeAreaView, ScrollView } from "react-native"
import { useTheme } from "../context/ThemeContext"
import SleepTracker from "../features/SleepTracker"

const SleepScreen: React.FC = () => {
  const { isDark } = useTheme()

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDark ? "#111827" : "#F9FAFB" }]}>
      <ScrollView style={styles.scrollView}>
        <Text style={[styles.screenTitle, { color: isDark ? "#F9FAFB" : "#111827" }]}>Sleep</Text>
        <SleepTracker />
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
})

export default SleepScreen

