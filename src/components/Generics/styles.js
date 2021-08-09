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
    marginBottom:30,
    alignSelf:'center',
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
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom:30,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.zircon,
    backgroundColor:Colors.white,
    flex:1,
  },
  button:{
    padding:15,
    width:'45%',
    alignSelf:'center',
    marginTop:20,
    borderRadius:15,
    backgroundColor:'#121212cc',
    borderColor:Colors.white,
    borderWidth:1,
    marginBottom:30,
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
  passwordInput:{
    flexDirection:'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:30,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.zircon,
    backgroundColor:Colors.white,
  },
  warning:{
    padding:20,
    marginBottom:20,
    backgroundColor:"#C14242",
    borderRadius:10,
  },
  warningText:{
    alignSelf:'center',
    color:Colors.white
  },
  signupText:{
    marginBottom:50,
    color:Colors.white
  },
  signupLink:{
    color:"#DDE901",
  },
  signupLinkView:{
    flexDirection:'row'
  }
})

export default styles