import { useEffect, useState } from "react";
import styled from "styled-components";

const BubbleStyle = styled.div`
  background-color: #fff;
  position: absolute;
  padding: 15px 20px;
  width: 320px;
  z-index: 2;
  bottom: 10rem;
  left: -18rem;
  border-radius: 10px;
  border-left: 3px solid #e2e2e2;
  border-bottom: 5px solid #e2e2e2;
  ::after {
    content: "";
    position: absolute;
    right: -0.8rem;
    bottom: -0.8rem;
    background-color: #fff;
    width: 20px;
    height: 20px;
    z-index: 3;
    border-radius: 0px 20px 0px 10px;
  }
  p:nth-child(2) {
    margin-bottom: 10px;
  }
  button {
    position: absolute;
    background-color: transparent;
    border: none;
    right: 10px;
    top: 10px;
  }
  .hide {
    display: none;
  }
`;

const Bubble = () => {
  const [close, setClose] = useState(true);

  const checkClose = () => {
    const actualConfig = localStorage.getItem('close')
    setClose(actualConfig ? actualConfig : false)
  }

  const saveClose = () => {
    localStorage.setItem('close', !close)
    setClose(!close)
  }

  useEffect(() => {
    checkClose()
  }, [])

  return (
    <BubbleStyle style={close ? { display: "none" } : {}}>
      <button onClick={saveClose}>X</button>
      <p>Profesor Jorge Lapena</p>
      <p>
        Bienvenidas aquellas personas que visitan este sitio destinado a conocer
        en profundidad lugares icónicos y otros pocos difundidos, que también
        conforman el territorio argentino.
      </p>
    </BubbleStyle>
  );
};

export default Bubble;
