import {StyleSheet} from 'react-native'
import Colors from '../../res/Colors'

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
  },
  image:{
    flex:1,
    resizeMode:'cover',
    justifyContent:'center',
  },
  layerColor:{
    flex:2,
    backgroundColor:'#0C77F240',
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    margin:20,
    marginBottom:40,
    marginTop:70,
    fontSize:60,
    fontWeight:'bold',
    color:Colors.white,
  },
  label:{
    marginBottom:8,
    fontSize:20,
    color:Colors.white,
  },
  input:{
    paddingVertical: 5,
    paddingHorizontal: 12,
    marginBottom:30,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.zircon,
    backgroundColor:Colors.white
  },
  button:{
    padding:15,
    width:'50%',
    alignSelf:'center',
    marginTop:20,
    borderRadius:15,
    backgroundColor:'#121212cc',
    borderColor:Colors.white,
    borderWidth:1,
    marginBottom:80,
  },
  btnText:{
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold',
    paddingHorizontal:25,
    color:Colors.white
  },
  content:{
    width:'80%',
    alignSelf:'center'
  },
  formLayerColor:{
    width:'90%',
    height: 'auto',
    backgroundColor:'#121212cc',
    borderRadius: 20,
    margin: 20,
  },
  
})

export default styles