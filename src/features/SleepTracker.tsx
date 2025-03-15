"use client"

import type React from "react"
import { View, Text, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/Feather"
import { useTheme } from "../context/ThemeContext"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card"
import { Button } from "../components/ui/Button"

const SleepTracker: React.FC = () => {
  const { isDark } = useTheme()

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const sleepData = [65, 45, 80, 72, 90, 55, 70]

  return (
    <View style={styles.container}>
      <Card style={styles.mainCard}>
        <CardHeader>
          <CardTitle>Sleep Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <View style={styles.chartContainer}>
            {sleepData.map((value, index) => (
              <View key={index} style={styles.barContainer}>
                <View
                  style={[
                    styles.bar,
                    {
                      height: `${value}%`,
                      backgroundColor: "#00BFFF",
                    },
                  ]}
                />
                <Text style={[styles.barLabel, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>{days[index]}</Text>
              </View>
            ))}
          </View>

          <View style={styles.statsContainer}>
            <View style={[styles.statBox, { backgroundColor: isDark ? "#1F2937" : "#F3F4F6" }]}>
              <Text style={[styles.statLabel, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>Avg. Duration</Text>
              <Text style={[styles.statValue, { color: isDark ? "#F9FAFB" : "#111827" }]}>7h 24m</Text>
            </View>

            <View style={[styles.statBox, { backgroundColor: isDark ? "#1F2937" : "#F3F4F6" }]}>
              <Text style={[styles.statLabel, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>Deep Sleep</Text>
              <Text style={[styles.statValue, { color: isDark ? "#F9FAFB" : "#111827" }]}>1h 45m</Text>
            </View>

            <View style={[styles.statBox, { backgroundColor: isDark ? "#1F2937" : "#F3F4F6" }]}>
              <Text style={[styles.statLabel, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>Sleep Score</Text>
              <Text style={[styles.statValue, { color: isDark ? "#F9FAFB" : "#111827" }]}>82/100</Text>
            </View>
          </View>
        </CardContent>
      </Card>

      <View style={styles.row}>
        <Card style={styles.halfCard}>
          <CardHeader>
            <CardTitle>Sleep Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <View style={styles.scheduleContainer}>
              <View style={[styles.scheduleItem, { backgroundColor: isDark ? "#1F2937" : "#F3F4F6" }]}>
                <View style={styles.scheduleItemLeft}>
                  <Icon name="clock" size={16} color="#00BFFF" style={styles.scheduleIcon} />
                  <View>
                    <Text style={[styles.scheduleTitle, { color: isDark ? "#F9FAFB" : "#111827" }]}>Bedtime</Text>
                    <Text style={[styles.scheduleTime, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>10:30 PM</Text>
                  </View>
                </View>
                <Icon name="calendar" size={16} color={isDark ? "#9CA3AF" : "#6B7280"} />
              </View>

              <View style={[styles.scheduleItem, { backgroundColor: isDark ? "#1F2937" : "#F3F4F6" }]}>
                <View style={styles.scheduleItemLeft}>
                  <Icon name="clock" size={16} color="#00BFFF" style={styles.scheduleIcon} />
                  <View>
                    <Text style={[styles.scheduleTitle, { color: isDark ? "#F9FAFB" : "#111827" }]}>Wake up</Text>
                    <Text style={[styles.scheduleTime, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>6:00 AM</Text>
                  </View>
                </View>
                <Icon name="calendar" size={16} color={isDark ? "#9CA3AF" : "#6B7280"} />
              </View>

              <Button
                title="Log Sleep Manually"
                icon={<Icon name="plus" size={16} color="#FFFFFF" />}
                onPress={() => {}}
                style={styles.button}
              />
            </View>
          </CardContent>
        </Card>

        <Card style={styles.halfCard}>
          <CardHeader>
            <CardTitle>Sleep Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <View
              style={[
                styles.insightBox,
                {
                  backgroundColor: isDark ? "#172A46" : "#EFF6FF",
                  borderColor: isDark ? "#1E3A8A" : "#BFDBFE",
                },
              ]}
            >
              <Text style={[styles.insightTitle, { color: isDark ? "#93C5FD" : "#3B82F6" }]}>
                <Icon name="bar-chart-2" size={14} /> Sleep Pattern Analysis
              </Text>
              <Text style={[styles.insightText, { color: isDark ? "#D1D5DB" : "#4B5563" }]}>
                Your sleep has been inconsistent this week. Try to maintain a regular sleep schedule, even on weekends,
                to improve your overall sleep quality.
              </Text>
            </View>

            <View
              style={[
                styles.insightBox,
                {
                  backgroundColor: isDark ? "#172554" : "#EFF6FF",
                  borderColor: isDark ? "#1E40AF" : "#BFDBFE",
                },
              ]}
            >
              <Text style={[styles.insightTitle, { color: isDark ? "#93C5FD" : "#2563EB" }]}>
                <Icon name="bar-chart-2" size={14} /> Recommendation
              </Text>
              <Text style={[styles.insightText, { color: isDark ? "#D1D5DB" : "#4B5563" }]}>
                Based on your activity level and sleep data, we recommend going to bed 30 minutes earlier to achieve
                optimal recovery.
              </Text>
            </View>
          </CardContent>
        </Card>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  mainCard: {
    marginBottom: 16,
  },
  chartContainer: {
    height: 200,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  barContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    height: "100%",
  },
  bar: {
    width: 12,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  barLabel: {
    marginTop: 8,
    fontSize: 12,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  statBox: {
    flex: 1,
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    marginHorizontal: 4,
  },
  statLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfCard: {
    width: "48%",
  },
  scheduleContainer: {
    gap: 12,
  },
  scheduleItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
  },
  scheduleItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  scheduleIcon: {
    marginRight: 12,
  },
  scheduleTitle: {
    fontWeight: "500",
  },
  scheduleTime: {
    fontSize: 12,
  },
  button: {
    marginTop: 8,
  },
  insightBox: {
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
  },
  insightTitle: {
    fontWeight: "500",
    marginBottom: 8,
    fontSize: 14,
  },
  insightText: {
    fontSize: 12,
  },
})

export default SleepTracker

