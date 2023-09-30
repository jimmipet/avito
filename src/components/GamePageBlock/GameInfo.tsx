import  styles from "../../styles/components/GamePageBloc/GamePageBlock.module.scss"

interface GameInfo{
    title: string;
    developer: string;
    publisher: string;
    release_date: string;
    genre: string;
    platform: string;
    
}

function GameInfo({ gameData }: { gameData: GameInfo }) {
  const infoItems = [
    { label: 'Title', value: gameData.title },
    { label: 'Developer', value: gameData.developer },
    { label: 'Publisher', value: gameData.publisher },
    { label: 'Release Date', value: gameData.release_date },
    { label: 'Genre', value: gameData.genre },
    { label: 'Platform', value: gameData.platform },
  ];

  return (
    <div className={styles.additionalI_information}>
      <div className={styles.title_hr}>
        <h2>Additional Information</h2>
        <hr className={styles.hr} />
      </div>
      <div className={styles.grid}>
        <div className={styles.grid_item}>
          {infoItems.map((item, index) => (
            <div className={styles.grid_info} key={index}>
              <p>{item.label}</p>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameInfo;