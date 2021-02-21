export default (state,action) =>{
    switch(action.type){
     case "ADD_TO_FAVOURITE"   :
         return{
             ...state,
             favourite:[action.payload, ...state.favourite]
         }
       case "EDIT_FAVOURITE":
           return{
               ...state,
               favourite: state.favourite.filter(
                   (hero) => hero.id !== action.payload
               ),
           } 
             
    default:
        return state;
}
}