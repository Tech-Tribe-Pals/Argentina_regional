import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Region = () => {
  const arr = [
    { 
      name: "cuyo",
       docs: {
         title: "Cuyo",
         info:`Esta área Norte de la provincia de San Juan se encuentra jaqueada por la mega minería que se instaló en lo alto se la cordillera de Los Andes y por accidente o impericia expone al riesgo de contaminación aguas abajo del río Jachal (situación semejante a Famatina, en La Rioja), donde además de localizarse la ciudad homónima también se desarrolla un cordón ribereño caracterizado por la frutihorticultura. Fuera de esta franja productiva la inmensidad del desierto Sanjuanino no permite más que el desarrollo caprino de subsistencia, que también coexiste con otros proyectos mineros que la gobernación promueve ya hace décadas.
         `,
          imgs: [
          {
            src: "./Cuyo/cuyo_banner.png",
            alt: "metropolitan-banner",
            class: "metropolitan-banner",
          }, 
        ],
          links: [
            {
              name: "Fundacion Patagonia",
              url: "https://www.patagonia3mil.com.ar/wp-content/uploads/2016/12/Por-que-el-pueblo-de-Jachal-protesta-contra-la-mina-de-la-multinacional-Barrick-Gold.pdf"
              ,
            },
            {
              name: "Periurbano del gran San Juan",
              url: "https://geousal.usal.edu.ar/archivos/geousal/docs/a4-el_periurbano_del_gran_san_juan_y_sus_implicancias._provincia_de_san_juan_argentina.pdf",
            },
            {
              name: "Expansion Urbana San Juan",
              url: "https://bdigital.uncu.edu.ar/objetos_digitales/18534/del-cid-expacinurbanasanjuanpcs.pdf",
            },
          ], 
          sections: [
            {
              title: "Gran San Juan y Microregiones Integradas",
              info: `Con las regalías de la minería que se obtienen principalmente el Noroeste de la provincia, en desmedro de la economía originaria y el ambiente de Jachal,  la ciudad de San Juan y su aglomerado han revitalizado infraestructuras y servicios dando lugar a un área Metropolitana en expansión, preparada incluso para resistir fuertes sismos (construcciones antisísmicas, al igual que Mendoza) y la influencia del Zonda (sistema de arbolado público ampliad). A su vez, en las periferias que ya corresponden a departamentos lindantes a la capital se ha desarrollado fuertemente la frutihorticultura, allá de la tradicional plantación de vida y olivos. Así también este continuó urbano-suburbano se ha convertido la mayor macrocefalia nacional, ya que más de las tres cuartas partes de la población vive en esta subregión meridional de San Juan.
              `,
              imgs: [
                {
                  src: "./Cuyo/cuyo_7.png",
                  alt: "Cuyo_san-juan",
                  class: "Cuyo-san-juan",
                },
                {
                  src: "./Cuyo/cuyo__1.png",
                  alt: "metropolitana3",
                  class: "img2_metropolitana",
                },
                {
                  src: "./Cuyo/cuyo_6_maps.png",
                  alt: "maps_cuyo",
                  class: "map_cuyo_san-juan",
                },
              ],
            },
            {
              title: "Los Andes Mineros de San Juan",
              info: `En lo más alto de la cordillera Frontal y en relieves contiguos se encuentran los complejos mineros o proyectos que atraen inversiones trasnacionales, principalmente en busca de oro y plata. Entre ellos se encuentra la empresa Veladero, que al igual que otras intenta obtener estos recursos en la inmensidad de una cordillera despoblada, pero con nacientes que escurren hacia cuencas que son vitales aguas abajo. Fuera del ámbito minero, hacia el Norte de San Juan se localiza el área más desértica del país, y a la vez, el Valle de la luna, un lugar icónico y muy visitados, siempre con el resguardo legal de las áreas naturales protegidas`,
              imgs: [
                {
                  src: "./Cuyo/cuyo_8.png",
                  alt: "cuyo_sanjuan",
                  class: "cuyo-SanJuan",
                },
              ],
            },
            {
              title: "Gran Mendoza y nucleos productivos de proximidad",
              info: `El Gran Mendoza concentra cerca de 1.200.000 habitantes y constituye el cuarto aglomerado más grande de Argentina. Al abastecimiento a esa población, se adiciona el turismo, la generación de energía hidroeléctrica, los deportes náuticos y el riego extendido en plantaciones de vid, olivos y frutales en general, incluido la forestación urbana. Por ello, es una subregión muy dependiente de los ciclos de precipitaciones de alta montaña y las obras realizadas en el área de nacientes, que en situaciones extremas perjudica a otras áreas o ambientes ubicados aguas abajo. A diferencia de San Juan los mendocinos rechazan rotundamente la minería, ya que afecta parte de esta lógica de aprovechamiento del recurso hídrico, tal como se reflejó en la histórica protesta de diciembre de 2019. Fuera de ello, la posición geográfica de la capital y sus alrededores es crucial porque por allí circulan miles de transportes pesados de bandera internacional en dirección a Chile, pero también a otros países del Pacífico mediante el imponente puerto de Valparaíso.
              `,
              imgs: [
                {
                  src: "./Cuyo/cuyo_9.png",
                  alt: "cuyo-cuyo-Mendoza",
                  class: "cuyo-Mendoza",
                },
              ],
            },

            {
              title: "Los Oasis del Atuel y Valles Australes de Mendoza (San Rafael)",
              info: `Esta subregión se configura en varios oasis o riberas con riego extendido, principalmente a favor de San Rafael y sus villas aledañas donde además de plantaciones de vid, olivos y frutales en general hay bodegas y otras sedes fabriles, articuladas con el turismo que también es atraído por los deportes náuticos y travesías en Valle Grande o Río Atuel. A su vez, este último es tan sobreexplotado que afecta al todo el centro-oeste de La Pampa, aguas abajo, principalmente las localidades de Santa Isabel y Algarrobo del Águila. 
              Más allá de los valles forestados, el Zonda tiene alcance y afecta la salud de las personas mayores y otros grupos etarios. También esta subregión es azotada por los granizos que en primavera y verano destrozan las plantaciones en las fincas cuyanas.`,
              imgs: [
                {
                  src: "./Cuyo/cuyo_10.png",
                  alt: "cuyo-cuyo-Mendoza",
                  class: "cuyo-Mendoza_zonda",
                },
              ],
            links: [
              {
                name: "Vientos-Zonda",
                url: "https://www.sitioandino.com.ar/n/169540-como-afecta-el-viento-zonda-nuestro-humor-y-salud/"
                ,
              },
            ],
          },
          {
            title: "San Luis",
            info: `A excepción del borde oriental y austral del territorio pintado, que se asocia más a un ambiente pampeano agropecuario, el resto de la provincia se caracterizó por el desarrollo de la promoción industrial y el turismo, y más recientemente por el auge de polos tecnológicos-educativos, muchos de ellos desde universidades públicas (San Luis es la provincia con más oferta universitaria por habitante del país). En todo ello, la injerencia del Estado es casi total y ha contribuido a la ampliación de infraestructura y servicios que por su magnitud son únicos en Argentina (WiFi gratis desde el inicio del siglo, autopistas en todo el interior, becas universitarias con alojamiento incluido, estadios inmensos con apertura gratuita, etc.).
            Respecto a los puntos turísticos, su distribución y amplitud al microemprendedorismo ha permitido desarrollar varias localidades,  principalmente Villa Merlo, pero también otras que antes eran comarcas rurales. Hasta se creó una ciudad desde cero, como es el caso de La Punta (la segunda más joven, después de Casa de Piedra en La Pampa), donde se propicio una descentralización de la capital,  que es una urbe de origen colonial,  de calles angostas, limitada a poder crecer espacialmente.
            `,
            imgs: [
              {
                src: "./Cuyo/cuyo_11.png",
                alt: "cuyo-cuyo-SanLuis",
                class: "cuyo-SanLuis",
              },
            ],
          links: [
            {
              name: "San Luis",
              url: "http://contenidosdigitales.ulp.edu.ar/exe/geografia_de_san_luis/la_provincia_de_san_luis.html"
              ,
            },
          ],
        },
          ],           
        },
        },
        

        { 
          name: "patagonia",
           docs: {
             title: "Patagonia",
             info:`Es la región de mayor superficie, generalizada como un espacio de clima frío, de grandes distancias, extensos parques nacionales, altos costos de vida y vacíos demográficas, donde no siempre el transporte terrestre es la mejor opción. En el siglo pasado fue un área receptora de las “grandes oportunidades”, en cuanto a laboral, de la mano de incentivos estatales (zona franca, apoyo a industrias, mejores sueldos y reconocimientos jubilatorios ventajosos), tanto como del sector privado (principalmente por la fruticultura, el turismo y el petróleo). Hoy esta realidad es relativa. A su vez, en la práctica la Patagonia no es tan homogénea (desde el Valle de Río Negro a Patagonia Austral; o desde la Patagonia Andina al paisaje de mesetas y de la costa Atlántica), está signada por su vínculo binacional con Chile, ya sea por la contigüidad o por compartir ambientes, culturas y vías de comunicación dependiendo los destinos de un lado y otro, al sortear los archipiélagos del Pacífico en el caso trasandino o tener que arribar a la Isla Grande de Tierra del Fuego por barcaza chilena. `,
              imgs: [
              {
                src: "./Patagonia/patagonia-banner.png",
                alt: "patagonia-banner",
                class: "patagonia-banner",
              }, 
            ],
              links: [
                {
                  name: "Actividad fruticula en el Alto Valle de Rio Negro",
                  url: "https://racimo.usal.edu.ar/4191/1/P%C3%A1ginas%20desdeTesis.UNI%270062784.La%20crisis%20del%20sector%20frut%C3%ADcola%20en%20el%20Alto%20Valle%20de%20R%C3%ADo%20Negro.pdf"
                  ,
                },
                {
                  name: "Fracking en la Patagonia Argentina",
                  url: "https://www.memoria.fahce.unlp.edu.ar/art_revistas/pr.8457/pr.8457.pdf",
                },
              ], 
              sections: [
                {
                  title: "La Pampa de Gastre o Pampa Patagonica Central",
                  info: `Esta subregión comprende la parte central de las provincias de Santa Cruz y Chubut, con ambientes extendidos hasta la meseta de Somuncurá, donde lo inhóspito se combina con lo agreste en medio de la inmensidad. Su superficie casi se equipara a una provincia de Buenos Aires, pero con menos de 100.000 habitantes. Es la tierra de los rebaños de ovejas y el cruce de Patagonia Andina a Patagonia Costera, con pocas rutas pavimentadas y distancias que llevan casi un día de recorrido, con paradas obligadas. La mayor articulación es con la costa o las ciudades petroleras e industriales ubicadas sobre la Ruta Nacional 3. En estos ambientes sobreviven muchas especies endémicas y en el pasado, fue área de tránsito seminómada de Tehuelches que al igual que los Mapuches se extendieron hacia el siglo XIX al territorio bonaerense.`,
                  imgs: [
                    {
                      src: "./Patagonia/patagonia_2.png",
                      alt: "patagonia2",
                      class: "patagonia2",
                    },
                    {
                      src: "./Patagonia/patagonia_3.png",
                      alt: "patagonia3",
                      class: "patagonia3",
                    },
                    {
                      src: "./Patagonia/patagonia_mapa.png",
                      alt: "patagonia-maps",
                      class: "patagonia-maps",
                    },
                  ],
                },
                {
                  title: "Patagonia Andina Norte",
                  info: `La Patagonia Andina Norte involucra las comarcas o villas turísticas situadas sobre la cordillera austral,  entre Copahue (al pie del Volcán homónimo) y Trevelin, a poco menos de media hora de Esquel. Junto con San Carlos de Bariloche,  Villa La Angostura, San Martin de los Andes, Junin de los Andes y Villa Pehuenia conforman una subregión con alto potencial turístico, y a su vez, con un estrecho vínculo con las regiones de Los Ríos, Los Lagos y La Araucania del lado Chileno. También se destaca por la gran superficie ocupadas por Parques Nacionales (la mayor del país y con convenios de codominio con pueblos mapuches), las pistas de esquí,  las travesías en el bosque, el alpinismo (Lanin, especialmente) y los deportes náuticos o paseos en lagos y ríos que en algunos casos desaguan en el Océano Atlántico.
                  `,
                  imgs: [
                    {
                      src: "./Patagonia/patagonia_6.png",
                      alt: "patagonia4",
                      class: "Bariloche",
                    },
                  ],
                  links: [
                    {
                      name: "Bariloche",
                      url: "http://www.unla.edu.ar/images/galerias/semana-humanidades-2021/dycv/taller-diseno-iv/original/carraro.pdf"
                      ,
                    },
                  ],
                },
                {
                  title: "Patagonia de los Golfos y las Costas Balnearias",
                  info: `La Patagonia costera o de los golfos ocupa el área litoral Atlántica y la zona de mesetas que en forma escalonada termina abruptamente en el oriente. Si bien forman partes de la Patagonia Extra andina o árida, los balnearios, los puertos pesqueros del desarrollo petrolífero han dinamizado la economía de importantes ciudades ubicadas sobre o en proximidad a la Ruta Nacional 3, principalmente Puerto Madryn , Trelew, Comodoro Rivadavia, Caleta Olivia y otras. El atractivo de las aguas cálidas ha generado todo un récord en destinos como Las Grutas donde el mar es más cálido que en Mar del Plata y otras ciudades bonaerenses (particularidad que se explica por la incidencia de los golfos no tan expuestos a las corrientes marinas frías).
                  `,
                  imgs: [
                    {
                      src: "./Patagonia/patagonia.png",
                      alt: "patagonia5",
                      class: "patagonia_puerto-madryn",
                    },
                  ],
                },
    
                {
                  title: "Patagonia Austral",
                  info: `En la subregión más meridional del país en su sector continental, aunque también comprende las áreas insulares sitas más al Sur. Entre ellas se destaca la Isla Grande de Tierra del Fuego, que es compartida con Chile. A través de este país limítrofe se puede acceder desde la provincia de Santa Cruz en barcaza que cruza el estrecho de Magallanes. Los glaciares, volcanes, grandes lagos y cumbres que esperan ser escaladas destacan destinos que cada vez son visitados por el turismo internacional. Por ello, El Calafate, próximo al Glaciar Perito Moreno (otra de las maravillas naturales que cuenta nuestro país), ha crecido bastante, sobre todo por la localización de un aeropuerto con varios servicios diarios. Fuera de esta caracterización,  ciudades como Río Turbio, Río Gallegos y Río Grande se destacan por la extracción de carbón, la actividad portuaria y la industria electrónica, respectivamente. Y más en los confines de la provincia de Tierra del Fuego se localiza Ushuaia que convive con el turismo y una fuerte influencia de la administración pública ya que, además de ser sede provincial es un nodo de contacto  aeronaval con las islas del Atlántico Sur y el continente  antártico. Además del viaje aéreo que convoca al mayor porcentaje de turistas,  también arriban al lugar cruceros que se internan por los fiordos y hacen paradas en Puerto Willians, una localidad que rivaliza con la capital argentina como la ciudad más austral del mundo.
                  `,
                  imgs: [
                    {
                      src: "./Patagonia/Patagonia_5.png",
                      alt: "patagonia-ushuaia",
                      class: "patagonia-ushuaia",
                    },
                  ],
                links: [
                  {
                    name: "Ushuaia",
                    url: "https://www.ushuaia.gob.ar/noticias/ushuaia-la-tercera-ciudad-del-pais-con-mejor-calidad-de-vida"
                    ,
                  },
                ],
              },
              ],           
            },
            },


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
      imgs: [
        {
          src: "./METROPOLITANA/metropolitan-banner.png",
          alt: "metropolitan-banner",
          class: "metropolitan-banner",
        }, ], 
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
                class: "MetroZonaoeste",
              },
            ],
          },
          {
            title: "Gran Buenos Aires, ZONA NORTE",
            info: `Además de la influencia de la CABA, esta área representó la relocalización de residencias otrora ubicadas en la Zona Sur donde más afectó la fiebre amarilla en las últimas tres décadas del siglo XIX. Puede decirse que aquí se radican los partidos de mayor ingreso bruto per cápita de la provincia, y en parte, del país. Un primer cordón contiguo a la Capital Federal se distingue como industria y comercial, pero más allá dominan amplias zonas residenciales, barrios cerrados y usos recreativos como el Hipódromo de San Isidro, Tortuguitas Country Club y el Bioparque Temaiken. Hacia el Noreste también se irrumpe la monotonía urbana-suburbana y se aprecia un paisaje signado por deltas entre Tigre y San Fernando. A esa geografía de islas, más al noroeste, por las dos arterias principales de acceso Norte se distribuyen más barrios cerrados y casaquintas, pero también cordones industriales, principalmente en General Pacheco, Campana (incluye su puerto) y Zárate. 
          `,
            imgs: [
              {
                src: "./METROPOLITANA/metropolitana_8.png",
                alt: "metropolitana8",
                class: "MetroZonaoeste",
              },
            ],
            links: [
              {
                name: "Nordelta",
                url: "https://www.researchgate.net/publication/28063765_Nordelta_-_ciudad_cerrada_el_analisis_de_un_nuevo_estilo_de_vida_en_el_gran_Buenos_Aires",
              },
            ],
          },
          {
            title: "Gran Buenos Aires, LA PLATA",
            info: `Aquí reside la capital del territorio bonaerense, el más poblado y de mayor superficie. Es a la vez el quinto aglomerado más poblado del país (además de La Plata comprende los partidos de Berisso y Ensenada), pero como está casi contiguo a la Zona Sur del Gran Buenos Aires, la mayoría de especialistas en Geografía Regional lo consideran parte de la Región Metropolitana. También está incluido como un centro urbano interconectado en un espacio más amplio: la megalópolis La Plata-CABA-Rosario. Cotidianamente más de un millón de personas de toda la provincia se moviliza en esta subregión, donde se localizan hospitales, universidades y un sinfín de reparticiones de gobierno, aunque en el inicio de siglo se ha propuesto descentralizar algunas funciones o servicios públicos. Entre las distinciones, la urbe se destaca por una ciudad capital con un moderno diseño urbano y sendas diagonales, sumado al estilo gótico de la Catedral de la Inmaculada Concepción y la inmensidad de la plaza Moreno, la más grande de Sudamérica. `,
            imgs: [
              {
                src: "./METROPOLITANA/metropolitana_9.png",
                alt: "metropolitana8",
                class: "MetroZonaoeste",
              },
            ],
            links: [
              {
                name: "La Plata Historia",
                url: "https://cronosytopoi.wordpress.com/2018/08/28/la-ciudad-de-la-plata-geografia-e-historia-para-entender-un-lugar-en-el-mundo/",
              },

              {
                name: "La Plata Info",
                url: "https://es-academic.com/dic.nsf/eswiki/540428",
              },

              {
                name: "La Plata Conicet",
                url: "https://ri.conicet.gov.ar/handle/11336/163302",
              },
            ],
          },
        ],
      },
    },
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
