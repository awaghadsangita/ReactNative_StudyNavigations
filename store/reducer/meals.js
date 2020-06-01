import {MEALS} from '../../data/DummayData';

const initialState={
    meals:MEALS,
    filterMeals:MEALS,
    favoriteMeals:[]
}

const mealReducer=(state=initialState,action)=>{
    return state;
}

export default mealReducer;