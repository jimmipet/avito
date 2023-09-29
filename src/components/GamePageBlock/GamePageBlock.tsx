//решил использовать блоки в стилизации
import  styles from "../../styles/components/GamePageBloc/GamePageBlock.module.scss"
import React, { useState, useEffect } from "react";
import { fetchData } from "../../api/Api";
import { useParams } from 'react-router-dom';

function GamePageBlock(){
    const { id } = useParams<{ id: string }>();
    const [gameData, setGameData] = useState(null);

    useEffect(() => {
      // Загрузка данных при монтировании компонента
      async function fetchDataFromApi() {
        try {
          const data = await fetchData(`https://www.freetogame.com/api/game?id=${id}`);
          setGameData(data);
          console.log(data)    
        } catch (error) {
          console.error("Ошибка при получении данных:", error.message);
        }
      }
  
      fetchDataFromApi();
    }, [id]);
    return(
        <div className={styles.wrapper}>
        <div className={styles.wrapper_body}>
          {gameData && (
            <div className={styles.game_carts}>
              <img className={styles.img} src={gameData.thumbnail} alt={gameData.name} />
              <div className={styles.button_carts}>
                <button className={styles.button_free}>FREE</button>
                <button className={styles.button_playnow}>PLAY NOW</button>
              </div>
            </div>
          )}
  
          <div className={styles.game_about}>
            {gameData && (
              <>
                <h1 className={styles.title}>{gameData.title}</h1>
                {/* Описание игры */}
                <div className={styles.description}>
                  <div className={styles.title_hr}>
                    <h2>About {gameData.title} </h2>
                    <hr className={styles.hr} />
                  </div>
                    <p className={styles.decription_text}>{gameData.description}</p>
                </div>
                {/* Информация */}
                <div className={styles.additionalI_information}>

                  <div className={styles.title_hr}>
                    <h2 >Additional Information</h2>
                    <hr className={styles.hr} />

                  </div>

                  <div className={styles.grid} >

                    <div className={styles.grid_item}>

                      <div className={styles.grid_info}>
                        <p>Title</p>
                        <p>{gameData.title}</p>
                      </div>

                      <div className={styles.grid_info}>
                        <p>Developer</p>
                        <p>{gameData.developer}</p>
                      </div>
                      <div className={styles.grid_info}>
                        <p>Publisher</p>
                        <p>{gameData.publisher}</p>
                      </div>
                      <div className={styles.grid_info}>
                        <p>Release Date</p>
                        <p>{gameData.release_date}</p>
                      </div>
                      <div className={styles.grid_info}>
                        <p>Genre</p>
                        <p>{gameData.genre}</p>
                      </div>
                      <div className={styles.grid_info}>
                        <p>Platform</p>
                        <p>{gameData.platform}</p>
                      </div>


                    </div>

                  </div>


                </div>
                {/* Минимальные требования */}
                <div>
                  <p>Минимальные требования: {gameData.minimumRequirements}</p>
                </div>
                {/* Скриншоты */}
                <div>
                    {gameData.screenshots.map((screenshot, index) => (
                        <img className={styles.image} key={index} src={screenshot.imag} alt={`Screenshot ${index}`} />
                    ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
}

export default GamePageBlock;
