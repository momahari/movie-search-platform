
import '../css/MovieInfo.css';
import { getMovieDetails } from "../services/api.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieInfo() {
    const { id: movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('movieId from useParams:', movieId);
        async function fetchMovie() {
            setLoading(true);
            setError(null);
            try {
                const data = await getMovieDetails(movieId);
                console.log('Fetched movie data:', data);
                setMovie(data);
            } catch (err) {
                setError("Failed to fetch movie details.");
            } finally {
                setLoading(false);
            }
        }
        if (movieId) {
            fetchMovie();
        }
    }, [movieId]);

    if (loading) {
        return <div className="movie-info-page"><div>Loading...</div></div>;
    }
    if (error) {
        return <div className="movie-info-page"><div>{error}</div></div>;
    }
    if (!movie) {
        return <div className="movie-info-page"><div>No movie data found.</div></div>;
    }

    return (
        <div className='movie-info-page'>
            <div>
                <img className='background-image' src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={`Backdrop for ${movie.title}`} />
            </div>
            <div className='movie-info-content'>
                <h1>{movie.title}</h1>
                <h3 className='genres'>Genres: {movie.genres ? movie.genres.map(g => g.name).join(', ') : 'N/A'}</h3>
                <p>{movie.overview}</p>
                <p className='actors'>Actors: {movie.actors ? movie.actors.join(', ') : 'N/A'}</p>
                <p>Release Date: {movie.release_date}</p>
                <p>User Rating: ⭐ {movie.vote_average}</p>
                <p className='movie-overview'>{movie.overview}</p>
            </div>
        </div>
    );
}

export default MovieInfo;