"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { supabase } from "@/lib/supabase"

export default function ConfirmUserPage() {
  const [userId, setUserId] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleConfirmUser = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)

    try {
      // This requires admin privileges and should only be used in development
      const { data, error } = await supabase.auth.admin.updateUserById(userId, { email_confirm: true })

      if (error) throw error

      setResult({
        success: true,
        message: "User confirmed successfully!",
      })
    } catch (err: any) {
      console.error("Error confirming user:", err)
      setResult({
        success: false,
        message: err.message || "Failed to confirm user",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Confirm User (Development Only)</CardTitle>
          <CardDescription>Manually confirm a user without email verification</CardDescription>
        </CardHeader>
        <CardContent>
          {result && (
            <Alert variant={result.success ? "default" : "destructive"} className="mb-4">
              <AlertDescription>{result.message}</AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleConfirmUser}>
            <div className="space-y-4">
              <div>
                <Input
                  placeholder="Enter user ID"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Processing..." : "Confirm User"}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          Note: This requires admin privileges and should only be used in development.
        </CardFooter>
      </Card>
    </div>
  )
}

