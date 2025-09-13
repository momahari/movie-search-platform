
const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '731657cb1fa6d253308ac807f10e0f5a';


export const getMostPopularMovies = async () => {
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}&page=1`);
    const data = await response.json();
    return data;
};

export const getMovieDetails = async (query) => {
    const response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1&include_adult=false`);
    const data = await response.json();
    return data;
};