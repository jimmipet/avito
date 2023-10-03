import  styles from "../../styles/components/GamePageBloc/GamePageBlock.module.scss"
import {GameCards} from "../../typing"
  
function GamePreview({ gameData }:{ gameData: GameCards }){
    return(
    <div className={styles.game_carts}>
      <img className={styles.img} src={gameData.thumbnail} alt={gameData.name} />
      <div className={styles.button_carts}>
        <button className={styles.button_free}>FREE</button>
        <button className={styles.button_playnow}>PLAY NOW</button>
      </div>
    </div>

    );
}

export default GamePreview;