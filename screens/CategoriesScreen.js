import React from 'react';
import {StyleSheet, FlatList } from 'react-native';

import {CATEGORIES} from '../data/DummayData';

import CategoryGridTitle from '../components/CategoryGirdTitle';
const CategoriesScreen = props => {
  const renderGridItem = itemData =>{
    return(
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={()=>{
          props.navigation.navigate({
            routeName:'CategoryMeal',
            params:{categoryId:itemData.item.id}})
        }}/>
    )
  }
  return (
    <FlatList
      keyExtractor={(item,index)=>item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
}
CategoriesScreen.navigationOptions = {
  title: 'Meal Category',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

export default CategoriesScreen;