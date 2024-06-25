
import React, {useState} from 'react'
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

import Imageone from '../assets/city/one.jpg'
import Imagetwo from '../assets/city/two.jpg'
import Imagethree from '../assets/city/three.jpg'
import Imagefour from '../assets/city/four.jpg'
import Imagefive from '../assets/city/five.jpg'
import Imagesix from '../assets/city/six.jpg'
import Imageseven from '../assets/city/seven.jpg'
import Imageeight from '../assets/city/eight.jpg'
import Imagenine from '../assets/city/nine.jpg'
import Imageten from '../assets/city/ten.jpg'
import Imageeleven from '../assets/city/eleven.jpg'
import Imagetwelve from '../assets/city/twelve.jpg'
import Imagethirteen from '../assets/city/thirteen.jpg'

type Diceprops = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>
const Dice = ({imageUrl}: Diceprops ):JSX.Element => {
  return(
    
    <ScrollView>
    <Image style={styles.diceImage} source={imageUrl}/> 
    
    </ScrollView>
    
)}
function City():JSX.Element{
 const [diceImage, setDiceImage] = useState<ImageSourcePropType>(Imageone) 
 const rollDiceOnTap = () => {
  let randomNumber = Math.floor(Math.random()* 13 ) + 1;
  switch(
    randomNumber
  ){
      case 1 :
      setDiceImage(Imageone)
      break;
      case 2 :
      setDiceImage(Imagetwo)
      break;
      case 3 :
      setDiceImage(Imagethree)
      break;
      case 4 :
      setDiceImage(Imagefour)
      break;
      case 5 :
      setDiceImage(Imagefive)
      break;
      case 6 :
      setDiceImage(Imagesix)
      break;
      case 7 :
      setDiceImage(Imageseven)
      break;
      case 8 :
      setDiceImage(Imageeight)
      break;
      case 9 :
      setDiceImage(Imagenine)
      break;
      case 10 :
      setDiceImage(Imageten)
      break;
      case 11 :
      setDiceImage(Imageeleven)
      break;
      case 12 :
      setDiceImage(Imagetwelve)
      break;
      case 13 :
      setDiceImage(Imagethirteen)
      break;
      default: setDiceImage(Imageone)
      break;
  }

 }
  return (

    
      
    <SafeAreaView style={styles.container}>
        <Text style={styles.subHeading1}>
          City
        </Text>
      <Dice imageUrl={diceImage}/>
      <Pressable
      onPress={rollDiceOnTap}
      >
        
        <Text style={styles.rollImageBtnText}>
        Roll The Image
        </Text>
      </Pressable>
      
    </SafeAreaView>
    
  )
}

export default City

const styles = StyleSheet.create({
  subHeading1:{
    alignItems:'center',
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
    borderWidth:2,
    borderRadius:10,
    borderColor:'#E5E0FF',
    fontSize:16,
    color:'#8EA7E9',
    fontWeight:'700',
    textTransform:"uppercase",

  },

  });