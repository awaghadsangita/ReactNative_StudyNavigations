import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CategoriesMealScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Meal Categories Screen</Text>
      <Button title="Go To Meal Details " onPress={()=>{props.navigation.navigate({routeName:'MealDetails'})}} />
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

export default CategoriesMealScreen;