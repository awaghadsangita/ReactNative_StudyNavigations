import React from 'react';
import {useSelector} from 'react-redux';

import MealList from '../components/MealList';
import HeaderButtonLeftRight from '../components/HeaderLeftRightButton';

const FavoriteScreen = props => {
  const favoriteMeals=useSelector(state=>state.meals.favoriteMeals)

  // const displayedMeals=MEALS.filter(meal=>meal.categoryIds=='c1'||meal.categoryIds=='c2');
  return (
      <MealList
        mealList={favoriteMeals}
        navigation={props.navigation}/>
  );
}

FavoriteScreen.navigationOptions =navigationData=> {
  return{
    title: 'Your Favorites',
    headerLeft:()=><HeaderButtonLeftRight 
                    title={"menu"} 
                    iconName={"ios-menu"} 
                    buttonTypes={"left"} 
                    navigationData={navigationData.navigation}/>
  }
  };

export default FavoriteScreen;