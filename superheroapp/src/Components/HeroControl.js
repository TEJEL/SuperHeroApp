import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import { Link } from "react-router-dom";


export const HeroControl = ({hero}) => {
    const {editDetails,removeDetails} = useContext(GlobalContext);
 
    return (
        <div className="inner-card-controls">
                     <button className="btn" onClick={()=>editDetails(hero.id)}>
                    Edit 
                    </button>
                           </div>
    )
}
