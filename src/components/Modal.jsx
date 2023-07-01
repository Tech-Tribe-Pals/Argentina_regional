import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  position: relative;

  p {
    color: #000;
  }
  .options {
    margin-top: 20px;
    display: flex;
    gap: 10px;
    button {
      padding: 5px;
      border: none;
      border-radius: 5px;
      transition: ease-in-out 0.2s;
      :hover {
        cursor: pointer;
      }
      :nth-child(1) {
        background-color: #c00;
        color: #fff;
        :hover {
          background-color: red;
        }
      }
      :nth-child(2) {
        :hover {
          background-color: #aaa;
        }
      }
    }
  }
  .close {
    position: absolute;
    width: 24px;
    height: 24px;
    right: 10px;
    top: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    border: none;
    background-color: transparent;
    border-radius: 5px;
    &:hover {
      background-color: #444;
      &:before,
      &:after {
        background-color: #fff;
      }
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 70%;
      height: 2px;
      background-color: #000;
      transform: translate(-50%, -50%);
    }

    &:before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &:after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
`;

const Modal = ({ isOpen, onClose, children, btnClose }) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalContent style={btnClose ? { padding: '20px 45px 20px 20px' } : {}}>
        {children}
        {btnClose ? <button className="close" onClick={onClose} /> : ""}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
