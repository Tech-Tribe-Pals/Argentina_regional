import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Region = () => {
  const arr = [
    { name: "cuyo", docs: { title: "Cuyo" } },
    { name: "patagonia", docs: { title: "Patagonia" } },
    {
      name: "metropolitana",
      docs: {
        title: "Metropolitana",
        info: `Es la capital del país desde la Ley de Federación de 1880 y es
        autónoma a partir de la sanción de la Constitución Nacional de 1994.
        También la ciudad más poblada de Argentina, con unos 3.000.000 de
        habitantes, pero no la más grande (Córdoba posee 520 km2 contra los
        202 km2 de la CABA). Es la metrópoli nacional que concentra mayor
        actividad financiera y es sede de importantes empresas nacionales,
        trasnacionales y multinacionales, como bien se puede reflejar en las
        torres de Puerto Madero. Culturalmente es la urbe más cosmopolita y
        donde se movilizan unas 10.000.000 de personas, principalmente
        mediante la extensa red de transporte ferroviario y de colectivos que
        alcanzan la periferia del Gran Buenos Aires. Dentro de las fronteras
        definidas por el Riachuelo y la Avenida General Paz se destaca la
        única red de subterráneos del país, con extensión en el pre-metro. Así
        ese espectro de influencia se inscribe un esquema radiocéntrico hacia
        el interior, desde dónde arriban miles de argentinos por razones
        comerciales y administrativas, así como por la localización de grandes
        unidades sanitarias, universidades y otras sedes de cobertura
        nacional. Dicho centralismo de las funciones y servicios del Estado
        han sido objeto de críticas y sendas tensiones, inclusive por alta
        proporcionalidad de subsidios públicos y beneficios fiscales a
        empresas que tributan en el centro porteño, pero cuya área productiva
        reside en regiones distantes.`,
      },
    },
    { name: "noroeste", docs: { title: "Noroeste" } },
    { name: "noreste", docs: { title: "Noreste" } },
    { name: "antartida", docs: { title: "Antartida" } },
    { name: "transfronterizas", docs: { title: "Transfronterizas" } },
  ];

  const [data, setData] = useState([]);

  const { region } = useParams();

  useEffect(() => {
    const fetchData = arr.find((e) => e.name === region);
    setData(fetchData.docs);
  }, [region]);

  return (
    <>
      {data.length === 0 ? (
        "Cargando..."
      ) : (
        <main>
          <h1>{data.title}</h1>
          <br></br>
          <p>{data.info}</p>
          <br></br>
        </main>
      )}
    </>
  );
};

export default Region;
