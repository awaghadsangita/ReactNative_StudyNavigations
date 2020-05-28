import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';

import { CATEGORIES,MEALS } from '../data/DummayData';
import MealItem from '../components/MealItem';

const CategoriesMealScreen = props => {
  const catId=props.navigation.getParam('categoryId');
  const selectedCategory=CATEGORIES.find(cat=>cat.id===catId);

  const renderMealItem = itemData=>{
      return (
          <MealItem 
            title={itemData.item.title}
            image={itemData.item.imageUrl}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            onSelectMeal={()=>{
              props.navigation.navigate({
                routeName : 'MealDetails',
                params : {mealId:itemData.item.id}
              })
            }}/>
      )
  }
  const displayedMeals=MEALS.filter(meal=>meal.categoryIds.indexOf(catId)>=0);
  return (
    <View style={styles.container}>
      <FlatList 
        keyExtractor={(item,index)=>item.id}
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{width:'100%'}}/>
    </View>
  );
}

CategoriesMealScreen.navigationOptions= navigationData =>{
  const catId=navigationData.navigation.getParam('categoryId');
  const selectedCategory=CATEGORIES.find(cat=>cat.id===catId);

  return {
    title: selectedCategory.title
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoriesMealScreen;