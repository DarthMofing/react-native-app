import React from 'react'
import Colors from '../../res/Colors'
import {StyleSheet, View, Text, ScrollView, TouchableOpacity, ImageBackground, TextInput, Image} from 'react-native'
import Loader from '../Generics/Loader'
import UserSession from '../../libs/sessions'


const imageBackground = {
  uri: 'http://www.solofondos.com/wp-content/uploads/2016/03/astronaut-in-the-middle-of-space-space-wallpaper-hd-planets-around-him-sky-filled-with-stars.jpg',
}

class Signup extends React.Component {

  state = {
    loading:false,
    error:false,
    errors:[],
    user:undefined,
    isPasswordVisible:true,
    isPasswordConfVisible:true,
    form:{}
  }

  toggleIsPasswordVisible = () => {
    if(this.state.isPasswordVisible) {
      this.setState({isPasswordVisible:false})
    }else {
      this.setState({isPasswordVisible:true})
    }
  }
  toggleIsPasswordConfVisible = () => {
    if(this.state.isPasswordConfVisible) {
      this.setState({isPasswordConfVisible:false})
    }else {
      this.setState({isPasswordConfVisible:true})
    }
  }

  handleSubmit = async () => {
    try{
      this.setState({loading:true, user:undefined})
      let response = await UserSession.instance.signup(this.state.form)
      if (typeof response === 'object'){
        let _errors = []
        let cont = 0
        
        for(let error in response) {
          let key = error
          if(error==='non_field_errors'){
            error = 'password'
          }
          _errors.push(
            <View key={cont}>
              <Text style={styles.warningText}>
                {`${error} : ${response[key][0]}`}
              </Text>
            </View>
          )
          cont++
        }
        this.setState({loading:false, user:undefined, errors: _errors, error:true})
      } else {
        this.setState({loading:false, error: false, user:response, errors:[]})
      }
    } catch (error) {
      console.log('Signup error', error)
      throw Error(error)
    }
    if(this.state.user){
      this.props.navigation.navigate('Login')
    }
  }

  render() {
    const {isPasswordVisible, isPasswordConfVisible, loading, errors, error} = this.state
    if (loading === true){
      return <Loader/>
    }
    return(
      <View style={styles.container}>
        <ImageBackground source={imageBackground} style={styles.image}>
          <View style={styles.layerColor}>
          <ScrollView style={styles.content}>
              <View style={styles.formLayerColor}>
                <Text style={styles.title}>Sign up</Text>
                {error
                  ? <View style={styles.warning}>
                      <Text style={[{textAlign:'center'},{color:Colors.white},{fontSize:20}]}>
                        Error
                      </Text>
                      {errors}
                    </View>
                  : null }
                <Text style={styles.label}>Username</Text>
                <TextInput 
                  style={styles.input} 
                  placeholder={'Username'}
                  keyboardAppearance="dark"
                  onChangeText={text => {
                    this.setState(prevState => {
                      let form = Object.assign({}, prevState.form)
                      form.username = text
                      return {form}
                    })
                  }}
                  />
                <Text style={styles.label}>Email</Text>
                <TextInput 
                  style={styles.input} 
                  placeholder={'Email'}
                  keyboardAppearance="dark"
                  keyboardType="email-address"
                  onChangeText={text => {
                    this.setState(prevState => {
                      let form = Object.assign({}, prevState.form)
                      form.email = text
                      return {form}
                    })
                  }}
                />
                <Text style={styles.label}>Password</Text>
                <View style={styles.passwordInput}>
                  <TextInput 
                    style={{flex:1}} 
                    secureTextEntry={isPasswordVisible}
                    placeholder={'Password'}
                    keyboardAppearance="dark"
                    onChangeText={text => {
                      this.setState(prevState => {
                        let form = Object.assign({}, prevState.form)
                        form.password = text
                        return {form}
                      })
                    }}
                    />
                    <TouchableOpacity onPress={this.toggleIsPasswordVisible}>
                      <Image
                        style={{marginRight:10}}
                        source={
                          isPasswordVisible
                            ? require('../../assets/show.png')
                            : require('../../assets/hide.png')
                        }
                      />
                    </TouchableOpacity>
                  </View>
                <Text style={styles.label}>Password Confirmation</Text>
                <View style={styles.passwordInput}>
                  <TextInput 
                    style={{flex:1}} 
                    secureTextEntry={isPasswordConfVisible}
                    placeholder={'Password Confirmation'}
                    keyboardAppearance="dark"
                    onChangeText={text => {
                      this.setState(prevState => {
                        let form = Object.assign({}, prevState.form)
                        form.password_confirmation = text
                        return {form}
                      })
                    }}
                    />
                    <TouchableOpacity onPress={this.toggleIsPasswordConfVisible}>
                      <Image
                        style={{marginRight:10}}
                        source={
                          isPasswordConfVisible
                            ? require('../../assets/show.png')
                            : require('../../assets/hide.png')
                        }
                      />
                    </TouchableOpacity>
                  </View>
                <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
                  <Text style={styles.btnText}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
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
    width:'100%',
    alignSelf:'center',
  },
  formLayerColor:{
    width:'90%',
    height: 'auto',
    backgroundColor:'#121212cc',
    borderRadius: 20,
    margin: 20,
    paddingHorizontal:30,
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
    color:Colors.white
  },
})

export default Signup