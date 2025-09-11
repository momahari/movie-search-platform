import MovieCard from "../components/movieCard";

function Home() {

    const movieList = [
        { id: 1, title: "The black list", release_date: 2013},
        { id: 2, title: "Blind spot", release_date: 2016},
        { id: 3, title: "Suits", release_date: 2013},
    ];

    const handleMovieSearch = () => {}

    return(
        <div className="home">
            <form onSubmit={handleMovieSearch} className="search-form">
                <input type="text" placeholder="search for a movie" className="search-imput" />
            </form>
            <div className="movie-grid">
                {movieList.map((movie) => 
                (<MovieCard movie={movie} key={movie.id}/>))}
            </div>
        </div>
    );
}

export default Home