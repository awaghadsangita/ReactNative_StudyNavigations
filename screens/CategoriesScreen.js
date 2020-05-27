import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import {CATEGORIES} from '../data/DummayData';

const renderGridItem = itemData =>{
  return(
    <View style={styles.girdItem}>
      <Text>{itemData.item.title}</Text>
    </View>
  )
}

const CategoriesScreen = props => {
  return (
    <FlatList
      keyExtractor={(item,index)=>item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
}

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