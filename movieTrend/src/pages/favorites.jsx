import '../css/Favorites.css'
import { useMovieContext } from '../contexts/movieContexts.jsx';
import MovieCard from '../components/movieCard.jsx';

function Favorites() {
    const { favorites } = useMovieContext();
    
    if ( favorites )
    {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
                    <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        )
    }
    return (
        <div className="favorites-page">
            <h2> My Favorite Movies </h2>
            <div className="favorites-list">
                {favorites.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Favorites;