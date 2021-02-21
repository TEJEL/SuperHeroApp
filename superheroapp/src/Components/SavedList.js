import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {HeroCard} from './HeroCard';
export const SavedList = () => {

    //
    const {favourite} = useContext(GlobalContext);
    
    return (
        <div className="one-page">
            <div className="container">
                <div className="header">
            {/* {favourite.map((hero)=>(
                <h1>{hero.name}</h1>
                    
            ))} */}
                <h1 className="heading">Saved SuperHero</h1>
                 </div>
                 {favourite.length > 0 ?(
                      <div className="hero-grid">
                      {favourite.map((hero) =>(
                          <HeroCard hero ={hero} />
                      ))}
                  </div>
                 ):(
                    <h2 className="no-hero">No Superhero in the list</h2>
                 )}
                    
            </div>        
        </div>
    )
}
