// App.js

import { MovieProvider } from './components/MovieContext';
import MovieList from './components/MovieList';
import SearchMovieForm from './components/SearchMovieForm';
import './index.css'; // 
function App() {
  return (
    <MovieProvider>
      <div className="App">
        <h1>Movie Search</h1>
        <SearchMovieForm />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
