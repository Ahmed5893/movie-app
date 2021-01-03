import React from 'react';
import {Card} from 'react-bootstrap';

const MovieCard = ({movie}) => {
	return (
		<div className ='col-md-4 mt-3'>
	<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.poster} />
  <Card.Body>
    <Card.Title>{movie.Title}</Card.Title>
    <Card.Text>
      {movie.Description}
    </Card.Text>
	<p>{''.padStart(movie.rate,'⭐')}</p>
  </Card.Body>
</Card>		
		</div>
	)
}

export default MovieCard;
