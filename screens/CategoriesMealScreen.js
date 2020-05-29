import React from 'react';

import { CATEGORIES,MEALS } from '../data/DummayData';
import MealList from '../components/MealList';
const CategoriesMealScreen = props => {
  const catId=props.navigation.getParam('categoryId');
  const displayedMeals=MEALS.filter(meal=>meal.categoryIds.indexOf(catId)>=0);
  return (
      <MealList
        mealList={displayedMeals}
        navigation={props.navigation}/>
  );
}

CategoriesMealScreen.navigationOptions= navigationData =>{
  const catId=navigationData.navigation.getParam('categoryId');
  const selectedCategory=CATEGORIES.find(cat=>cat.id===catId);
  return {
    title: selectedCategory.title
  }
}

export default CategoriesMealScreen;