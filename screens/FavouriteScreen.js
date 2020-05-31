import React from 'react';

import { MEALS } from '../data/DummayData';
import MealList from '../components/MealList';
import HeaderButtonLeftRight from '../components/HeaderLeftRightButton';

const FavoriteScreen = props => {
  const displayedMeals=MEALS.filter(meal=>meal.categoryIds=='c1'||meal.categoryIds=='c2');
  return (
      <MealList
        mealList={displayedMeals}
        navigation={props.navigation}/>
  );
}

FavoriteScreen.navigationOptions =navigationData=> {
  return{
    title: 'Your Favorites',
    headerLeft:()=><HeaderButtonLeftRight title={"menu"} iconName={"ios-menu"} buttonTypes={"left"} navigationData={navigationData.navigation}/>
  }
  };

export default FavoriteScreen;