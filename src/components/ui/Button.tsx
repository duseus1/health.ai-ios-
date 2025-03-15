"use client"

import type React from "react"
import { TouchableOpacity, Text, StyleSheet, type ViewStyle, type TextStyle, ActivityIndicator } from "react-native"
import { useTheme } from "../../context/ThemeContext"

interface ButtonProps {
  onPress: () => void
  title: string
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  disabled?: boolean
  loading?: boolean
  icon?: React.ReactNode
  style?: ViewStyle
  textStyle?: TextStyle
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  variant = "default",
  size = "md",
  disabled = false,
  loading = false,
  icon,
  style,
  textStyle,
}) => {
  const { isDark } = useTheme()

  // Base styles
  const baseButtonStyle: ViewStyle = {
    ...styles.button,
    opacity: disabled ? 0.5 : 1,
  }

  // Size styles
  const sizeStyles: Record<string, ViewStyle> = {
    sm: { paddingVertical: 6, paddingHorizontal: 12 },
    md: { paddingVertical: 10, paddingHorizontal: 16 },
    lg: { paddingVertical: 12, paddingHorizontal: 20 },
  }

  // Variant styles
  const getVariantStyles = (): { button: ViewStyle; text: TextStyle } => {
    switch (variant) {
      case "outline":
        return {
          button: {
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: isDark ? "#374151" : "#E5E7EB",
          },
          text: {
            color: isDark ? "#F9FAFB" : "#111827",
          },
        }
      case "ghost":
        return {
          button: {
            backgroundColor: "transparent",
            borderWidth: 0,
          },
          text: {
            color: isDark ? "#F9FAFB" : "#111827",
          },
        }
      default:
        return {
          button: {
            backgroundColor: "#00BFFF", // Cyan color
            borderWidth: 0,
          },
          text: {
            color: "#FFFFFF",
          },
        }
    }
  }

  const variantStyles = getVariantStyles()

  return (
    <TouchableOpacity
      style={[baseButtonStyle, sizeStyles[size], variantStyles.button, style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator size="small" color={variantStyles.text.color} />
      ) : (
        <>
          {icon && <Text style={styles.icon}>{icon}</Text>}
          <Text style={[styles.text, variantStyles.text, textStyle]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
  },
  icon: {
    marginRight: 8,
  },
})

