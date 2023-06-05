import React from "react";
import styled from "styled-components";
import BotonStyle from "../components/BotonStyle";
import { Link } from "react-router-dom";

const HomeIndex = styled.main`
  height: 86vh;
  width:100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

    position:relative;

    video {
        position:absolute;
        height: 100%;
        width: 100%;
        left:0;
        object-fit: cover;
        z-index:0;
    }


  h1 {

    color:white;

  }

  article {
    z-index:1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 25%;
  }

  div {
    margin-top: 1rem;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 25%;
  }
`;

export default function Home() {
  return (
    <HomeIndex>
        <video autoPlay loop muted src="./Inicio.mp4" type="video/mp4" />

      <article>

      
 

        <img src="./logo.svg" alt="" srcset="" />
        <h1>Geografia Regional</h1>
        <div>
        <Link to={"/regiones"}><BotonStyle info={"Regiones"} /></Link>

        <Link to={"/foro"}> <BotonStyle info={"Foro"} /></Link>
        </div>
      </article>
    </HomeIndex>
  );
}
