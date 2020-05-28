import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';

import { CATEGORIES,MEALS } from '../data/DummayData';

const CategoriesMealScreen = props => {
  const catId=props.navigation.getParam('categoryId');
  const selectedCategory=CATEGORIES.find(cat=>cat.id===catId);

  const renderMealItem = itemData=>{
      return (
          <View>
            <Text>{itemData.item.title}</Text>
          </View>

      )
  }
  const displayedMeals=MEALS.filter(meal=>meal.categoryIds.indexOf(catId)>=0);
  return (
    <View style={styles.container}>
      <FlatList 
        keyExtractor={(item,index)=>item.id}
        data={displayedMeals}
        renderItem={renderMealItem}/>
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