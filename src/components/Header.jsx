import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";

const HeaderStyle = styled.header`
  background-color: #223;
  color: #fff;
  nav {
    ul {
      li {
        list-style: none;
        a {
          color: #fff;
          text-decoration-line: none;
        }
      }
    }
  }
`;

const Header = () => {
  
  return (
    <HeaderStyle>
      <img src="./logo.svg" alt="Logo" />
      Geografia Regional
      <nav>
        <ul>
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
