import '../../styles/components/GameCardsGrid/MainGameGrid.scss'
import ItemGrid from './ItemGrid';

function MainGameGrid(){
    return(
        <div className="grid-menu">
            <ItemGrid/>
            <ItemGrid/>
            <ItemGrid/>
            <ItemGrid/>
            <ItemGrid/>
            <ItemGrid/>
        </div>

    );
}

export default MainGameGrid;