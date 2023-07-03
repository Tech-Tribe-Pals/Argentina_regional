import styled from "styled-components";
import { Link } from "react-router-dom";
import BotonStyle from "../BotonStyle";

const Display = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  height: 60vh;
  .text {
    bottom: 0;
    width: 80%;
    height: 300px;
    color: #353535;
    justify-self: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .boton {
      margin-top: 20px;
      align-self: center;
    }
  }
  video {
    justify-self: center;
    width: 90%;
    padding: 1rem;
    border-radius: 15px;
    background-color: #685842;
    display: flex;
    border-bottom: 10px #53493c solid;
    z-index: 1;
  }
  @media (width < 990px) {
    grid-template-columns: 1fr;
    .text {
      position: absolute;
      z-index: 2;
      background-color: #0005;
      color: #fff;
      width: 100%;
      padding: 15px;
    }
    video {
      background-color: transparent;
      overflow: hidden;
      justify-self: center;
      width: 100%;
      height: 100%;
      padding: 0;
      border: none;
      border-radius: 0;
      object-fit: cover;
    }
  }
  @media (width < 768px) {
    .text {
      height: 100%;
    }
  }
`;

const VideoCard = ({ video, ruta, region, info }) => {
  return (
    <Display>
      <div className="text">
        <h2>{region}</h2>
        <p>{info}</p>
        <Link className="boton" to={ruta}>
          <BotonStyle icon={"/Regiones/explorar.svg"} info={"Explorar"} />
        </Link>
      </div>
      <video src={video} autoPlay loop />
    </Display>
  );
};

export default VideoCard;
