import '../css/MovieCard.css'
import { Link } from "react-router-dom";   
import MovieInfo from '../pages/movie-info.jsx'
import { useMovieContext } from '../contexts/movieContexts.jsx';

function MovieCard ( { movie } )
{
    const { isFavorite, addFavorite, removeFavorite } = useMovieContext();

    function clickFavoriteBtn(e) {
        e.preventDefault();
        if (isFavorite(movie.id)) {
            removeFavorite(movie.id);
        } else {
            addFavorite(movie);
        }
    };

    function clickMovieCard() {
        window.location.href = `/movie/${movie.title}`;
    }

    return (
    <div className="movie-card">
            <div className="movie-poster">
                <Link to={`/movie/${movie.title}`} onClick={clickMovieCard} > 
                <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={ `Movie poster for ${ movie.title }.` } 
                />
                </Link>
            <div className="movie-like">
                <button className={isFavorite(movie.id) ? "favorite-btn active" : "favorite-btn"} onClick={clickFavoriteBtn}> 🤍 </button>
            </div>
        </div>
        <div className="movie-info">
            <h3> {movie.title} </h3>
                <p>{ movie.release_date }</p>
                <p className='user-rating'> ⭐ { movie.vote_average } </p>
                <p className="movie-overview"> { movie.overview } </p>
        </div>
    </div>)
}

export default MovieCard;