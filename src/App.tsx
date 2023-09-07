import './styles/App.scss'
import './styles/libs/normalize.scss'
import Header from './components/Header';
import Filtr from './components/Filtr/Filtr';
import SomeText from './components/SomeText';
import MainGameGrid from "./components/MainGameGrid"

function App() {


  return (
    <>
      <div className='main-container'>
        <Header/>
        <div className='wrapper'>
          <div className='wrapper__body'>
            <SomeText/>
            <div className='wrapper__content'>
              <Filtr/>
              <MainGameGrid/>
            </div>

          </div>
          
        </div>
        
      </div>

    </>
  )
}

export default App
