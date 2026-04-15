// import { StyleSheet, Text, View } from 'react-native'
// import {Link} from 'expo-router'
// import React from 'react'

// const explore = () => {
//   return (
//     <View style={styles.constant}>
//       <Text style={{fontSize: 18, fontWeight: "bold"}}>Hi everyone!!!</Text>

//       <Link href={"/"} style={styles.link}>Go back Index</Link>
//     </View>
//   )
// }

// export default explore

// const styles = StyleSheet.create({
//   constant:{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//     }, 
//     link:{
//       marginVertical: 10,
//       borderBottomWidth: 1
//     }
// })
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native'
import {Link} from 'expo-router'
import React from 'react'
import { ThemedView } from '@/components/themed-view'
import { ThemedText } from '@/components/themed-text'
import { LinearGradient } from 'expo-linear-gradient'


const Register = () => {
  return (
    <LinearGradient style={styles.constant} colors={["#333399","#6666FF", "#FF3300","#CC3300", "#FF6600"]} start={{x:1, y:0}} end={{x:1, y:1}}>
      <Image source={require('../../assets/images/logo.png')} style={styles.logo}/>
      <ThemedText style={styles.instroduce} >Register</ThemedText>

      <TextInput placeholder='Email' value='ex. nguyenvana@gmail.com' style={styles.inputemail}/>
      <TextInput placeholder='Password' value='********' style={styles.inputemail}/>
      <TextInput placeholder='Password' value='********' style={styles.inputemail}/>

      <TouchableOpacity style={styles.button}>
      <Link href="/(tabs)/login" style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18}}>Confirm</Link>
      </TouchableOpacity>
      
    </LinearGradient>
  )
}

export default Register

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
        paddingLeft: 10,
        marginBottom: 20
      },
      button:{
      backgroundColor: "#fff",
      padding: 20,
      borderRadius: 10,

      elevation: 5

      }

})