// MovieList.js
import  { useContext } from 'react';
import { MovieContext } from './MovieContext';

function MovieList() {
  const { movies, getPosterUrl } = useContext(MovieContext);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id} className="movie">
          <img src={getPosterUrl(movie.poster_path)} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
