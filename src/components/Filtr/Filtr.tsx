import "../../styles/components/Filtr.scss"
import FiltrBlockTitle from "./FiltrBlocktitle";

function Filtr(){
    return(
        <div className="filtr-menu">
            {/* Блок платформы */}
            <div className="filtr-menu__block platform">
                {/*блок черточки и названия  */}
                {/* <div className="filtr-menu__block-title">
                    <h2 className="filtr-menu__title platform__title">Платформа</h2>
                    <hr className="filtr-menu__hr" />        
                </div> */}
                <FiltrBlockTitle className="platform" titleText="Платформа"/>
              {/* блок списка фильтров блока */}
                <div className="platform__block-list block-list">

                    <div className="platform__item item--checkbox">
                         <input className="platform__input " type="checkbox"  id="PC"/> 
                        <p className="platform__text ">PC</p>
                    </div>

                    <div className="platform__item item--checkbox">
                        <input className="platform__input " type="checkbox" id="Browser" />
                        <p className="platform__text ">Browser</p>
                    </div>

                </div>

            </div>

            {/* Блок жанров */}
            <div className="filtr-menu__block genre">
                {/*блок черточки и названия  */}
                <div className="filtr-menu__block-title">
                    <h2 className="filtr-menu__title genre__title">Жанр</h2>
                    <hr className="filtr-menu__hr" /> 
                </div>
  
                {/* блок списка фильтров блока */}
                {/* //тут надо придумать как уменьшить код и не писать много дивов c каждым фильтром */}
                <div className="genre__block-list block-list">

                    <div className="genre__item item--checkbox">
                        <input className="genre__input " type="checkbox" id="mmorpg" />
                        <p className="genre__text">Mmorpg</p>
                    </div>

                    <div className="genre__item item--checkbox">
                        <input className="genre__input " type="checkbox" id="mmo" />
                        <p className="genre__text">MMO</p>
                    </div>

                    <div className="genre__item item--checkbox">
                        <input className="genre__input" type="checkbox" id="shooter" />
                        <p className="genre__text">Shooter</p>
                    </div>

                    <div className="genre__item item--checkbox">
                        <input className="genre__input" type="checkbox" id="strategy" />
                        <p className="genre__text">Strategy</p>
                    </div>

                </div>
                
            </div>

            {/* Блок разного */}
            <div className="filtr-menu__block other">
                <h2 className="filtr-menu__title other__title">Разное</h2>

            </div>

        </div>

    );
}

export default Filtr;