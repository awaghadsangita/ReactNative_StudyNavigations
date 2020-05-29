import React from 'react';

import { MEALS } from '../data/DummayData';
import MealList from '../components/MealList';
import DrawerMenu from '../components/HeaderLeftDrawer';

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
    headerLeft:()=><DrawerMenu navigationData={navigationData.navigation}/>
    //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
    //     <Item
    //         title="menu"
    //         iconName="ios-menu"
    //         onPress={()=>{
    //           navigationData.navigation.toggleDrawer();
    //         }}/>
    //   </HeaderButtons>
    
  }
  };

export default FavoriteScreen;