import { useState } from "react";

const Overflow = ({ item, clickOut }) => {
  const [position, setPosition] = useState(0);
  // const [windowSize, setWindowSize] = useState(window.innerWidth);

  // const changeRegion = (num) => {
  //   let newPosition = position + num;

  //   if (newPosition === item.length) {
  //     newPosition = 0;
  //     clickOut(0);
  //   } else if (newPosition === -1) {
  //     newPosition = item.length - 1;
  //     clickOut(item.length - 1);
  //   } else {
  //     clickOut(newPosition);
  //   }
  //   setPosition(newPosition);
  // };

  const changeSimple = (num) => {
    let newPosition = position + num;

    if (newPosition === item.length) {
      newPosition = 0;
      clickOut(0);
    } else if (newPosition === -1) {
      newPosition = item.length - 1;
      clickOut(item.length - 1);
    } else {
      clickOut(newPosition);
    }
    setPosition(newPosition);
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowSize(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const visibleItems = item.slice(position, position + 3);

  return (
    <>
      <button onClick={() => changeSimple(-1)} className={"btnNav"}>
        <img src="/Iconos/prev.svg" alt="Previous" />
      </button>

      <button>
        <img
          className="Selector"
          src={`/${
            visibleItems[0].bonus
              ? visibleItems[0].name.split(" ")[0] + visibleItems[0].bonus
              : visibleItems[0].name.split(" ")[0]
          }/${visibleItems[0].name.split(" ")[0].toLowerCase()}_1.png`}
          alt="img"
        />
      </button>

      <button onClick={() => changeSimple(1)} className={"btnNav"}>
        <img src="/Iconos/next.svg" alt="Next" />
      </button>
    </>
  );
};

export default Overflow;
