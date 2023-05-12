import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import FilmMovies from './FilmMovie'
import data from './data'
import React, { useState } from "react";
import Details from './Details'


function App() {
  const [movies,setMovies] = useState(data)

  return (
    <Router>

      <Routes>
        <Route index element={<FilmMovies movies={movies} setMovies={setMovies}  />}></Route>
       <Route path='/movies/:idmovie' element={<Details movies={movies}   />}></Route>
        
       

      </Routes>
      
    </Router>
  );
}

export default App;