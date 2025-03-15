"use client"

import type React from "react"
import { View, Text, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/Feather"
import { useTheme } from "../context/ThemeContext"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card"
import { Button } from "../components/ui/Button"
import { Progress } from "../components/ui/Progress"

const WaterIntake: React.FC = () => {
  const { isDark } = useTheme()

  return (
    <View style={styles.container}>
      <Card style={styles.mainCard}>
        <CardHeader>
          <CardTitle>Water Intake Tracker</CardTitle>
        </CardHeader>
        <CardContent>
          <View style={styles.circleContainer}>
            <View style={styles.progressCircle}>
              <View style={styles.progressInner}>
                <Text style={[styles.progressValue, { color: "#00BFFF" }]}>1.2L</Text>
                <Text style={[styles.progressLabel, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>of 3L goal</Text>
              </View>
            </View>

            <View style={styles.buttonsGrid}>
              <Button
                title="100ml"
                variant="outline"
                onPress={() => {}}
                icon={<Icon name="droplet" size={16} color="#00BFFF" />}
                style={styles.waterButton}
              />
              <Button
                title="200ml"
                variant="outline"
                onPress={() => {}}
                icon={<Icon name="droplet" size={16} color="#00BFFF" />}
                style={styles.waterButton}
              />
              <Button
                title="300ml"
                variant="outline"
                onPress={() => {}}
                icon={<Icon name="droplet" size={16} color="#00BFFF" />}
                style={styles.waterButton}
              />
              <Button
                title="Custom"
                variant="outline"
                onPress={() => {}}
                icon={<Icon name="plus" size={16} color={isDark ? "#F9FAFB" : "#111827"} />}
                style={styles.waterButton}
              />
            </View>
          </View>
        </CardContent>
      </Card>

      <View style={styles.row}>
        <Card style={styles.halfCard}>
          <CardHeader>
            <CardTitle>Today's Log</CardTitle>
          </CardHeader>
          <CardContent>
            <View style={styles.logContainer}>
              {[
                { time: "8:30 AM", amount: "300ml" },
                { time: "10:15 AM", amount: "200ml" },
                { time: "12:45 PM", amount: "500ml" },
                { time: "3:20 PM", amount: "200ml" },
              ].map((entry, index) => (
                <View key={index} style={[styles.logItem, { backgroundColor: isDark ? "#1F2937" : "#F3F4F6" }]}>
                  <View style={styles.logItemLeft}>
                    <Icon name="droplet" size={16} color="#00BFFF" style={styles.logIcon} />
                    <Text style={[styles.logTime, { color: isDark ? "#F9FAFB" : "#111827" }]}>{entry.time}</Text>
                  </View>
                  <Text style={[styles.logAmount, { color: isDark ? "#F9FAFB" : "#111827" }]}>{entry.amount}</Text>
                </View>
              ))}

              <Button
                title="Add Water Intake"
                icon={<Icon name="plus" size={16} color="#FFFFFF" />}
                onPress={() => {}}
                style={styles.button}
              />
            </View>
          </CardContent>
        </Card>

        <Card style={styles.halfCard}>
          <CardHeader>
            <CardTitle>Hydration Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <View
              style={[
                styles.insightBox,
                {
                  backgroundColor: isDark ? "#164E63" : "#ECFEFF",
                  borderColor: isDark ? "#0E7490" : "#BAE6FD",
                },
              ]}
            >
              <Text style={[styles.insightTitle, { color: isDark ? "#67E8F9" : "#0891B2" }]}>Current Status</Text>
              <Text style={[styles.insightText, { color: isDark ? "#D1D5DB" : "#4B5563" }]}>
                You're currently 40% of the way to your daily hydration goal. Based on your activity level, you should
                increase your water intake.
              </Text>
            </View>

            <View
              style={[
                styles.insightBox,
                {
                  backgroundColor: isDark ? "#713F12" : "#FFFBEB",
                  borderColor: isDark ? "#854D0E" : "#FEF3C7",
                },
              ]}
            >
              <Text style={[styles.insightTitle, { color: isDark ? "#FDE68A" : "#D97706" }]}>Recommendation</Text>
              <Text style={[styles.insightText, { color: isDark ? "#D1D5DB" : "#4B5563" }]}>
                Try to drink at least 500ml of water in the next 2 hours to stay on track with your hydration goals.
              </Text>
            </View>

            <View style={styles.weeklyContainer}>
              <View style={styles.weeklyHeader}>
                <Text style={[styles.weeklyLabel, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>Weekly Average</Text>
                <Text style={[styles.weeklyValue, { color: isDark ? "#F9FAFB" : "#111827" }]}>2.4L/day</Text>
              </View>
              <Progress value={80} />
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
  circleContainer: {
    alignItems: "center",
  },
  progressCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 8,
    borderColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  progressInner: {
    alignItems: "center",
  },
  progressValue: {
    fontSize: 32,
    fontWeight: "bold",
  },
  progressLabel: {
    fontSize: 14,
  },
  buttonsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 320,
  },
  waterButton: {
    width: "23%",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfCard: {
    width: "48%",
  },
  logContainer: {
    gap: 12,
  },
  logItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
  },
  logItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  logIcon: {
    marginRight: 12,
  },
  logTime: {
    fontSize: 14,
  },
  logAmount: {
    fontWeight: "500",
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
  weeklyContainer: {
    marginTop: 16,
  },
  weeklyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  weeklyLabel: {
    fontSize: 14,
  },
  weeklyValue: {
    fontSize: 14,
    fontWeight: "500",
  },
})

export default WaterIntake

