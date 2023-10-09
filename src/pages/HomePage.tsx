import { useEffect, useState } from "react";
import Filtr from "../components/Filtr/Filtr";
import MainGameGrid from "../components/GameCardsGrid/MainGameGrid";
import SomeText from "../components/SomeText";
import { selectSelectedPlatform } from "../redux/slices/Filtr/platformSlice";
import { selectSlectedGenre } from "../redux/slices/Filtr/genreSlice";
import { selectSelectedOther } from "../redux/slices/Filtr/otherSlice";
import { useSelector } from "react-redux";

function HomePage() {
  const selectedPlatform = useSelector(selectSelectedPlatform);
  const selectedGenre = useSelector(selectSlectedGenre);
  const selectedOther = useSelector(selectSelectedOther);

  const [apiUrl, setApiUrl] = useState<string>(
    "https://www.freetogame.com/api/games"
  );
  const generateApiUrl = () => {
    const baseUrl = "https://www.freetogame.com/api/games";

    const queryParams = [];

    if (selectedPlatform) {
      queryParams.push(`platform=${selectedPlatform.toLowerCase()}`);
    }

    if (selectedGenre) {
      queryParams.push(`category=${selectedGenre}`);
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
    console.log(newApiUrl);
  };

  useEffect(() => {
    const newApiUrl = generateApiUrl();
    setApiUrl(newApiUrl);
    console.log(newApiUrl);
  }, [handleApplyButtonClick]);

  return (
    <>
      <div className="wrapper">
        <div className="wrapper__body">
          <SomeText handleApplyButtonClick={handleApplyButtonClick} />
          <div className="wrapper__content">
            <Filtr />
            <MainGameGrid apiUrl={apiUrl} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
