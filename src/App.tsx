
import React, {useState} from 'react'
import Mountain from './Mountain'
import City from './City'
import type { PropsWithChildren } from 'react'
import { 
  Image,
  ImageSourcePropType,
  Pressable,
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  Text, 
  View, 
} from 'react-native'

import ImageOne from '../assets/nature/One.jpg'
import ImageTwo from '../assets/nature/Two.jpg'
import ImageThree from '../assets/nature/Three.jpg'
import ImageFour from '../assets/nature/Four.jpg'
import ImageFive from '../assets/nature/Five.jpg'
import ImageSix from '../assets/nature/Six.jpg'
import ImageSeven from '../assets/nature/Seven.jpg'
import ImageEight from '../assets/nature/Eight.jpg'
import ImageNine from '../assets/nature/Nine.jpg'
import ImageTen from '../assets/nature/Ten.jpg'
import ImageEleven from '../assets/nature/Eleven.jpg'
import ImageTwelve from '../assets/nature/Twelve.jpg'
import ImageThirteen from '../assets/nature/Thirteen.jpg'

type Diceprops = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>
const Dice = ({imageUrl}: Diceprops ):JSX.Element => {
  return(
    
    <ScrollView>
    <Image style={styles.diceImage} source={imageUrl}/> 
    
    </ScrollView>
    
)}
function App():JSX.Element{
 const [diceImage, setDiceImage] = useState<ImageSourcePropType>(ImageOne) 
 const rollDiceOnTap = () => {
  let randomNumber = Math.floor(Math.random()* 13 ) + 1;
  switch(
    randomNumber
  ){
      case 1 :
      setDiceImage(ImageOne)
      break;
      case 2 :
      setDiceImage(ImageTwo)
      break;
      case 3 :
      setDiceImage(ImageThree)
      break;
      case 4 :
      setDiceImage(ImageFour)
      break;
      case 5 :
      setDiceImage(ImageFive)
      break;
      case 6 :
      setDiceImage(ImageSix)
      break;
      case 7 :
      setDiceImage(ImageSeven)
      break;
      case 8 :
      setDiceImage(ImageEight)
      break;
      case 9 :
      setDiceImage(ImageNine)
      break;
      case 10 :
      setDiceImage(ImageTen)
      break;
      case 11 :
      setDiceImage(ImageEleven)
      break;
      case 12 :
      setDiceImage(ImageTwelve)
      break;
      case 13 :
      setDiceImage(ImageThirteen)
      break;
      default: setDiceImage(ImageOne)
      break;
  }

 }
  return (

    
      
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading1}>
      Scrollable Image Rolling
      </Text>
      <ScrollView>
        <Text style={styles.subHeading1}>
          Nature
        </Text>
      <Dice imageUrl={diceImage}/>
      <Pressable
      onPress={rollDiceOnTap}
      >
        
        <Text style={styles.rollImageBtnText}>
        Roll The Image
        </Text>
      </Pressable>
      <Mountain/>
      <City/>
      
      </ScrollView>
    </SafeAreaView>
    
  )
}

export default App

const styles = StyleSheet.create({
  heading1:{
    fontSize:24,
    
    fontWeight:'bold',
    color:'#8EA7E9'
  },
  subHeading1:{
    marginTop:5,
    textAlign:'center',
    fontSize:20,
    fontStyle:'italic',
    fontWeight:'bold',
    color:'black'
   
  },
  container:{
    flex:1,
   alignItems:"center",
   justifyContent:"center",
   backgroundColor:'lavender',
  },
  diceContainer:{
    margin:2,
  },
  diceImage:{
    width:320,
    height:400,
    borderRadius:10,
    marginTop:10 
    
    
  },
  rollImageBtnText:{
    paddingVertical:10,
    paddingHorizontal:92.8,
    marginTop:15,
    marginBottom:10,
    borderWidth:2,
    borderRadius:10,
    borderColor:'#E5E0FF',
    fontSize:16,
    color:'#8EA7E9',
    fontWeight:'700',
    textTransform:"uppercase",

  },

  });