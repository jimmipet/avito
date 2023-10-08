import "../../styles/components/Filtr/Filtr.scss";
import FiltrBlockTitle from "./FiltrBlocktitle";
import FiltrBlockItem from "./FiltrBlockItem";
import FiltrGenre from "./FiltrGenre";
import { useSelector } from "react-redux";
import { selectSelectedPlatform } from "../../redux/slices/Filtr/platformSlice";
import { selectSlectedGenre } from "../../redux/slices/Filtr/genreSlice";
import { selectSelectedOther } from "../../redux/slices/Filtr/otherSlice";



function Filtr({ setApiUrl }: { setApiUrl: (url: string) => void }) {
  const selectedPlatform = useSelector(selectSelectedPlatform);
  const selectedGenre = useSelector(selectSlectedGenre);
  const selectedOther = useSelector(selectSelectedOther);

  const generateApiUrl = () => {
    const baseUrl = "https://www.freetogame.com/api/games";

    const queryParams = [];

    if (selectedPlatform) {
      queryParams.push(`platform=${selectedPlatform.toLowerCase()}`);
    }

    if (selectedGenre) {
      queryParams.push(`category=${selectedGenre}`);
      console.log(selectedGenre)
    }

    if (selectedOther) {
      queryParams.push(`sort-by=${selectedOther}`);
    }

    if (queryParams.length > 0) {
      return `${baseUrl}?${queryParams.join("&")}`;
    }

    return baseUrl;
  };

  const handleApplyButtonClick = () => {
    const newApiUrl = generateApiUrl();
    setApiUrl(newApiUrl);
  };

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
      <div className="filtr-menu__button">
        <button className="button-apply" onClick={handleApplyButtonClick}>
          Применить
        </button>
      </div>
    </div>
  );
}

export default Filtr;
