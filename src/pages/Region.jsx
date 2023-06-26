import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CarouselStyle = styled.section`
  overflow-y: hidden;
  overflow-x: hidden;
  height: 86vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  background-color: #ffffff;
  position: relative;

  .mountain {
    bottom: -10%;
    left: -2%;
    position: absolute;
    z-index: 0;
  }

  .sun {
    z-index: 0;
    position: absolute;
    left: -5%;
    top: -9%;
  }

  .arbol {
    z-index: 0;
    position: absolute;
    right: -30%;
    bottom: -30%;
  }
  .nube {
    position: absolute;
    left: 0;
    bottom: 10%;

    animation: movimiento 10s infinite linear;
  }

  @keyframes movimiento {
    0% {
      left: -10%;
      opacity: 2;
    }

    100% {
      left: 20%;
      opacity: 0;
    }
  }

  .Displayer {
    margin-top: 0.5rem;
    z-index: 1;
    height: 65%;
    width: 95%;
    align-self: center;
  }
  .navegation {
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: end;
    height: 30%;
    width: 750px;
    background-color: #5f4d36;
    padding: 1rem;
    border-top-left-radius: 17px;
    border-bottom-left-radius: 17px;
    position: relative;
    overflow-x: scroll;

    .bird {
      top: -43%;
      position: absolute;
      z-index: 1;
      width: 75px;
    }

    .madera {
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 0;
    }
  }
  button {
    margin-right: 3.5rem;
    border-radius: 11px;
  }

  .Selector {
    height: 100%;
    width: 110px;
    object-fit: cover;
    z-index: 1;
    border-radius: 11px;
  }

  .show {
    display: flex;
  }
  .hide {
    display: none;
  }

  .Boton {
    color: whitesmoke;
    font-weight: bold;
    font-size: medium;
    background-color: #658564;
    border-radius: 17px;
    border-bottom: 9px solid #50684f;
    border-top: none;
    border-left: none;
    border-right: none;
    display: flex;
    width: 100px;
    height: 45px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    img {
      margin-left: 2px;
      height: 50%;
      width: 25%;
      filter: invert(100%);
    }
    :active {
      border-bottom: 0px;
      transform: translateY(2%) scale(0.9);
      transition: all 0.1s ease-in-out;
    }
  }
`;

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
      img: "https://humanidades.com/buenos-aires/",
      links: [
        {
          name: "Buenos Aires Humanidades",
          url: "https://humanidades.com/buenos-aires/",
        },
        {
          name: "Geografia Infinita",
          url: "https://www.geografiainfinita.com/2018/06/la-evolucion-de-buenos-aires-a-traves-de-los-mapas/",
        },
        {
          name: "Modelo Territorial",
          url: "https://cafedelasciudades.com.ar/articulos/apuntes-para-una-critica-al-modelo-territorial-de-buenos-aires/",
        },
      ],
      sections: [
        {
          title: "Gran Buenos Aires, ZONA SUR",
          info: `Es el área más poblada e industrial de la Región Metropolitana,
        extendida hacia el Sudoeste del Riachuelo. Tiene como límites el río
        de La Plata por el Noreste y Este, mientras que el río Matanza lo
        hacia en la frontera más occidental. Puede decirse que es el área del
        Conurbano donde se interconecta la CABA y el Gran La Plata, solo
        interrumpida por algunas áreas recreativas, reservas de la biosfera y
        otros usos del suelo. Entre ellos se destaca el Parque Pereyra Iraola
        de más de 100 km2, mientras que casi en contigüidad con la capital
        provincial se multiplican quintas hortícolas y en el extremo más
        meridional el aeropuerto internacional de Ezeiza y el predio de la
        Asociación de Fútbol Argentino.`,
          imgs: [
            {
              src: "./METROPOLITANA/metropolitana_2.png",
              alt: "metropolitana2",
              class: "img1_metropolitana",
            },
            {
              src: "./METROPOLITANA/metropolitana_6.png",
              alt: "metropolitana3",
              class: "img2_metropolitana",
            },
            {
              src: "./METROPOLITANA/mapa_BuenosAires_ZonaSur.png",
              alt: "metropolitana4",
              class: "map_zonaSur",
            },
          ],
        },
        {
          title: "Gran Buenos Aires, ZONA OESTE",
          info: `Es el área más dependiente de la CABA, ya que la mayoría de la
        población trabaja en esa metrópoli y se moviliza cotidianamente en
        tren o colectivo. Suele catalogarse como ciudades dormitorio, salvo
        excepciones. Si bien su periferia antes era un lugar predilecto de
        casaquintas o centros recreativos, hoy se ha extendido la
        urbanización -aunque con el mayor déficit habitacional del país, en
        parte por la gran inmigración proveniente del NEA y NOA-, el
        desarrollo hortícola y algunas agroindustrias, entre ellas la planta
        de la Serenísima y distintos frigoríficos. Año a año esta subregión
        es visitada por cientos de miles de peregrinos que caminan desde la
        CABA hasta la Basílica de Luján. También se destacan lugares
        emblemáticos como el INTA Castelar (sede nacional de ese organismo),
        el aeropuerto de El Palomar y Campo de Mayo, el principal pulmón
        verde del Conurbano.`,
          imgs: [
            {
              src: "./METROPOLITANA/metropolitana_2.png",
              alt: "metropolitana2",
              class: "img1_metropolitana",
            },
          ],
        },
      ],
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
