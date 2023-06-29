import React from "react";
import styled from "styled-components";

const ContainerInfo = styled.main`
  width: 100%;
  margin-top: 3rem;
  color: #1f1f1f;
  margin-bottom: 20rem;

  h2 {
    font-size: 3rem;
  }
`;

const Section = styled.section`
  margin: 0 auto;
  width: 90%;
  border-left: solid 7px #b9b9b9;
  border-bottom: solid 4px #b9b9b9;
  border-right: solid 1px #b9b9b9;
  border-top: solid 1px #b9b9b9;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding: 1px;
  border-radius: 1rem;
`;

const Separator = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 4rem;
  align-items: center;

  span {
    background-color: #c9c9c9;
    height: 3px;
    width: 30%;
  }
`;

const Article = styled.article`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

  .Prontuario {
    width: 90%;
    margin-top: 5rem;
    display: flex;
    flex-flow: row wrap;

    figure {
      display: flex;
      flex-direction: row;
      h3 {
        margin-left: 1rem;
        font-weight: bolder;
      }
    }

    div {
      margin: 3rem 1rem 1rem 1rem;
      flex: 1 0 30%;
      display: flex;
      flex-direction: column;

      li {
        margin-top: 1rem;
        list-style: none;
      }
    }
  }

  &:not(:last-child) {
    margin-bottom: 4rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin-top: 4rem;
  margin-bottom: 4rem;
  text-align: center;

  p {
    margin-top: 1rem;
    width: 80%;
  }
  ul {
    li {
      margin-top: 1rem;
      list-style: none;
    }
    a {
      color: black;
      :hover {
        color: rgb(85 121 155);
      }
    }
  }
`;

const ContentWrapperOne = styled.div`
  display: flex;
  flex-flow: row wrap;

  width: 50%;
  margin-top: 4rem;

  p {
    margin-top: 1rem;
    width: 80%;
    font-size: 1.2rem;
  }
`;

const Picture = styled.picture`
  margin-bottom: 2rem;

  img {
    object-fit: cover;
    border-radius: 50%;
  }
`;

const PictureProfe = styled.picture`
  margin-top: 4rem;
  width: 300px;
  height: 300px;
  background-color: #4e6247;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  padding: 1rem;

  img {
    width: 75%;
    height: 100%;
  }
`;

export default function SobreMi() {
  return (
    <ContainerInfo>
      <Section>
        <Article>
          <ContentWrapperOne>
            <h2>Presentación</h2>
            <p>
              Bienvenidos a todos/as, soy el profesor Jorge Lapena. Realizamos
              ésta página con el fin de ofrecer información integral sobre
              Argentina y sus regiones, abordando tanto los aspectos positivos
              como las problemáticas que se enfrentan. A continuación,
              encontrarán una compilación de mis estudios, contribuciones y
              experiencias que respaldan estos conocimientos.
            </p>
          </ContentWrapperOne>
          <PictureProfe>
            <img src="./public/Presentacion/Jorge_Lapena.png" alt="JorgeLapena" />
          </PictureProfe>

          <div className="Prontuario">
            <div>
              <figure>
                <img src="./Presentacion/Estudios.svg" width={50} alt="Icono1" />
                <h3>Educación y experiencia académica</h3>
              </figure>
              <ul>
                <li>Licenciado-profesor en Geografía</li>
                <li>Profesor de Historia</li>
                <li>
                  Especialista en Metodología de la Investigación Científica
                </li>
                <li>Especialista en Análisis del Mundo Contemporáneo</li>
                <li>
                  Magister en Ambiente y Desarrollo Sustentable y Doctor en
                  Geografia
                </li>
              </ul>
            </div>
            <div>
              <figure>
                <img src="./Presentacion/Experiencia.svg" width={50} alt="Icono2" />
                <h3>
                  Experiencia <br /> docente
                </h3>
              </figure>
              <ul>
                <li>
                  Docente a cargo de las materias Geografía Física, Geografía
                  Física Argentina y Geografía Regional Argentina en la
                  Universidad Nacional del Centro de la Provincia de Buenos
                  Aires.
                </li>
                <li>
                  Jefe de las cátedras de Biogeografía, Geología y Climatología
                  en la Universidad Nacional de La Pampa (UNLPam)
                </li>
              </ul>
            </div>
            <div>
              <figure>
                <img src="./Presentacion/Publicaciones.svg" width={50} alt="Icono3" />
                <h3>
                  Publicaciones <br /> y trabajos académicos
                </h3>
              </figure>
              <ul>
                <li>Autor de 6 libros.</li>
                <li>
                  Coautor en 4 libros sobre temáticas regionales y
                  físico-ambientales.
                </li>
                <li>
                  Más de 50 publicaciones científicas y académicas en distintas
                  editoriales y revistas
                </li>
              </ul>
            </div>
            <div>
              <figure>
                <img src="./Presentacion/Afiliaciones.svg" width={50} alt="Icono4" />
                <h3>
                  Afiliaciones <br /> y membresías
                </h3>
              </figure>
              <ul>
                <li>
                  Integrante del Centro de Investigaciones Geográficas, miembro
                  editorial de la Revista Estudios Socioterritoriales (UNCPBA)
                </li>
                <li>Miembro de la Red de Geografía Física de Argentina</li>
                <li>
                  Miembro de la Red de la Sostenibilidad con sede en la
                  Universidad Estatal de Illinois (Chicago, EE.UU.)
                </li>
                <li>
                  Miembro del staff académico del Curso de Líderes Promotores de
                  la Sustentabilidad, coordinado por la Universidad Autónoma de
                  Nuevo León (Monterrey, México)
                </li>
              </ul>
            </div>
            <div>
              <figure>
                <img
                  src="./Presentacion/Investigaciones.svg"
                  width={50}
                  alt="Icono5"
                />
                <h3>
                  Proyectos <br />
                  de investigacion
                </h3>
              </figure>
              <ul>
                <li>
                  Proyecto sobre las implicancias ambientales de la bajante
                  histórica del río Colorado (UNLPam).
                </li>
                <li>
                  Proyecto sobre la implementación de la Ley Nacional de
                  Educación Ambiental Integral desde el Instituto Superior de
                  Formación Docente (INFOD).
                </li>
              </ul>
            </div>
            <div>
              <figure>
                <img src="./Presentacion/Portfolio.svg" width={50} alt="Icono6" />
                <h3>
                  Experiencia <br /> profesional
                </h3>
              </figure>
              <ul>
                <li>
                  Experiencia en organismos de gobierno dependientes de los
                  Ministerios de Educación, Trabajo y Defensa de la Nación
                </li>
                <li>
                  Colaborador en diarios y periódicos de amplio alcance, como La
                  Nación y Agencia DIB y otros.
                </li>
              </ul>
            </div>
          </div>
        </Article>

        <Separator>
          <span></span> <h3>Colaboradores</h3>
          <span></span>
        </Separator>

        <Article className="Nosotros">
          <ContentWrapper>
            <Picture>
              <img src="./Presentacion/Fede.jfif" width={150} alt="FedericoMassolo" />
            </Picture>
            <h3>Federico Massolo</h3>
            <p>
              s simplemente el texto de relleno de las imprentas y archivos de
              texto. Lorem Ipsum ha sido el texto de relleno estándar de las
              industrias desde el año 1500, cuando un impresor
            </p>
          </ContentWrapper>

          <ContentWrapper>
            <Picture>
              <img
                src="./Presentacion/Javier.png"
                height={150}
                width={150}
                alt="JavierRivarola"
              />
            </Picture>
            <h3>Javier Ignacio Rivarola</h3>
            <ul>
              <li>
                Alumno avanzado en la carrera de Lic de Geografía de la UNICEN
              </li>
              <li>
                Alumno de la carrera Tecnicatura en Desarrollo de Aplicaciones
                Informáticas en la UNICEN
              </li>
              <li>
                Graduado de la carrera de desarrollo FullStack en la institución
                CoderHouse
              </li>
              <li>
                <img src="./Presentacion/contact.svg" width={30} alt="img-contacto" />
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/javier-ignacio-rivarola-509a12235/"
                  target={"_blanc"}
                >
                  Javier Ignario Rivarola
                </a>
              </li>
              <li>nacho.rivarola@hotmail.com</li>
            </ul>
          </ContentWrapper>

          <ContentWrapper>
            <Picture>
              <img src="./Presentacion/Adriel.jfif" height={150} width={150} alt="" />
            </Picture>
            <h3>Adriel Camacho</h3>
            <ul>
              <li>
              Alumno de la carrera de Analista de Sistemas en la ORT
              </li>
              <li>
              Realizando el curso de Fullstack Open de la Universidad de Helsinki
              </li>
              <li>
              Desarrollador Fullstack con el conjunto MERN
              </li>
              <li>
                <img src="./Presentacion/contact.svg" width={30} alt="img-contacto" />
              </li>
              <li>
              <a
                  href="https://www.linkedin.com/in/adrielcamacho/"
                  target={"_blanc"}
                >
                  Adriel Camacho
                </a>
              </li>
              <li>adriel@beitsefer.com.ar </li>
            </ul>
           </ContentWrapper>
        </Article>
      </Section>
    </ContainerInfo>
  );
}
