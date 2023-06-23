import React from "react";
import styled from "styled-components";
import PresentacionRegiones from "../components/ComponentesRegiones/PresentacionRegiones";
import MainRegiones from "../components/ComponentesRegiones/MainRegiones";

const MetropolitanaStyle = styled.main`
  background-color: #45673e;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8rem;
`;

export default function Metropolitana() {
  return (
    <MetropolitanaStyle>
      <PresentacionRegiones fondo={"./METROPOLITANA/metropolitana_3.PNG"} />
      <MainRegiones />
    </MetropolitanaStyle>
  );
}
