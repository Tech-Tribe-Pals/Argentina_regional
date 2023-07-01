import { useState } from "react";
import styled from "styled-components";

const LinkStyle = styled.div`
  position: fixed;
  background-color: #fff;
  right: 20px;
  flex-direction: column;
  padding: 5px;
  text-align: left;
  line-height: 1.8;
  border: solid 2px #d9d9d9;
  border-radius: 10px;
  img {
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
  }
  .modal {
    ul {
      li {
        list-style: none;
        a {
          color: #000;
        }
      }
    }
    h4 {
      padding: 5px 0 10px 0;
      border-bottom: solid 2px #d9d9d9;
    }
    button {
      position: absolute;
      right: 5px;
      background-color: transparent;
      border: none;
    }
  }
`;

const Links = ({ links }) => {
  const [close, setClose] = useState(true);

  return (
    <LinkStyle>
      {close ? (
        <div className="modal">
          <button onClick={() => setClose(!close)}>X</button>
          <h4>Links para ampliar:</h4>
          <ul>
            {links.map((e, i) => (
              <li key={i}>
                <a href={e.url}>{e.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <img src="/Iconos/Portfolio.svg" onClick={() => setClose(!close)} />
      )}
    </LinkStyle>
  );
};

export default Links;
