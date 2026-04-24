
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import {Link} from 'expo-router'
import React, {useState} from 'react'
import { ThemedText } from '@/components/themed-text'
import { LinearGradient } from 'expo-linear-gradient'
import Spacer from '@/components/spacer'
import { EvilIcons } from '@expo/vector-icons'
import ThemedButton from '@/components/themed-button'
import '../i18n'
import { useTranslation } from "react-i18next"


const Register = () => {
  const handleSubmit = () => {
      console.log('login from submit')
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);
  const { t } = useTranslation();
  return (
    <LinearGradient style={styles.constant} colors={["#F2E6EE","rgba(126, 87, 143, 0.87)"]} start={{x:1, y:0}} end={{x:1, y:1}}>
      <View style={styles.constant}>
       <SafeAreaView style={{flex:1}}>
         <View style={{height: 100}}>
          <View style={styles.whitecard}>
            <ScrollView style={styles.scroll}>
              <View style={styles.title}>
                <ThemedText style={styles.text1title}>
                  {t("Sign-up")}
                </ThemedText>
                <ThemedText style={styles.text2title}>
                  {t("Books-Store")}
                </ThemedText>
              </View>

       <Spacer height={30}/>
                <ThemedText style={styles.textinput}>
                  {t("email")}
                </ThemedText>
              <View style={styles.viewinput}>
                <EvilIcons name="user" color='#77777' size={30} style={styles.iconinput}/>
                <TextInput 
                placeholder='Email' 
                value=''
                onChangeText={(text) => setEmail(text)} 
                style={styles.inputemail}
                keyboardType="email-address"
                autoCapitalize="none"
                />
              </View>
              <ThemedText style={styles.textinput}>
                  {t("password")}
                </ThemedText>
              <View style={styles.viewinput}>
                <EvilIcons name="lock" color='#77777' size={30} style={styles.iconinput}/>
                <TextInput 
                placeholder='Email' 
                value=''
                onChangeText={(text) => setPassword(text)} 
                style={styles.inputemail}
                secureTextEntry={true}
                />
              </View>
              <ThemedText style={styles.textinput}>
                  {t("r-pass")}
                </ThemedText>
              <View style={styles.viewinput}>
                <EvilIcons name="lock" color='#77777' size={30} style={styles.iconinput}/>
                <TextInput 
                placeholder='Email' 
                value=''
                onChangeText={(text) => setPassword(text)} 
                style={styles.inputemail}
                secureTextEntry={true}
                />
              </View>
      
      <Spacer height={10}/>
               <View style={styles.constants}>
                <ThemedButton onPress={handleSubmit} style={{borderRadius: 40, backgroundColor:"#FF0000"}}>
                <ThemedText style={{color: "#f2f2f2", textAlign:'center', fontWeight:'bold', fontSize: 17}}>{t("Sign-up")}</ThemedText>
                </ThemedButton>
              </View>
       <Spacer height={10}/>

              <View style={{}}>  
                <ThemedText style={{color: '#777777'}}>
                  ------------------------------------OR-------------------------------------
                </ThemedText>
              </View>
        
        <Spacer height={15}/>
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
                <ThemedText style={{fontSize: 18, paddingLeft: 10, color: '#ffff'}}>Facebook</ThemedText>
              </View>
            </Link>
           </View>

<Spacer height={50}/>
        <View style={styles.end} >
          <ThemedText style={{color:'#777777'}}>{t("have-acc")}</ThemedText>
          <Link href='/login' style={styles.lastlink}>{t("sign-in")}</Link>
        </View>

            </ScrollView>
          </View>
         </View>
       </SafeAreaView>
      </View>
    </LinearGradient>
  )
}

export default Register

const styles = StyleSheet.create({
  constant:{
        flex : 1,
        justifyContent: 'center',
        padding: 10
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
   
      title:{
       marginTop: 20
      },
 
      text1title:{
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

      textinput:{
        fontWeight:'bold', 
        paddingLeft: 10, 
        marginBottom: 5
      },

      viewinput:{
       flexDirection:'row',
       alignItems: 'center', 
       backgroundColor: '#eee', 
       borderRadius: 35,
       marginLeft: 5,
       marginRight: 5,
       marginBottom: 15
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
        backgroundColor:'#006dfb',
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
















       
      }
)