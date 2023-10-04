import  styles from "../../styles/components/GamePageBloc/GamePageBlock.module.scss"
import {GameCards} from "../../typing"
  
function GamePreview({ gameData }:{ gameData: GameCards }){
    return(
    <div className={styles.game_carts}>
      <img className={styles.img} src={gameData.thumbnail} alt={gameData.name} />
      <div className={styles.button_carts}>
        <button className={styles.button_free}>FREE</button>
        <a className={styles.game_link} href={gameData.game_url}><button className={styles.button_playnow}>PLAY NOW</button></a>
      </div>
    </div>

    );
}

export default GamePreview;