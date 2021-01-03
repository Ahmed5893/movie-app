import './App.css';
import React,{useState} from 'react';
import MovieList from './Components/MovieList';
import {moviesList} from './Components/Assests/Data';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './Components/AddMovie';


function App() {
  const [movieList,setMovieList] = useState(moviesList)
  const addMovie=(Title,Poster,Description,rate)=>{
    setMovieList([...movieList={Title:Title,Poster:Poster,Description:Description,rate:rate}])
  }
return (
  <div className='container-fluid'>
    <div className='row'>
      <MovieList moviesList={movieList} />
      <AddMovie addMovie={addMovie} />
    </div>
  </div>
);
}

export default App;
