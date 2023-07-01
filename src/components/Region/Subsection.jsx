import ImgMap from './ImgMap'

const Subsection = ({ sections }) => {
  sections[0].imgs.map(e => {
    console.log(e.src);
  })
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
