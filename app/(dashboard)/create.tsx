import { StyleSheet} from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/themed-view'
import { ThemedText } from '@/components/themed-text'

const Create = () => {
  return (
   <ThemedView style={styles.container}>
     <ThemedText style={styles.heading}>
        Add a New Book
     </ThemedText>
   </ThemedView>
  )
}

export default Create

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    heading: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center"
    }
})