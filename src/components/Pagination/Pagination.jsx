import PropTypes from 'prop-types'

const Pagination = ({ changePage, maxPages, currentPage }) => {
  if (maxPages <= 1) {
    return null
  }

  const handlePageChange = (page) => {
    if (page < 1 || page > maxPages) return;
    changePage(page);
  };

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= maxPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center">
      <ul className="flex items-center gap-4 pagination">
      <li>
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            &lt;
          </button>
        </li> 
        {pageNumbers.map(number => (
          <li key={number} className={currentPage === number ? 'active' : ''}>
            <button onClick={() => handlePageChange(number)}>
              {number}
            </button>
          </li>
        ))}
        <li>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === maxPages}>
            &gt;
          </button>
        </li>
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  changePage: PropTypes.func,
  maxPages: PropTypes.number,
  currentPage: PropTypes.number
}

export default Pagination;
