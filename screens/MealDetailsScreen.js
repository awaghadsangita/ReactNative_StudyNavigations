import React from 'react';
import { StyleSheet, Text, View,Image,ScrollView } from 'react-native';


import {MEALS} from '../data/DummayData';
import ListItem from '../components/ListItem';
import HeaderButton from '../components/HeaderLeftDrawer';
const MealDetailsScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal=>meal.id===mealId);
  
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri:selectedMeal.imageUrl}}/>
        </View>
        <View style={styles.mealInformation}>
            <Text>{selectedMeal.duration}m</Text>
            <Text>{selectedMeal.complexity.toUpperCase()}</Text>
            <Text>{selectedMeal.affordability.toUpperCase()}</Text>
        </View>
      </View>    
      <View>
      <Text style={styles.headerTitle}>Ingredients</Text>  
      {selectedMeal.ingredients.map(ingredient=>
      
        <ListItem style={styles.text} key={ingredient}>{ingredient}</ListItem>
      
      )}
      </View>
      <View>
      <Text style={styles.headerTitle}>Steps</Text>  
      {selectedMeal.steps.map((step,index)=>
          <ListItem style={styles.text} key={index}>{step}</ListItem>
      )}
      </View>
      
    </View>
    </ScrollView>
  );
}
MealDetailsScreen.navigationOptions = navigationData =>{
  const mealId=navigationData.navigation.getParam('mealId');
  const selectedMeal=MEALS.find(meal=>meal.id===mealId);
  return {
      title:selectedMeal.title,
      headerRight:()=><HeaderButton title={"Favorite"} iconName={"ios-star"} buttonTypes={"right"} navigationData="undefined"/>   
    }
  
}
const styles = StyleSheet.create({
  header:{
    padding:20,
    width:'100%',
    height:200,
  },
  imageContainer:{
    width:'100%',
    height:'100%',
    
  },
  image:{
    width:'100%',
    height:'100%'  
  },
  mealInformation:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:10
  },
  headerTitle:{
    fontFamily:'open-sans-bold',
    fontSize:22,
    textAlign:'center'
  },
  text:{
    paddingHorizontal:20,
    paddingVertical:5,
    fontFamily:'open-sans',
    fontSize:18
  },
  textContainer:{
    borderWidth:1,
    borderColor:'black',
    width:'100%'
  }
});

export default MealDetailsScreen;