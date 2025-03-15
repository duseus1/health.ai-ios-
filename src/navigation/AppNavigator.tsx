"use client"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Icon from "react-native-vector-icons/Feather"
import { useTheme } from "../context/ThemeContext"

// Screens
import DashboardScreen from "../screens/DashboardScreen"
import NutritionScreen from "../screens/NutritionScreen"
import WorkoutsScreen from "../screens/WorkoutsScreen"
import SleepScreen from "../screens/SleepScreen"
import HydrationScreen from "../screens/HydrationScreen"
import SettingsScreen from "../screens/SettingsScreen"

// Types
export type RootStackParamList = {
  MainTabs: undefined
  Settings: undefined
}

export type MainTabParamList = {
  Dashboard: undefined
  Nutrition: undefined
  Workouts: undefined
  Sleep: undefined
  Hydration: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator<MainTabParamList>()

const MainTabs = () => {
  const { isDark } = useTheme()

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#00BFFF", // Cyan color
        tabBarInactiveTintColor: isDark ? "#6B7280" : "#9CA3AF",
        tabBarStyle: {
          backgroundColor: isDark ? "#111827" : "#FFFFFF",
          borderTopColor: isDark ? "#374151" : "#E5E7EB",
        },
        headerStyle: {
          backgroundColor: isDark ? "#111827" : "#FFFFFF",
        },
        headerTintColor: isDark ? "#F9FAFB" : "#111827",
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Nutrition"
        component={NutritionScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="pie-chart" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Workouts"
        component={WorkoutsScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="activity" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Sleep"
        component={SleepScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="moon" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Hydration"
        component={HydrationScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="droplet" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  )
}

const AppNavigator = () => {
  const { isDark } = useTheme()

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark ? "#111827" : "#FFFFFF",
        },
        headerTintColor: isDark ? "#F9FAFB" : "#111827",
      }}
    >
      <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigator

