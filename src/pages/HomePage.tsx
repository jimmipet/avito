import { useState } from "react";
import Filtr from "../components/Filtr/Filtr";
import MainGameGrid from "../components/GameCardsGrid/MainGameGrid";
import SomeText from "../components/SomeText";

function HomePage() {
  const [apiUrl, setApiUrl] = useState<string>("https://www.freetogame.com/api/games");
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
