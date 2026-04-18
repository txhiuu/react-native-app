import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable, SafeAreaView, ScrollView } from 'react-native'
import { Link } from 'expo-router'
import React, {useState} from 'react'
import { Button } from '@react-navigation/elements'
//import { ThemedView } from '@/components/themed-view'
import { ThemedText } from '@/components/themed-text'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '@/constants/theme'
import Spacer from '@/components/spacer'
import ThemedButton from '@/components/themed-button'
import Checkbox from 'expo-checkbox'
import {EvilIcons, Ionicons} from '@expo/vector-icons'
function index() {
  const handleSubmit = () => {
      console.log('login from submit')
  }
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);

  return (

     <LinearGradient style={{flex: 1}} colors={["#F2E6EE","rgba(126, 87, 143, 0.87)"]} start={{x: 1, y: 0}} end={{x:1, y:1}}>
      <View style={styles.constant}>
        <SafeAreaView style={{flex: 1}}>
          <View style={{height: 100}}>
            <View style={styles.whitecard}>
              <ScrollView style={styles.scroll}>
                {/* <Image source={require('../../assets/images/logo.png')} style={styles.logo}/>  */}
                <ThemedText style={styles.text1title}>
                  SIGN IN
                </ThemedText>

                <ThemedText style={styles.text2title}>
                  Books Store
                </ThemedText>
                
  <Spacer height={35}/>
                <ThemedText style={{fontWeight:'bold', paddingLeft: 10}}>
                  Email:
                </ThemedText>

              <View style={styles.viewinput}>
                <EvilIcons name="user" color='#777777' size={30} style={styles.iconinput} />
                <TextInput        
                placeholder='Email' 
                value='' 
                onChangeText={(text) => setEmail(text)} 
                style={styles.inputemail}
                keyboardType="email-address"
                autoCapitalize="none" 
                />
              </View>  


                <Spacer height={5}/>
                <ThemedText style={{fontWeight:'bold', paddingLeft: 10}}>
                  Password:
                </ThemedText>


              <View style={styles.viewinput}>
                <EvilIcons name="lock" color='#777777' size={30} style={styles.iconinput} />
                <TextInput 
                placeholder='Password' 
                value='' 
               onChangeText={(text) => setPassword(text)} 
                style={styles.inputemail}
                secureTextEntry={true}
                />
              </View>


 <View style={{flexDirection:'row', marginTop: 10, marginLeft: 10}}>
                <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#0be830' : undefined} // Màu khi tích vào
                />
                <ThemedText style={{paddingLeft: 10, color: '#777777'}}>
                  Remember Me
                </ThemedText>
               <Link href="/create" style={{ paddingLeft: 60}}>
                <ThemedText style={{color:'#3399CC', fontSize: 12}}>Forgot your password ?</ThemedText>
              </Link>
 </View>   
              
              <Spacer/>
              <View style={styles.constants}>
                <ThemedButton onPress={handleSubmit} style={{borderRadius: 40, backgroundColor:"#FF0000"}}>
                <ThemedText style={{color: "#f2f2f2", textAlign:'center', fontWeight:'bold', fontSize: 17}}>SIGN IN</ThemedText>
                </ThemedButton>
              </View>

              <Spacer height={10}/>

              <View style={{}}>  
                <ThemedText style={{color: '#777777'}}>
                  ------------------------------------OR-------------------------------------
                </ThemedText>
              </View>
              {/* <View style={styles.containe}>
                 <View style={styles.line}>
                  <ThemedText style={styles.text}>-OR-</ThemedText>
                </View> 
              </View> */}

              <Spacer height={30} />

        <View style={{flexDirection:'row', alignSelf: 'center'}}>
            <Link href='/(dashboard)/profile'>
              <View style={styles.otherlog1} >
                <EvilIcons name="sc-google-plus" size={25} style={{paddingLeft: 5}}/>
                <ThemedText style={{fontSize: 18, paddingLeft: 10, color:'#ffff'}}>Google</ThemedText>
              </View>
            </Link>
          <Spacer width={30}/>
            <Link href='/(dashboard)/books'>
              <View style={styles.otherlog2} >
                <EvilIcons name="sc-facebook" size={25} style={{paddingLeft: 5}}/>
                <ThemedText style={{fontSize: 18, paddingLeft: 10, color:'#ffff'}}>Facebook</ThemedText>
              </View>
            </Link>
        </View>

<Spacer height={55}/>
        <View style={styles.end} >
          <ThemedText style={{color:'#777777'}}>Don't have an account yet ?</ThemedText>
          <Link href='/register' style={styles.lastlink}>Sign up</Link>
        </View>

    </ScrollView>
  </View>
</View>
</SafeAreaView>
</View>
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
        padding: 5
      },

      whitecard:{
        backgroundColor: "#ffff",
        borderRadius: 40, 
        elevation: 20,
        width: '100%',
        minHeight: 700
      },
      scroll:{
        padding: 5,
        paddingTop: 10
      },
      
      text1title:{
        marginTop: 50,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF0000',
        fontStyle: 'normal'
      },

      text2title:{
        textAlign: 'center', 
        fontSize: 15, 
        color:'#777777'
      },

      viewinput:{
       flexDirection:'row',
       alignItems: 'center', 
       backgroundColor: '#eee', 
       borderRadius: 35,
       marginLeft: 5,
       marginRight: 5
      },
      
       inputemail:{
        flex:1,
        paddingTop: 20,
        paddingLeft: 15,
        marginBottom: 10,
        height: 50,
      },

      iconinput:{
       marginRight: 10,
       paddingLeft: 15
      },

       checkbox:{
       width: 20,
       height: 20, 
       borderRadius: 5
       },

  //     containe: {
  //      flexDirection: 'row', 
  //     // alignItems: 'center', 
  //      marginVertical: 20,   
  // },
  //     line: {
  //      flex: 1,              
  //      height: 1,             
  //      backgroundColor: '#E0E0E0', 
  // },

  //     text: {
  //   width: 50,             // Độ rộng của khu vực chứa chữ
  //   textAlign: 'center',   // Căn chữ nằm giữa
  //   color: '#333',         // Màu chữ
  //   fontWeight: 'bold',    // Chữ đậm giống ảnh mẫu
  //   fontSize: 14,
  // },

      otherlog1:{
        flexDirection:'row',
        borderRadius: 40,
        alignItems:'center',
        backgroundColor:'#FF0000',
        width: 140,
        height: 50,
        paddingLeft: 10,
      },

      otherlog2:{
        flexDirection:'row',
        borderRadius: 40,
        alignItems:'center',
        backgroundColor:'#0073ff',
        width: 140,
        height: 50,
        paddingLeft: 10,
      },
      
      end:{
        flexDirection: 'row',
        alignSelf: 'center'
      },
      
      lastlink:{
        color:'#FF0000',
        paddingLeft: 5,
        fontWeight: 'bold',
        borderBottomWidth: 0.3,
        paddingTop: 2 
      },

      logo:{
        width: 60,
        height: 60,
        alignSelf: 'center'
      },

      btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 10,
      },

      pressed:{
        opacity: 0.8
      }
})
