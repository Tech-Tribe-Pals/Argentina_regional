import React from 'react'
import styled from 'styled-components'
    const HeaderStyle = styled.section `
  background-size: cover;
  height: 90vh;
  width: 100%;
    overflow-x:hidden;
  position: relative;
  img {
    width:100%;
    left:0;
    position: absolute;
    bottom:0;
  }
    `

export default function PresentacionRegiones({fondo}) {

  console.log(fondo)

  return (

    <HeaderStyle style={{ background: `url(${fondo})`, backgroundRepeat: `no-repeat`, backgroundSize: "cover", backgroundPosition: "center"}}> 



      <img width={100} src={"ContenidoRegiones.svg"} alt="" />
   






    </HeaderStyle>
  )
}
