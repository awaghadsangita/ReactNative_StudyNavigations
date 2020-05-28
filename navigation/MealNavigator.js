import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoriesMealScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';

const MealNavigator = createStackNavigator({
    Categories:CategoriesScreen,
    // {screen:CategoriesScreen},
    CategoryMeal:CategoryMealScreen,
    // {screen:CategoryMealScreen},
    MealDetails:MealDetailsScreen,
    // {screen:MealDetailsScreen},
    
},{
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:14
          }
    }
});

export default createAppContainer(MealNavigator);