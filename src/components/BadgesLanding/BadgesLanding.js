import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, StatusBar } from 'react-native'
import Colors from '../../res/Colors'

const imageBackground = {
    uri: 'http://www.solofondos.com/wp-content/uploads/2016/03/astronaut-in-the-middle-of-space-space-wallpaper-hd-planets-around-him-sky-filled-with-stars.jpg',
}

class BadgesLanding extends React.Component {

    handlePress = () => {
      this.props.navigation.replace('Login')
    }

    render(){
        return(
            <View style={styles.container}>
                <StatusBar backgroundColor="transparent" translucent={true}/>
                <ImageBackground source={imageBackground} style={styles.image}>
                    <View style={styles.layerColor}>
                        <Text style={styles.title}>
                            Welcome {'\n'}to my {'\n'}App
                        </Text>
                        <TouchableOpacity style={styles.button} onPress={this.handlePress}>
                            <Text style={styles.buttonText}>Start</Text>
                        </TouchableOpacity>
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
    layerColor:{
        flex:2,
        backgroundColor:'#0C77F240',
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        flex:1,
        resizeMode:'cover',
        justifyContent:'center',
    },
    title:{
        margin:30,
        fontSize:60,
        fontWeight:'bold',
        color:Colors.white,
    },
    button:{
        padding:15,
        marginTop:50,
        borderRadius:15,
        backgroundColor:'#121212cc',
        borderColor:Colors.white,
        borderWidth:1,
    },
    buttonText:{
        textAlign:'center',
        fontSize:18,
        fontWeight:'bold',
        paddingHorizontal:25,
        color:Colors.white
    }
})

export default BadgesLanding