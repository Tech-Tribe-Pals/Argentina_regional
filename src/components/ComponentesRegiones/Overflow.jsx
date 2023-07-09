import { useEffect, useState } from "react";

const Overflow = ({ item, clickOut }) => {
  const [position, setPosition] = useState(0);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const changeRegion = (num) => {
    let newPosition = position + num;

    if (newPosition === item.length) {
      newPosition = 0
      clickOut(0)
    } else if (newPosition === -1) {
      newPosition = 5
      clickOut(5)
    } else {
      clickOut(newPosition)
    }
    setPosition(newPosition)
  };

  const changeSimple = (num) => {
    let newPosition = position + num;

    if (newPosition === item.length) {
      newPosition = 0
      clickOut(0)
    } else if (newPosition === -1) {
      newPosition = 5
      clickOut(5)
    } else {
      clickOut(newPosition)
    }
    setPosition(newPosition)
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const visibleItems = item.slice(position, position + 3)

  return (
    <>
      <button
        onClick={
          windowSize >= 768 ? () => changeRegion(-1) : () => changeSimple(-1)
        }
        className={"btnNav"}
      >
        <img src="/Iconos/prev.svg" alt="Previous" />
      </button>
      {windowSize >= 768 ? (
        visibleItems.map((e, i) => (
          <button
            className={i === 0 ? "actual" : ""}
            key={i}
            onClick={() => changeRegion(i - 1)}
          >
            <img
              className="Selector"
              src={`/${e.bonus ? e.name.split(' ')[0] + e.bonus : e.name.split(' ')[0]}/${e.name.split(' ')[0].toLowerCase()}_1.png`}
              alt="img"
            />
          </button>
        ))
      ) : (
        <button>
          <img
            className="Selector"
            src={`/${visibleItems[0].name}/${visibleItems[0].name.toLowerCase()}_1.png`}
            alt="img"
          />
        </button>
      )}
      <button
        onClick={
          windowSize >= 768 ? () => changeRegion(1) : () => changeSimple(1)
        }
        className={"btnNav"}
      >
        <img src="/Iconos/next.svg" alt="Next" />
      </button>
    </>
  );
};

export default Overflow;