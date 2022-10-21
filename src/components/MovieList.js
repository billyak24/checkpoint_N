import React from 'react';
import Moviecard from './Moviecard';


const MovieList = ({movies,rateSearching,search}) => {

    

  return (
    <div style={{display:"flex", justifyContent:'space-around' , flexWrap:'wrap', marginTop:'30px'}}>
    {movies
       .filter((e)=>rateSearching === 0 ?
       e.name.toLowerCase().includes(search.toLowerCase()):
       Number(e.rating) === rateSearching && e.name.toLowerCase().includes(search.toLowerCase()))

       

    .map((movie)=>(<Moviecard movie={movie} key={movie.id}/>))
    }
    </div>
  )
}

export default MovieList