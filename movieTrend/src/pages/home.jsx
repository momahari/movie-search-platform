import { useEffect, useState } from "react";
import MovieCard from "../components/movieCard";
import { getMostPopularMovies, getMovieDetails } from "../services/api.js";    
import '../css/Home.css'

function Home() {

    const [searchQuery, setSearchQuery] = useState("")

    const [ movieList, setMovieList ] = useState( [] );
    const [ error, setError ] = useState( null );
    const [ loading, setLoading ] = useState( true );
    useEffect( () => {
        async function fetchMovies() {
            try {
                setLoading(true);
                const data = await getMostPopularMovies();
                setMovieList(data.results);
            } catch ( error )
            {
                setError(error);
                console.error("Error fetching popular movies:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies();
    }, []);

    // Handle search form submission
    function handleMovieSearch(e) {
        e.preventDefault();
        // Optionally, you can implement API search here
    }

    return(
        <div className="home">
            <form onSubmit={handleMovieSearch} className="search-form">
                <input type="text" placeholder="search for a movie" className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-submit-btn"> Search </button>
            </form>

            { error && <div className="error">Error: {error.message}</div> }
            { loading ? <div className="loading">Loading...</div> :
                <div className="movies-grid">
                    { movieList
                        .filter(movie => movie.title.toLowerCase().startsWith(searchQuery.trim().toLowerCase()))
                        .map(movie => (
                            <MovieCard movie={movie} key={movie.id}/>
                        ))
                    }
                </div> }
        </div>
    );
}

export default Home;