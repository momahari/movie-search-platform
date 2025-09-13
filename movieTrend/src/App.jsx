import './css/App.css'
import NavBar from './components/NavBar'  
import Home from './pages/home' 
import Favorites from './pages/favorites'
import MovieInfo from './pages/movie-info'
import { MovieProvider } from './contexts/movieContexts'    
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <MovieProvider >
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/Favorites' element={ <Favorites /> } />
          <Route path="/movie/:id" element={<MovieInfo />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
