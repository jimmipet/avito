import "../../styles/components/Filtr/Filtr.scss";
import FiltrBlockTitle from "./FiltrBlocktitle";
import FiltrBlockItem from "./FiltrBlockItem";
import FiltrGenre from "./FiltrGenre";

function Filtr() {
  return (
    <div className="filtr-menu">
      <div className="filtr-menu__block platform">
        <FiltrBlockTitle className="platform" titleText="Платформа" />
        <div className="platform__block-list block-list-inside">
          <FiltrBlockItem
            groupName="platform"
            inputType="radio"
            className="platform"
            inputId="PC"
            itemText="PC"
          />
          <FiltrBlockItem
            groupName="platform"
            inputType="radio"
            className="platform"
            inputId="Browser"
            itemText="Browser"
          />
          <FiltrBlockItem
            groupName="platform"
            inputType="radio"
            className="platform"
            inputId="All"
            itemText="All"
          />
        </div>
      </div>

      <div className="filtr-menu__block genre">
        <FiltrBlockTitle className="genre" titleText="Жанр" />
        <div className="genre__block-list block-list-inside">
          <FiltrGenre />
        </div>
      </div>

      <div className="filtr-menu__block other">
        <FiltrBlockTitle className="other" titleText="Разное" />
        <div className="genre__block-list block-list-inside">
          <FiltrBlockItem
            groupName="other"
            inputType="radio"
            className="release_date"
            inputId="ReleaseData"
            itemText="Дата релиза"
          />
          <FiltrBlockItem
            groupName="other"
            inputType="radio"
            className="popularity"
            inputId="popularity"
            itemText="Популярность"
          />
          <FiltrBlockItem
            groupName="other"
            inputType="radio"
            className="alphabetical"
            inputId="alphabetical"
            itemText="По алфавиту"
          />
          <FiltrBlockItem
            groupName="other"
            inputType="radio"
            className="relevance"
            inputId="relevance"
            itemText="Актуальность"
          />
        </div>
      </div>
    </div>
  );
}

export default Filtr;
