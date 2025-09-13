import { useEffect, useState } from "react";
import MovieCard from "../components/movieCard";
import { getMostPopularMovies, getMovieDetails } from "../services/api.js";    
import '../css/Home.css'

function Home() {

    const [searchQuery, setSearchQuery] = useState("")

    const [movieList, setMovieList] = useState([]);
    useEffect( () => {
        async function fetchMovies() {
            const data = await getMostPopularMovies();
            setMovieList(data.results);
        }
        fetchMovies();
    }, []);

    return(
        <div className="home">
            <form onSubmit={handleMovieSearch} className="search-form">
                <input type="text" placeholder="search for a movie" className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-submit-btn"> Search </button>
            </form>
            <div className="movies-grid">
                { movieList.map( ( movie ) => 
                    movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id}/>))}
            </div>
        </div>
    );
}

export default Home;