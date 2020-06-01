import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import MealList from '../components/MealList';
import HeaderButtonLeftRight from '../components/HeaderLeftRightButton';

const FavoriteScreen = props => {
  const favoriteMeals=useSelector(state=>state.meals.favoriteMeals)

  if(favoriteMeals.length==0||!favoriteMeals){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>
          No Favorite Item Found! Start adding some to Favorite
        </Text>
      </View>
    )
  }
  
  return (
      <MealList
        mealList={favoriteMeals}
        navigation={props.navigation}/>
  );
}

FavoriteScreen.navigationOptions =navigationData=> {
  return{
    title: 'Your Favorites',
    headerLeft:()=><HeaderButtonLeftRight 
                    title={"menu"} 
                    iconName={"ios-menu"} 
                    buttonTypes={"left"} 
                    navigationData={navigationData.navigation}/>
  }
  };

  const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    title:{
      fontFamily:'open-sans-bold',
      fontSize:18

    }
  })
export default FavoriteScreen;