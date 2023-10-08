import { useEffect, useState } from "react";
import { fetchData } from "../../api/Api";
import "../../styles/components/GameCardsGrid/MainGameGrid.scss";
import ItemGrid from "./ItemGrid";
import Pagination from "./Pagination";
import { GameData } from "../../typing";
interface Url {
  apiUrl: string;
}

function MainGameGrid({ apiUrl }: Url) {
  const [data, setData] = useState<GameData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData(apiUrl)
      .then((responseData) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [apiUrl]);

  const itemsPerPage = 12;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className="grid-menu">
      {data.length > 0 ? (
        data
          .slice(startIndex, endIndex)
          .map((game: GameData, index: number) => (
            <ItemGrid key={index} gameData={game} />
          ))
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
