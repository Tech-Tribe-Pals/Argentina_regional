import { useState } from "react";

const Overflow = ({ item, clickOut }) => {
  const [position, setPosition] = useState(0);

  const changeRegion = (sum) => {
    let newPosition = position + sum;
    
    if (newPosition < 0) {
      newPosition = 0;
    } else if (newPosition >= item.length - 2) {
      newPosition = item.length - 3;
    }
    
    setPosition(newPosition);
  };

  const visibleItems = item.slice(position, position + 3);

  return (
    <div className="overflow">
      <button onClick={() => changeRegion(-1)} className={ position === 0 ? 'blocked btnNav' : 'btnNav' }>
        <img src="/Iconos/prev.svg" alt="Previous" />
      </button>
      {visibleItems.map((e, i) => (
        <button key={i} onClick={() => clickOut(i + position)}>
          <img
            className="Selector"
            src={`/${e.name}/${e.name.toLowerCase()}_1.png`}
            alt="img"
          />
        </button>
      ))}
      <button onClick={() => changeRegion(1)} className={ position === 3 ? 'blocked btnNav' : 'btnNav' }>
        <img src="/Iconos/next.svg" alt="Next" />
      </button>
    </div>
  );
};

export default Overflow;
