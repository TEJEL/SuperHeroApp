import React, { useState } from 'react'
import {Result} from './Result';
export const SearchList = () => {
    const [query,setQuery]= useState("");
    const [result,setResult] = useState([]);

    const onChange =(e)=>{
        e.preventDefault();
        setQuery(e.target.value);
             fetch(`https://www.superheroapi.com/api.php/3818421928219789/search/${e.target.value}`)
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data)
             if (!data.error) {
                setResult(data.results);
              } else {
                setResult([]);
              }
      
            })
        }
     
    
    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type ="text" placeholder="Search for your favourite Superhero"
                                value ={query} onChange={onChange}/>
                     </div>  
                     {
                         result.length > 0 && (
                             <ul className="results">
                                 { result.map((hero) =>(
                                    
                                     <li key={hero.id}>
                                         {/* {hero.name} */}
                                         <Result hero={hero}/>
                                      </li>
                                 ))}
                              </ul>   
                         )

                       
                     
                     } 
                 </div>   
             </div>   
            
        </div>
    )
}
