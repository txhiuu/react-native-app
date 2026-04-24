import { StyleSheet, Button, View} from 'react-native'
import { ThemedView } from '@/components/themed-view'
import { ThemedText } from '@/components/themed-text'
import { Link } from 'expo-router'
import React from 'react'
import { useTranslation } from "react-i18next"
import i18n from "./i18n";
import "./i18n"

const Main = () => {
  const { t } = useTranslation();
  return (
    <ThemedView style={styles.constant}>
      <ThemedText style={{fontWeight: "bold", fontSize: 20, textAlign: "center"}}>
          A Website that you can buy books!!!
      </ThemedText>

      <Link href="/login" style={styles.link}>
          <ThemedText style={{textAlign: 'center'}}>Login Page</ThemedText>
      </Link>

      <Link href="/register" style={styles.link}>
          <ThemedText style={{textAlign: 'center'}}>Register Page</ThemedText>
      </Link>

        <Link href="/(dashboard)/profile" style={styles.link}>
          <ThemedText style={{textAlign: 'center'}}>Profile Page</ThemedText>
      </Link>
    <View>
      <Button title="English" onPress={() => i18n.changeLanguage("en")} />
      <Button title="Tiếng Việt" onPress={() => i18n.changeLanguage("vi")} /> 
    </View>
    </ThemedView>
    
  )
}

export default Main

const styles = StyleSheet.create({
  constant:{
        flex : 1,
        justifyContent: 'center',
        padding: 20
      },
   link:{
        marginVertical: 10,
      },
})