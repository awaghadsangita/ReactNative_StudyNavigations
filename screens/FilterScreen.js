import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DrawerMenu from '../components/HeaderLeftDrawer';
const FilterScreen=()=> {
  return (
    <View style={styles.container}>
      <Text>Filter Screen</Text>
    </View>
  );
}

FilterScreen.navigationOptions =navigationData=> {
  return{
    title: 'Filter',
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
});

export default FilterScreen;