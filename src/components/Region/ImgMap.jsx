const Imagenes = ({ imgs }) => {
  return (
    <div className="subsectionImgs">
      {imgs.map((e, i) => (
        <div key={i} className="container">
        <img  src={e.src} alt={e.alt} />
        </div>
      ))}
    </div>
  );
};

export default Imagenes;
