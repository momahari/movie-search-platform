import '../css/MovieCard.css'


function MovieCard({movie}) {

    function clickFivoriteBtn() {
        alert('you clicked the favorite button')
    };

    return (
    <div className="movie-card">
        <div className="movie-poster">
            <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={`Movie poster for ${movie.title}.`} 
            />
            <div className="movie-like">
                <button className="favorite-btn" onClick={clickFivoriteBtn} > 🤍 </button>
            </div>
        </div>
        <div className="movie-info">
            <h3> {movie.title} </h3>
            <p>{movie.release_date}</p>
        </div>
    </div>)
}

export default MovieCard;