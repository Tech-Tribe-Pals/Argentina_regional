import React from "react";
import styled from "styled-components";
import PresentacionRegiones from "../components/ComponentesRegiones/PresentacionRegiones";

const ContenidoInfo = styled.section`
  background-color: whitesmoke;
  border-left: solid #d9d9d9 11px;
  margin-top: 4rem;
  border-radius: 0.3rem;
  height: auto;
  width: 90%;
  text-aling: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 1rem;
  }

  p {
    font-size: medium;
    text-align: center;
    line-height: 1.5rem;
    width: 80%;
    margin: 1rem;
  }

  img {
    width: 80rem;
    height: 18, 75rem;
  }

  a {
    color: grey;
  }

  a:hover {
    color: green;
    transition: 1.5s;
  }

  .img1_metropolitana {
    width: 25rem;
    height: 20rem;
    border-radius: 1rem;
    margin: 1rem;
  }

  .img2_metropolitana {
    width: 25rem;
    height: 20rem;
    border-radius: 1rem;
    margin: 1rem;
  }

  .map_zonaSur {
    width: 25rem;
    height: 20rem;
    border-radius: 1rem;
    margin: 1rem;
  }

  .p-zonaOeste {
    width: 50%;
    margin: 2rem;
  }

  .MetroZonaoeste {
    width: 35rem;
    height: 25rem;
  }

  div {
    display: flex;
    flex-direction: row;
  }
`;

const MetropolitanaStyle = styled.main`
  background-color: #45673e;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8rem;
`;

export default function Metropolitana() {
  return (
    <MetropolitanaStyle>
      <PresentacionRegiones fondo={"./METROPOLITANA/metropolitana_3.PNG"} />
      <ContenidoInfo>
        <h2>Metropolitana</h2>
        <br></br>
        <p>
          Es la capital del país desde la Ley de Federación de 1880 y es
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
          reside en regiones distantes.
        </p>
        <br></br>
        <img
          src="./METROPOLITANA/metropolitan-banner.png"
          alt="Metropolitana"
        />
        <br></br>
        <p>Links para ampliar:</p>
        <br></br>
        <a href="https://humanidades.com/buenos-aires/">
          Buenos Aires Humanidades
        </a>
        <br></br>
        <a href="https://www.geografiainfinita.com/2018/06/la-evolucion-de-buenos-aires-a-traves-de-los-mapas/">
          Geografia Infinita
        </a>
        <br></br>
        <a href=" https://cafedelasciudades.com.ar/articulos/apuntes-para-una-critica-al-modelo-territorial-de-buenos-aires/">
          Modelo Territorial
        </a>
        <br></br>
        <h2>Gran Buenos Aires, ZONA SUR</h2>
        <br></br>
        <p>
          Es el área más poblada e industrial de la Región Metropolitana,
          extendida hacia el Sudoeste del Riachuelo. Tiene como límites el río
          de La Plata por el Noreste y Este, mientras que el río Matanza lo
          hacia en la frontera más occidental. Puede decirse que es el área del
          Conurbano donde se interconecta la CABA y el Gran La Plata, solo
          interrumpida por algunas áreas recreativas, reservas de la biosfera y
          otros usos del suelo. Entre ellos se destaca el Parque Pereyra Iraola
          de más de 100 km2, mientras que casi en contigüidad con la capital
          provincial se multiplican quintas hortícolas y en el extremo más
          meridional el aeropuerto internacional de Ezeiza y el predio de la
          Asociación de Fútbol Argentino.
        </p>

        <div>
          <img
            src="./METROPOLITANA/metropolitana_2.png"
            alt="metropolitana2"
            className="img1_metropolitana"
          />
          <img
            src="./METROPOLITANA/metropolitana_6.png"
            alt="metropolitana3"
            className="img2_metropolitana"
          />
          <img
            src="./METROPOLITANA/mapa_BuenosAires_ZonaSur.png"
            alt="metropolitana4"
            className="map_zonaSur"
          />
        </div>
        <br></br>
        <h2>Gran Buenos Aires, ZONA OESTE</h2>
        <br></br>
        <div>
          <p className="p-zonaOeste">
            Es el área más dependiente de la CABA, ya que la mayoría de la
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
            verde del Conurbano.
          </p>
          <img
            src="./METROPOLITANA/metropolitana_7.png"
            alt="MetropolitanaZonaOeste"
            className="MetroZonaoeste"
          />
        </div>
      </ContenidoInfo>
    </MetropolitanaStyle>
  );
}
