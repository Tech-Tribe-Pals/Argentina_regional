import { useState, useRef } from "react";
import styled from "styled-components";
import VideoCard from "./VideoCard";
import Overflow from "./Overflow";

const CarouselStyle = styled.section`
  overflow-y: hidden;
  overflow-x: hidden;
  height: 86vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  background-color: #ffffff;
  position: relative;

  .mountain {
    bottom: -10%;
    left: -2%;
    position: absolute;
    z-index: 0;
  }

  .sun {
    z-index: 0;
    position: absolute;
    left: -5%;
    top: -9%;
  }

  .arbol {
    z-index: 0;
    position: absolute;
    right: -30%;
    bottom: -30%;
  }
  .nube {
    position: absolute;
    left: 0;
    bottom: 10%;
    animation: movimiento 10s infinite linear;
  }

  @keyframes movimiento {
    0% {
      left: -10%;
      opacity: 2;
    }

    100% {
      left: 20%;
      opacity: 0;
    }
  }

  .navegation {
    position: relative;
    display: flex;
    justify-content: center;
    height: 250px;
    background-color: #5f4d36;
    display: flex;
    z-index: 1;
    padding: 1rem 2rem;
    gap: 40px;
    .blocked {
      opacity: 0.3;
    }
    .btnNav {
      background-color: transparent;
      border: none;
      filter: invert(100%);
      img {
        width: 25px;
      }
    }
    ::-webkit-scrollbar {
      background-color: #5f4d49;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #541;
    }
    button {
      z-index: 2;
    }

    .bird {
      top: -30%;
      position: absolute;
      z-index: 1;
      width: 75px;
    }

    .wood {
      height: 250px;
      position: absolute;
      left: -180px;
      top: 0;
      z-index: 0;
    }
  }

  .madera {
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
  }

  button {
    border-radius: 11px;
  }

  .Selector {
    height: 100%;
    width: 110px;
    object-fit: cover;
    z-index: 1;
    border-radius: 11px;
  }

  .actual {
    border: solid 4px #b89b75;
  }

  .show {
    display: flex;
  }
  .hide {
    display: none;
  }

  .Boton {
    color: whitesmoke;
    font-weight: bold;
    font-size: medium;
    background-color: #658564;
    border-radius: 17px;
    border-bottom: 9px solid #50684f;
    border-top: none;
    border-left: none;
    border-right: none;
    display: flex;
    width: 100px;
    height: 45px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    img {
      margin-left: 2px;
      height: 50%;
      width: 25%;
      filter: invert(100%);
    }
    :active {
      border-bottom: 0px;
      transform: translateY(2%) scale(0.9);
      transition: all 0.1s ease-in-out;
    }
  }
  @media (width < 990px) {
    .navegation {
      width: 100%;
    }
    .wood {
      display: none;
    }
    .bird {
      right: 10%;
    }
  }
`;

const Carouselin = () => {
  const [actual, setActual] = useState(0);
  const carousel = useRef(null);
  const arr = [
    {
      name: "Pampeana",
      info: "El espacio pampeano constituye una región definida por el desarrollo agropecuario gestado en la segunda mitad del siglo XIX, tras la apropiación del mal llamado “Desierto” (Oeste del río Salado). Incluía la actual Región Metropolitana y no alcanzaba las actuales fronteras extra-pampeanas. Hoy incluye gran parte de las provincias más pobladas y con mayor Producto Bruto Interno, tales como Buenos Aires, Santa Fe y Córdoba, aunque también áreas contiguas de Entre Ríos (salvo los deltas), el Noreste de La Pampa y el borde oriental de San Luis.",
    },
    {
      name: "Patagonia",
      info: "Es la región de mayor superficie, generalizada como un espacio de clima frío, de grandes distancias, extensos parques nacionales, altos costos de vida y vacíos demográficas, donde no siempre el transporte terrestre es la mejor opción. En el siglo pasado fue un área receptora de las “grandes oportunidades”, en cuanto a laboral, de la mano de incentivos estatales (zona franca, apoyo a industrias, mejores sueldos y reconocimientos jubilatorios ventajosos), tanto como del sector privado (principalmente por la fruticultura, el turismo y el petróleo).",
    },
    {
      name: "Noreste",
      info: "Conforma una región signada por el clima cálido subtropicial, cuyos ambientes originarios tienen raíz en bosques nativos, incluida la selva Misionera, el parque Chaqueño y el bosque del Ñandubay. Sin embargo, año a año estas superficies están sometidas a la deforestación, los incendios forestales, el avance de los agroecosistemas y la forestación de especies exóticas como los pinos y eucaliptos. Estos últimos han llegado al extremo de afectar la eco-región de los Esteros del Iberá, mientras que los ambientes más arbóreos han cedido lugar a cultivos como la soja, cuyas consecuencias también tienen derivaciones en el éxodo rural y el empobrecimiento. ",
    },
    {
      name: "Cuyo",
      info: "Región mediterránea, atravesada completamente por la diagonal árida del país, aunque a partir de la expansión del riego se han desarrollado cientos de poblaciones, plantaciones y cultivos, en una especie de oasis, no siempre de manera sustentable en torno a los efectos provocados aguas abajo, en provincias como La Pampa. No obstante, provincias como San Juan han apostado por la megaminería en la inmensidad de la Cordillera de Los Andes.",
    },
    {
      name: "Noroeste",
      info: "Es una región de contrastes paisajísticos, ambientales y demográficos, y a la vez, cuna de las ciudades más antiguas del país, de gran importancia en el auge minero-colonial y aquella ruta afín, trazada entre el Alto Perú y el puerto de Buenos Aires. Al oriente se distingue la Yunga o Selva Tucumano-Oranense, cuya disposición y extensión Norte-Sur alberga un sinfín de potencialidades productivas. Tambien se encuentran las ciudades como San Miguel del Tucumán, Salta y otras. En el occidente, donde rige la aridez de la Puna, la Prepuna y los Valles Secos, actividades tradicionales como la extracción de sal, la industria textil artesanal.",
    },
    {
      name: "Metropolitana",
      info: "Esta región comprende la Ciudad Autónoma de Buenos Aires, en cuyo espacio urbano coexiste la Capital Federal de la República Argentina. Se adiciona el continuo urbano-suburbano de hasta 40 partidos de la provincia de Buenos Aires. No solamente incluye el Conurbano Bonaerense, sino además el Gran La Plata. Estos contrastes exhiben patrimonios culturales únicos, muy visitados, pero también espacios extremadamente vulnerados, como por ejemplo se verifica en las márgenes de la Cuenca Matanza-Riachuelo. ",
    },
  ];

  const handleClick = (pos) => {
    setActual(pos);
  };

  return (
    <CarouselStyle>
      <div ref={carousel} className="Displayer">
        <VideoCard
          video={`/videos/${arr[actual].name}_.mp4`}
          ruta={`/regiones/${arr[actual].name.toLowerCase()}`}
          region={arr[actual].name}
          info={arr[actual].info}
        />
      </div>
      <div className="navegation">
        <Overflow item={arr} clickOut={handleClick} />
        <img className="wood" src="/Regiones/Tronco.svg" />
        <img className="bird" src="/Regiones/bird.svg" alt="" />
      </div>
      <img className="sun" src="/Regiones/sun.svg" alt="" />
      <img
        className="mountain"
        src="/Regiones/MountainRegionFondo.svg"
        alt=""
      />
      <img className="arbol" src="/Regiones/arbol.svg" alt="" />

      <img width={75} className="nube" src="/Regiones/cloud.svg" alt="" />
    </CarouselStyle>
  );
};

export default Carouselin;
