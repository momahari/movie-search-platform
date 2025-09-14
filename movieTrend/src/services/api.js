
const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '731657cb1fa6d253308ac807f10e0f5a';


export const getMostPopularMovies = async (page = 1) => {
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
    if (!response.ok) {
        throw new Error('Failed to fetch most popular movies');
    }
    const data = await response.json();
    return data;
};

export const getMovieDetails = async (movieId) => {
    const response = await fetch(`${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    if (!response.ok) {
        throw new Error('Failed to fetch movie details');
    }
    const data = await response.json();
    return data;
};