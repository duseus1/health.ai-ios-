import { createClient } from "@supabase/supabase-js"

// Make sure we're using the correct environment variable names
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Add error handling and fallback for environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing Supabase environment variables. Please check your .env file.")
}

// Create a simple client for data storage only (no auth)
export const supabase = createClient(supabaseUrl || "", supabaseAnonKey || "")

// Mock data storage functions for local development without Supabase
export const localStorageDB = {
  // Save data to localStorage
  saveData: (key: string, data: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(data))
      return { error: null }
    } catch (error) {
      console.error(`Error saving ${key}:`, error)
      return { error }
    }
  },

  // Get data from localStorage
  getData: (key: string) => {
    try {
      const data = localStorage.getItem(key)
      return { data: data ? JSON.parse(data) : null, error: null }
    } catch (error) {
      console.error(`Error getting ${key}:`, error)
      return { data: null, error }
    }
  },
}

