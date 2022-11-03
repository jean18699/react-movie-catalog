import './App.css';
import SearchIcon from './img/search.svg'
import { useEffect, useState } from 'react';
import MoviePanel from './components/MoviePanel';

function App() {

  const movieApiUrl = `${process.env.REACT_APP_MOVIE_API_URL}/?${process.env.REACT_APP_MOVIE_API_KEY}`
  const [movies, setMovies] = useState([]);
  const [movieTitle, setMovieTitle] = useState('');

  const searchMovies = async (title)=>{
    setMovieTitle(title)
   const response = await fetch(`${movieApiUrl}&s='${title.trim()}'`)
   const data = await response.json();
   if(data.Search){
    setMovies(data.Search);
    console.log(data.Search)
   }
   
   
  }

 
  //console.log(movieTitle)

  useEffect(()=>{
    //searchMovies(movieTitle);
  }, [])

  return (
    <div className="app">
      <h1>El Barco de Cyberk</h1>
      <div className="search">
        <input 
          value={movieTitle}
          onChange={(e)=>{searchMovies(e.target.value)}}
         placeholder='Piratea una pelicula...'/>
         
        <img 
          onClick={()=> searchMovies(movieTitle)}
          alt='not found'
          src={SearchIcon}
        />
      </div>
      
      <div className='container'>

        {
          movies.length > 0 ? 
            movies.map(movie => {
            return (<MoviePanel movie={movie}/>)
            })
          :
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        }
    
      </div>

    </div>
  );
}

export default App;
