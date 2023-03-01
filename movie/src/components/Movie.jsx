import { useState, useEffect } from "react";

const Movie = ({coverImg, title, summary, genres}) => {
    
    return (  
        <div>
    
            <div>
                <img src={coverImg} alt=""/>
                <h1>{title}</h1>
                <p>{summary}</p>
                <ul>
                    {genres.map((g)=>{
                    <li key={g}>{g}</li>
                    })}
                </ul>
                </div>
            
        </div>
        
        
    );
}

export default Movie;