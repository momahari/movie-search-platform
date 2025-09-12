import { useState } from "react";
import MovieCard from "../components/movieCard";
import '../css/Home.css'

function Home() {

    const [searchQuery, setSearchQuery] = useState("")

    const movieList = [
        { id: 1, title: "The black list", release_date: 2013},
        { id: 2, title: "Blind spot", release_date: 2016},
        { id: 3, title: "Suits", release_date: 2013},
    ];

    const handleMovieSearch = () => {
        alert(searchQuery)
    };

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