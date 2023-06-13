import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";

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
  return (
    <HeaderStyle>
      <picture>
        <img src="./logo.svg" alt="Logo" />
        <span>Geografia Regional</span>
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
            <Link to={"/foro"}>Foro</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
