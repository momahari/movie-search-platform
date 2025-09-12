import './css/App.css'
import MovieCard from './components/movieCard'   
import NavBar from './components/NavBar'  
import Home from './pages/home' 
import Favorites from './pages/favorites'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="main-container">
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/Favorites' element={ <Favorites /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
