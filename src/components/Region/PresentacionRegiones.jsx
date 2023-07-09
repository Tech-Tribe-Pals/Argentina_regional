import styled from "styled-components";
const HeaderStyle = styled.img`
  height: 50vh;
  object-fit: cover;
`;

export default function PresentacionRegiones({ fondo }) {

  return (
    <HeaderStyle src={fondo} />
  );
}
