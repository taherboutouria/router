import { Rating } from '@mui/material'
import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const MovieLists = ({movies}) => {
  return (
    <div style={{display:'grid',gridTemplateColumns:'auto auto auto',marginLeft:'150px',gap:'20px'}}>
 
      {movies.map(movie => (
        <Col style={{width:'18rem'}}>
          <Card style={{width:'18rem'}} >
            <Card.Img style={{width:'18rem',height:'370px'}}  src={movie.posterUrl} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>
                {movie.description}
              </Card.Text>
              <Rating name="read-only" value={movie.rating} readOnly max={10} />
            </Card.Body>
          </Card>
          <Button variant="danger" as={Link} to={`/movies/${movie.id}`}>Go To Trailer</Button>          
        </Col>
      ))}
    
    </div>
  )
}

export default MovieLists