import { useEffect, useState } from "react";

const Overflow = ({ item, clickOut }) => {
  const [position, setPosition] = useState(0);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const changeRegion = (num) => {
    let newPosition = position + num;

    if (newPosition < 0) {
      newPosition = 0;
      clickOut(0)
    } else if (newPosition >= item.length - 2) {
      newPosition = item.length - 3;
      clickOut(4)
    }
    clickOut(newPosition)
    setPosition(newPosition);
  };

  const changeSimple = (num) => {
    if (position === 0 && num === -1) {
      setPosition(0)
      clickOut(0)
    } else if (position === 5 && num === 1) {
      setPosition(5)
      clickOut(5)
    } else {
      setPosition(position + num)
      clickOut(position + num)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const visibleItems = item.slice(position, position + 3);

  return (
    <>
      <button
        onClick={windowSize >= 768 ? () => changeRegion(-1) : () => changeSimple(-1)}
        className={position === 0 ? "blocked btnNav" : "btnNav"}
      >
        <img src="/Iconos/prev.svg" alt="Previous" />
      </button>
      {windowSize >= 768 ? (
        visibleItems.map((e, i) => (
          <button className={ i === 0 ? 'actual' : '' } key={i} onClick={() => clickOut(i + position)}>
            <img
              className='Selector'
              src={`/${e.name}/${e.name.toLowerCase()}_1.png`}
              alt="img"
            />
          </button>
        ))
      ) : (
        <button>
          <img
            className="Selector"
            src={`/${item[position].name}/${item[
              position
            ].name.toLowerCase()}_1.png`}
            alt="img"
          />
        </button>
      )}
      <button
      onClick={windowSize >= 768 ? () => changeRegion(1) : () => changeSimple(1)}
        className={position === 3 ? "blocked btnNav" : "btnNav"}
      >
        <img src="/Iconos/next.svg" alt="Next" />
      </button>
    </>
  );
};

export default Overflow;
