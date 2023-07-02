import ImgMap from './ImgMap'

const Subsection = ({ sections }) => {
  return (
    <section className='subsection'>
      {sections.map((e, i) => (
        <div key={i}>
        <h2>{e.title}</h2>
        <p>{e.info}</p>
        <ImgMap imgs={e.imgs} />
        </div>
      ))}
    </section>
  );
};

export default Subsection;
