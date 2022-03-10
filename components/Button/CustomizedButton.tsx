import React from "react";
import { StyleSheet, TouchableOpacity, Text, StyleProp, ViewStyle} from 'react-native';
import { colors } from '../../constants/Colors';


interface ButtonProps {
    title: any,
    style?: StyleProp<ViewStyle>,
    onPress?: () => void;
}

const Button = (props: ButtonProps) => (
    <TouchableOpacity onPress={props.onPress} style={styles.signIn}>
      <Text style={styles.signInText}>{props.title}</Text>
    </TouchableOpacity>
  );


const styles = StyleSheet.create({
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
})

export default Button;