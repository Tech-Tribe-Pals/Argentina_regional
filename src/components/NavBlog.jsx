import { useState } from "react";
import styled from "styled-components";

const NavStyle = styled.nav`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 2;
  transition: ease-in-out 0.3s;
  .expand {
    display: none;
    width: 30px;
    height: 35px;
    background-color: #4e6247;
    position: absolute;
    right: -25px;
    top: -10px;
    justify-content: start;
    border-radius: 0 5px 5px 5px;
    img {
      display: none;
      width: 20px;
    }
  }
  input {
    padding: 5px;
    border-radius: 10px;
  }
  div {
    display: flex;
    align-items: center;
  }
  .date {
    p {
      margin-right: 5px;
    }
  }
  img {
    width: 25px;
    margin-left: 5px;
    filter: invert(100%);
    transition: ease-in-out 0.2s;
    :hover {
      filter: invert(0);
      cursor: pointer;
    }
  }
  @media (width < 990px) {
    .expand {
      display: flex;
      img {
        display: flex;
      }
    }
    div {
      margin: 10px 0;
    }
  }
`;

const NavBlog = ({ sendFilter, actualPage }) => {
  const [order, setOrder] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchText, setSearchText] = useState("");
  const [anim, setAnim] = useState(false);

  const filterPosts = async () => {
    try {
      if (startDate && endDate && startDate > endDate) {
        console.error(
          "La fecha de inicio no puede ser mayor que la fecha de fin"
        );
        return;
      }

      const filter = {
        search: searchText,
        filter: order ? 1 : -1,
        limit: 4,
        page: actualPage,
      };

      sendFilter(filter);
    } catch (error) {
      console.error("Error al filtrar los posteos:", error);
    }
  };

  return (
    <NavStyle style={anim ? { left: 0 } : {}}>
      <div onClick={() => setAnim(!anim)} className="expand">
      <img src="/Iconos/filter.svg" />
      </div>
      <div className="sort">
        <p>Ordenar por:</p>
        <img
          onClick={() => setOrder(!order)}
          style={order ? { display: "none" } : {}}
          src="/Iconos/desc.svg"
        />
        <img
          onClick={() => setOrder(!order)}
          style={order ? {} : { display: "none" }}
          src="/Iconos/asc.svg"
        />
      </div>
      <div className="date">
        <p>Desde:</p>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="date">
        <p>Hasta:</p>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div className="search">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <img onClick={() => filterPosts()} src="/Iconos/search.svg" />
      </div>
    </NavStyle>
  );
};

export default NavBlog;
