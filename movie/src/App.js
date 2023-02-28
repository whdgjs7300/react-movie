import logo from './logo.svg';
import './App.css';
import Todo from './components/todo';
import Coin from './components/coin';
import { useEffect, useState } from 'react';

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    useEffect(()=> {
      fetch(`https://yts.mx/api/v2/list_movies.json?mininum_rating=8.8&sort_by=year`)
      .then((response)=> response.json())
      .then((json)=> {
        setMovies(json.data.movies);
        setLoading(false);
      })
    }, [])

    console.log(movies)

  return (
    <div className="App">
      {
        loading ? <h1>Loading...</h1> : null
      }

      
    </div>
  );
}

export default App;
