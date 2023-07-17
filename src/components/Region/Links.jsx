import { useState } from "react";
import styled from "styled-components";

const LinkStyle = styled.div`
  position: fixed;
  background-color: #fff;
  right: 20px;
  flex-direction: column;
  padding: 8px;
  text-align: left;
  line-height: 1.8;
  border-left: solid 5px #d9d9d9;
  border-bottom: solid 3px #d9d9d9;
  border-radius: 10px;
  z-index:3;
  


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
      cursor:pointer;

      img {

        width:20px;

      }
    }
  }
`;


const IndiceStyle =styled.div `
display:flex;
flex-direction:column;
align-items:center;
cursor:pointer;
  font-size:1rem;
`

const Links = ({ links }) => {
  const [close, setClose] = useState(false);

  return (
    <LinkStyle>
      {close ? (
        <div className="modal">
          <button onClick={() => setClose(!close)}><img src="/Iconos/CloseIndiceRegion.svg" alt="icon_close"/></button>
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
        <IndiceStyle onClick={() => setClose(!close)}><span>Links</span></IndiceStyle>
        
        
      )}
    </LinkStyle>
  );
};

export default Links;
