import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoriesMealScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';

const MealNavigator = createStackNavigator({
    Categories:CategoriesScreen,
    CategoryMeal:CategoryMealScreen,
    MealDetails:MealDetailsScreen
});

export default createAppContainer(MealNavigator);