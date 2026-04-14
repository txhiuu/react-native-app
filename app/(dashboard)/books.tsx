import { StyleSheet} from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/themed-view'
import { ThemedText } from '@/components/themed-text'

const Books = () => {
  return (
   <ThemedView style={styles.container}>
     <ThemedText style={styles.heading}>
        Your Reading List
     </ThemedText>
   </ThemedView>
  )
}

export default Books

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch"
    },
    heading: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center"
    }
})