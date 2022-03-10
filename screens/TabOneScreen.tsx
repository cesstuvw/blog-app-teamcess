import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, TouchableOpacity, TextInput, Pressable, Dimensions} from 'react-native';
import { Text, View } from '../components/Themed';
import { colors } from '../constants/Colors';
import { RootTabScreenProps } from '../types';
import ViewWithLoading from '../components/TextInput/ViewWithLoading';
import { useTogglePasswordVisibility } from '../hooks/useTogglePasswordVisibility';
import { MaterialCommunityIcons} from '@expo/vector-icons';
import Button from '../components/Button/CustomizedButton'


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  
  const [loading, setLoading] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();

  setTimeout(() => {
    setLoading(false); 
  }, 3000);

  return (
    <ViewWithLoading loading={loading}> 
      <ImageBackground source={require('../assets/images/bgBlur.png')} style={styles.container}>
        <View style={styles.middleFloat}>
          <Image  source={require('../assets/images/Saly-31.png')} style={styles.imageSaly31}/>
          <Text style={styles.titleGreetings}>Hello{"\n"}There
            <Text style={{color: colors.backgroundLightM}}>.</Text>
          </Text>
          <Text style={styles.bodySignIn}>
            <Text style={{fontFamily:'roboto-black', color: colors.secondary}}>Sign in</Text> to connect with{"\n"}other people.</Text>
          <View style={styles.textBoxView}>
            <View style={styles.ellipse}></View>
            <TextInput 
              style ={[styles.textBoxViewText, {fontFamily:'roboto-bold'}]}
              placeholder="username"
              placeholderTextColor="#C8B1E4"
              value={username}
              onChangeText={(text: string) => {
                  setUsername(text);
              }}
            />
          </View>
          <View style={styles.textBoxView1}>
            <View style={[styles.ellipse, {backgroundColor: colors.ellipseEyeText}]}></View>
              <TextInput 
              style ={[styles.textBoxViewText, {fontFamily:'roboto-bold'}]}
              placeholder="password"
              placeholderTextColor="#C8B1E4"
              value={password}
              maxLength={10}
              secureTextEntry={passwordVisibility}
              onChangeText={(text: string) => {
                  setPassword(text);   
              }}
            />
            <Pressable onPress={handlePasswordVisibility} style ={styles.visibleEye}>
              <MaterialCommunityIcons name={rightIcon} size={22} color="#9B72CF"/>
            </Pressable>
          </View>
            <TouchableOpacity>
              <Text style={styles.forgotPass}>Forgot password?</Text>
            </TouchableOpacity>
            <Button title='Sign In'/>
            <Text style={styles.signUpText}>Need an account?{"\n"}
              <TouchableOpacity>
                  <Text style={{fontFamily: 'roboto-black',   color: colors.secondary}}>Sign Up</Text>
              </TouchableOpacity>
            </Text>
        </View>
      </ImageBackground>
    </ViewWithLoading>
  );
}

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleFloat: {
    flex: 0,   
    marginTop: 35,
    height: '86%', //86% //720
    width: '83%',
    backgroundColor: colors.primary,
    borderRadius: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 25,
  },
  imageSaly31: {
    flexDirection: 'column',
    marginTop: -96,
    alignSelf: 'center',
    width: 420, 
    height: 420, 
    zIndex: 1
  },
  titleGreetings: { 
    flexDirection: 'column',
    alignSelf: 'flex-start',
    marginTop: -130,
    marginLeft: 45,
    fontFamily: 'roboto-black',
    fontSize: 40,
    color: colors.secondary,
    textAlign: 'left',
    lineHeight: 40
  },
  bodySignIn: { 
    flex: 0,
    flexDirection: 'column',
    alignSelf: 'flex-start',
    marginTop: 5,
    marginLeft: 52,
    fontSize: 15,
    color: colors.secondary,
    fontFamily: 'roboto-light',
    textAlign: 'left'
  },
  textBoxView:{
    flex: 0,
    flexDirection: 'row',
    width: 240, 
    height: 50, 
    alignSelf: 'center',
    marginTop: 35,
    borderRadius: 25,
    backgroundColor: colors.backgroundLightM,
  },
  ellipse:{
    alignSelf: 'center',
    backgroundColor: colors.secondary,
    width: 18,
    height: 18,
    borderRadius: 25,
    marginLeft: 25,
    marginRight: 20
  },
  textBoxView1:{
    flex: 0,
    flexDirection: 'row',
    width: 240, 
    height: 50, 
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 25,
    backgroundColor: colors.backgroundLightM
  },
  textBoxViewText: {
    marginTop: -3,
    alignSelf: 'center',
    fontFamily: 'roboto-light',
    color: colors.ellipseEyeText,
    fontSize: 13,
  },
  visibleEye: { 
    position: 'absolute',
    right:  20,
    alignSelf: 'center',
    width: 25, 
    height: 25,
  },
  forgotPass: {
    alignSelf: 'center',
    marginTop: 18,
    fontFamily: 'roboto-light',
    fontSize: 10,
    color: colors.secondary
  },
  signIn: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    width: 240, 
    height: 50, 
    alignSelf: 'center',
    borderRadius: 25,
    backgroundColor: colors.secondary
  },
  signInText: {
    fontFamily: 'roboto-bold',
    fontSize: 13,
    color: colors.textLight
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

