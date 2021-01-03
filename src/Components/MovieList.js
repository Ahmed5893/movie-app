import React,{useState} from 'react';
import {Form} from 'react-bootstrap';
import {starTab} from '../Components/Assests/Data';
import MovieCard from './MovieCard';




const MovieList = ({movieList}) => {
    const [search, setSearch] = useState('')
    const handleSearch=(e)=>{
        setSearch(e.target.value)
    }
     const [starList, setStarList] = useState(starTab)
     const changeColor=(id)=>{
         setStarList(starList.map(el=>el.id===id?{icon:el.icon,isColor:!el.isColor,id:el.id}:el))
     }
    return (
        <div>
            <div className='d-flex-justify-content-around mt-3'>
            <Form.Control type="text" placeholder="Normal text" className='col-md-7' onChange={handleSearch} />
          <div>
          {starList.map(el=><span className={el.IsColor?'gold':'star'} key={el.id} onClick={()=>changeColor(el.id)}>
              {el.icon}
          </span>)}
          </div>
          </div>
        <div className='row'>
          {movieList.filter((movie)=>movie.title.toUpperCase().includes(search.toUpperCase()))
          .filter(movie=>movie.rate>=starList.filter(el=>el.IsColor===true).length)
          .map((movie,index)=>(<MovieCard movie={movie} key={index}/>  ))}  
        </div>
        </div>
    )
}

export default MovieList;
