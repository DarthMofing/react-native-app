import React from 'react'
import Colors from '../../res/Colors'
import {StyleSheet, View, Text, ScrollView, TouchableOpacity, ImageBackground, TextInput,} from 'react-native'

const imageBackground = {
  uri: 'http://www.solofondos.com/wp-content/uploads/2016/03/astronaut-in-the-middle-of-space-space-wallpaper-hd-planets-around-him-sky-filled-with-stars.jpg',
}

class Login extends React.Component {

  hanldePress = () => {
    this.props.navigation.navigate('Badges')
  }

  render() {
    return(
      <View style={styles.container}>
        <ImageBackground source={imageBackground} style={styles.image}>
          <View style={styles.layerColor}>
            <View style={styles.formLayerColor}>
              <ScrollView style={styles.content}>
                  <Text style={styles.title}>Login</Text>
                  <Text style={styles.label}>Username</Text>
                  <TextInput style={styles.input}></TextInput>
                  <Text style={styles.label}>Password</Text>
                  <TextInput style={styles.input} secureTextEntry={true}></TextInput>
                  <TouchableOpacity style={styles.button} onPress={this.hanldePress}>
                    <Text style={styles.btnText}>Login</Text>
                  </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

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
    width:'45%',
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
  }
})

export default Login