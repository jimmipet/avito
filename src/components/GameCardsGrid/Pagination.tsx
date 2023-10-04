import "../../styles/components/GameCardsGrid/Pagination.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button
        className="pagination__back"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        &#8249;
      </button>
      <span className="pagination__page">
        Страница {currentPage} из {totalPages}
      </span>
      <button
        className="pagination__next"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        &#8250;
      </button>
    </div>
  );
}

export default Pagination;
