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
  

  const [apiUrl, setApiUrl] = useState<string>("https://www.freetogame.com/api/games");
  useEffect(() => {
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
    setApiUrl(generateApiUrl())


  }, [])
  
  return (
    <>
      <div className="wrapper">
        <div className="wrapper__body">
          <SomeText />
          <div className="wrapper__content">
            <Filtr setApiUrl={setApiUrl} />
            <MainGameGrid apiUrl={apiUrl} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
