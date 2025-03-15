import type React from "react"
import { View, StyleSheet } from "react-native"

interface ProgressProps {
  value: number // 0-100
  height?: number
  backgroundColor?: string
  progressColor?: string
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  height = 4,
  backgroundColor = "#E5E7EB",
  progressColor = "#00BFFF",
}) => {
  // Ensure value is between 0 and 100
  const clampedValue = Math.min(Math.max(value, 0), 100)

  return (
    <View style={[styles.container, { height, backgroundColor }]}>
      <View
        style={[
          styles.progress,
          {
            width: `${clampedValue}%`,
            backgroundColor: progressColor,
            height,
          },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 4,
    overflow: "hidden",
  },
  progress: {
    borderRadius: 4,
  },
})

