import React, { useEffect, useState } from 'react';
import { fetchData } from '../../api/Api';
import '../../styles/components/GameCardsGrid/MainGameGrid.scss';
import ItemGrid from './ItemGrid';
import Pagination from './Pagination'; // Импортируйте компонент Pagination

function MainGameGrid() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const apiUrl = 'https://www.freetogame.com/api/games';

    fetchData(apiUrl)
      .then((responseData) => {
        console.log('Data received:', responseData);
        setData(responseData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

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
        data.slice(startIndex, endIndex).map((game, index) => (
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
