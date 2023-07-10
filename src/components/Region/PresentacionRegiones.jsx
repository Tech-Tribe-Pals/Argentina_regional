import styled from "styled-components";
const HeaderStyle = styled.div`
  height: 50vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default function PresentacionRegiones({ fondo }) {

  return (
    <HeaderStyle style={{backgroundImage: `url(${fondo})`}} />
  );
}
