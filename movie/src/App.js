import logo from './logo.svg';
import './App.css';
import Todo from './components/todo';
import Coin from './components/coin';
import { useEffect, useState } from 'react';

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
      const response = await fetch(`
        https://yts.mx/api/v2/list_movies.json?mininum_rating=8.8&sort_by=year`
      );
      const json = await response.json();
      setMovies(json.data.movies);
      setLoading(false);
      }
    

    useEffect(()=> {
      getMovies();
    }, [])

    console.log(movies)

  return (
    <div className="App">
      {
        loading ? <h1>Loading...</h1> : <div>
          {movies.map((movie)=>{
            return <div key={movie.id}>
              <img src={movie.medium_cover_image} alt=""/>
              <h1>{movie.title}</h1>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((g)=>{
                  <li key={g}>{g}</li>
                })}
              </ul>
            </div>
          })}
        </div>
      }

      
    </div>
  );
}

export default App;
