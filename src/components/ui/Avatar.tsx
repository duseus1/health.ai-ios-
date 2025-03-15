"use client"

import type React from "react"
import { View, Text, Image, StyleSheet } from "react-native"
import { useTheme } from "../../context/ThemeContext"

interface AvatarProps {
  source?: { uri: string }
  fallback?: string
  size?: number
}

export const Avatar: React.FC<AvatarProps> = ({ source, fallback, size = 40 }) => {
  const { isDark } = useTheme()

  const getFallbackInitials = () => {
    if (!fallback) return ""
    return fallback
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: source ? "transparent" : isDark ? "#374151" : "#E5E7EB",
        },
      ]}
    >
      {source ? (
        <Image
          source={source}
          style={[
            styles.image,
            {
              width: size,
              height: size,
              borderRadius: size / 2,
            },
          ]}
        />
      ) : (
        <Text
          style={[
            styles.fallback,
            {
              fontSize: size * 0.4,
              color: isDark ? "#F9FAFB" : "#111827",
            },
          ]}
        >
          {getFallbackInitials()}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    resizeMode: "cover",
  },
  fallback: {
    fontWeight: "600",
  },
})

