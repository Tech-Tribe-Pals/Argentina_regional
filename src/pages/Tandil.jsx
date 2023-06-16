import React from "react";
import styled from "styled-components";
import PresentacionRegiones from "../components/ComponentesRegiones/PresentacionRegiones";
import MainRegiones from "../components/ComponentesRegiones/MainRegiones";

const TandilStyle = styled.main`
  background-color: #45673e;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8rem;
`;

export default function Tandil() {
  return (
    <TandilStyle>
      <PresentacionRegiones fondo={"./Fondo.jpg"} />
      <MainRegiones />
    </TandilStyle>
  );
}
