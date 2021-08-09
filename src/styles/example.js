import {StyleSheet} from 'react-native'
import Colors from '../res/Colors'

const exampleStyles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    backgroundColor:Colors.charade,
  },
  loader:{
    height:'100%',
    alignSelf:'center',
  },
  horizontal:{
    justifyContent:'space-around',
    alignItems:'center',
  }
})

export default exampleStyles