
import styled from "styled-components";

const Boton = styled.button`
  color: whitesmoke;
  font-weight: bold;
  font-size: medium;
  background-color: #658564;
  border-radius: 19px;
  border-bottom: 9px solid #50684f;
  border-top: none;
  border-left: none;
  border-right: none;
  display: flex;
  width: 100px;
  height: 45px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  padding-left: 8px;

  img {
    margin-left: 5px;
  }

  :active {
    border-bottom: 0px;
    transform: translateY(2%) scale(0.9);
    transition: all 0.1s ease-in-out;
  }
`;

export default function BotonStyle({ info, icon, submit, clickOut}) {

  return <Boton onClick={clickOut} type={submit ? 'submit' : 'button'}>{info} { icon ? <img width={20} src={icon} alt="check" /> : '' }</Boton>;

}
