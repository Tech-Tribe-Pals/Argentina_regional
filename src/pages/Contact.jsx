import styled from "styled-components";
import BotonStyle from "../components/BotonStyle";
import { useState } from "react";

const MainContacto = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 86vh;
  position: relative;
  overflow: hidden;
  .Arbol {
    position: absolute;
    z-index: 0;
    top: -25%;
    right: -30%;
    height: 150%;
    pointer-events: none;
  }

  .Hoja {
    pointer-events: none;
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
  }

  article {
    z-index: 1;
    background-color: white;
    color: #606060;
    border-radius: 0.7rem;
    border: solid black 1px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 45%;
    border: solid #d9d9d9 1px;
    border-bottom: solid #d9d9d9 5px;
    border-left: solid #d9d9d9 8px;

    button {
      margin-top: 0.5rem;
    }

    div {
      width: 70%;
      margin-top: 1rem;
      input {
        border: solid 1px #d9d9d9;
        padding: 0.5rem;
        margin-top: 0.5rem;
        width: 100%;
        border-radius: 0.7rem;
        :focus {
          outline: none;
          border-color: #b8b7b7;
        }
      }

      textarea {
        margin-top: 0.5rem;
        resize: none;
        width: 100%;
        height: 150px;
        border-radius: 0.7rem;
        border-color: #d9d9d9;
        padding: 1rem;

        :focus {
          outline: none;
          border-color: #b8b7b7;
        }

        /* Estilos para la barra de desplazamiento en WebKit y MS */
        &::-webkit-scrollbar {
          width: 10px;
        }

        &::-webkit-scrollbar-thumb {
          background-color: #888;
          border-radius: 0.7rem;
        }

        &::-webkit-scrollbar-track {
          /* Sin color de fondo para el riel */
        }

        &::-ms-scrollbar {
          width: 10px;
        }

        &::-ms-scrollbar-thumb {
          background-color: #888;
          border-radius: 0.7rem;
        }

        &::-ms-scrollbar-track {
          /* Sin color de fondo para el riel */
        }

        /* Estilos para la barra de desplazamiento en Gecko */
        scrollbar-width: thin;
        scrollbar-color: #888 transparent;

        & {
          scrollbar-width: thin;
          scrollbar-color: #888 transparent;
        }

        &::-moz-scrollbar {
          width: 10px;
        }

        &::-moz-scrollbar-thumb {
          background-color: #888;
          border-radius: 0.7rem;
        }

        &::-moz-scrollbar-track {
          /* Sin color de fondo para el riel */
        }

        &::-moz-scrollbar-thumb:hover {
          background-color: #555;
        }
      }
    }

    h2 {
      font-size: 3rem;
      align-self: start;
      margin-bottom: 2rem;
      margin-left: 1rem;
    }
  }
`;

const Contacto = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <MainContacto>
      <img className="Arbol" src="/Regiones/arbol.svg" alt="arbol" />
      <img className="Hoja" src="/Regiones/hojas.png" alt="hojas" />
      <article>
        <h2>Contacto</h2>
        <form name="contact" method="POST" data-netlify="true">
          <div>
            <h4>Nombre</h4> <input onChange={e => setName(e.target.value)} type="text" name="name" />
          </div>

          <div>
            <h4>Email</h4> <input onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" />
          </div>
          <div>
            <h4>Mensaje</h4> <textarea onChange={e => setMessage(e.target.value)} name="message"></textarea>
            <BotonStyle info={"Enviar"} submit={true} />
          </div>
        </form>
      </article>
    </MainContacto>
  );
};

export default Contacto;
