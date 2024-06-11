// App.js

import { MovieProvider } from './components/MovieContext';
import MovieList from './components/MovieList';
import SearchMovieForm from './components/SearchMovieForm';
import './index.css'; // 
function App() {
  return (
    <MovieProvider>
      <div className="container">
        <header>
          <h1>Movie Search</h1>
          <SearchMovieForm />
        </header>
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
