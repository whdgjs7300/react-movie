import { useState, useEffect } from "react";
import PropTypes from "prop-types";

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

Movie.prototype = {
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,

};

export default Movie;