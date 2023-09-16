import "../../styles/components/GameCardsGrid/ItemGrid.scss";

interface GameData {
  id: number;
  thumbnail: string;
  title: string;
}

function ItemGrid({ gameData }: { gameData: GameData }) {
  return (
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
  );
}

export default ItemGrid;