import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HeaderButtonLeftRight from '../components/HeaderLeftRightButton';
import FilterItem from '../components/FilterItem';

const FilterScreen = props => {
  const {navigation}=props
  const [isGutenFree,setIsGutenFree]=useState(false);
  const [isVegan,setIsVegan]=useState(false);
  const [isVegetarian,setIsVegetarian]=useState(false);
  const [isLactoseFree,setIsLactoseFree]=useState(false);

  const saveFilters=useCallback(()=>{
    const appliedFilterState={
      gultenFree:isGutenFree,
      lactoseFree:isLactoseFree,
      vagan:isVegan,
      isVegetarian:isVegetarian
    }
    console.log(appliedFilterState)
  },[isGutenFree,isLactoseFree,isVegan,isVegetarian])

  useEffect(()=>{
    navigation.setParams({save:saveFilters})
  },[saveFilters])

  return (
    <View style={styles.container}>
     <Text style={styles.titleText}>Available Filter/Restrictions</Text>
     <FilterItem 
        name="Guten-Free" 
        state={isGutenFree} 
        toggleSwitch={newValue=>setIsGutenFree(newValue)}/> 
      <FilterItem 
        name="Vegan" 
        state={isVegan} 
        toggleSwitch={newValue=>setIsVegan(newValue)}/> 

      <FilterItem 
        name="Vegetarian" 
        state={isVegetarian} 
        toggleSwitch={newValue=>setIsVegetarian(newValue)}/> 
  
      <FilterItem 
        name="LactoseFree" 
        state={isLactoseFree} 
        toggleSwitch={newValue=>setIsLactoseFree(newValue)}/> 


    </View>

  );
}

FilterScreen.navigationOptions =navigationData=> {
  return{
    title: 'Filter',
    headerLeft:()=><HeaderButtonLeftRight title={"menu"} iconName={"ios-menu"} buttonTypes={"left"} navigationData={navigationData.navigation}/>  ,
    headerRight:()=><HeaderButtonLeftRight 
        title={"save"} 
        iconName={"ios-save"} 
        buttonTypes={"Save"} 
        navigationData={navigationData.navigation}/>  
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  filterContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'80%',
    paddingVertical:10

  },
  filterText:{
    fontFamily:'open-sans',
    fontSize:18
  },
  titleText:{
    fontFamily:'open-sans-bold',
    fontSize:20
  }

});

export default FilterScreen;