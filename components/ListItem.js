import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const ListItem = props=>{
    return (<View style={styles.textContainer}>
             <Text style={styles.text}>{props.children}</Text>
           </View>)
}

const styles = StyleSheet.create({
    text:{
      paddingHorizontal:20,
      paddingVertical:5,
      fontFamily:'open-sans',
      fontSize:18
    },
    textContainer:{
      borderWidth:1,
      borderColor:'black',
      width:'100%',
      marginHorizontal:20,
      marginVertical:5
    }
  });
  
export default ListItem;