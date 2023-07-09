import { useEffect, useState } from "react";
import styled from "styled-components";

const LoaderStyle = styled.div`
display: flex;
gap: 10px;
height: 35px;
align-items: center;
  div {
    width: 25px;
    height: 25px;
    background-color: #fff;
    border-radius: 50px;
    /* transition: ease-in-out 0.2s; */
  }
  .anim {
    animation: dot 0.5s infinite;
  }
  @keyframes dot {
    0% {
      width: 25px;
    }
    50% {
      width: 30px;
      height: 30px;
    }
    100% {
      width: 25px;
    }
  }
`;

const Loader = ({ theme }) => {
  const [position, setPosition] = useState(0);

  const dotChange = () => {
    setTimeout(() => {
        if (position === 3) {
            setPosition(0)
        } else {
            setPosition(position + 1)
        }
    }, 500)
  };

  useEffect(() => {
    dotChange();
  }, [position]);

  return (
    <LoaderStyle>
      <div style={theme ? { backgroundColor: theme }: {}} className={position === 0 ? "anim" : ""} />
      <div style={theme ? { backgroundColor: theme }: {}} className={position === 1 ? "anim" : ""} />
      <div style={theme ? { backgroundColor: theme }: {}} className={position === 2 ? "anim" : ""} />
    </LoaderStyle>
  );
};

export default Loader;
