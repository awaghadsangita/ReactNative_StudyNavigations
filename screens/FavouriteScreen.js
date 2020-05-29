import React from 'react';
import { StyleSheet,View,FlatList } from 'react-native';

import { CATEGORIES,MEALS } from '../data/DummayData';
import MealItem from '../components/MealItem';

import MealList from '../components/MealList';
const FavoriteScreen = props => {
  const displayedMeals=MEALS.filter(meal=>meal.categoryIds=='c1'||meal.categoryIds=='c2');
  return (
      <MealList
        mealList={displayedMeals}
        navigation={props.navigation}/>
  );
}

FavoriteScreen.navigationOptions= navigationData =>{
  return {
    title: 'Yours Favorites'
  }
}

export default FavoriteScreen;