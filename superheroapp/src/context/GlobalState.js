import React,{createContext,useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';
//inital state
const initalState ={
    favourite:localStorage.getItem('favourite')
    ? JSON.parse(localStorage.getItem('favourite'))
    : [],
}

//Create Context
export const GlobalContext = createContext(initalState);

//Provider
export const GlobalProvider = props =>{
    const [state,dispatch] = useReducer(AppReducer, initalState);

    useEffect(()=>{
        localStorage.setItem('favourite', JSON.stringify(state.favourite))
    },[state]);

    //Action
    const addToFavourite = (hero) =>{
        dispatch({type: "ADD_TO_FAVOURITE", payload:hero});
    }
    const editDetails = (id) =>{
        dispatch({type: "EDIT_FAVOURITE", payload:id});
    }

    

    return(
        <GlobalContext.Provider 
        value = {{
            favourite: state.favourite,
            addToFavourite,
            editDetails,
        
        }}>
            {props.children}
        </GlobalContext.Provider>
    )

}