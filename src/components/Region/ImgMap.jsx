const Imagenes = ({ imgs }) => {
  return (
    <div className="subsectionImgs">
      {imgs.map((e, i) => (
        <img key={i} src={e.src} className={e.class} alt={e.alt} />
      ))}
    </div>
  );
};

export default Imagenes;
