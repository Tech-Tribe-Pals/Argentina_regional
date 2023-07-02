import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Subsection from "../components/Region/Subsection";
import PresentacionRegiones from "../components/Region/PresentacionRegiones";
import Links from "../components/Region/Links";

const Region = () => {
  const [data, setData] = useState([]);

  const { region } = useParams();
  const navigate = useNavigate();

  const getFetched = async () => {
    const response = await fetch("/src/api/regiones.json");
    const allData = await response.json();
    const filter = allData.find((e) => e.name === region);

    if (filter) {
      setData(filter.docs);
    } else {
      navigate('/error')
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
          <img src={data.img} />
          <Links links={data.links} />
          <Subsection sections={data.sections} />
        </ContenidoInfo>
      )}
    </MetropolitanaStyle>
  );
};

export default Region;

const ContenidoInfo = styled.section`
  background-color: whitesmoke;
  border-left: solid #d9d9d9 11px;
  margin-top: 4rem;
  border-radius: 0.3rem;
  height: auto;
  width: 90%;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  .subsection {
    display: flex;
    flex-direction: column;
    .subsectionImgs {
      img {
        width: 25rem;
        height: 20rem;
        border-radius: 1rem;
        margin: 1rem;
      }
    }
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
