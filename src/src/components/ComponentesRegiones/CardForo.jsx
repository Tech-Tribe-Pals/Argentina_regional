import React from "react";
import styled from "styled-components";

const CardStyledForo = styled.article`
  width: 90%;
  height: 310px;
  transition: all 0.8s ease-in-out;
  position: relative;
  cursor: pointer;
  border-radius: 0.6rem;
  margin-top: 3rem;
  margin-left: 1rem;
  .fondo {
    border-radius: 1rem;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 0;
    object-fit: cover;
    filter: brightness(90%);
  }

  .favorito {
    z-index: 3;
    position: absolute;
    top: 0;
    right: 0;
  }

  :hover {
    box-shadow: 10px 10px 90px 4px rgba(0, 0, 0, 0.75) inset;
    -webkit-box-shadow: 10px 10px 90px 4px rgba(0, 0, 0, 0.75) inset;
    -moz-box-shadow: 10px 10px 90px 4px rgba(0, 0, 0, 0.75) inset;
    transition: all 0.8s ease-in-out;
  }

  div {
    background-color: rgb(56, 56, 56);
    opacity: 0.8;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom-left-radius: 0.6rem;
    border-bottom-right-radius: 0.6rem;
    padding-left: 1rem;
    h2 {
      color: white;
    }
  }
`;

export default function CardForo() {
  return (
    <CardStyledForo>
      <img className="fondo" src="./card.jpg" alt="" />
      <img className="favorito" src="./Favorito.svg" width={55} alt="" />
      <div>
        <h2>Bienvenidos al ""Foro""/Blog!</h2>
      </div>
    </CardStyledForo>
  );
}
