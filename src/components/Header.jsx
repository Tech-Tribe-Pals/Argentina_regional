import { useState, useEffect, useRef, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { HeaderContext } from "../context/HeaderContext";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { isUser } = useContext(UserContext);

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

  const { headerOut, setPath } = useContext(HeaderContext);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.pathname === "/") {
      setPath(location.pathname);
    } else {
      setPath(location.pathname);
    }
  }, [location.pathname]);

  const [setmenu, setMenu] = useState(0);

  const toggle = (num) => {
    setMenu(num);
  };

  const [setregiones, setRegiones] = useState(0);

  const toggleRegiones = (num) => {
    setRegiones(num);
  };

  return (
    <HeaderStyle style={headerOut ? { display: "none" } : { display: "flex" }}>
      <picture>
        <img src="/Inicio/logo.svg" alt="Logo" />
        <span>Argentina Regional</span>
      </picture>

      <button onClick={() => toggle(!setmenu)} className="Burger-Menu">
        <img src="/menu.svg" width={30} alt="" />
      </button>
      <nav>
        <ul className={setmenu ? "show" : "hidden"}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/sobremi"}>Presentación</Link>
          </li>

          <div className="RegionMobile">
            <a onClick={() => toggleRegiones(!setregiones)}>Regiones</a>
            <ul className={setregiones ? "show" : "hidden"}>
              <li>
                <Link to={"/regiones/cuyo"}>Cuyo</Link>
              </li>
              <li>
                <Link to={"/regiones/patagonia"}>Patagonia</Link>
              </li>
              <li>
                <Link to={"/regiones/metropolitana"}>Metropolitana</Link>
              </li>
              <li>
                <Link to={"/regiones/noroeste"}>Noroeste</Link>
              </li>
              <li>
                <Link to={"/regiones/noreste"}>Noreste</Link>
              </li>
              <li>
                <Link to={"/regiones/antartida"}>Antártida</Link>
              </li>
              <li>
                <Link to={"/regiones/transfronterizas"}>Transfronterizas</Link>
              </li>
            </ul>
          </div>
          <li className="Regiones" ref={dropdownRef}>
            <DropdownWrapper>
              <a onClick={handleDropdownClick}>Regiones</a>
              <DropdownContent open={dropdownOpen}>
                <DropdownItem to={"/regiones/cuyo"}>Cuyo</DropdownItem>
                <DropdownItem to={"/regiones/patagonia"}>
                  Patagonia
                </DropdownItem>
                <DropdownItem to={"/regiones/metropolitana"}>
                  Metropolitana
                </DropdownItem>
                <DropdownItem to={"/regiones/noroeste"}>Noroeste</DropdownItem>
                <DropdownItem to={"/regiones/noreste"}>Noreste</DropdownItem>
                <DropdownItem to={"/regiones/antartida"}>
                  Antártida
                </DropdownItem>
                <DropdownItem to={"/regiones/transfronterizas"}>
                  Transfronterizas
                </DropdownItem>
              </DropdownContent>
            </DropdownWrapper>
          </li>
          {isUser ? (
            <li>
              <Link to={"/post"}>Post</Link>
            </li>
          ) : (
            ""
          )}
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  width: 100%;
  background-color: #4e6247;
  color: #fff;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding: 1.8rem;
  justify-content: space-between;
  position: sticky;
  z-index: 10;
  top: 0;

  .RegionMobile {
    display: none;
  }

  .Burger-Menu {
    display: none;
  }

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
        /* Add any hover style if needed */
      }
    }
  }

  @media (max-width: 990px) {
    nav {
      height: auto;
      display: flex;
      width: 100%;
      justify-content: flex-start;

      ul {
        li {
          margin-top: 1rem;
          margin-left: 0;
        }
      }
    }

    .RegionMobile {
      display: block;
      margin-top: 1rem;
      ul {
        li {
          margin-left: 1rem;
        }
      }
    }

    .Regiones {
      display: none;
    }

    .show {
      flex-direction: column;
      display: flex;
      width: 100%;
    }
    .hidden {
      display: none;
    }

    .Burger-Menu {
      margin-top: 1rem;
      border: none;
      background-color: transparent;
      width: auto;
      display: block;
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
