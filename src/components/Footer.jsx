import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { HeaderContext } from "../context/HeaderContext";

const FooterStyle = styled.footer`
  min-height: 50vh;
  background-color: #55799b;
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  a {
    color: #ffffff;  
    :hover {
      color: #45673e;
    }
  }
  p {
    color: white;
    bottom: 0;
    position: absolute;
    width: 100%;
    background-color: #2b2a2a;
    text-align: center;
    padding: 0.2rem;
  }
  .info {
    display: flex;
    justify-content: space-evenly;
    width: 70%;
    margin: 5rem;
    h3 {
      color: #d9ecfd;
      font-size: 1.5rem;
    }
    ul {
      list-style: none;
      li {
        margin-top: 0.8rem;
      }
    }
    .regiones {
      .regionList {
        columns: 2;
      }
      .navegation {
        margin-left: 8rem;
      }
    }
  }
  .unicen {
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: 2rem;
    img {
      width: 100%;
      margin-top: 1rem;
    }
  }
  @media (width < 990px) {
    flex-direction: column;
    align-items: center;
    .unicen {
      flex-direction: row;
      justify-content: center;
    }
  }
  @media (width < 768px) {
    .unicen {
      flex-direction: column;
      margin-bottom: 20px;
    }
    .info {
      width: 100%;
      justify-content: center;
      margin: 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      ul {
        li {
          margin-top: 0.8rem;
        }
      }

      .regiones {
        margin-top: 20px;
        flex-direction: column;
        flex-direction: column;
        justify-content: center;
        .navegation {
          margin: 0;
        }
      }
    }
  }
  @media (width < 425px) {
    .info {
      .regiones {
        .regionList {
          columns: 1;
        }
      }
    }
  }
`;
export default function Footer() {
  const { headerOut } = useContext(HeaderContext);
  return (
    <FooterStyle style={headerOut ? { display: "none" } : { display: "flex" }}>
      <div className="unicen">
        <img src="/Inicio/fch.png" alt="img_fch" />
        <img src="/Inicio/unicen.svg" alt="img_unicen" />
      </div>

      <section className="info">
        <div>
          <h3>Navegacion</h3>
          <ul>
            <li>
              <Link>Inicio</Link>
            </li>
            <li>
              <Link>Regiones</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
            <li>
              <Link>Presentacion</Link>
            </li>
            <li>
              <Link>Contacto</Link>
            </li>
          </ul>
        </div>
        <div className="regiones">
          <h3>Regiones</h3>
          <ul className="regionList">
            <li>
              <Link>Antartida</Link>
            </li>
            <li>
              <Link>Cuyo</Link>
            </li>
            <li>
              <Link>La Pampa</Link>
            </li>
            <li>
              <Link>Metropolitana</Link>
            </li>
            <li>
              <Link>Noreste</Link>
            </li>

            <li>
              <Link>Noroeste</Link>
            </li>
            <li>
              <Link>Patagonia</Link>
            </li>
            <li>
              <Link>
                Transfronterizas con <br /> Paises limitrofes
              </Link>
            </li>
            <li>
              <Link>
                Transfronterizas <br /> Inter-Regionales
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </FooterStyle>
  );
}
