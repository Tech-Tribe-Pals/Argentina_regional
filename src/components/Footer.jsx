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
        width: 100%;
        display: grid;
        align-items: center;
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
  .unicen {
    filter: invert(100%);
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 2rem;
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
    
    .info {
    .regiones {
      .regionList {
        columns: 1;
      }
    }
    }
    .unicen {
      flex-direction: column;
      margin-left:0;
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
        <img src="/Inicio/unicen.svg" alt="img_unicen" />
      </div>

      <section className="info">
        <div>
          <h3>Navegacion</h3>
          <ul>
            <li>
              <Link to={'/'}>Inicio</Link>
            </li>
            <li>
              <Link to={'/regiones'}>Regiones</Link>
            </li>
            <li>
              <Link to={'/blog'}>Blog</Link>
            </li>
            <li>
              <Link to={'/sobremi'}>Presentacion</Link>
            </li>
          </ul>
        </div>
        <div className="regiones">
          <h3>Regiones</h3>
          <ul className="regionList">
            <li>
              <Link to={'/regiones/antartida'}>Antartida</Link>
            </li>
            <li>
              <Link to={'/regiones/cuyo'}>Cuyo</Link>
            </li>
            <li>
              <Link to={'/regiones/pampeana'}>La Pampa</Link>
            </li>
            <li>
              <Link to={'/regiones/metropolitana'}>Metropolitana</Link>
            </li>
            <li>
              <Link to={'/regiones/noreste'}>Noreste</Link>
            </li>

            <li>
              <Link to={'/regiones/noroeste'}>Noroeste</Link>
            </li>
            <li>
              <Link to={'/regiones/patagonia'}>Patagonia</Link>
            </li>
            <li>
              <Link to={'/regiones/transfronterizasP'}>
                Transfronterizas con <br /> Paises limitrofes
              </Link>
            </li>
            <li>
              <Link to={'/regiones/transfronterizasI'}>
                Transfronterizas <br /> Inter-Regionales
              </Link> 
            </li>
          </ul>
        </div>
      </section>
    </FooterStyle>
  );
}
