import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CategoriesScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Categories Screen</Text>
      <Button title="Go to Meal" onPress={()=>{props.navigation.navigate({routeName:'CategoryMeal'})}}/>
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

export default CategoriesScreen;