import React from 'react';
import { StyleSheet,View,FlatList } from 'react-native';

import { MEALS } from '../data/DummayData';
import MealItem from '../components/MealItem';

const MealList = props => {
  const catId=props.navigation.getParam('categoryId');
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
                params : {mealId:itemData.item.id,mealTitle:itemData.item.title}
              })
            }}/>
      )
  }
  const displayedMeals=MEALS.filter(meal=>meal.categoryIds=='c1'||meal.categoryIds=='c2');
  return (
    <View style={styles.container}>
      <FlatList 
        keyExtractor={(item,index)=>item.id}
        data={props.mealList}
        renderItem={renderMealItem}
        style={{width:'100%'}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default MealList;