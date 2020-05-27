import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { CATEGORIES } from '../data/DummayData';

const CategoriesMealScreen = props => {
  const catId=props.navigation.getParam('categoryId');
  const selectedCategory=CATEGORIES.find(cat=>cat.id===catId);

  return (
    <View style={styles.container}>
      <Text>Meal Categories Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button title="Go To Meal Details " onPress={()=>{props.navigation.navigate({routeName:'MealDetails'})}} />
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