// MovieContext.js
import  { createContext, useState } from 'react';
import axios from 'axios';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const apiKey = '8ac52ce2d2578ed0491ee24594f34f5e';

  const searchMovies = async (query) => {
    if (query.trim() === '') {
      setMovies([]);
      return;
    }
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching data from TMDb API", error);
    }
  };

  const getPosterUrl = (posterPath) => {
    return `https://image.tmdb.org/t/p/w500/${posterPath}`;
  };

  return (
    <MovieContext.Provider value={{ movies, searchMovies, getPosterUrl }}>
      {children}
    </MovieContext.Provider>
  );
};
