import styled from "styled-components";

const NavStyle = styled.nav`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const NavBlog = () => {
  return (
    <NavStyle>
      <p>Ordenar por:</p>
      <input type="date" />
      <input type="date" />
      <input />
    </NavStyle>
  );
};

export default NavBlog;
