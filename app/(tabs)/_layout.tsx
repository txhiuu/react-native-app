import { StyleSheet, Text,useColorScheme, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Colors } from '@/constants/theme'
import { LinearGradient } from 'expo-linear-gradient'


const _layout = () => {
  
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme as 'light' | 'dark'] ?? Colors.light //ép kiểu
  return (
    // <Stack screenOptions={{headerStyle: {backgroundColor: theme.navBackground}, headerTintColor: theme.title, headerTitleAlign: 'center'}}>
    //   <Stack.Screen name = "index" options={{title: 'Home'}} />
    //   <Stack.Screen name = "explore" options={{title: 'Register'}} />
    // </Stack>
    <Stack screenOptions={{headerStyle: {backgroundColor: theme.background}, headerTintColor: theme.tint, headerTitleAlign: 'center'}}>
      <Stack.Screen name = "login" options={{title: 'Home'}}/>
      <Stack.Screen name = "register" options={{title: 'Register'}}/>
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})
