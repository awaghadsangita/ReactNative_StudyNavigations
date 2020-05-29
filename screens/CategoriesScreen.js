import React from 'react';
import {StyleSheet, FlatList } from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';

import {CATEGORIES} from '../data/DummayData';
import CategoryGridTitle from '../components/CategoryGirdTitle';
import HeaderButton from '../components/HeaderButton';

import DrawerMenu from '../components/HeaderLeftDrawer';
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

CategoriesScreen.navigationOptions =navigationData=> {
return{
  title: 'Meal Category',
  headerTitleStyle:styles.headerTitle,
  headerLeft:()=><DrawerMenu navigationData={navigationData.navigation}/>
    
  
}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle:{
    fontSize:18
  }
  
});

export default CategoriesScreen;