import React from 'react'
import Colors from '../../res/Colors'
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, TextInput, Image} from 'react-native'
import styles from '../Generics/styles'
import UserSession from '../../libs/sessions'
import Loader from '../Generics/Loader'

const imageBackground = {
  uri: 'http://www.solofondos.com/wp-content/uploads/2016/03/astronaut-in-the-middle-of-space-space-wallpaper-hd-planets-around-him-sky-filled-with-stars.jpg',
}

class Login extends React.Component {

  state = {
    loading:false,
    error:null,
    user:undefined,
    isPasswordVisible:true,
    form:{}
  }

  componentDidMount = () => {
    this.deleteTokens()
  }

  deleteTokens = async () => {
    await UserSession.instance.logout()
  }

  toggleIsPasswordVisible = () => {
    if(this.state.isPasswordVisible) {
      this.setState({isPasswordVisible:false})
    }else {
      this.setState({isPasswordVisible:true})
    }
  }

  handleSubmit = async () => {
    try {
      this.setState({loading:true, error:null, user:undefined})
      let response = await UserSession.instance.login(this.state.form)

      if (typeof response === 'object'){
        console.log(response)
        if (response["Login Error"]){
          var message = "Account is not verified."
        } else {
          var message = "Invalid credentials. Try again."
        }
        this.setState({loading:false, error: message, user: undefined})
      }else {
        this.setState({loading:false, error: null, user:response})
      }
    } catch (err) {
      this.setState({loading:false, error:err})
    }
    if(this.state.user){
      this.props.navigation.replace('BadgesTabNavigator')
    }
  }

  hanldePress = () => {
    this.props.navigation.navigate('Signup')
  }

  render() {
    const {isPasswordVisible, loading, error} = this.state

    if (loading === true){
      return <Loader/>
    }
    return(
      <View style={styles.container}>
        <ImageBackground source={imageBackground} style={styles.image}>
          <View style={styles.layerColor}>
            <View style={styles.formLayerColor}>
              <ScrollView style={styles.content}>
                  <Text style={styles.title}>Login</Text>
                  {error ? (
                    <View style={styles.warning}>
                      <Text style={styles.warningText}>
                        {error}
                      </Text>
                    </View>
                  ) : null}
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
                  <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
                    <Text style={styles.btnText}>Login</Text>
                  </TouchableOpacity>
                  <View style={styles.signupLinkView}>
                    <Text style={styles.signupText}>Do not have an account? </Text>
                    <TouchableOpacity onPress={this.hanldePress}><Text style={styles.signupLink}>Sign up here</Text></TouchableOpacity>
                  </View>
              </ScrollView>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

export default Login