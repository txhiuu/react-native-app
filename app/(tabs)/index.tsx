import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import { Button } from '@react-navigation/elements'
import { ThemedView } from '@/components/themed-view'
import { ThemedText } from '@/components/themed-text'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '@/constants/theme'
import Spacer from '@/components/spacer'
function index() {
  const handleSubmit = () => {
      console.log('login from submit')
    }
  return (
  
    // <View style={styles.constant}>

    //   <Image source={require('../../assets/images/logo.png')} style={{width: 50, height: 50}} />
    //   <Text style={styles.word}>Login</Text>

    //   <Text style={{marginBottom: 20}}>This is a my website</Text>

    //   <View>
    //     <Text style={styles.card}>Hello, this is a card</Text>
    //   </View>

    //   <Link href="/explore" style={styles.link}>
    //   <Text>Go to Explore</Text>
    //   </Link>
    // </View>
    <LinearGradient style={styles.constant} colors={["#FFFFFF", "#FFFF00", "#FF00FF"]} start={{x: 0, y: 0}} end={{x:1, y:1}}>
   
      <Image source={require('../../assets/images/logo.png')} style={styles.logo}/>
      <ThemedText style={styles.instroduce}>Welcome to my website</ThemedText>

      <TextInput placeholder='Email' value='ex.nguyenvana@gmail.com' style={styles.inputemail}/>

      <TextInput placeholder='Password' value='**********'style={styles.inputemail}/>

      
      <Spacer height={15}/>
      {/* <TouchableOpacity style={styles.button}>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>Login</Text>
      </TouchableOpacity> */}

      <Pressable 
      onPress={handleSubmit}
      style={({pressed}) => [styles.btn, pressed && styles.pressed]}
      >
      <ThemedText style={{color: "#f2f2f2", textAlign: "center"}}>Login</ThemedText>
      </Pressable>

       <Link href="/explore" style={styles.link}>
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
        paddingLeft: 10
      },

      link:{
        marginVertical: 10,
        borderBottomWidth: 1 
      },

      button:{
      backgroundColor: "#fff",
      padding: 20,
      borderRadius: 10,

      elevation: 5,

      },
      btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
      },

      pressed:{
        opacity: 0.8
      }
    // constant:{
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center"
    // }, 
    
    // word:{
    //     fontWeight: "bold",
    //     fontSize: 18
    // },

    // card:{
    //   borderWidth: 2,
    //   borderRadius: 5,
    //   padding : 5,
    //   backgroundColor: "gray",
    //   color: "#eee",
    //   marginBottom: 15
    // },
    // link:{
    //   marginVertical: 10,
    //   borderBottomWidth: 1
    // }

}
)