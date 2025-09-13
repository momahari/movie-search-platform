import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);

export function MovieProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [ favorites ] );
    
    function addFavorite(movie) {
        setFavorites((prevFavorites) => {
            if (!prevFavorites.find((fav) => fav.id === movie.id)) {
                return [...prevFavorites, movie];
            }
            return prevFavorites;
        });
    }

    function removeFavorite(movieId) {
        setFavorites((prevFavorites) =>
            prevFavorites.filter((movie) => movie.id !== movieId)
        );
    }

    function isFavorite(movieId) {
        return favorites.some((movie) => movie.id === movieId);
    }

    return (
        <MovieContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
            {children}
        </MovieContext.Provider>
    );
}

