import type React from "react"
import { View, Text, StyleSheet, type ViewStyle, type TextStyle } from "react-native"

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "outline"
  color?: "default" | "primary" | "success" | "warning" | "danger"
  style?: ViewStyle
  textStyle?: TextStyle
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = "default", color = "default", style, textStyle }) => {
  // Color styles
  const getColorStyles = (): { bg: string; text: string; border: string } => {
    switch (color) {
      case "primary":
        return {
          bg: "#EFF6FF",
          text: "#3B82F6",
          border: "#BFDBFE",
        }
      case "success":
        return {
          bg: "#ECFDF5",
          text: "#10B981",
          border: "#A7F3D0",
        }
      case "warning":
        return {
          bg: "#FFFBEB",
          text: "#F59E0B",
          border: "#FDE68A",
        }
      case "danger":
        return {
          bg: "#FEF2F2",
          text: "#EF4444",
          border: "#FECACA",
        }
      default:
        return {
          bg: "#F3F4F6",
          text: "#6B7280",
          border: "#E5E7EB",
        }
    }
  }

  const colorStyles = getColorStyles()

  return (
    <View
      style={[
        styles.badge,
        variant === "outline"
          ? {
              backgroundColor: "transparent",
              borderWidth: 1,
              borderColor: colorStyles.border,
            }
          : { backgroundColor: colorStyles.bg },
        style,
      ]}
    >
      <Text style={[styles.text, { color: colorStyles.text }, textStyle]}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
  },
})

