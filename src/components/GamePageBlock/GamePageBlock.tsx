import styles from "../../styles/components/GamePageBloc/GamePageBlock.module.scss";
import { useState, useLayoutEffect } from "react";
import { fetchData } from "../../api/Api";
import { useParams } from "react-router-dom";
import GamePreview from "./GamePreview";
import GameDescription from "./GameDescription";
import GameInfo from "./GameInfo";
import GameMinRequirements from "./GameMinRequirements";
import GameScreenshots from "./GameScreenshots";

function GamePageBlock() {
  const { id } = useParams<{ id: string }>();
  const [gameData, setGameData] = useState(null);

  useLayoutEffect(() => {
    async function fetchDataFromApi(setGameData: (data: any) => void) {
      try {
        const data = await fetchData(
          `https://www.freetogame.com/api/game?id=${id}`
        );
        setGameData(data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    }

    fetchDataFromApi(setGameData);
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_body}>
        {gameData && <GamePreview gameData={gameData} />}
        <div className={styles.game_about}>
          {gameData && (
            <>
              <GameDescription gameData={gameData} />
              <GameInfo gameData={gameData} />
              {gameData.minimum_system_requirements && (
                <GameMinRequirements
                  systemRequirements={gameData.minimum_system_requirements}
                />
              )}
              <GameScreenshots gameData={gameData} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default GamePageBlock;
