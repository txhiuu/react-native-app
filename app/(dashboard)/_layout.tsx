import {Tabs} from 'expo-router'
import React from 'react'
import { Colors } from '@/constants/theme'
import {useColorScheme} from 'react-native'

const DashboardLayout = () => {
  const colorScheme = useColorScheme()
    const theme = Colors[colorScheme as 'light' | 'dark'] ?? Colors.light
  return (
    <Tabs screenOptions={{headerShown: false}}/>
  )
}

export default DashboardLayout


