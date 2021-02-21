import React from 'react'
import { HeroControl } from './HeroControl';

export const HeroCard = ({hero}) => {
 
    return (
        <div className="hero-card">
            <div className="overlay"></div>
            {
                hero.id ?(
                    <img
                        src={hero.image.url} alt="super pic"
                    />
                ):( <div className="filler-poster"></div>)
            }
                   <h6 className="power-stats">Name: {hero.name}</h6>
                   <h6 className="power-stats">Intelligence: {hero.powerstats.intelligence}</h6>
                   <h6 className="power-stats">Strength: {hero.powerstats.strength}</h6>
                   <h6 className="power-stats">Speed: {hero.powerstats.speed}</h6>
                   <h6 className="power-stats">Durability: {hero.powerstats.durability}</h6>
                   <h6 className="power-stats">Power: {hero.powerstats.power}</h6>
                   <h6 className="power-stats">Combat: {hero.powerstats.combat}</h6>
                   <HeroControl hero={hero}/>   
        </div>
    )
}

