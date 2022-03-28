import React, { Fragment, useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import { Text, View } from '../components/Themed';
import { colors } from '../constants/Colors';
import { RootTabScreenProps } from '../types';
import { TextInput } from 'react-native-paper'
import { SignUpButton } from '../components/Button/CustomizedButton'
import { Formik } from 'formik';
import * as yup from "yup";


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const handleRegister = () => {

  }

  const registerSchema = yup.object({
      first: yup.string().required('First Name is required'),
      last: yup.string().required('Last Name is required'),
      email: yup.string().required('Email Address is required')
        .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/, 'Invalid email address'),
      password: yup.string().required('Password is required'),
      confirm: yup.string().required('Confirm password is required')  
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      
      
  });

  return (
    <ImageBackground source={require('../assets/images/bgBlurSignUp.png')} style={styles.container}>
      <ScrollView
      style={{width:'100%'}}
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}>
        <Formik
            initialValues={{
              first: '',
              last: '',
              email: '',
              password: '',
              confirm: ''
            }}
        
            onSubmit={(values, actions) => {
                console.log(values);
                actions.resetForm()
            }}
        
            validationSchema = {registerSchema}
          >
              {({ handleChange, handleSubmit, values, errors, touched}) => (
                <Fragment>
                  <Text style={styles.titleGreetings}>Sign Up
                    <Text style={{color: colors.backgroundLightM}}>.</Text>
                  </Text>
                  <Text style={styles.bodySignUp}>
                        <Text style={{fontFamily:'roboto-black', color: colors.secondary}}>Create an account</Text>{"\n"}to join Space.
                  </Text>
                  <View style={styles.viewBody}>
                    <TextInput 
                      style ={styles.textBoxView}
                      placeholder="First Name"
                      placeholderTextColor="#C8B1E4"
                      theme={{ roundness: 65,   fonts: {regular: {fontFamily:'roboto-bold'}}}}
                      value={values.first}
                      underlineColor="transparent"
                      onChangeText={handleChange('first')}
                      autoComplete={false}
                      error={errors.first ? true : false} 
                    />
                      {
                        errors.first && 
                        <Text style={styles.errorMessage}>
                            {errors.first}
                        </Text>
                      }
                    <TextInput 
                      style= {styles.textBoxView}
                      placeholder="Last Name"
                      placeholderTextColor="#C8B1E4"
                      theme={{ roundness: 65,   fonts: {regular: {fontFamily:'roboto-bold'}}}}
                      value={values.last}
                      underlineColor="transparent"
                      onChangeText={handleChange('last')}
                      autoComplete={false}
                      error={errors.last ? true : false} 
                    />
                      {
                        errors.last && 
                        <Text style={styles.errorMessage}>
                            {errors.last}
                        </Text>
                      }
                    <TextInput 
                      style ={styles.textBoxView}
                      placeholder="Email"
                      placeholderTextColor="#C8B1E4"
                      theme={{ roundness: 65,   fonts: {regular: {fontFamily:'roboto-bold'}}}}
                      value={values.email}
                      underlineColor="transparent"
                      onChangeText={handleChange('email')}
                      autoComplete={false}
                      error={errors.email ? true : false} 
                    />
                    {
                      errors.email && 
                      <Text style={styles.errorMessage}>
                          {errors.email}
                      </Text>
                    }
                    <TextInput 
                      style ={styles.textBoxView}
                      placeholder="Password"
                      placeholderTextColor="#C8B1E4"
                      theme={{ roundness: 65,   fonts: {regular: {fontFamily:'roboto-bold'}}}}
                      value={values.password}
                      secureTextEntry={true}
                      underlineColor="transparent"
                      onChangeText={handleChange('password')}
                      autoComplete={false}
                      error={errors.password ? true : false} 
                    />
                    {
                      errors.password && 
                      <Text style={styles.errorMessage}>
                          {errors.password}
                      </Text>
                    }
                    <TextInput 
                      style ={styles.textBoxView}
                      placeholder="Confirm Password"
                      placeholderTextColor="#C8B1E4"
                      theme={{ roundness: 65,   fonts: {regular: {fontFamily:'roboto-bold'}}}}
                      value={values.confirm}
                      secureTextEntry={true}
                      underlineColor="transparent"
                      onChangeText={handleChange('confirm')}
                      autoComplete={false}
                      error={errors.confirm ? true : false} 
                    />
                    {
                      errors.confirm && 
                      <Text style={styles.errorMessage}>
                          {errors.confirm}
                      </Text>
                    }
                    <SignUpButton title='Sign Up'onPress={handleSubmit}/>
                      <View style={{height:'2%'}}></View>
                      <Text style={styles.signInDialog}>Already have an account?</Text>
                      <TouchableOpacity>
                            <Text style={{fontFamily: 'roboto-black',   color: colors.secondary, alignSelf:'center'}}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </Fragment>
              )}
        </Formik>
      </ScrollView>
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
    marginTop: 95,
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
  viewBody:{
    flex: 0, 
    width: '100%',
    paddingHorizontal: 60,
    paddingBottom: 60,
    overflow: 'hidden',
  },
  textBoxView:{
    flex: 0,
    height: 50,
    fontSize: 13,
    paddingRight: 25,
    paddingLeft: 25,
    backgroundColor: colors.backgroundLightM,
    marginBottom: 20,
    borderRadius: 65,
    overflow: 'hidden',
  },
  signInDialog: {
    flex: 0,
    marginTop: 15,
    marginBottom:5,
    textAlign: 'center',
    fontFamily: 'roboto-light',
    fontSize: 12,
    color: colors.secondary,
  },
  errorMessage: {
    fontSize: 10,
    fontFamily: 'roboto-light',
    color: colors.backgroundLightM,
    marginTop: -15,
    marginBottom: 13,
    marginLeft: 20
  }
});
