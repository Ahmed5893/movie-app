import React from 'react';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';



const MovieCard=({movie})=>{
  
   return(
    <div className='col-md-4 mt-3'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.Poster} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>
            {movie.Description}
          </Card.Text>
          <p>{''.padStart(movie.rate, '⭐')}</p>
        </Card.Body>
        <Card.Footer>
          <Link to ={`/Description/${movie.Title}`}> <Button variant="secondary">
                  Description
          </Button>
          </Link>
          </Card.Footer>
      </Card>
    </div>
  );
}

export default MovieCard;
