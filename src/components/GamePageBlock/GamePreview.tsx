import  styles from "../../styles/components/GamePageBloc/GamePageBlock.module.scss"

interface GameImg {
    thumbnail: string;
    name: string;
  }
  
function GamePreview({ gameData }:{ gameData: GameImg }){
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