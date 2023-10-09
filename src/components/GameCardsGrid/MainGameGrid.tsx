import { useEffect, useState } from "react";
import { fetchData } from "../../api/Api";
import "../../styles/components/GameCardsGrid/MainGameGrid.scss";
import ItemGrid from "./ItemGrid";
import Pagination from "./Pagination";
import { GameData } from "../../typing";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPage } from "../../redux/slices/Filtr/pageSlice";
import { selectSelectedSearch } from "../../redux/slices/Search/searchSlice";
import { setCurrentPage } from "../../redux/slices/Page/pageSlice";
interface Url {
  apiUrl: string;
}

function MainGameGrid({ apiUrl }: Url) {
  const selectedSearch = useSelector(selectSelectedSearch);
  const currentPage = useSelector(selectCurrentPage);
  const [data, setData] = useState<GameData[]>([]);
  const dispatch = useDispatch();
  const itemsPerPage = 12;

  useEffect(() => {
    fetchData(apiUrl)
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [apiUrl]);

  const handlePageChange = (newPage: number) => {
    dispatch(setCurrentPage(newPage));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredData = data.filter((game: GameData) =>
    selectedSearch
      ? game.title.toLowerCase().includes(selectedSearch.toLowerCase())
      : true
  );

  const totalPages =
    filteredData.length > 0
      ? Math.ceil(filteredData.length / itemsPerPage)
      : Math.ceil(data.length / itemsPerPage);

  return (
    <div className="grid-menu">
      {data.length > 0 ? (
        filteredData.length > 0 ? (
          filteredData
            .slice(startIndex, endIndex)
            .map((game: GameData, index: number) => (
              <ItemGrid key={index} gameData={game} />
            ))
        ) : (
          data
            .slice(startIndex, endIndex)
            .map((game: GameData, index: number) => (
              <ItemGrid key={index} gameData={game} />
            ))
        )
      ) : (
        <p>Loading...</p>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
export default MainGameGrid;
