import { toast } from "react-toastify";
import styled from "styled-components";

const PaginationStyle = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
  button {
    font-size: 18px;
    padding: 12px 15px;
    border-radius: 5px;
    background-color: #f8f8f8;
    border: none;
    border-bottom: solid 2px #dadada;
  }
  .active {
    background-color: #999;
    border-bottom: solid 2px #333;
  }
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationStyle>
      {
        totalPages <= currentPage - 1 || currentPage - 1 === 0 ?
        '' : <button onClick={() => onPageChange(currentPage - 1)}>Ant</button>
      }
      {pageNumbers.map((pageNumber) => (
        <button
        key={pageNumber}
        onClick={() => onPageChange(pageNumber)}
        className={currentPage === pageNumber ? "active" : ""}
        >
          {pageNumber}
        </button>
      ))}
      {
        totalPages >= currentPage + 1 ?
        <button onClick={() => onPageChange(currentPage + 1)}>Sig</button> : ''
      }
    </PaginationStyle>
  );
};

export default Pagination;
