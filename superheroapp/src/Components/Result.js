import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const Result = ({hero}) => {
    const {addToFavourite,favourite} = useContext(GlobalContext);

    let storedhero = favourite.find(o => o.id === hero.id);
    //console.log(favourite,"Favourite");
    const Disabled = storedhero ? true: false
    return (
        <div className="result-card">
          <div className="poster-wrapper">
            {
                hero.id ?(
                    <img
                        src={hero.image.url} alt="super pic"
                    />
                ):( <div className="filler-poster"></div>)
            }
           </div>   
           <div className="info">
               <div className="header">
                   <h3 className="title">Power Stats</h3>
                   <h4 className="power-stats">Name: {hero.name}</h4>
                   <h4 className="power-stats">Intelligence: {hero.powerstats.intelligence}</h4>
                   <h4 className="power-stats">Strength: {hero.powerstats.strength}</h4>
                   <h4 className="power-stats">Speed: {hero.powerstats.speed}</h4>
                   <h4 className="power-stats">Durability: {hero.powerstats.durability}</h4>
                   <h4 className="power-stats">Power: {hero.powerstats.power}</h4>
                   <h4 className="power-stats">Combat: {hero.powerstats.combat}</h4>
                 </div>  
                 <div className="controls">
                     <button className="btn" 
                             disabled ={Disabled}
                             onClick ={()=>{addToFavourite(hero)}}>Add to Favourite</button>
                 </div>    
            </div>     
        </div>
    )
}
