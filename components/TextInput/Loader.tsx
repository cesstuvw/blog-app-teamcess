import { StyleSheet, ActivityIndicator } from 'react-native';
import { View } from '../../components/Themed';
import { colors } from '../../constants/Colors';


export default function Loader(){
  return(
      <View style={styles.loading}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#C8B1E4"/>
        </View>
      </View>
  )
}
  
const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex:1,
    
  },
  container: {
    justifyContent:'center',
    alignItems: 'center',
    width:150,
    height: 150,
    backgroundColor: colors.secondary,
    borderRadius: 45,
},
});

