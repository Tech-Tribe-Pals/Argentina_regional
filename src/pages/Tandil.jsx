import React from 'react'
import styled from 'styled-components'
import PresentacionRegiones from '../components/ComponentesRegiones/PresentacionRegiones'
import MainRegiones from '../components/ComponentesRegiones/MainRegiones'
import Footer from '../components/Footer'

const TandilStyle = styled.main `
    background-color: #45673E;
    display: flex;
    flex-direction: column;
    align-items: center;


`


export default function Tandil() {
  return (
    <TandilStyle>
    <PresentacionRegiones fondo={"./Fondo.jpg"}  />
    <MainRegiones />
    <Footer />
  </TandilStyle>)
}
