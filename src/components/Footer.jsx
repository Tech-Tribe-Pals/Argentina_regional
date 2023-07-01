import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterStyle = styled.footer`
  height: 50vh;
  background-color: #55799b;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;

  .Link {
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
    flex-direction: row;
    justify-content: space-evenly;
    width: 70%;
    margin:5rem;

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

    .Regiones {
      display: flex;
      flex-direction: row;

      .Link2 {
        margin-left:8rem;
      }
    }
  }

  .unicen {
    width: 11%;
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-top: 1rem;
    img {
      width: 100%;
      margin-top: 1rem;
    }
  }
`;
export default function Footer() {
  return (
    <FooterStyle>
      <div className="unicen">
        <img src="./Inicio/fch.png" alt="img_fch" />
        <img src="./Inicio/unicen.svg" alt="img_unicen" />
      </div>

      <div className="info">
        <div>
          <h3>Navegacion</h3>
          <ul>
            <li>
              <Link className="Link">Inicio</Link>
            </li>
            <li>
              <Link className="Link">Regiones</Link>
            </li>
            <li>
              <Link className="Link">Blog</Link>
            </li>
            <li>
              <Link className="Link">Presentacion</Link>
            </li>
            <li>
              <Link className="Link">Contacto</Link>
            </li>
          </ul>
        </div>
<div>
<h3>Regiones</h3>
<div className="Regiones">
  <ul>
    <li>
      <Link className="Link">Antartida</Link>
    </li>
    <li>
      <Link className="Link">Cuyo</Link>
    </li>
    <li>
      <Link className="Link">La Pampa</Link>
    </li>
    <li>
      <Link className="Link">Metropolitana</Link>
    </li>
    <li>
      <Link className="Link">Noreste</Link>
    </li>
    <li>
      <Link className="Link"></Link>
    </li>
  </ul>
  <ul className="Link2">
    <li>
      <Link className="Link">Noroeste</Link>
    </li>
    <li>
      <Link className="Link">Patagonia</Link>
    </li>
    <li>
      <Link className="Link">
        Transfronterizas con <br /> Paises limitrofes
      </Link>
    </li>
    <li>
      <Link className="Link">
        Transfronterizas <br /> Inter-Regionales
      </Link>
    </li>
  </ul>
</div>
</div>
<div>
<ul>
  <li>
    <Link></Link>
  </li>
</ul>
</div>
</div>
</FooterStyle>
);
}
