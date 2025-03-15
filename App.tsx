import type React from "react"
import { StatusBar, useColorScheme } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { ThemeProvider } from "./src/context/ThemeContext"
import AppNavigator from "./src/navigation/AppNavigator"

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark"

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
          <AppNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

export default App

