
import './styles/App.scss'
import './styles/libs/normalize.scss'
import HomePage from './pages/HomePage';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import {Routes,Route } from 'react-router-dom'
import GamePage from './pages/GamePage';

function App() {

  return (
    <>
    <div className='main-container'>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/game-page/:id' element={<GamePage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      
    </div>
  </>
  );
}

export default App
