import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  height: 60vh;
  background-color: #55799b;
  color: white;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    bottom: 0;
    position: absolute;
    width: 100%;
    background-color: #2b2a2a;
    text-align: center;
    padding: 0.2rem;
  }

  .fondo {
    top: -80%;
    width: 100%;
    position: absolute;
    z-index: 0;
  }

  .info {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 40%;
    width: 80%;
    margin-top: 5rem;

    ul {
      li {
        margin-top: 0.5rem;
      }
    }
  }

  .unicen {
    width: 11%;
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-top: 1rem;
    img {
      width: 100%;
      margin-top: 1rem;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      {/* <img className="fondo" src="./Footer.png" alt="" /> */}

      <div className="unicen">
        <img src="./fch.png" alt="" />
        <img src="./unicen.png" alt="" />
      </div>

      <div className="info">
        <div>
          <ul>
            <h2>Lorem</h2>
            <li>Lorem ip</li>
            <li>Lorem ip</li>
            <li>Lorem ip</li>
            <li>Lorem ip</li>
          </ul>
        </div>
        <div>
          <ul>
            <h2>Lorem</h2>
            <li>Lorem ip</li>
            <li>Lorem ip</li>
            <li>Lorem ip</li>
            <li>Lorem ip</li>
          </ul>
        </div>
        <div>
          <ul>
            <h2>Lorem</h2>
            <li>Lorem ip</li>
            <li>Lorem ip</li>
            <li>Lorem ip</li>
            <li>Lorem ip</li>
          </ul>
        </div>
      </div>

      <p>Hecha por Javier Rivarolla, Adriel Camacho y Federico Massolo</p>
    </FooterStyle>
  );
}
