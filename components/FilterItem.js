import React from 'react';
import {View,Text,Switch,StyleSheet} from 'react-native';

const FilterItem = props => {
    return(
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>{props.name}</Text>
        <Switch
          trackColor={{true: "#f4511e" }}
          thumbColor='grey'
          onValueChange={props.toggleSwitch}
          value={props.state}
        />
      </View>)
}

const styles = StyleSheet.create({
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
  

export default FilterItem;