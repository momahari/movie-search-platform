import { useEffect, useState } from "react";
import MovieCard from "../components/movieCard";
import { getMostPopularMovies, getMovieDetails } from "../services/api.js";    
import '../css/Home.css'


function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movieList, setMovieList] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        async function fetchMovies() {
            try {
                setLoading(true);
                const data = await getMostPopularMovies(page);
                if (page === 1) {
                    setMovieList(data.results);
                } else {
                    setMovieList((prev) => [...prev, ...data.results]);
                }
                setHasMore(data.page < data.total_pages);
            } catch (error) {
                setError(error);
                console.error("Error fetching popular movies:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies();
    }, [page]);

    // Handle search form submission
    async function handleMovieSearch(e) {
        e.preventDefault();
        if (!searchQuery.trim()) {
            return; // Do nothing if the search query is empty
        }
        if (loading) {
            return; // Prevent multiple searches while loading
        }
        setLoading(true);
        try {
            const searchResults = await getMovieDetails(searchQuery);
            setMovieList(searchResults.results);
            setHasMore(false); // Hide load more when searching
            setError(null);
        } catch (error) {
            setError(error);
            setError("Error searching for movies:");
        } finally {
            setLoading(false);
        }
        setSearchQuery("");
    }

    function handleLoadMore() {
        if (!loading && hasMore) {
            setPage((prev) => prev + 1);
        }
    }

    return (
        <div className="home">
            <form onSubmit={handleMovieSearch} className="search-form">
                <input type="text" placeholder="search for a movie" className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-submit-btn"> Search </button>
            </form>

            {error && <div className="error">Error: {error.message || error}</div>}
            {loading && page === 1 ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="movies-grid">
                    {movieList
                        .filter(movie => movie.title.toLowerCase().startsWith(searchQuery.trim().toLowerCase()))
                        .map(movie => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))}
                </div>
            )}
            {hasMore && !loading && (
                <button className="load-more-btn" onClick={handleLoadMore}>Load More</button>
            )}
        </div>
    );
}

export default Home;