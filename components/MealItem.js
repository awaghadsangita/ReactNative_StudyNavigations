import React from 'react';
import { View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground } from 'react-native';

const MealItem =props=>{
    return(
        <View style={styles.mealContainer}>
    <TouchableOpacity onPress={()=>props.onSelectMeal}>
        <View style={styles.mealItem}>
        <ImageBackground source={{ uri: props.image }}
            style={styles.bgImage}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </ImageBackground>         
            <View style={styles.mealInformation}>
                <Text>{props.duration}m</Text>
                <Text>{props.complexity.toUpperCase()}</Text>
                <Text>{props.affordability.toUpperCase()}</Text>
            </View>    
        </View>
        </TouchableOpacity>
        </View>
    );
}

const styles=StyleSheet.create({
    mealContainer:{
        backgroundColor:'grey',
        height:200,
        marginVertical:10,
        marginHorizontal:20,
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    mealInformation:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10
    },
    titleContainer:{
        height:'90%',
    },
    bgImage:{
        height:'90%',
        width:'100%'
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:20,
        color: 'white',
        textAlign: 'center'
    }
    
});

export default MealItem;