import {MEALS} from '../../data/DummayData';
import {TOGGLE_FAVORITE} from '../action/meals';

const initialState={
    meals:MEALS,
    filterMeals:MEALS,
    favoriteMeals:[]
}

const mealReducer=(state=initialState,action)=>{
    switch(action.type){
        case TOGGLE_FAVORITE:
            const existingIndex=state.favoriteMeals.findIndex(meal=>meal.id===action.mealId);
            if(existingIndex>=0){
                const updatedMeals=[...state.favoriteMeals];
                updatedMeals.splice(existingIndex,1);
                return {...state,favoriteMeals:updatedMeals}
            }else{
                const meal=state.meals.find(meal=>meal.id===action.mealId);
                return {...state,favoriteMeals:state.favoriteMeals.concat(meal)}
            }
        default:
            return state;
    }
    return state;
}

export default mealReducer;