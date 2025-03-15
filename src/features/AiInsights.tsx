"use client"

import type React from "react"
import { View, Text, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/Feather"
import { useTheme } from "../context/ThemeContext"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card"
import { Button } from "../components/ui/Button"

const AiInsights: React.FC = () => {
  const { isDark } = useTheme()

  return (
    <View style={styles.container}>
      <Card>
        <CardHeader>
          <View style={styles.headerWithIcon}>
            <Icon name="brain" size={18} color="#00BFFF" />
            <CardTitle>AI Health Assistant</CardTitle>
          </View>
        </CardHeader>
        <CardContent>
          <View
            style={[
              styles.insightContainer,
              {
                backgroundColor: isDark ? "#172A46" : "#EFF6FF",
                borderColor: isDark ? "#1E3A8A" : "#BFDBFE",
              },
            ]}
          >
            <Text style={[styles.insightTitle, { color: isDark ? "#F9FAFB" : "#111827" }]}>Good morning, User!</Text>
            <Text style={[styles.insightText, { color: isDark ? "#D1D5DB" : "#4B5563" }]}>
              Based on your recent health data, here are some personalized insights and recommendations to help you
              reach your goals:
            </Text>

            <View style={styles.insightItem}>
              <View style={[styles.insightIcon, { backgroundColor: isDark ? "#1E3A8A" : "#DBEAFE" }]}>
                <Icon name="moon" size={16} color="#3B82F6" />
              </View>
              <View style={styles.insightContent}>
                <Text style={[styles.insightItemTitle, { color: isDark ? "#F9FAFB" : "#111827" }]}>Sleep Pattern</Text>
                <Text style={[styles.insightItemText, { color: isDark ? "#D1D5DB" : "#4B5563" }]}>
                  Your sleep has been inconsistent this week. Try to maintain a regular sleep schedule, even on
                  weekends, to improve your overall sleep quality.
                </Text>
              </View>
            </View>

            <View style={styles.insightItem}>
              <View style={[styles.insightIcon, { backgroundColor: isDark ? "#164E63" : "#CFFAFE" }]}>
                <Icon name="droplet" size={16} color="#06B6D4" />
              </View>
              <View style={styles.insightContent}>
                <Text style={[styles.insightItemTitle, { color: isDark ? "#F9FAFB" : "#111827" }]}>Hydration</Text>
                <Text style={[styles.insightItemText, { color: isDark ? "#D1D5DB" : "#4B5563" }]}>
                  You're currently 40% of the way to your daily hydration goal. Based on your activity level, you should
                  increase your water intake by at least 500ml in the next few hours.
                </Text>
              </View>
            </View>

            <View style={styles.insightItem}>
              <View style={[styles.insightIcon, { backgroundColor: isDark ? "#14532D" : "#DCFCE7" }]}>
                <Icon name="coffee" size={16} color="#10B981" />
              </View>
              <View style={styles.insightContent}>
                <Text style={[styles.insightItemTitle, { color: isDark ? "#F9FAFB" : "#111827" }]}>Nutrition</Text>
                <Text style={[styles.insightItemText, { color: isDark ? "#D1D5DB" : "#4B5563" }]}>
                  Your protein intake has been below target for the past 3 days. For dinner today, consider a
                  protein-rich meal like grilled chicken with quinoa and vegetables.
                </Text>
              </View>
            </View>

            <Button title="View Detailed Analysis" onPress={() => {}} style={styles.button} />
          </View>
        </CardContent>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  headerWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  insightContainer: {
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
  },
  insightTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  insightText: {
    fontSize: 14,
    marginBottom: 16,
  },
  insightItem: {
    flexDirection: "row",
    marginBottom: 16,
  },
  insightIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  insightContent: {
    flex: 1,
  },
  insightItemTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  insightItemText: {
    fontSize: 14,
  },
  button: {
    marginTop: 8,
  },
})

export default AiInsights

