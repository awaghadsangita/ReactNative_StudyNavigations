import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoriesMealScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';

const MealNavigator = createStackNavigator({
    Categories:{
        screen:CategoriesScreen,
        },
    CategoryMeal:{
        screen:CategoryMealScreen,
        },
    MealDetails:MealDetailsScreen
},{
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
    }
});

export default createAppContainer(MealNavigator);