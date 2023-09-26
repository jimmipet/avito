import Filtr from "../components/Filtr/Filtr";
import MainGameGrid from "../components/GameCardsGrid/MainGameGrid";
import SomeText from "../components/SomeText";


function HomePage(){
    return(
        <>
        <div className='wrapper'>
          <div className='wrapper__body'>
            <SomeText/>
              <div className='wrapper__content'>
                <Filtr/>
                <MainGameGrid/>
              </div>
          </div>
        </div>
      </>

    );
}

export default HomePage;