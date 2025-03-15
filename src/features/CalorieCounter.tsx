"use client"

import type React from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"
import Icon from "react-native-vector-icons/Feather"
import { useTheme } from "../context/ThemeContext"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card"
import { Button } from "../components/ui/Button"
import { Progress } from "../components/ui/Progress"

const CalorieCounter: React.FC = () => {
  const { isDark } = useTheme()

  return (
    <View style={styles.container}>
      <Card style={styles.mainCard}>
        <CardHeader>
          <View style={styles.headerWithActions}>
            <CardTitle>Nutrition Tracker</CardTitle>
            <View style={styles.headerActions}>
              <Button
                title="Scan Food"
                variant="outline"
                icon={<Icon name="camera" size={16} color={isDark ? "#F9FAFB" : "#111827"} />}
                onPress={() => {}}
                style={styles.actionButton}
              />
              <Button
                title="Add Meal"
                icon={<Icon name="plus" size={16} color="#FFFFFF" />}
                onPress={() => {}}
                style={styles.actionButton}
              />
            </View>
          </View>
        </CardHeader>
        <CardContent>
          <View style={styles.nutritionContainer}>
            <View style={styles.calorieCircle}>
              <View style={styles.calorieInner}>
                <Text style={[styles.calorieValue, { color: "#10B981" }]}>1,248</Text>
                <Text style={[styles.calorieLabel, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>of 2,000 cal</Text>
              </View>
            </View>

            <View style={styles.macrosContainer}>
              <View style={[styles.macroBox, { backgroundColor: isDark ? "#1F2937" : "#F3F4F6" }]}>
                <Text style={[styles.macroLabel, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>Protein</Text>
                <View style={styles.macroValues}>
                  <Text style={[styles.macroValue, { color: isDark ? "#F9FAFB" : "#111827" }]}>78g</Text>
                  <Text style={[styles.macroTarget, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>of 120g</Text>
                </View>
                <Progress value={65} progressColor="#3B82F6" />
              </View>

              <View style={[styles.macroBox, { backgroundColor: isDark ? "#1F2937" : "#F3F4F6" }]}>
                <Text style={[styles.macroLabel, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>Carbs</Text>
                <View style={styles.macroValues}>
                  <Text style={[styles.macroValue, { color: isDark ? "#F9FAFB" : "#111827" }]}>145g</Text>
                  <Text style={[styles.macroTarget, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>of 250g</Text>
                </View>
                <Progress value={58} progressColor="#F59E0B" />
              </View>

              <View style={[styles.macroBox, { backgroundColor: isDark ? "#1F2937" : "#F3F4F6" }]}>
                <Text style={[styles.macroLabel, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>Fat</Text>
                <View style={styles.macroValues}>
                  <Text style={[styles.macroValue, { color: isDark ? "#F9FAFB" : "#111827" }]}>42g</Text>
                  <Text style={[styles.macroTarget, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>of 65g</Text>
                </View>
                <Progress value={64} progressColor="#EF4444" />
              </View>
            </View>
          </View>

          <View style={styles.searchContainer}>
            <View
              style={[
                styles.searchBox,
                {
                  backgroundColor: isDark ? "#1F2937" : "#F3F4F6",
                  borderColor: isDark ? "#374151" : "#E5E7EB",
                },
              ]}
            >
              <Icon name="search" size={16} color={isDark ? "#9CA3AF" : "#6B7280"} style={styles.searchIcon} />
              <TextInput
                placeholder="Search for food..."
                placeholderTextColor={isDark ? "#9CA3AF" : "#6B7280"}
                style={[styles.searchInput, { color: isDark ? "#F9FAFB" : "#111827" }]}
              />
            </View>

            <View style={styles.mealsList}>
              {[
                { meal: "Breakfast", food: "Oatmeal with berries", calories: 320 },
                { meal: "Lunch", food: "Grilled chicken salad", calories: 450 },
                { meal: "Snack", food: "Greek yogurt with honey", calories: 180 },
                { meal: "Dinner", food: "Salmon with vegetables", calories: 298 },
              ].map((item, index) => (
                <View key={index} style={[styles.mealItem, { backgroundColor: isDark ? "#1F2937" : "#F3F4F6" }]}>
                  <View style={styles.mealItemLeft}>
                    <Icon name="coffee" size={16} color={isDark ? "#9CA3AF" : "#6B7280"} style={styles.mealIcon} />
                    <View>
                      <Text style={[styles.mealName, { color: isDark ? "#F9FAFB" : "#111827" }]}>{item.meal}</Text>
                      <Text style={[styles.mealFood, { color: isDark ? "#9CA3AF" : "#6B7280" }]}>{item.food}</Text>
                    </View>
                  </View>
                  <Text style={[styles.mealCalories, { color: isDark ? "#F9FAFB" : "#111827" }]}>
                    {item.calories} cal
                  </Text>
                </View>
              ))}
            </View>
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
  mainCard: {
    marginBottom: 16,
  },
  headerWithActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  headerActions: {
    flexDirection: "row",
    gap: 8,
    marginTop: 8,
  },
  actionButton: {
    marginLeft: 8,
  },
  nutritionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 24,
  },
  calorieCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 8,
    borderColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    marginBottom: 16,
  },
  calorieInner: {
    alignItems: "center",
  },
  calorieValue: {
    fontSize: 24,
    fontWeight: "bold",
  },
  calorieLabel: {
    fontSize: 12,
  },
  macrosContainer: {
    flex: 1,
    justifyContent: "space-between",
    minWidth: 200,
  },
  macroBox: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  macroLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
  macroValues: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  macroValue: {
    fontSize: 16,
    fontWeight: "600",
  },
  macroTarget: {
    fontSize: 12,
  },
  searchContainer: {
    marginTop: 16,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 14,
  },
  mealsList: {
    gap: 12,
  },
  mealItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
  },
  mealItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  mealIcon: {
    marginRight: 12,
  },
  mealName: {
    fontWeight: "500",
  },
  mealFood: {
    fontSize: 12,
  },
  mealCalories: {
    fontWeight: "500",
  },
})

export default CalorieCounter

