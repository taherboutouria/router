import react from 'react'
import MovieLists from './Components/MovieLists';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './Components/AddMovie';
import Filtre from './Components/Filtre';


function FilmMovies( {movies, setMovies}) {
  const [search,setSearch] = react.useState('');
  const [rate, setRate] = react.useState(0)
  const AddNewMovie = (kk)=>{
      setMovies([...movies, kk])
  }
  return (
    <div className="App">
      <div style={{display:'flex',justifyContent:'space-around',gap:'40px',margin:'40px 0px'}}>
        <AddMovie AddNewMovie={AddNewMovie}/>
        <Filtre setSearch={setSearch} setRate={setRate}></Filtre>
      </div>
      <MovieLists movies={movies.filter(movie=> movie.title.toLocaleLowerCase().trim().includes(search) && movie.rating>= rate)} />
    </div>
  );
}

export default FilmMovies;