import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import { Button } from '@react-navigation/elements'
import { ThemedView } from '@/components/themed-view'
import { ThemedText } from '@/components/themed-text'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '@/constants/theme'
import Spacer from '@/components/spacer'
import ThemedButton from '@/components/themed-button'
function index() {
  const handleSubmit = () => {
      console.log('login from submit')
    }
  return (

    <LinearGradient style={styles.constant} colors={["#FFFFFF", "#FFFF00", "#FF00FF"]} start={{x: 0, y: 0}} end={{x:1, y:1}}>
   
      <Image source={require('../../assets/images/logo.png')} style={styles.logo}/>
      <ThemedText style={styles.instroduce}>Welcome to my website</ThemedText>

      <TextInput placeholder='Email' value='ex.nguyenvana@gmail.com' style={styles.inputemail}/>

      <TextInput placeholder='Password' value='**********'style={styles.inputemail}/>
      
      {/* <Spacer height={15}/> */}
      {/* <TouchableOpacity style={styles.button}>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>Login</Text>
      </TouchableOpacity> */}
<View style={styles.constants}>
      <ThemedButton onPress={handleSubmit}>
        <ThemedText style={{color: "#f2f2f2"}}>Login</ThemedText>
      </ThemedButton>
</View>
       <Link href="/register" style={styles.link}>
        <ThemedText style={{textAlign: 'center'}}>Don't have any account</ThemedText>
       </Link>
   
    </LinearGradient>
  )
}

export default index

const styles = StyleSheet.create({
      constant:{
        flex : 1,
        justifyContent: 'center',
        padding: 20
      },
      constants:{
        alignItems: "center",
        padding: 5
      },
      
      logo:{
        width: 80,
        height: 80,
        alignSelf: 'center' // can chinh anh ra giua # textalign va AlignItem
      },

      instroduce:{
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 15
      },

      inputemail:{
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#eee',
        paddingLeft: 10,
        marginBottom: 10
      },

      link:{
        marginVertical: 10,
        borderBottomWidth: 1 
      },

      // button:{
      // backgroundColor: "#fff",
      // padding: 20,
      // borderRadius: 10,

      // elevation: 5,

      // },
      btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 10,
      },

      pressed:{
        opacity: 0.8
      }
})
