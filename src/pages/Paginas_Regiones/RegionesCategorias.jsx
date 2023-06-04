import React, { useRef, useState } from "react";
import Header from "../../components/Header";
import styled from "styled-components";
import arr from "../../components/ComponentesRegiones/array"


const PaginaRegiones = styled.main`
  background-color: #52b652;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;

  nav {
    height: 100px;
    width:200px;
    background-color: red;
  }



`;

export default function RegionesCategorias() {

    const [data, setData] = useState([
      { id: 1, name: 'Objeto 1', info: 'Información del objeto 1',img:"./montana.jpg" },
      { id: 2, name: 'Objeto 2', info: 'Información del objeto 2',img:"./montana2.jpg" },
      { id: 3, name: 'Objeto 3', info: 'Información del objeto 3',img:"./montana.jpg" },
    ]);
  
    const [selectedInfo, setSelectedInfo] = useState('');
  
    const handleClick = (id) => {
      const selectedObject = data.find((obj) => obj.id === id);
      setSelectedInfo(selectedObject.img);
    };
  
  return (
    <PaginaRegiones>

      <nav>
  {data.map((obj) => (
        <button key={obj.id} onClick={() => handleClick(obj.id)}>
          <img width={50} src={obj.img} alt="" srcset="" />
        </button>
      ))}
      </nav>
      <img width={150} src={selectedInfo} alt="" srcset="" />
    </PaginaRegiones>
  );
}
