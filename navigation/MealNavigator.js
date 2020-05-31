import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoriesMealScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoriteScreen from '../screens/FavouriteScreen';
import FilterScreen from '../screens/FilterScreen';

import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
const MealStack = createStackNavigator(
{
    Categories:CategoriesScreen,
    CategoryMeal:CategoryMealScreen,
    MealDetails:MealDetailsScreen,
},{
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle:{
          fontSize:18,
          fontFamily:"open-sans-bold"
        },
        title: 'Meal',
      },
    }
  );
  const FavoriteStack = createStackNavigator(
    {
      Favorite: { screen: FavoriteScreen },
      MealDetails:MealDetailsScreen,
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#FFFFFF',
        title: 'Favorite',
      },
    }
  );

  const FilterStack = createStackNavigator(
    {
      Filter: { screen: FilterScreen  },
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#FFFFFF',
        title: 'Filter',
      },
    }
  );
  
  const MealFavTabNavigator = createBottomTabNavigator(
    {
      Meal: { screen: MealStack },
      Favorite: { screen: FavoriteStack },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Meal') {
            iconName = `ios-restaurant`;
            
          } else if (routeName === 'Favorite') {
            iconName = `ios-star${focused ? '' : '-outline'}`;
          }
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
      }
      ),
      tabBarOptions: {
        activeTintColor: '#f4511e',
        inactiveTintColor: 'gray',
      },
    }
  );

  const DrawerNavigator = createDrawerNavigator({
    //Drawer Optons and indexing
    MealFav: {
      //Title
      screen: MealFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals Categories',
      },
    },
    Filter: {
      //Title
      screen: FilterStack,
      navigationOptions: {
        drawerLabel: 'Filter',
      },
    },
  
  });
  
  export default createAppContainer(DrawerNavigator);