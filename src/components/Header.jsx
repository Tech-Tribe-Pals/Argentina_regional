import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useContext, useEffect } from 'react';
import { HeaderContext } from '../context/HeaderContext';

const HeaderStyle = styled.header`

  width: 100%;
  background-color: #4e6247;
  color: #fff;
  border-bottom: solid #1a1919 9px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.5rem;
  justify-content: space-between;

  position: sticky;
  z-index:10;

  top:0;

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

      li {
        list-style: none;

        margin-left: 1rem;

        a {
          color: #fff;
          text-decoration-line: none;
        }

        a:hover {


        }
      }
    }
  }
`;

const Header = () => {
  const { headerOut, setPath } = useContext(HeaderContext);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setPath(location.pathname);
    } else {
      setPath(location.pathname);
    }
  }, [location.pathname, setPath]);

  return (
    <HeaderStyle style={ headerOut ? { display: 'none' } : { display: 'flex' } }>
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
            <Link to={"/regiones"}>Regiones</Link>
          </li>
          <li>
            <Link to={"/post"}>Post</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
};

export default Header;