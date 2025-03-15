"use client"

import type React from "react"
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/Feather"
import { useTheme } from "../context/ThemeContext"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card"
import { Button } from "../components/ui/Button"
import { Progress } from "../components/ui/Progress"
import { Badge } from "../components/ui/Badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/Tabs"
import SleepTracker from "../features/SleepTracker"
import WaterIntake from "../features/WaterIntake"
import CalorieCounter from "../features/CalorieCounter"
import WorkoutTracker from "../features/WorkoutTracker"
import AiInsights from "../features/AiInsights"

const DashboardScreen: React.FC = () => {
  const { isDark, toggleTheme } = useTheme()
  const userName = "User"

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDark ? "#111827" : "#F9FAFB" }]}>
      <View style={styles.header}>
        <View>
          <Text style={[styles.headerTitle, { color: isDark ? "#F9FAFB" : "#111827" }]}>Good morning, {userName}</Text>
          <Text style={[styles.headerSubtitle, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>
            Here's your health summary for today
          </Text>
        </View>
        <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
          <Icon name={isDark ? "sun" : "moon"} size={20} color={isDark ? "#F9FAFB" : "#111827"} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.actionButton}>
          <Button title="Log Activity" icon={<Icon name="plus" size={16} color="#FFFFFF" />} onPress={() => {}} />
        </View>

        <View style={styles.statsGrid}>
          <Card style={styles.statsCard}>
            <CardHeader>
              <CardTitle>Sleep</CardTitle>
            </CardHeader>
            <CardContent>
              <View style={styles.statContent}>
                <Text style={[styles.statValue, { color: isDark ? "#F9FAFB" : "#111827" }]}>7h 12m</Text>
                <Badge color="primary">+8%</Badge>
              </View>
              <Progress value={80} />
            </CardContent>
          </Card>

          <Card style={styles.statsCard}>
            <CardHeader>
              <CardTitle>Water</CardTitle>
            </CardHeader>
            <CardContent>
              <View style={styles.statContent}>
                <Text style={[styles.statValue, { color: isDark ? "#F9FAFB" : "#111827" }]}>1.2L</Text>
                <Badge color="warning">-15%</Badge>
              </View>
              <Progress value={40} progressColor="#F59E0B" />
            </CardContent>
          </Card>

          <Card style={styles.statsCard}>
            <CardHeader>
              <CardTitle>Calories</CardTitle>
            </CardHeader>
            <CardContent>
              <View style={styles.statContent}>
                <Text style={[styles.statValue, { color: isDark ? "#F9FAFB" : "#111827" }]}>1,248</Text>
                <Badge color="success">On track</Badge>
              </View>
              <Progress value={62} progressColor="#10B981" />
            </CardContent>
          </Card>

          <Card style={styles.statsCard}>
            <CardHeader>
              <CardTitle>Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <View style={styles.statContent}>
                <Text style={[styles.statValue, { color: isDark ? "#F9FAFB" : "#111827" }]}>8,432</Text>
                <Badge color="success">+12%</Badge>
              </View>
              <Progress value={70} progressColor="#10B981" />
            </CardContent>
          </Card>
        </View>

        <Tabs defaultValue="insights">
          <TabsList>
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
            <TabsTrigger value="sleep">Sleep</TabsTrigger>
            <TabsTrigger value="water">Water</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="workouts">Workouts</TabsTrigger>
          </TabsList>

          <TabsContent value="insights">
            <AiInsights />
          </TabsContent>

          <TabsContent value="sleep">
            <SleepTracker />
          </TabsContent>

          <TabsContent value="water">
            <WaterIntake />
          </TabsContent>

          <TabsContent value="nutrition">
            <CalorieCounter />
          </TabsContent>

          <TabsContent value="workouts">
            <WorkoutTracker />
          </TabsContent>
        </Tabs>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerSubtitle: {
    fontSize: 14,
    marginTop: 4,
  },
  themeToggle: {
    padding: 8,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  actionButton: {
    marginVertical: 16,
    alignItems: "flex-end",
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  statsCard: {
    width: "48%",
    marginBottom: 16,
  },
  statContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
})

export default DashboardScreen

