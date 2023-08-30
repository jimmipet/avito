import './styles/App.scss'
import './styles/libs/normalize.scss'
import Header from './components/Header';
import Filtr from './components/Filtr/Filtr';
import SomeText from './components/SomeText';

function App() {


  return (
    <>
      <div className='main-container'>
        <Header/>
        <div className='wrapper'>
          <div className='wrapper-body'>
            <SomeText/>
            <Filtr/>
          </div>
          
        </div>
        
      </div>

    </>
  )
}

export default App
