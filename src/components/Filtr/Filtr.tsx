import "../../styles/components/Filtr.scss"
import FiltrBlockTitle from "./FiltrBlocktitle";
import FiltrBlockItem from "./FiltrBlockItem"
import FiltrGenre from "./FiltrGenre"

function Filtr(){
    return(
        <div className="filtr-menu">
            <div className="filtr-menu__block platform">
                <FiltrBlockTitle className="platform" titleText="Платформа"/>
                <div className="platform__block-list block-list-inside">
                    <FiltrBlockItem className="platform" inputId="PC" itemText="PC"/>
                    <FiltrBlockItem className="platform" inputId="Browser" itemText="Browser"/>
                </div>
            </div>

            <div className="filtr-menu__block genre">
                <FiltrBlockTitle className="genre" titleText="Жанр"/>
                <div className="genre__block-list block-list-inside">
                    <FiltrGenre/>
                </div>
            </div>

            <div className="filtr-menu__block other">
                <FiltrBlockTitle className="other" titleText="Разное"/>

            </div>
            
        </div>

    );
}

export default Filtr;