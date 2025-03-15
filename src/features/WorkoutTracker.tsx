"use client"

import type React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/Feather"
import { useTheme } from "../context/ThemeContext"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card"
import { Button } from "../components/ui/Button"
import { Badge } from "../components/ui/Badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/Tabs"

const WorkoutTracker: React.FC = () => {
  const { isDark } = useTheme()

  return (
    <View style={styles.container}>
      <Card style={styles.mainCard}>
        <CardHeader>
          <View style={styles.headerWithActions}>
            <CardTitle>Workout History</CardTitle>
            <Button
              title="Start Workout"
              icon={<Icon name="plus" size={16} color="#FFFFFF" />}
              onPress={() => {}}
              style={styles.actionButton}
            />
          </View>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="history">
            <TabsList>
              <TabsTrigger value="history">History</TabsTrigger>
              <TabsTrigger value="stats">Stats</TabsTrigger>
              <TabsTrigger value="plans">Plans</TabsTrigger>
            </TabsList>

            <TabsContent value="history">
              <View style={styles.workoutsList}>
                {[
                  {
                    date: "Today",
                    workout: "Upper Body Strength",
                    duration: "45 min",
                    calories: "320",
                    completed: true,
                  },
                  {
                    date: "Yesterday",
                    workout: "HIIT Cardio",
                    duration: "30 min",
                    calories: "280",
                    completed: true,
                  },
                  {
                    date: "Mar 10",
                    workout: "Lower Body Focus",
                    duration: "50 min",
                    calories: "350",
                    completed: true,
                  },
                  {
                    date: "Mar 8",
                    workout: "Core & Flexibility",
                    duration: "40 min",
                    calories: "220",
                    completed: true,
                  },
                ].map((workout, index) => (
                  <View key={index} style={[styles.workoutItem, { backgroundColor: isDark ? "#1F2937" : "#F3F4F6" }]}>
                    <View style={styles.workoutItemLeft}>
                      <View
                        style={[
                          styles.workoutIcon,
                          {
                            backgroundColor: isDark ? "#374151" : "#E5E7EB",
                          },
                        ]}
                      >
                        <Icon name="activity" size={16} color="#00BFFF" />
                      </View>
                      <View>
                        <View style={styles.workoutTitleRow}>
                          <Text style={[styles.workoutTitle, { color: isDark ? "#F9FAFB" : "#111827" }]}>
                            {workout.workout}
                          </Text>
                          {workout.completed && <Badge color="success">Completed</Badge>}
                        </View>
                        <Text style={[styles.workoutDate, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>
                          {workout.date}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.workoutItemRight}>
                      <View style={styles.workoutDuration}>
                        <Icon
                          name="clock"
                          size={12}
                          color={isDark ? "#9CA3AF" : "#6B7280"}
                          style={styles.durationIcon}
                        />
                        <Text style={[styles.durationText, { color: isDark ? "#D1D5DB" : "#4B5563" }]}>
                          {workout.duration}
                        </Text>
                      </View>
                      <Text style={[styles.caloriesText, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>
                        {workout.calories} cal
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </TabsContent>

            <TabsContent value="stats">
              <View style={styles.statsContainer}>
                <View style={styles.chartContainer}>
                  {[65, 45, 80, 72, 90, 55, 70].map((value, index) => (
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
                      <Text style={[styles.barLabel, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                      </Text>
                    </View>
                  ))}
                </View>

                <View style={styles.statsBoxes}>
                  <View style={[styles.statBox, { backgroundColor: isDark ? "#1F2937" : "#F3F4F6" }]}>
                    <Text style={[styles.statLabel, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>Workouts</Text>
                    <Text style={[styles.statValue, { color: isDark ? "#F9FAFB" : "#111827" }]}>12</Text>
                    <Text style={styles.statChange}>+3 this week</Text>
                  </View>

                  <View style={[styles.statBox, { backgroundColor: isDark ? "#1F2937" : "#F3F4F6" }]}>
                    <Text style={[styles.statLabel, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>Avg. Duration</Text>
                    <Text style={[styles.statValue, { color: isDark ? "#F9FAFB" : "#111827" }]}>42m</Text>
                    <Text style={styles.statChange}>+5m from last week</Text>
                  </View>

                  <View style={[styles.statBox, { backgroundColor: isDark ? "#1F2937" : "#F3F4F6" }]}>
                    <Text style={[styles.statLabel, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>Calories</Text>
                    <Text style={[styles.statValue, { color: isDark ? "#F9FAFB" : "#111827" }]}>3,240</Text>
                    <Text style={styles.statChange}>+15% from last week</Text>
                  </View>
                </View>
              </View>
            </TabsContent>

            <TabsContent value="plans">
              <View style={styles.plansList}>
                {[
                  {
                    name: "4-Week Strength Builder",
                    level: "Intermediate",
                    workouts: 16,
                    progress: 25,
                  },
                  {
                    name: "HIIT Cardio Challenge",
                    level: "Advanced",
                    workouts: 12,
                    progress: 50,
                  },
                  {
                    name: "Beginner Full Body",
                    level: "Beginner",
                    workouts: 12,
                    progress: 0,
                  },
                ].map((plan, index) => (
                  <TouchableOpacity key={index}>
                    <View style={[styles.planItem, { backgroundColor: isDark ? "#1F2937" : "#F3F4F6" }]}>
                      <View style={styles.planItemLeft}>
                        <View
                          style={[
                            styles.planIcon,
                            {
                              backgroundColor: isDark ? "#374151" : "#E5E7EB",
                            },
                          ]}
                        >
                          <Icon name="calendar" size={16} color="#3B82F6" />
                        </View>
                        <View>
                          <Text style={[styles.planTitle, { color: isDark ? "#F9FAFB" : "#111827" }]}>{plan.name}</Text>
                          <View style={styles.planDetails}>
                            <Text style={[styles.planDetail, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>
                              {plan.level}
                            </Text>
                            <Text style={[styles.planDetailSeparator, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>
                              •
                            </Text>
                            <Text style={[styles.planDetail, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>
                              {plan.workouts} workouts
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.planItemRight}>
                        {plan.progress > 0 ? (
                          <Text style={[styles.planProgress, { color: isDark ? "#F9FAFB" : "#111827" }]}>
                            {plan.progress}%
                          </Text>
                        ) : (
                          <Button
                            title="Start"
                            size="sm"
                            variant="outline"
                            icon={<Icon name="play" size={12} color={isDark ? "#F9FAFB" : "#111827"} />}
                            onPress={() => {}}
                          />
                        )}
                        <Icon
                          name="chevron-right"
                          size={16}
                          color={isDark ? "#9CA3AF" : "#6B7280"}
                          style={styles.planArrow}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
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
  headerWithActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actionButton: {
    marginLeft: 8,
  },
  workoutsList: {
    gap: 12,
    marginTop: 8,
  },
  workoutItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 8,
  },
  workoutItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  workoutIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  workoutTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  workoutTitle: {
    fontWeight: "500",
  },
  workoutDate: {
    fontSize: 12,
  },
  workoutItemRight: {
    alignItems: "flex-end",
  },
  workoutDuration: {
    flexDirection: "row",
    alignItems: "center",
  },
  durationIcon: {
    marginRight: 4,
  },
  durationText: {
    fontSize: 12,
  },
  caloriesText: {
    fontSize: 12,
  },
  statsContainer: {
    marginTop: 8,
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
  statsBoxes: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  statBox: {
    flex: 1,
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  statLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
  },
  statChange: {
    fontSize: 10,
    color: "#10B981",
  },
  plansList: {
    gap: 12,
    marginTop: 8,
  },
  planItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 8,
  },
  planItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  planIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  planTitle: {
    fontWeight: "500",
  },
  planDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  planDetail: {
    fontSize: 12,
  },
  planDetailSeparator: {
    fontSize: 12,
    marginHorizontal: 4,
  },
  planItemRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  planProgress: {
    fontSize: 12,
    marginRight: 8,
  },
  planArrow: {
    marginLeft: 8,
  },
})

export default WorkoutTracker

