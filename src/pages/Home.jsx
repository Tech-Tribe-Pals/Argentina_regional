import { useContext, useEffect } from "react";
import styled from "styled-components";
import BotonStyle from "../components/BotonStyle";
import { Link } from "react-router-dom";
import { HeaderContext } from "../context/HeaderContext";

const HomeIndex = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  position: relative;

  .unicen {
    width: 300px;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    img {
      height: 100%;
      width: 50%;
    }
  }

  video {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    object-fit: cover;
    z-index: 0;
  }

  h1 {
    color: white;
  }

  .cosa {
    height: 65%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    padding: 1rem 1rem 0rem 1rem;
    border-left: solid 9px black;
    background-color: #4e6247;
    z-index: 1;
    width: 20%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    img {
      width: 50%;
      margin-bottom: 1rem;
    }
  }
  picture {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 50%;
      margin-bottom: 1rem;
    }
  }

  .welcome {
    width: 100%;
    height: 200px;
    background-color: #5e6c45;
    position: relative;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    img {
      position: absolute;
      height: 75%;
      width: 100%;
      bottom: 0;
    }
  }

  ul {
    list-style: none;
    li {
      margin-top: 1rem;
    }
  }
`;

export default function Home() {
  const { setPath } = useContext(HeaderContext);

  useEffect(() => {
    setPath(window.location.pathname);
  });
  return (
    <HomeIndex>
      <video
        autoPlay
        loop
        muted
        src="./Videos_Regiones-Inicio/Header_.mp4"
        type="video/mp4"
      />

      <div className="unicen">
        {/* <img src="./Inicio/fch.png" alt="logo_fch" />
        <img src="./Inicio/unicen.svg" alt="logo_unicen" /> */}
      </div>

      <nav>
        <picture>
          <img src="./Inicio/logo.svg" />
          <h1>Argentina Regional</h1>
        </picture>

        <div className="cosa">
          <ul>
            <li>
              <Link to={"/regiones"}>
                <BotonStyle info={"Regiones"} />
              </Link>
            </li>
            <li>
              <Link to={"/blog"}>
                {" "}
                <BotonStyle info={"Blog"} />
              </Link>
            </li>
          </ul>

          <div className="welcome">
            <img src="./Inicio/profe.svg" alt="animacion_profe" />
          </div>
        </div>
      </nav>
    </HomeIndex>
  );
}
