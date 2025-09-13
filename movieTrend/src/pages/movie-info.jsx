import '../css/MovieInfo.css'
import NavBar from '../components/NavBar';

function MovieInfo() {
    const title = window.location.pathname.split('/movie/')[1];
    return (
        <div>
            <NavBar />
            <div>MovieInfo for {title}</div>
        </div>
    );
}

export default MovieInfo;