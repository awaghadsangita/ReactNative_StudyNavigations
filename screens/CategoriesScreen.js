import React from 'react';
import { TouchableOpacity,StyleSheet, Text, View, FlatList } from 'react-native';

import {CATEGORIES} from '../data/DummayData';

const CategoriesScreen = props => {
  const renderGridItem = itemData =>{
    return(
       <TouchableOpacity
        style={styles.girdItem}
        onPress={()=>{
          props.navigation.navigate({
            routeName:'CategoryMeal',
            params:{categoryId:itemData.item.id}})
          }}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>   
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
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  girdItem:{
    flex:1,
    margin:15,
    height:150
  }
});

export default CategoriesScreen;