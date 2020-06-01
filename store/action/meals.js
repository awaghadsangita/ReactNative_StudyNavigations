export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavorites=(id)=>{
    return {type:TOGGLE_FAVORITE,mealId:id}
}