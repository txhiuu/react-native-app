import {Tabs} from 'expo-router'
import React from 'react'
import { Colors } from '@/constants/theme'
import {useColorScheme} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

const DashboardLayout = () => {
  const colorScheme = useColorScheme()
    const theme = Colors[colorScheme as 'light' | 'dark'] ?? Colors.light
  return (
    <Tabs screenOptions={{headerShown: false, tabBarStyle:{
      backgroundColor: theme.background,
      padding: 10,
      height: 90
    },
    tabBarActiveTintColor: theme.tabIconDefault,
    tabBarInactiveTintColor: theme.icon
  }}
    >
     <Tabs.Screen
      name="profile" options={{ title: 'Profile', tabBarIcon: ( focused ) => (
        <Ionicons 
          size={24}
          name={focused ? 'person' : 'person-outline'}
          color={focused ? theme.tabIconDefault : theme.icon}
        />
      )}}
      />
      <Tabs.Screen 
      name="books" options={{ title: 'Books',tabBarIcon: ( focused ) => (
        <Ionicons 
          size={24}
          name={focused ? 'book' : 'book-outline'}
          color={focused ? theme.tabIconDefault : theme.icon}
        />
      )}}
      />
      <Tabs.Screen 
      name="create" options={{ title: 'Create', tabBarIcon: ( focused ) => (
        <Ionicons 
          size={24}
          name={focused ?'create' : 'create-outline'}
          color={focused ? theme.tabIconDefault : theme.icon}
        />
        
      )}}
      />
     
    </Tabs>
  )
}

export default DashboardLayout


