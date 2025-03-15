"use client"

import React, { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import { useTheme } from "../../context/ThemeContext"

interface TabsProps {
  defaultValue: string
  children: React.ReactNode
}

interface TabsListProps {
  children: React.ReactNode
}

interface TabsTriggerProps {
  value: string
  children: React.ReactNode
  onPress?: (value: string) => void
  isActive?: boolean
}

interface TabsContentProps {
  value: string
  children: React.ReactNode
  activeValue?: string
}

type TabsContextType = {
  value: string
  onChange: (value: string) => void
}

const TabsContext = React.createContext<TabsContextType>({
  value: "",
  onChange: () => {},
})

export const Tabs: React.FC<TabsProps> = ({ defaultValue, children }) => {
  const [value, setValue] = useState(defaultValue)

  return (
    <TabsContext.Provider value={{ value, onChange: setValue }}>
      <View style={styles.tabsContainer}>{children}</View>
    </TabsContext.Provider>
  )
}

export const TabsList: React.FC<TabsListProps> = ({ children }) => {
  const { isDark } = useTheme()

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={[styles.tabsList, { backgroundColor: isDark ? "#1F2937" : "#F3F4F6" }]}
    >
      {children}
    </ScrollView>
  )
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, children }) => {
  const { value: activeValue, onChange } = React.useContext(TabsContext)
  const { isDark } = useTheme()

  const isActive = value === activeValue

  return (
    <TouchableOpacity
      style={[
        styles.tabsTrigger,
        isActive && {
          backgroundColor: isDark ? "#111827" : "#FFFFFF",
        },
      ]}
      onPress={() => onChange(value)}
      activeOpacity={0.7}
    >
      <Text
        style={[
          styles.tabsTriggerText,
          {
            color: isActive ? (isDark ? "#FFFFFF" : "#111827") : isDark ? "#9CA3AF" : "#6B7280",
            fontWeight: isActive ? "600" : "400",
          },
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}

export const TabsContent: React.FC<TabsContentProps> = ({ value, children }) => {
  const { value: activeValue } = React.useContext(TabsContext)

  if (value !== activeValue) {
    return null
  }

  return <View style={styles.tabsContent}>{children}</View>
}

const styles = StyleSheet.create({
  tabsContainer: {
    width: "100%",
  },
  tabsList: {
    borderRadius: 8,
    padding: 4,
    marginBottom: 16,
  },
  tabsTrigger: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    marginRight: 4,
  },
  tabsTriggerText: {
    fontSize: 14,
  },
  tabsContent: {
    marginTop: 8,
  },
})

