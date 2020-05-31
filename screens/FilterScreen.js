import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HeaderButtonLeftRight from '../components/HeaderLeftRightButton';
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
    headerLeft:()=><HeaderButtonLeftRight title={"menu"} iconName={"ios-menu"} buttonTypes={"left"} navigationData={navigationData.navigation}/>  
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