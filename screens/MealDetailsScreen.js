import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {MEALS} from '../data/DummayData';

const MealDetailsScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal=>meal.id===mealId);
  return (
    <View style={styles.container}>
      <Text>Meal Details Screen</Text>  
      <Text>{selectedMeal.title}</Text>  
    </View>
  );
}
MealDetailsScreen.navigationOptions = navigationData =>{
  const mealId=navigationData.navigation.getParam('mealId');
  const selectedMeal=MEALS.find(meal=>meal.id===mealId);
  return {
      title:selectedMeal.title
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MealDetailsScreen;