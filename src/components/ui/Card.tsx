"use client"

import type React from "react"
import { View, Text, StyleSheet, type ViewStyle, type TextStyle } from "react-native"
import { useTheme } from "../../context/ThemeContext"

interface CardProps {
  children: React.ReactNode
  style?: ViewStyle
}

interface CardHeaderProps {
  children: React.ReactNode
  style?: ViewStyle
}

interface CardTitleProps {
  children: React.ReactNode
  style?: TextStyle
}

interface CardContentProps {
  children: React.ReactNode
  style?: ViewStyle
}

export const Card: React.FC<CardProps> = ({ children, style }) => {
  const { isDark } = useTheme()

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: isDark ? "#1F2937" : "#FFFFFF",
          shadowColor: isDark ? "#000000" : "#000000",
        },
        style,
      ]}
    >
      {children}
    </View>
  )
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, style }) => {
  return <View style={[styles.cardHeader, style]}>{children}</View>
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, style }) => {
  const { isDark } = useTheme()

  return <Text style={[styles.cardTitle, { color: isDark ? "#9CA3AF" : "#6B7280" }, style]}>{children}</Text>
}

export const CardContent: React.FC<CardContentProps> = ({ children, style }) => {
  return <View style={[styles.cardContent, style]}>{children}</View>
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 16,
  },
  cardHeader: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "500",
  },
  cardContent: {
    padding: 16,
  },
})

