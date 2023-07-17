import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Subsection from "../components/Region/Subsection";
import Links from "../components/Region/Links";
import PresentacionRegiones from "../components/Region/PresentacionRegiones";
import ImgMap from "../components/Region/ImgMap";
const Region = () => {
  const [data, setData] = useState([]);

  const { region } = useParams();
  const navigate = useNavigate();

  const getFetched = async () => {
    const response = await fetch("/regiones.json");
    const allData = await response.json();
    const filter = allData.find((e) => e.name === region);

    if (filter) {
      setData(filter.docs);
    } else {
      navigate("/error");
    }
  };

  useEffect(() => {
    getFetched();
  }, [region]);

  return (
    <MetropolitanaStyle>
      {data.length === 0 ? (
        "Cargando..."
      ) : (
        <ContenidoInfo>
          <PresentacionRegiones fondo={data.fondo} />
          <h1>{data.title}</h1>
          <p>{data.info}</p>
          {data.imgs && <ImgMap imgs={data.imgs} />}
          {data.img && <img className="banner" src={data.img} />}
          {data.links && <Links links={data.links} />}
          {data.sections && <Subsection sections={data.sections} />}
        </ContenidoInfo>
      )}
    </MetropolitanaStyle>
  );
};

export default Region;

const ContenidoInfo = styled.section`
  background-color: whitesmoke;
  border-left: solid #d9d9d9 11px;
  margin: 4rem;
  padding-bottom: 20px;
  border-radius: 0.3rem;
  height: auto;
  width: 90%;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  .banner {
    height: 20vh;
    object-fit: cover;
  }
  .subsection {
    display: flex;
    flex-direction: column;
  }
  .subsectionImgs {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    .container {
      width: 350px;
      height: 20rem;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: 1rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        :hover {
          object-fit: contain;
        }
      }
    }
  }
  h1 {
    margin-top: 50px;
  }
  h2 {
    margin: 1rem;
  }
  p {
    font-size: medium;
    text-align: center;
    line-height: 1.5rem;
    margin: 1rem;
    padding: 40px;
  }
  img {
    width: 100%;
    height: 18, 75rem;
  }
  a {
    color: grey;
    :hover {
      color: green;
      transition: 1.5s;
    }
  }
`;

const MetropolitanaStyle = styled.main`
  background-color: #45673e;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
