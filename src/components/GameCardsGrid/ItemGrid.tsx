import "../../styles/components/GameCardsGrid/ItemGrid.scss";
import {Link} from 'react-router-dom'
import { GameCards } from "../../typing"

function ItemGrid({ gameData }: { gameData: GameCards }) {
  return (
<Link to={`/game-page/${gameData.id}`}style={{ textDecoration: 'none' }}>
    <div id={gameData.id} className="grid-item">
      
      <div className="grid-item__content">
        <div className="grid-item__image">
          <img src={gameData.thumbnail} alt="GameImage" />
        </div>
        <div className="grid-item__info">
          <p className="grid-item__text">{gameData.title}</p>
          <span className="grid-item__span">Free</span>
        </div>
      </div>
   
    </div>
  </Link>     
  );
}

export default ItemGrid;