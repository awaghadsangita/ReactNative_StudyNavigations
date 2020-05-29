import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoriesMealScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoriteScreen from '../screens/FavouriteScreen';

import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

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
        title: 'Meal'
      },
    }
  );
  const FavoriteStack = createStackNavigator(
    {
      Favorite: { screen: FavoriteScreen },
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#42f44b',
        },
        headerTintColor: '#FFFFFF',
        title: 'Favorite',
      },
    }
  );
  
  const App = createBottomTabNavigator(
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
            iconName = `ios-restaurant${focused ? '' : '-outline'}`;
            
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
  export default createAppContainer(App);