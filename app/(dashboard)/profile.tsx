import { StyleSheet} from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/themed-view'
import { ThemedText } from '@/components/themed-text'

const Profile = () => {
  return (
   <ThemedView style={styles.container}>
     <ThemedText style={styles.heading}>
        Your Email
     </ThemedText>

     <ThemedText>
        Time to start reading some books...
     </ThemedText>
   </ThemedView>
  )
}

export default Profile

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