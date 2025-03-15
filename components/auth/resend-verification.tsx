"use client"

import type React from "react"
import { useState } from "react"
import { View, Text, StyleSheet, TextInput } from "react-native"
import { useTheme } from "../../src/context/ThemeContext"
import Icon from "react-native-vector-icons/Feather"
import { Button } from "../../src/components/ui/Button"
import { Card, CardHeader, CardTitle, CardContent } from "../../src/components/ui/Card"

const ResendVerification: React.FC = () => {
  const { isDark } = useTheme()
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleResendVerification = async () => {
    setLoading(true)
    setMessage("")

    // Simulate resend verification logic
    setTimeout(() => {
      setLoading(false)
      setMessage("Verification link resent to your email.")
    }, 2000)
  }

  return (
    <Card style={styles.card}>
      <CardHeader>
        <CardTitle>Resend Verification</CardTitle>
      </CardHeader>
      <CardContent>
        {message ? (
          <View style={styles.messageContainer}>
            <Text style={[styles.messageText, { color: isDark ? "#F9FAFB" : "#111827" }]}>{message}</Text>
          </View>
        ) : null}
        <View style={styles.inputContainer}>
          <Icon name="mail" size={20} color={isDark ? "#9CA3AF" : "#6B7280"} style={styles.icon} />
          <TextInput
            style={[styles.input, { color: isDark ? "#F9FAFB" : "#111827" }]}
            placeholder="Email"
            placeholderTextColor={isDark ? "#9CA3AF" : "#6B7280"}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <Button
          title={loading ? "Resending..." : "Resend Verification"}
          onPress={handleResendVerification}
          disabled={loading}
        />
      </CardContent>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    maxWidth: 400,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
  },
  messageContainer: {
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
  },
  messageText: {
    fontSize: 16,
    textAlign: "center",
  },
})

export default ResendVerification

