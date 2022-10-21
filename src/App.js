import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './components/Navi';
import MovieList from './components/MovieList';
import { useState } from 'react';
import { Data } from './components/Data';


function App() {
  const [movies,setMovies]=useState(Data);
  const[rateSearching,setRateSearching]=useState(0);
  const [search,setSearch]=useState("");
  return (
  <div>
<Navi setSearch={setSearch} rateSearching={rateSearching} setRateSearching={setRateSearching}  setMovies={setMovies} movies={movies}/>
<MovieList movies={movies} rateSearching={rateSearching} search={search}/>
  </div>
  )
}

export default App;