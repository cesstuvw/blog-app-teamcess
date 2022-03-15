import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, TouchableOpacity, TextInput, Pressable, Dimensions} from 'react-native';
import { Text, View } from '../components/Themed';
import { colors } from '../constants/Colors';
import { RootTabScreenProps } from '../types';
import ViewWithLoading from '../components/TextInput/ViewWithLoading';
import { useTogglePasswordVisibility } from '../hooks/useTogglePasswordVisibility';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import {SignUpButton} from '../components/Button/CustomizedButton'
import TabTwoScreen from './TabTwoScreen';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  
  const [first, setFirstName] = useState<string>("");
  const [last, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirmPassword] = useState<string>("");
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();

  return (
    <ImageBackground source={require('../assets/images/bgBlurSignUp.png')} style={styles.container}>
      <Text style={styles.titleGreetings}>Sign Up
        <Text style={{color: colors.backgroundLightM}}>.</Text>
      </Text>
      <Text style={styles.bodySignUp}>
            <Text style={{fontFamily:'roboto-black', color: colors.secondary}}>Create an account</Text>{"\n"}to join Space.
      </Text>
      <View style={styles.textBoxView}>
            <TextInput 
              style ={[styles.textBoxViewText, {fontFamily:'roboto-bold'}]}
              placeholder="First Name"
              placeholderTextColor="#C8B1E4"
              value={first}
              onChangeText={(text: string) => {
                  setFirstName(text);
              }}
            />
        </View>
        <View style={styles.textBoxView}>
              <TextInput 
                style ={[styles.textBoxViewText, {fontFamily:'roboto-bold'}]}
                placeholder="Last Name"
                placeholderTextColor="#C8B1E4"
                value={last}
                onChangeText={(text: string) => {
                    setLastName(text);
                }}
              />
          </View>
        <View style={styles.textBoxView}>
              <TextInput 
                style ={[styles.textBoxViewText, {fontFamily:'roboto-bold'}]}
                placeholder="Email"
                placeholderTextColor="#C8B1E4"
                value={email}
                onChangeText={(text: string) => {
                    setEmail(text);
                }}
              />
          </View>
        <View style={styles.textBoxView}>
              <TextInput 
                style ={[styles.textBoxViewText, {fontFamily:'roboto-bold'}]}
                placeholder="Password"
                placeholderTextColor="#C8B1E4"
                value={password}
                secureTextEntry={true}
                maxLength={10}
                onChangeText={(text: string) => {
                    setPassword(text);
                }}
              />
          </View>
          <View style={styles.textBoxView}>
                <TextInput 
                  style ={[styles.textBoxViewText, {fontFamily:'roboto-bold'}]}
                  placeholder="Confirm Password"
                  placeholderTextColor="#C8B1E4"
                  value={confirm}
                  maxLength={10}
                  secureTextEntry={true}
                  onChangeText={(text: string) => {
                      setConfirmPassword(text);
                  }}
                />
            </View>
            <SignUpButton title='Sign Up'/>
            <Text style={styles.signUpText}>Already have an account?{"\n"}
              <TouchableOpacity>
                  <Text style={{fontFamily: 'roboto-black',   color: colors.secondary}}>Sign In</Text>
              </TouchableOpacity>
            </Text>
    </ImageBackground>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleGreetings: { 
    flex: 0,
    marginTop: 40,
    marginLeft: 70,
    marginBottom: 10,
    alignSelf: 'flex-start',
    fontFamily: 'roboto-black',
    fontSize: 40,
    color: colors.secondary,
  },
  bodySignUp: { 
    flex: 0,
    marginLeft: 70,
    marginBottom: 45,
    flexDirection: 'column',
    alignSelf: 'flex-start',
    fontSize: 15,
    color: colors.secondary,
    fontFamily: 'roboto-light',
  },
  textBoxView:{
    flex: 0,
    flexDirection: 'row',
    width: 270, 
    height: 50, 
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 25,
    backgroundColor: colors.backgroundLightM,
  },
  textBoxViewText: {
    marginLeft: 35,
    alignSelf: 'center',
    fontFamily: 'roboto-light',
    color: colors.ellipseEyeText,
    fontSize: 13,
  },
  signUpText: {
    flex: 0,
    marginTop: 15,
    textAlign: 'center',
    fontFamily: 'roboto-light',
    fontSize: 12,
    lineHeight: 20,
    color: colors.secondary,
  }
});

