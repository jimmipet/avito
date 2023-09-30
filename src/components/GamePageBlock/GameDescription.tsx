import  styles from "../../styles/components/GamePageBloc/GamePageBlock.module.scss"
 interface GameDescription{
    description: string;
    title: string;

 }
function GameDescription({ gameData }:{gameData:GameDescription}){
    return(
        <div className={styles.description}>
            <div className={styles.title_hr}>
                <h2>About {gameData.title} </h2>
                <hr className={styles.hr} />
            </div>
            <p className={styles.decription_text}>{gameData.description}</p>
      </div>

    );
}

export default GameDescription;