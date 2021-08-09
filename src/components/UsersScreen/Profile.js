import React from 'react'
import {View, Text, TouchableOpacity, Image, StatusBar, StyleSheet} from 'react-native'
import Colors from '../../res/Colors'
import UserSession from '../../libs/sessions'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

class Profile extends React.Component{

  state = {
    user: {
      profile: {}
    },
    token: '',
    picture: {},
  }

  componentDidMount = () => {
    this.getUserData()
  }

  getUserData = async () => {
    let user = await UserSession.instance.getUser()
    console.log(user.username)
    let token = await UserSession.instance.getToken(user.username)
    this.setState({user:user, token:token})
    console.log(this.state)
  }

  handleChooseProfileImg = () => {
    const options = {
      includeBase64:false,
      mediaType:'photo',
    }

    launchImageLibrary (options, response => {
      if(!response.didCancel){
        let photo = response.assets[0].uri
        this.setState({picture:photo})
        this.editProfilePicture()
      }
    })

  }

  editProfilePicture = async () => {
    const {user, token, picture} = this.state
    let response = await UserSession.instance.editProfile(
      user.id,
      token,
      picture,
    )
    console.log(response)
    this.setState({user:response})
  }
  
  
  render(){
    const {user} = this.state
    return(
      <View style={styles.container}>
        <StatusBar backgroundColor="transparent" translucent={true}/>
        <View style={styles.userBadge}>
          <Image
            style = {styles.heroBadge}
            source={{uri: `${user.profile.hero_badge}`}}
          />
          <Image
            style = {styles.profilePic}
            source={{uri: `${user.profile.profile_pic}`}}
          />
          <TouchableOpacity
            style={styles.containerCamera}
            onPress={this.handleChooseProfileImg}
          >
            <Image
              style = {styles.cameraImage}
              source = {require('../../assets/camera.png')}
            />
          </TouchableOpacity>
          <View style = {styles.userDataContainer}>
            <Text style = {styles.userDataName}>{user.first_name} {user.last_name}</Text>
            <Text style = {styles.userDataAge}>{user.profile.age}</Text>
          </View>
          <Text style={styles.cityText}>{user.profile.city}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height:'100%',
    width:'100%',
    flexDirection:'column',
    backgroundColor:Colors.blackPearl
  },
  userBadge:{
    flexDirection:'column',
    flex:1,
    margin:40,
    marginVertical:50,
    borderRadius:20,
    backgroundColor:Colors.white
  },
  heroBadge:{
    height:'40%',
    width:'100%',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  profilePic:{
    height:170,
    width:170,
    borderRadius:100,
    top:170,
    left:80,
    borderWidth:5,
    borderColor:Colors.white,
    position:'absolute',
  },
  containerCamera:{
    width:35,
    height:35,
    borderRadius:10,
    top:290,
    borderWidth:1,
    borderColor:Colors.blackPearl,
    left:190,
    backgroundColor:Colors.white,
    position:'absolute',
  },
  cameraImage:{
    height:32,
    width:32,
  },
  userDataContainer:{
    flexDirection:'row',
    marginTop:50,
    alignSelf:'center'
  },
  userDataName:{
    fontSize:25,
    fontWeight:'bold',
    
  },
  userDataAge:{
    fontSize: 25,
    fontStyle:'italic',
    color:Colors.blackPearl,
    marginLeft:15,
  },
  cityText:{
    alignSelf:'center',
    marginTop:15,
    fontSize:20,
    color:Colors.blackPearl,
  }
})

export default Profile