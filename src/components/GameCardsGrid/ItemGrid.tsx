import "../../styles/components/GameCardsGrid/ItemGrid.scss";
import {Link} from 'react-router-dom'
interface GameData {
  id: string;
  thumbnail: string;
  title: string;
}

function ItemGrid({ gameData }: { gameData: GameData }) {
  return (

    <div id={gameData.id} className="grid-item">
      <Link to='/game-page'style={{ textDecoration: 'none' }}>
      <div className="grid-item__content">
        <div className="grid-item__image">
          <img src={gameData.thumbnail} alt="GameImage" />
        </div>
        <div className="grid-item__info">
          <p className="grid-item__text">{gameData.title}</p>
          <span className="grid-item__span">Free</span>
        </div>
      </div>
     </Link>
    </div>
     
  );
}

export default ItemGrid;