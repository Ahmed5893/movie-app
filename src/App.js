import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import React,{useState} from 'react';
import MovieList from './Components/MovieList';
import {moviesList} from './Components/Assests/Data';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './Components/AddMovie';
import Description from './Components/Description';
import MovieCard from './Components/MovieCard';


function App(props) {
  const [movieList,setMovieList] = useState(moviesList)
  const addMovie=(Title,Poster,Description,rate)=>{
    setMovieList([...movieList,{Title:Title,Poster:Poster,Description:Description,rate:rate}])
  }
return (
  <Router>
  <div className='container-fluid'>
    <div className='row'>
      <Route exact path='/' render={(props)=><MovieList movieList={movieList} {...props}/>}  />
      <Route exact path='/' render={(props)=><AddMovie addMovie={addMovie} {...props}/>} />
      <Route path='/Description/:Title' render={(props)=><Description movieList={movieList} {...props}/>}  />
    </div>
  </div>
  </Router>
);
}

export default App;
