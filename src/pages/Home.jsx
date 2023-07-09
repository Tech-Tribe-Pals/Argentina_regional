import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import BotonStyle from "../components/BotonStyle";
import { Link } from "react-router-dom";
import { HeaderContext } from "../context/HeaderContext";
import Bubble from "../components/Bubble";
import Loader from '../components/Loader'

const HomeIndex = styled.section`
  overflow: hidden;
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
      filter: invert(1);
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

  .load-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    color: white;
    text-align: center;
  }

  .Menu-Links {
    height: 65%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    padding: 1rem 1rem 0rem 1rem;
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

  @media (max-width: 767.98px) {
    video {
      filter: brightness(80%);
    }

    .Menu-Links {
      ul {
        li {
          a {
            button {
              margin-top: 3rem;
            }
          }
        }
      }
    }

    nav {
      padding-top: 2rem;
      width: 100%;
      background-color: rgb(0, 0, 0, 0.5);
      border: none;
      justify-content: space-evenly;
    }

    .welcome {
      height: 100px;
      align-self: flex-end;
      position: absolute;
      bottom: 0;
      left: 0;
      img {
        width: 25%;
        height: 100%;
        right: 0;
        bottom: -20%;
      }
    }

    .unicen {
      width: 100%;
      top: 20px;
      left: 20px;
      height: 5vh;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 30%;
        height: auto;
      }
    }
  }
`;

export default function Home() {
  const { setPath } = useContext(HeaderContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setPath(window.location.pathname);
  });

  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  const handleVideoError = () => {
    setIsLoading(false); // Puedes mostrar un mensaje de error en lugar de simplemente cambiar isLoading a false
  };

  return (
    <HomeIndex>
    {isLoading && (
      <div className="load-wrap">
        <Loader theme={'#4e6247'} />
      </div>
    )}

    <video
        autoPlay
        loop
        muted
        src="https://res.cloudinary.com/dcmic2snw/video/upload/v1688745901/geografia/VID-20230705-WA0024_mkzsce.mp4"
        type="video/mp4"
        onLoadedData={handleVideoLoaded}
        onError={handleVideoError}
      />
    
      <div className="unicen">
        <img src="/Inicio/unicen.svg" alt="unicen" />
      </div>
      <nav>
        <picture>
          <img src="/Inicio/logo.svg" />
          <h1>Argentina Regional</h1>
        </picture>
        <div className="Menu-Links">
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
            <Bubble />
            <img src="/Inicio/profe.svg" alt="animacion_profe" />
          </div>
        </div>
      </nav>
    </HomeIndex>
  );
}