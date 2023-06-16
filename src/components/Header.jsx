import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";

const HeaderStyle = styled.header`
  width: 100%;
  background-color: #4e6247;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.8rem;
  justify-content: space-between;
  position: relative;
  position: sticky;
  z-index: 10;
  top: 0;

  picture {
    display: flex;
    align-items: flex-end;

    img {
      max-width: 30px;
    }

    span {
      margin-left: 10px;
    }
  }

  nav {
    ul {
      display: flex;
      flex-direction: row;
    }

    li {
      list-style: none;

      margin-left: 5rem;
      cursor: pointer;
      a {
        color: #fff;
        text-decoration-line: none;
      }

      a:hover {
      }
    }
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #ffffff;
  min-width: 160px;
  border-left: solid 7px #b9b9b9;
  border-bottom: solid 4px #b9b9b9;
  border-right: solid 1px #b9b9b9;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  border-top-right-radius: 0.3rem;
  margin-top: 0.2rem;

  ${(props) =>
    props.open &&
    `
    display: block;
  `}
`;

const DropdownItem = styled(Link)`
  color: black !important;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <HeaderStyle>
      <picture>
        <img src="./logo.svg" alt="Logo" />
        <span>Argentina Regional</span>
      </picture>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/sobremi"}>Sobre Mi</Link>
          </li>
          <li ref={dropdownRef}>
            <DropdownWrapper>
              <a onClick={handleDropdownClick}>Regiones</a>
              <DropdownContent open={dropdownOpen}>
                <DropdownItem to={"/tandil"}>Cuyo</DropdownItem>
                <DropdownItem to={"/region2"}>Patagonia</DropdownItem>
                <DropdownItem to={"/region3"}>Norte</DropdownItem>
              </DropdownContent>
            </DropdownWrapper>
          </li>
          <li>
            <Link to={"/post"}>Post</Link>
          </li>
          <li>
            <Link to={"/foro"}>Foro</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
