import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Region = () => {
  const arr = [
    {
      name: "cuyo",
      docs: {
        title: "Cuyo",
        info: `Esta área Norte de la provincia de San Juan se encuentra jaqueada por la mega minería que se instaló en lo alto se la cordillera de Los Andes y por accidente o impericia expone al riesgo de contaminación aguas abajo del río Jachal (situación semejante a Famatina, en La Rioja), donde además de localizarse la ciudad homónima también se desarrolla un cordón ribereño caracterizado por la frutihorticultura. Fuera de esta franja productiva la inmensidad del desierto Sanjuanino no permite más que el desarrollo caprino de subsistencia, que también coexiste con otros proyectos mineros que la gobernación promueve ya hace décadas.
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
            url: "https://www.patagonia3mil.com.ar/wp-content/uploads/2016/12/Por-que-el-pueblo-de-Jachal-protesta-contra-la-mina-de-la-multinacional-Barrick-Gold.pdf",
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
            title:
              "Los Oasis del Atuel y Valles Australes de Mendoza (San Rafael)",
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
                url: "https://www.sitioandino.com.ar/n/169540-como-afecta-el-viento-zonda-nuestro-humor-y-salud/",
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
                url: "http://contenidosdigitales.ulp.edu.ar/exe/geografia_de_san_luis/la_provincia_de_san_luis.html",
              },
            ],
          },
        ],
      },
    },

    {
      name: "pampeana",
      docs: {
        title: "Pampeana",
        info: `El espacio pampeano constituye una región definida por el desarrollo agropecuario gestado en la segunda mitad del siglo XIX, tras la apropiación del mal llamado “Desierto” (Oeste del río Salado). Incluía la actual Región Metropolitana y no alcanzaba las actuales fronteras extra-pampeanas. Hoy incluye gran parte de las provincias más pobladas y con mayor Producto Bruto Interno, tales como Buenos Aires, Santa Fe y Córdoba, aunque también áreas contiguas de Entre Ríos (salvo los deltas), el Noreste de La Pampa y el borde oriental de San Luis. Ha influido en la deforestación de los bosques nativos del Espinal, principalmente por un modelo agrícola intensivo asociado al agronegocio, en detrimento de la diversidad agropecuaria, la agroindustria y el arraigo rural. A este despoblamiento interior se suma la casi extinción del ferrocarril y otros servicios que podrían revitalizar a cientos de pueblos rurales. Sí por ejemplo ha repuntado el turismo serrano y de los balnearios atlánticos.
             `,
        imgs: [
          {
            src: "./Pampeana/banner_pampeana.png",
            alt: "pampeana-banner",
            class: "pampeana-banner",
          },
        ],
        links: [
          {
            name: "La importancia del puerto local",
            url: "https://www.creebba.org.ar/iae/iae136/La_importancia_del_puerto_local_IAE_136.pdf",
          },
          {
            name: "La	Ria	de	Bahía	Blanca:	impacto ambiental	y	contaminación",
            url: "https://www.memoria.fahce.unlp.edu.ar/trab_eventos/ev.13413/ev.13413.pdf",
          },
          {
            name: "Bahia blanca la nueva capital",
            url: "https://www.memoria.fahce.unlp.edu.ar/trab_eventos/ev.13413/ev.13413.pdf",
          },
        ],
        sections: [
          {
            title: "La Pampa Interserrana",
            info: `Se distingue por la mixtura de usos de suelo asociados a las sierras y las llanuras peri-serranas. Además de las actividades agropecuarias, el turismo serrano, que ha crecido en el presente siglo -especialmente en Tandil, también sede de flamantes polos tecnológicos y biotecnológicos-, la minería (de base sedimentaria en cementeras y caleras de Olavarría y en el último caso, en Villa Cacique; y canteras de granito en Tandil) y la producción  sientas las aristas económicas más salientes, con algunas industrias asociadas que sobresalen en Olavarría, por muchos años considera la “capital del trabajo”, además del cemento. Asimismo, según el criterio, esta subregión incluye la cuenca sedimentaria de Claromecó, que es seducida por la exploración del carbón. Y más al Sudeste, las comarcas turísticas de Ventania, que para una parcialidad de los especialistas constituyen parte de la subregión Surera ante su fuerte vínculo con Bahía Blanca. 
                  `,
            imgs: [
              {
                src: "./Pampeana/pampeana_2.png",
                alt: "pampeana",
                class: "pampa-serrana1",
              },
              {
                src: "./Pampeana/pampeana_3.png",
                alt: "pampeana",
                class: "pampa-serrana2",
              },
              {
                src: "./Pampeana/pampeana-mapa.png",
                alt: "pampeana",
                class: "pampa-map",
              },
            ],
            links: [
              {
                name: "Producción de la vivienda y mercado inmobiliario en la ciudad intermedia de Tandil",
                url: "https://ri.conicet.gov.ar/bitstream/handle/11336/108306/CONICET_Digital_Nro.70de4be8-ff71-48e8-af8c-3bdfc55232c0_A.pdf?sequence=2&isAllowed=y",
              },
              {
                name: "Conflicto Ambiental minero en Sierras Bayas",
                url: "https://ridaa.unicen.edu.ar:8443/server/api/core/bitstreams/98ff2268-ecba-44a8-be1d-8e74d89c7791/content",
              },
              {
                name: "Tandil turismo",
                url: "https://www.ridaa.unicen.edu.ar/items/d081bf1a-712c-4783-8ef5-8804ef71ee23",
              },
            ],
          },
          {
            title: "La Pampa Arreica-Medanosa",
            info: `Esta subregión comprende el área meridional de la Pampa Arenosa, donde la monotonía de la Llanura Pampeana se interrumpe por médanos y lagunas, fieles testigos de la sedimentación eólica de los vientos provenientes el sector Sudoeste. La condición arreica se exhibe tras el anárquico desenlace del río Quinto, que hasta 1985 tenía un desagüe endorreico, pero luego debió encausarse hacia lagunas ubicadas en Trenque Lauquen para evitar inundaciones y anegamientos en extremo. Algunos canales han descomprimido estos cuerpos lacustres y han liberado superficie para ser destinada a los usos agropecuarios, que hoy son más adeptos al cultivo de soja y el desarrollo forrajero-ganadero con modalidades semi-intensivas, con saldos que se traducen en una concentración de la renta agraria (incluido los pooles de siembra como nuevos actores de poder) y mayor contaminación en los agroecosistemas (principalmente por las fumigaciones). Fuera de este contexto económico-ambiental, existen diversas postergaciones en cuanto a infraestructura y servicios, a pesar del flagelo hídrico iniciado en 1985, apenas superado en el año 2002, pero con un saldo de decenas de pueblos fantasmas. Puede decirse que esta realidad es dispar entre áreas contiguas que comparten esta subregión, siendo La Pampa la más favorecida por gozar de algunos beneficios de provincia patagónica. Hay otras particularidades necesarias de establecer en las áreas más medanosas y no expuestas a los sistemas lacustres salinos y perennes, como por ejemplo Henderson, donde se encuentra grandes reservas acuíferas de agua dulce, al igual que en Macahín y General Acha (La Pampa).`,
            imgs: [
              {
                src: "./Pampeana/pampeana_4.png",
                alt: "pampeana4",
                class: "pampeana4",
              },
            ],
            links: [
              {
                name: "General Villegas",
                url: "https://www.lanacion.com.ar/economia/veinte-anos-esperando-soluciones-nid23847/",
              },
            ],
          },
          {
            title: "La Pampa Arenosa y de las Barrancas Cordobesas",
            info: `En el área núcleo Río Cuarto, inclusive en el borde oriental de San Luis se inscribe esta subregión, es decir,  al norte de la Pampa arreica-medanosa. Si bien los suelos son franco-arenosos, los cursos de agua desaguan fuera de la subregión, sea de modo endorreico o exorreico. No obstante, por razones de pendiente y crecidas repentinas, se registran procesos de remoción en barrancas de arroyos o ríos del lado oriental de las Sierras Pampeanas Orientales. Esto se agrava por el retroceso del bosque nativo que forma parte de la eco-región del Espinal. Además de la soja y el maíz, el maní se ha constituido en el cultivo más transgresor, y a la vez, en esta geografía austral de Córdoba se ha definido como la producción de referencia. En la faz socioterritorial, Río Cuarto es la capital alterna del territorio cordobés y próxima a ésta también se localizan varias localidades con perfil agroindustrial. 
                  `,
            imgs: [
              {
                src: "./Pampeana/pampeana_5.png",
                alt: "pampeana5",
                class: "pampeana-arenosa",
              },
            ],
          },

          {
            title: "La Pampa Deprimida",
            info: `Es la subregión más despoblada de la Región Pampeana, signada por su condición franco-arcillosa, casi siempre expuesta a inundaciones y anegamientos, propia de sus depresiones relativas y la contigüidad con el curso inferior del río Salado Bonaerense (con desbordes frecuentes ante la recepción de aportes de canalizaciones provenientes de casi toda la provincia). Se trata así de un área predilecta para la ganadería bovina con modalidades extensivas. Por ello, existen cabeceras de partido con muy poca población, como por ejemplo Tordillo con unos 2.000 habitantes. Las únicas ciudades con mayores rasgos de diversificación y dinamismo son Dolores, Chascomús y Las Flores, aunque en parte por el paso de importantes rutas como la 2 y la 3, y la sede de Tribunales Federales en el primer caso.`,
            imgs: [
              {
                src: "./Patagonia/Patagonia_5.png",
                alt: "patagonia-ushuaia",
                class: "patagonia-ushuaia",
              },
            ],
            links: [
              {
                name: "Agriculturizacion del humedal pampeano",
                url: "https://www.produccion-animal.com.ar/produccion_peces/piscicultura/12-humedal_pampeano.pdf",
              },
              {
                name: "Cuenca del Río Salado",
                url: "http://sedici.unlp.edu.ar/handle/10915/110129",
              },
            ],
          },

          {
            title: "La Pampa Deprimida",
            info: `Es la subregión más despoblada de la Región Pampeana, signada por su condición franco-arcillosa, casi siempre expuesta a inundaciones y anegamientos, propia de sus depresiones relativas y la contigüidad con el curso inferior del río Salado Bonaerense (con desbordes frecuentes ante la recepción de aportes de canalizaciones provenientes de casi toda la provincia). Se trata así de un área predilecta para la ganadería bovina con modalidades extensivas. Por ello, existen cabeceras de partido con muy poca población, como por ejemplo Tordillo con unos 2.000 habitantes. Las únicas ciudades con mayores rasgos de diversificación y dinamismo son Dolores, Chascomús y Las Flores, aunque en parte por el paso de importantes rutas como la 2 y la 3, y la sede de Tribunales Federales en el primer caso.`,
            imgs: [
              {
                src: "./Patagonia/Patagonia_5.png",
                alt: "patagonia-ushuaia",
                class: "patagonia-ushuaia",
              },
            ],
            links: [
              {
                name: "Agriculturizacion del humedal pampeano",
                url: "https://www.produccion-animal.com.ar/produccion_peces/piscicultura/12-humedal_pampeano.pdf",
              },
              {
                name: "Cuenca del Río Salado",
                url: "http://sedici.unlp.edu.ar/handle/10915/110129",
              },
            ],
          },

          {
            title: "La Pampa Ondulada o Nucleo Agricola",
            info: `El triángulo Pergamino-Venado Tuerto-Marcos Juárez constituye el área núcleo de mayor rendimiento agrícola del país, no solo por el cultivo de la soja, que hoy lidera en número de hectáreas. Esta subregión converge en el complejo industrial y portuario de Rosario. En función de este desarrollo primario se asociaron decenas de agroindustrias que en las provincias como Santa Fe y Córdoba configuraron la fama de localidades de pleno empleo, principalmente por las semilleras, los centros de procesamiento de alimentos y fábricas de implementos agrícolas. No así, el rápido crecimiento de Pergamino determinó una polarización o dualización socioeconómica, al extremo de relevarse cerca de una decena de asentamientos informales y terrenos tomados. Otras cuidades menores no tuvieron igual impacto, aunque de la mano de una diversificación más signada por el empleo público, como por ejemplo Junín, sede de Tribunales Federales y de una universidad nacional, sumado a varios centros de salud de alta complejidad. Más al Norte, esta región ha ampliado su frontera e incluye ciudades agroindustriales y agrocomerciales, de gran peso económico, como Rafaela y San Francisco (sedes de cuencas lecheras de alcance nacional).`,
            imgs: [
              {
                src: "./Pampeana/pampeana_banner.png",
                alt: "pampeana-ondulada",
                class: "pampeana-ondulada",
              },
            ],
            links: [
              {
                name: "Agriculturizacion del humedal pampeano",
                url: "https://www.produccion-animal.com.ar/produccion_peces/piscicultura/12-humedal_pampeano.pdf",
              },
              {
                name: "Cuenca del Río Salado",
                url: "http://sedici.unlp.edu.ar/handle/10915/110129",
              },
            ],
          },

          {
            title: "La Pampa Mesopotamica ",
            info: `Esta subregión se distingue por la provincia de Entre Ríos, aunque debiera excluirse el área de deltas hacia el Sur y el bosque de Ñandubay en el borde septentrional.  Hasta hace un cuarto de siglo, la mayoría de la literatura geográfica la ubicaba como parte constitutiva de Mesopotamia, junto con las provincias de Corrientes y Misiones. Sin embargo, se trata de la cuna de la agricultura argentina junto con Santa Fe, y es a la vez, un espacio muy diversificado: citricultura, avicultura, silvicultura, acuicultura, ganadería, entre otras actividades. El turismo imprime un sello propio, pero también en la lógica transfronteriza hacia Uruguay y Brasil, así como camino a las provincias del NEA y, en menor medida, hacia Paraguay. El palacio San José en Concepción del Uruguay, los carnavales de Gualeguaychú -que se extienden a otras ciudades-, el Parque Nacional El Palmar y las termas de Federación constituyen un gran atractivo, con más visitadas a partir de la construcción de la Autovía Mesopotámica de Ruta nacional 14. Por otra parte, en la faz cultural este territorio provincial comparte lazos históricos con la Banda Oriental del Uruguay, como por ejemplo la Chamarrita y el ideal Federal que cultivó una cierta identidad a mediados del siglo XIX.`,
            imgs: [
              {
                src: "./Pampeana/peampeana_7.png",
                alt: "pampeana-mesopotamica",
                class: "pampeana-mesopotamica",
              },
            ],
            links: [
              {
                name: "El complejo avicola entrerriano y las relaciones en su interior",
                url: "https://www.redalyc.org/pdf/947/94792503.pdf",
              },
              {
                name: "Delta del Parana",
                url: "https://www.entrerios.gov.ar/deltasustentable/userfiles/files/1-Documento%20PIECAS%20DP.pdf",
              },
            ],
          },

          {
            title: "Los Ecotonos Litorales o Ambientes de los Deltas",
            info: `Esta eco-región de transición o ecotono interrumpe la geografía agropecuaria que se mantiene de los dos lados del río Paraná, a no mas de una o dos leguas de distancia en algunos casos, compartiendo las provincias de Buenos Aires y Entre Ríos. No obstante, curso abajo el área aumenta su superficie con grandes brazos e islas, en su mayoría deshabitadas, a excepción de las contiguas a la Zona Norte del Gran Buenos Aires. En esta geografía de islas dominan pequeños bosques con vegetación hidrófila que es cada vez más aprovechada por la ganadería vacuna. También en estos lugares se han extendido diversas especies más típicas de ambientes subtropicales. 
          `,
            imgs: [
              {
                src: "./Pampeana/Pampeana_8.png",
                alt: "pampeana-delta",
                class: "pampeana-delta",
              },
            ],
            links: [
              {
                name: "Delta incendio",
                url: "https://www.unoentrerios.com.ar/delta-fuego-se-registran-incendios-las-islas-n2682780.html",
              },
            ],
          },

          {
            title: "Los Ecotonos Maritimos o Ambientes Costeros Bonaerenses",
            info: `Esta franja costera bonaerense se configura como una región turística. Salvo Mar del Plata y el aglomerado Quequén-Necochea (pesqueros, industriales, hortícolas y con más influencia agrícola-ganadera) las demás ciudades se definen por el auge de su sector comercial, principalmente ligado a la temporada veraniega. Por ello, éstas multiplican varias veces su población y mayormente reciben turistas de la Región Metropolitana, a excepción de los balnearios ubicados al Sur de Miramar y hasta Pehuén Co (localidad sin pavimento que trata de mantener el estado originario del ambiente litoral, también vincula a la subregión Surera con epicentro en B. Blanca), que tienen un público más diverso. Puede decirse que en la mayoría de los casos representa el destino del turismo de las masas, donde también se adicionan espectáculos teatrales a la altura de la actividad desarrollada en la CABA y Villa Carlos Paz, en alguna medida. 
        `,
            imgs: [
              {
                src: "./Pampeana/pampeana_9.png",
                alt: "pampeana-costa",
                class: "pampeana-costa",
              },
            ],
            links: [
              {
                name: "Litoral en Mar del Plata",
                url: "http://nulan.mdp.edu.ar/id/eprint/3321/1/benseny-2020.pdf",
              },
              {
                name: "Villa Gesel",
                url: "http://www.scielo.org.ar/scielo.php?script=sci_arttext&pid=S1853-63601998000100004",
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
        info: `Es la región de mayor superficie, generalizada como un espacio de clima frío, de grandes distancias, extensos parques nacionales, altos costos de vida y vacíos demográficas, donde no siempre el transporte terrestre es la mejor opción. En el siglo pasado fue un área receptora de las “grandes oportunidades”, en cuanto a laboral, de la mano de incentivos estatales (zona franca, apoyo a industrias, mejores sueldos y reconocimientos jubilatorios ventajosos), tanto como del sector privado (principalmente por la fruticultura, el turismo y el petróleo). Hoy esta realidad es relativa. A su vez, en la práctica la Patagonia no es tan homogénea (desde el Valle de Río Negro a Patagonia Austral; o desde la Patagonia Andina al paisaje de mesetas y de la costa Atlántica), está signada por su vínculo binacional con Chile, ya sea por la contigüidad o por compartir ambientes, culturas y vías de comunicación dependiendo los destinos de un lado y otro, al sortear los archipiélagos del Pacífico en el caso trasandino o tener que arribar a la Isla Grande de Tierra del Fuego por barcaza chilena. `,
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
            url: "https://racimo.usal.edu.ar/4191/1/P%C3%A1ginas%20desdeTesis.UNI%270062784.La%20crisis%20del%20sector%20frut%C3%ADcola%20en%20el%20Alto%20Valle%20de%20R%C3%ADo%20Negro.pdf",
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
                url: "http://www.unla.edu.ar/images/galerias/semana-humanidades-2021/dycv/taller-diseno-iv/original/carraro.pdf",
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
                url: "https://www.ushuaia.gob.ar/noticias/ushuaia-la-tercera-ciudad-del-pais-con-mejor-calidad-de-vida",
              },
              {
                name: "El chalten",
                url: "https://www.youtube.com/watch?v=ep6y0WcHov4&ab_channel=UnMundoInmenso",
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
          },
        ],
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

    {
      name: "Noreste",
      docs: {
        title: "Noreste",
        info: `Conforma una región signada por el clima cálido subtropicial, cuyos ambientes originarios tienen raíz en bosques nativos, incluida la selva Misionera, el parque Chaqueño y el bosque del Ñandubay. Sin embargo, año a año estas superficies están sometidas a la deforestación, los incendios forestales, el avance de los agroecosistemas y la forestación de especies exóticas como los pinos y eucaliptos. Estos últimos han llegado al extremo de afectar la eco-región de los Esteros del Iberá, mientras que los ambientes más arbóreos han cedido lugar a cultivos como la soja, cuyas consecuencias también tienen derivaciones en el éxodo rural y el empobrecimiento. Congruente con esta realidad, encontramos las dos provincias con mayor pobreza del país y flujos de emigrantes con destino la Región Pampeana o el Gran Buenos Aires. Sin embargo, en las también definidas provincias orientales o mesopotámicas, el turismo se ha expandido más allá de las cataratas. En cambio, en el área Chaqueña se intenta revertir la lógica turística comercial (ligada a Paraguay) con nuevos atractivos, entre ellos el Parque Nacional El Impenetrable (área que intenta revertir el avance agroforestal). 
        `,
        imgs: [
          {
            src: "./Noreste/banner_noreste.png",
            alt: "Noreste",
            class: "Noreste",
          },
        ],
        sections: [
          {
            title: "Chaco Occidental",
            info: `En la tierra del quebracho colorado y una fauna mayor casi extinta, como el yaguareté, el tatú carreta y el chancho quimilero, se ubica la subregión más cálida del país, pero también una de las mayores amplitudes térmicas en planicie. También se trata de un área carente de agua potable, con poblaciones originarias que subsisten, como el caso de los Wichis. Apenas con el agua en las rodillas, el río Pilcomayo se puede cruzar, sin casi verificarse contigüidad con el Chaco Boreal (Paraguay). En lo histórico, fue la última frontera de confrontación militar con los pueblos nativos (“Desierto verde”) y donde hoy intenta avanzar la actividad agropecuaria. Por ello, hace menos de una década se creó el Parque Nacional El Impenetrable. No así, en el Norte Santiagueños y parte de Chaco y Formosa son frecuentes los incendios forestales, en ocasiones asociados a tormentas eléctricas y en otros casos, a cusas inciertas. 
            `,
            imgs: [
              {
                src: "./Noreste/noreste_1.png",
                alt: "noreste",
                class: "noreste1",
              },
              {
                src: "./Noreste/noreste_2.png",
                alt: "noreste2",
                class: "noreste2",
              },
              {
                src: "./Noreste/mapa_nea.png",
                alt: "mapa_nea",
                class: "map_nea",
              },
            ],
          },
          {
            title: "Chaco Oriental",
            info: `Es el área chaqueña de clima subtropical con influencia húmeda, más propicia para el desarrollo agropecuario, aunque éste ha repuntado en el último siglo a merced de la deforestación del bosque nativo. Por este último motivo, aglomerados como el Gran Resistencia han crecido exponencialmente, mientras que otra parcialidad de la población excluida o expulsada ha emigrado hacia el Gran Rosario e incluso la Región Metropolitana. A su vez, esta subregión que fue testigo del auge algodonero, hoy se distingue como sojera, tanto en el oriente de la provincia de Chaco como en Formosa.
            `,
            imgs: [
              {
                src: "./Noreste/noreste_3.png",
                alt: "noreste3",
                class: "noreste3",
              },
            ],
          },
          {
            title: "Ambiente  de Esteros",
            info: `Los Esteros del Iberá o Correntinos exhiben los espejos de agua dulce superficiales, como reflejo del gran acuífero Guaraní. Estos ambientes están acechados por el avance de la silvicultura y actividades agrícolas, como el cultivo del arroz. Además de un parque nacional se desarrolló el proyecto Iberá, que intenta frenar este tipo de producciones. A su vez, junto con Paraguay es la tierra del Chamamé y la lengua Guaraní. Por ello, podemos decir que la población es bilingüe.`,
            imgs: [
              {
                src: "./Noreste/noreste_4.png",
                alt: "noreste4",
                class: "noreste4",
              },
            ],
            links: [
              {
                name: "Lomadas Arenosas",
                url: "https://www.researchgate.net/publication/301779941_El_paisaje_de_lomadas_arenosas_de_la_reserva_de_los_esteros_del_Ibera",
              },
            ],
          },
          {
            title: "Corrientes Austral",
            info: `Con epicentro en localidades como Mercedes, Curuzú Cuatia, Monte Caseros y Paso de Los Libres (también ciudad transfronteriza esta última), la subregión se destaca por el desarrollo ganadero y de transición arrocero y de producción cítrica. También sobresale la minería en afloramientos de areniscas en la meseta de Mercedes. El santuario del Gauchito Gil es por lejos el lugar con mayor afluencia de visitantes en enero, aunque también se reza a San La Muerte, entre otras festividades paganas. Además, en estas ciudades se distingue el afán carnavalero, casi en la misma línea que en Entre Ríos. 
            `,
            imgs: [
              {
                src: "./Noreste/noreste_5.png",
                alt: "noreste5",
                class: "noreste5",
              },
            ],
          },
          {
            title: "Selva Misionera y Ambientes Asociados",
            info: `El turismo, la explotación forestal, la yerba mate, el tabaco e incluso la soja han apropiado el espacio de la Selva Misionera o Paranaense, dando la oportunidad de distribuir la población en el interior, aunque con un costado ambiental sujeto al debate (gran erosión pluvial y fluvial en las mesetas, sumados a la incidencia de los agroquímicos). Misiones junto con el extremo Noreste de Corrientes ocupan este ambiente, signado por la "tierra colorada" (alta presencia de hierro y aluminio expuestos a la oxidación) y la frondosidad selvática. Si bien las cataratas del Iguazú figuran entre los principales atractivos (una de las 10 maravillas naturales del mundo) junto con el paso de la Triple Frontera (a Foz de Iguazú y Ciudad del Este, que es Zona Franca), se adicionan las Ruinas Jesuíticas de San Ignacio, las Geodas de Wanda y el tren turístico que comunica Posadas con Encarnación (Paraguay). `,
            imgs: [
              {
                src: "./Noreste/noreste_5.png",
                alt: "noreste5",
                class: "noreste5",
              },
            ],
            links: [
              {
                name: "Selva Misionera",
                url: "https://www.bosques.org.ar/selva-misionera/?gclid=CjwKCAjwyqWkBhBMEiwAp2yUFrH9hsiD2SdIZZUi6Z9-Xw1_Lii_u0CHn-uD-1V15Z7GpqSy83awchoC1hIQAvD_BwE",
              },
            ],
          },
        ],
      },
    },

    {
      name: "Noroeste",
      docs: {
        title: "Noroeste",
        info: `Es una región de contrastes paisajísticos, ambientales y demográficos, y a la vez, cuna de las ciudades más antiguas del país, de gran importancia en el auge minero-colonial y aquella ruta afín, trazada entre el Alto Perú y el puerto de Buenos Aires. Entre los edificios coloniales también se desarrolló gran parte de la historia de la Independencia Nacional. Al oriente se distingue la Yunga o Selva Tucumano-Oranense, cuya disposición y extensión Norte-Sur alberga un sinfín de potencialidades productivas. En el pasado fue la actividad azucarera, la cual atrajo una mano de obra interprovincial y estacional, aunque hoy han surgido otras actividades primarias más mecanizadas y con una renta más concentrada, reportando adversidades que se materializan en ciudades como San Miguel del Tucumán, Salta y otras. También en el occidente, donde rige la aridez de la Puna, la Prepuna y los Valles Secos, actividades tradicionales como la extracción de sal, la industria textil artesanal y la cerámica ancestral tratan de combinarse con el turismo, aunque no siempre son congruentes con la minería metalífera y el litio, de alto perfil extractivista. `,
        imgs: [
          {
            src: "./Noroeste/noroeste_banner.png",
            alt: "Noroeste",
            class: "Noroeste-banner",
          },
        ],
        sections: [
          {
            title: "La Yunga y sus Relieves contiguos",
            info: `Esta subregión es también conocida como el ambiente de la selva Tucumano Oranense, porque se desarrolla tal formación vegetal en altura a partir de la humedad y temperatura retenida por la disposición del relieve y la dirección de vientos provenientes de la región Amazónica y del océano Atlántico contiguo. Se trata de una franja extendida desde el Norte de Salta y que abarca el extremo Oriental de Jujuy, casi todo Tucumán y el borde oriental de Catamarca. Esta condición bioclimática ha favorecido el desarrollo de múltiples actividades agrícolas, frutícolas y apícolas, como por ejemplo el azúcar que históricamente atraía trabajadores de todo el NOA, además de influir en el crecimiento demográfico de esta área (Tucumán es así la provincia más densamente poblada del país), cuya historia ubica a las primeras ciudades coloniales del otrora virreinato. Sin embargo, la mecanización del agro y la introducción de nuevos ciclos productivos como el limón no aportan tantos beneficios en distribución de ingresos, aunque se exalte su alto umbral de exportación a EE.UU. Entre las alternativas han surgido ferias y otras actividades de la economía social que multiplican el espíritu de Simoca (gran feria del sur tucumano). `,
            imgs: [
              {
                src: "./Noroeste/noroeste_2.png",
                alt: "noroeste",
                class: "noroeste2",
              },
              {
                src: "./Noroeste/noreste_3.png",
                alt: "nooreste3",
                class: "noroeste3",
              },
              {
                src: "./Noroeste/mapa_noa.png",
                alt: "mapa_noa",
                class: "mapa_noa",
              },
            ],
            links: [
              {
                name: "La feria de Simoca",
                url: "https://bdigital.uncu.edu.ar/objetos_digitales/10846/01e2cusumano.pdf",
              },
            ],
          },
          {
            title:
              "Puna, Pre-Puna, Valles Secos y Ambientes de Transicion Arida.",
            info: `Es una subregión árida de altura, la cual comprende el altiplano ubicado en el extremo Noroeste del país, en continuidad con ambientes similares en Bolivia y Chile. A esa área con más de 3.000 metros, definida por un zócalo precámbrico elevado en el Terciario tras la orogenia andina, se adiciona un ambiente casi semejante,  llamado pre puna donde hay más poblaciones que se vinculan con el occidente seco y el oriente húmedo, ya en la yunta Tucumano Oranense, como viene ocurriendo con Iruya (al Norte de Salta), desde hace cientos de años. No obstante,  en los valles profundos se desarrollan áreas cultivables que aportan alimentos vitales para la subsistencia, a la que se añade la sal para el trueque, la economía textil a partir de los camélidos sudamericanos y la cerámica sobre la base de arcillas, también extendida al turismo como alternativa. Como contraparte, la extracción del litio está provocando controversias por razones ambientales,  culturales y económicas-sociales.`,
            imgs: [
              {
                src: "./Noroeste/noroeste_4.png",
                alt: "noreste4",
                class: "noreste4",
              },
            ],
            links: [
              {
                name: "Litio, llamas y sal en la Puna",
                url: "https://core.ac.uk/download/pdf/159292422.pdf",
              },
            ],
          },
          {
            title: "La cordillera minera",
            info: `La cordillera minera involucra los altos andes, desde el cerro Zapaleri (punto tripartito entre Chile, Argentina y Bolivia) hasta el norte de Cuyo, donde se desarrolló la minería tradicional y hoy se complementa una megaminería más metalífera o perfilada al oro, el cobre y la plata. Entre los centros mineros más salientes se destaca Famatina, cuya puesta en funcionamiento por parte de empresas trasnacionales ha convocado sendas movilizaciones y protestas socioambientales. Se trata de un área bastante despoblado, que es contigua en parte a la Puna, que posee otras características. Por esta subregión también hay destinos turísticos, pero de difícil acceso, signados por el apunamiento, las distancias y la peligrosidad de los caminos de cornisa, incluida la Ruta Nacional 40. Entre los lugares más visitados se destacan las Termas de Fiambalá y el complejo de volcanes que sobrepasan los 6.000 metros. Uno de ellos es el estratovolcán Pissis (ubicado en el límite entre las provincias de La Rioja y Catamarca), que es el segundo más alto del mundo. 
            `,
            imgs: [
              {
                src: "./Noroeste/noroeste_5.png",
                alt: "noroeste5",
                class: "noroeste5",
              },
            ],
          },
        ],
      },
    },

    {
      name: "Transfronteriza con Países Limitrofes",
      docs: {
        title: "Transfronteriza con países limitrofes",
        info: `También llamadas regiones de transición o de frontera interregional, estas áreas representan lugares sujetos a doble vínculo regional o a casos más complejos que incentivan discusiones sobre su regionalización. Estos espacios fronterizos han están expuestos o son consecuencia de los cambios de los espacios regionales tradicionales. La pampeanización es uno de estos procesos de cambio, a partir de la deforestación del bosque nativo para dar lugar a la expansión del modelo agropecuario intensivo. Otros ejemplos están asociados a la atracción ejercidas por grandes metrópolis o ciudades, tales como Córdoba que vincula áreas contiguas de San Luis, La Rioja y Santiago del Estero, que en teoría forman parte de otras regiones.`,
        imgs: [
          {
            src: "./Fronterizas_Paises/banner-fronteriza.png",
            alt: "fronterizas1",
            class: "fronterizas1",
          },
        ],
        sections: [
          {
            title: "Isla Martin Garcia ",
            info: `Administrativa o jurisdiccionalmente la Isla Martin García pertenece al Partido de La Plata, provincia de Buenos Aires, aunque geográficamente se localiza en aguas uruguayas. Esto sucede porque el límite medio del río de La Plata fue corrido hacia el oriente en esta parte ante la necesidad de establecer un nuevo criterio: el lecho de mayor profundidad. Así esta geografía insular hoy no puede convertirse más que en una reserva natural y un lugar de visita, sin posibilidad de ser un enclave comercial (puerto) y mucho menos militar. Sin embargo,  este afloramiento rocoso precámbrico (constitutivo del Cratón del río de La Plata)  se complementa de un área sedimentaria que cada vez crece más en superficie,  dada la cercanía al delta del Paraná. Por otro lado, en el lugar subyace una historia muy peculiar, ya que por muchos años fue un centro de retiro de enfermos por fiebre amarilla y otras pestes que adoraban el siglo XIX,  y más tarde, se convirtió en una cárcel, con algunas tareas que tuvieron epicentro en la base granítica de sus rocas. En la actividad,  esta isla junto con Apipe que está en aguas paraguayas,  pero también es Argentina,  se designan como "(Arg.) en la Cartografía oficial para resaltar la soberanía por más que se localice más allá de los límites nacionales.`,
            imgs: [
              {
                src: "./Fronterizas_Paises/fronteraRegional_1.png",
                alt: "front_regional1",
                class: "front_regional1",
              },
              {
                src: "./Fronterizas_Paises/fronteraRegional_2.png",
                alt: "front_regional2",
                class: "front_regional2",
              },
              {
                src: "./Fronterizas_Paises/mapa-Regional.png",
                alt: "mapa_front_regional",
                class: "mapa_front_regional",
              },
            ],
            links: [
              {
                name: "Isla Martin Garcia",
                url: "https://www.researchgate.net/publication/333582169_MARTIN_GARCIA_UN_LUGAR_EXCEPCIONAL",
              },
            ],
          },
          {
            title: "Litoral del Rio Uruguay.",
            info: `Varias ciudades costeras del río Uruguay, tanto del lado argentino como uruguayo y brasileño guardan un sinfín de vínculos y una historia que los hermana. Desde el paso de Gualeguaychu hasta Paso de los Libres existen puentes que forman parte de la puerta de entrada o salida de la Argentina. Por ello ingresa el mayor flujo del transporte desde el Tratado de Asunción, que en 1991 dio por iniciado el Mercado Común del Sur. Sin embargo, a diferencia del siglo XIX, el transporte fluvial ha perdido el peso que supo tener, como por ejemplo el caso de Concordia, que llego a ser el tercer puerto más importante del interior, luego de Rosario y Bahía Blanca. Y si bien los cítricos, la ganadería y pesca fueron cruciales para el desarrollo primario en la era agroexportadora, hoy la agricultura, la silvicultura y el turismo (en parte asociado con las termas y en alguna medida con los carnavales y el paso a los países fronterizos) rigen el perfil de estas localidades ribereñas. Del otro lado, la disparidad monetaria siempre atrajo el intercambio, así como las festividades tradicionales que convocan de ambos lados. Solo el incidente de las pasteras Botnia y Ence a principio del siglo han puesto en jaque esas relaciones con territorios antes integrados bajo una misma bandera, ya hace unos 200 años. 
            `,
            imgs: [
              {
                src: "./Fronterizas_Paises/fronteraRegional_4.png",
                alt: "frontera4",
                class: "frontera4",
              },
            ],
          },
          {
            title: "Triple Frontera",
            info: `Cada vez que se visita Puerto Iguazú para conocer las cataratas,  también suele cruzarse a Brasil y Paraguay, es decir, a Foz de Iguazú y Ciudad del Este. En esta última ciudad rigen beneficios de zona libre de aranceles, por lo que se venden electrodomésticos, cubiertas de automóviles  ropa y otros productos a bajo costo,  aunque no siempre de calidad ni de fácil acceso a los efectos impositivos fijados por la AFIP. Asimismo,  respecto al lado argentino, en los países limítrofes se está deforestando cada vez más y ello ha mantenido el centro de las preocupaciones a las comunidades ambientalistas de gran parte de Sudamérica. No obstante ello, el turismo sigue sobresaliente, a pesar de los distintos matices conservacionistas, comerciales y otros, que atraen incluso en aeropuertos  hoteles muy bien preparados para recibimiento de miles de visitantes a diario.`,
            imgs: [
              {
                src: "./Fronterizas_Paises/fronteraRegional_5.png",
                alt: "frontera5",
                class: "frontera5",
              },
            ],
          },

          {
            title: "Frontera Verde",
            info: `Cada vez que se visita Puerto Iguazú para conocer las cataratas,  también suele cruzarse a Brasil y Paraguay, es decir, a Foz de Iguazú y Ciudad del Este. En esta última ciudad rigen beneficios de zona libre de aranceles, por lo que se venden electrodomésticos, cubiertas de automóviles  ropa y otros productos a bajo costo,  aunque no siempre de calidad ni de fácil acceso a los efectos impositivos fijados por la AFIP. Asimismo,  respecto al lado argentino, en los países limítrofes se está deforestando cada vez más y ello ha mantenido el centro de las preocupaciones a las comunidades ambientalistas de gran parte de Sudamérica. No obstante ello, el turismo sigue sobresaliente, a pesar de los distintos matices conservacionistas, comerciales y otros, que atraen incluso en aeropuertos  hoteles muy bien preparados para recibimiento de miles de visitantes a diario.`,
            imgs: [
              {
                src: "./Fronterizas_Paises/fronteraRegional_6.png",
                alt: "frontera6",
                class: "frontera6",
              },
            ],
          },

          {
            title: "Paso Vial y Ferroviario con Encarnacion",
            info: ` Mediante el puente y el tendido ferroviario, las ciudades de Posadas (capital de Misiones) y Encarnación (Paraguay) se ha desarrollado un fuerte vínculo argentino-paraguayo. De la misma manera que se cruza en Clorinda, los vínculos son parecidos, aunque sobresale el tren que cada vez es más empleado con fines turísticos, no necesariamente comercial. También un sin número de personas viajan de un lado a otro por razones laborales y socio-familiares, situación que ha fortalecido una identidad compartida, ya no solo en relación a la condición bilingüe, el chamamé, el tereré y una variada gastronomía que tiene al dorado como plato predilecto. `,
            imgs: [
              {
                src: "./Fronterizas_Paises/fronteraRegional_7.png",
                alt: "frontera7",
                class: "frontera7",
              },
            ],
          },

          {
            title: "Clorinda y Frontera de Pilcomayo",
            info: `Se trata de un área de constante vínculo con Asunción,  la capital de Paraguay. Entre ambos lados del río existen ventajas como para divisar un tránsito cotidiano. Las compras en el país lindero por una parte y la recurrente asistencia a centros de salud e instituciones educativas en Argentina formalizan esra reciprocidad. Fuera de este nexo, poco más al Noroeste en el limite fijado por el río Pilcomayo se cruza a pie o en ocasiones hasta con vehículos cuando el caudal es bajo, y así se establecen intercambios eludiendo controles y gravámenes fiscales, como por ejemplo,  como ha sucedió con la soja que luego se exportan desde el puerto paraguayo sin retenciones. Asimismo,  existen identidades que engloban el área de los Chaco Central y Boreal como se lo llaman, entre ellos la cultura guaraní con su idioma ancestral y un Chámame que en el lado argentino está más arraigado en el territorio correntino.`,
            imgs: [
              {
                src: "./Fronterizas_Paises/fronteraRegional_8.png",
                alt: "frontera8",
                class: "frontera8",
              },
            ],
          },

          {
            title: "Norte Salteño y Jujeño",
            info: `La Quiaca en Jujuy (la ciudad más septentrional de Argentina) y Salvador Mazza en Salta son dos ciudades norteñas que se vinculan estrechamente con Bolivia (a Villazón y Yacuiba, respectivamente), tanto por el paso fronterizo, como por los costados de éste,  a pie o mediante la tracción animal. La cultura andina precolombina,  como la colla  y otras de linaje aimara arraiga un profundo nexo territorial, verificado por las comidas a base de pimientos y maíz, así como la cerámica y las prendas de landa de vicuña y otros camélidos sudamericanos. No obstante,  como en la mayoría de las regiones transfronterizas rigen infinidad de intercambios no siempre legales, entre ellos harina y aceite que cruza a Bolivia,  mientras que ropa y artesanías en general se reciben en Argentina,  inclusive con tours que se vinculan con las grandes cadenas de ferias en el Gran Buenos Aires. De allí es que se enrola a miles de familias bolivianas para el trabajo en talleres textiles en la Región Metropolitana. Otra cuestión que se ha sometido al debate es el cruce a hospitales públicos de Jujuy para la atención gratuita,  en contraposición con el tipo de servicio ofrecido del otro lado, con un cobro elevado a turistas argentinos.`,
            imgs: [
              {
                src: "./Fronterizas_Paises/fronteraRegional_9.png",
                alt: "frontera9",
                class: "frontera9",
              },
            ],
          },

          {
            title: "Patagonia de los ríos y valles Argentino-Chilenos",
            info: `Varios son los pasos de Patagonia Andina Norte que vinculan a comunidades nativas, ya sea Puelches o Mapuches, pero también a poblaciones más recientes que se han constituido como ciudades turísticas en su mayoría en el lado argentino,  mientras que en el caso chileno se  asocian con la industria forestal y explotaciones agropecuarias favorecidas estas últimas por la humedad permanente y la alta demanda de las áreas centrales y nórdicas del país trasandino que por aquellas latitudes y suelos no puede producir tan fácilmente. A diferencia de Cuyo y Noroeste,  aquí los valles son transversales y se puede cruzar en bote o por distintos caminos o rutas que bordean las montañas y grandes lagos. Entre ellos, el paso Hua Hum en proximidad a San Martin de Los Andes se caracteriza por recibir el flujo de turistas chilenos y en especial de habitantes de Pirihueico, que están separados de un enorme lago del resto de su país,  dependiendo de una barcaza que tiene entre 2 y 4 recorridos diarios. Aun así, por cercanía esa población se vincula con la ciudad Argentina, en particular por atenciones médicas o para hacer compras imprescindibles, incluida la carga de combustible que históricamente libera las preferencias`,
            imgs: [
              {
                src: "./Fronterizas_Paises/fronteraRegional_10.png",
                alt: "frontera10",
                class: "frontera10",
              },
            ],
          },

          {
            title: "Magallanes",
            info: `Esta área es la que interconecta la Patagonia Austral, y asimismo la que vincula vía terrestre y naval a la provincia de Tierra del Fuego con el sector continental argentino. Salvo que se viaje en avión, el tránsito argentino está obligado a pasar a Chile donde embarca y cruza el estrecho de Magallanes, para luego continuar con la Ruta Nacional 3. Esto implica dos controles fronterizos, el pago de la barcaza y en ocasiones, cambiar moneda extranjera para poder hacerlo. También en esta área contigua a la provincia de Santa Cruz existen recorridos que extienden su destino a Punta Arenas, la ciudad chilena más poblada de estas latitudes.`,
            imgs: [
              {
                src: "./Fronterizas_Paises/fronteraRegional_11.png",
                alt: "frontera11",
                class: "frontera11",
              },
            ],
          },

          {
            title: "Costas e Islas Meridionales de Patagonia Austral",
            info: `Se trata de islas deshabitadas solo recorridas por el turismo nacional e internacional, por las fuerzas armadas, científicos o aventureros. Tal es el caso de la Isla de los Estados, con paradas provisorias, que reportan una gran adversidad ante la influencia de temporales de frío. En el pasado han reportado incidentes diplomáticos con Chile, como sucedió con las islas Nueva, Picón y Lenox (conflicto del Beagle, 1978-1984), así como con el Reino Unido de Gran Bretaña e Irlanda del Norte que continúan usurpando los archipiélagos de Malvinas, Sándwich del Sud y Georgias del Sud. Un caso más reciente lo constituye la instalación de salmoneras, las que se han instalado en el canal de Beagle y generan un foco de contaminación.`,
            imgs: [
              {
                src: "./Fronterizas_Paises/fronteraRegional_12.png",
                alt: "frontera12",
                class: "frontera12",
              },
            ],
          },
        ],
      },
    },

    {
      name: "Transfronterizas inter-regionales",
      docs: {
        title: "Transfronterizas inter-regionales",
        info: `También llamadas regiones de transición o de frontera interregional, estas áreas representan lugares sujetos a doble vínculo regional o a casos más complejos que incentivan discusiones sobre su regionalización. Estos espacios fronterizos han están expuestos o son consecuencia de los cambios de los espacios regionales tradicionales. La pampeanización es uno de estos procesos de cambio, a partir de la deforestación del bosque nativo para dar lugar a la expansión del modelo agropecuario intensivo. Otros ejemplos están asociados a la atracción ejercidas por grandes metrópolis o ciudades, tales como Córdoba que vincula áreas contiguas de San Luis, La Rioja y Santiago del Estero, que en teoría forman parte de otras regiones.`,
        imgs: [
          {
            src: "./Transfronterizas_Regionales/fronterizas-banner.png",
            alt: "fronterizas1",
            class: "fronterizas1",
          },
        ],
        sections: [
          {
            title: "Area Metropolitana de Cordoba",
            info: `En torno a la capital cordobesa se extiende una región  Metropolitana, que a la vez es un aglomerado que suma casi 2.000.000 de habitantes (el segundo más grande del país). La ciudad en sí es la más grande en superficie de todo el territorio argentino,  sede de la primera universidad nacional. Cuenta con aeropuerto internacional,  el centro de la Fuerza Aérea, hospitales de la más alta  complejidad, comercios mayoristas y un cordón industrial distinguido por el rubro automotriz, la metalmecánicas, la agroindustria y las fábricas de implementos agrícolas.. También en sus áreas contiguas, resaltan fábricas de alfajores, chacinados y otros productos. Alta Gracia,  Villa Carlos Paz, Colonia Caroya, entre otras son ciudades que articulan con este gran centro urbano. También tiene algunos récords, como las islas de calor urbano (hasta 6 grados más que en la periferia en verano) y el número de proyectos frustrados en querer implementar nuevos sistemas de transportes, entre ellos el subterráneo. Al margen de lo expuesto,  aquí se inscribe el límite Noroeste de la frontera agropecuaria de perfil pampeano y nace una transición que se orienta a ambientes cuyanos y del Noroeste,  sin pasar por alto su identidad con el cuarteto (lo que para CABA es el tango). No obstante,  la imponencia de las sierras (a veces generalizadas como Sierras de Córdoba) interrumpe continuidades geográficas, ya sea con sus altas cumbres (caminos empinados) o sus valles interiores (valles de Punilla y Traslasierra).`,
            imgs: [
              {
                src: "./Transfronterizas_Regionales/regionales2.png",
                alt: "regionales2",
                class: "regionales2",
              },
              {
                src: "./Transfronterizas_Regionales/regionales3.png",
                alt: "regionales3.png",
                class: "regionales3.png",
              },
              {
                src: "./Transfronterizas_Regionales/regional-maps.png",
                alt: "regional-maps",
                class: "regional-maps",
              },
            ],
            links: [
              {
                name: "Isla de calor en Cordoba",
                url: "http://sedici.unlp.edu.ar/handle/10915/94933",
              },
            ],
          },
          {
            title: " Villa Serrana de Cordoba Central ",
            info: `En el lado oriental de las Sierras Comechingones se distribuyen una veintena de comarcas turísticas, articuladas por los accesos de la autovía de la Ruta Nacional 36 que comunican las ciudades de Córdoba con Río Cuarto. Estas villas turísticas, ubicadas casi en la frontera agropecuaria se distinguen por su trazado irregular conforme a la topografía de la peniplanicie serrana y los arroyos que circundan ambientes signados por bosques nativos, en parte fragmentados por el avance de negocios inmobiliarios y las transgresiones de la actividad rural. Entre los centros con más desarrollo turístico se destacan Santa Rosa de Calamuchita, La Serranita y Villa General Belgrano (capital nacional de la cerveza y sede hereditaria de una colonia suiza). 
            `,
            imgs: [
              {
                src: "/Transfronterizas_Regionales/regionales4.png",
                alt: "regionales4",
                class: "regionales4",
              },
            ],
          },
          {
            title: " Villa Serrana de Cordoba Central ",
            info: `En el lado oriental de las Sierras Comechingones se distribuyen una veintena de comarcas turísticas, articuladas por los accesos de la autovía de la Ruta Nacional 36 que comunican las ciudades de Córdoba con Río Cuarto. Estas villas turísticas, ubicadas casi en la frontera agropecuaria se distinguen por su trazado irregular conforme a la topografía de la peniplanicie serrana y los arroyos que circundan ambientes signados por bosques nativos, en parte fragmentados por el avance de negocios inmobiliarios y las transgresiones de la actividad rural. Entre los centros con más desarrollo turístico se destacan Santa Rosa de Calamuchita, La Serranita y Villa General Belgrano (capital nacional de la cerveza y sede hereditaria de una colonia suiza). 
            `,
            imgs: [
              {
                src: "/Transfronterizas_Regionales/regionales4.png",
                alt: "regionales4",
                class: "regionales4",
              },
            ],
            links: [
              {
                name: "Villa Belgrano desarrollo territorial",
                url: "https://www.argentina.gob.ar/sites/default/files/plan_estrategico_territorial_villa_general_belgrano.pdf",
              },
            ],
          },
          {
            title: "Traslasierra de Comechingones",
            info: `Entre los valles de Traslasierra (Córdoba) y  Conlara (San Luis) se extienden más de una treintena de comarcas turísticas que se complementan y ofrecen diversos atractivos para ser visitados, más allá de los encantos de sus ríos y arroyos, tanto como de la transición de los bosques del Chaco Austral.  Casi todas las villas turísticas tienen un continuo urbano-suburbano, con sistema de transporte integrados y autopista que al menos alcanzan a Villa Mercedes, pero aproximan al resto de los lugares. El laberinto de Nono, el museo de Rocsen, la feria de artesanos de Cura Brochero, el teatro infantil de Mina Clavero y la excursión al filo de Merlo forman parte de algunos destinos en esta subregión de transición entre las regiones Pampeana, de Cuyo y NOA. Históricamente se mantiene la costumbre de los campings, el paseo en burro y los juegos de parques infantiles. 
            `,
            imgs: [
              {
                src: "/Transfronterizas_Regionales/regionales5.png",
                alt: "regionales5",
                class: "regionales5",
              },
            ],
            links: [
              {
                name: "Area Traslasierra, Cordoba",
                url: "https://www.todo-argentina.net/Geografia/provincias/cordoba/area_tras.html",
              },
            ],
          },
          {
            title: "Chaco Santafesino",
            info: `El Chaco Santafesino corresponde al Norte de la provincia de Santa Fe y el borde oriental contiguo de Santiago del Estero, aunque en ocasiones algunos especialistas incluyan esta segunda provincia en el NOA. A su vez, en el pasado está subregión era considerada parte de la Región Chaqueta (hoy poco abordada).  Se trata de un área otrora ocupada por el bosque nativo, correspondiente a la Eco-región del Espinal, cuyo relicto ha quedado poco representado ante el avance de la frontera agropecuaria más al Norte de las ciudades de Rafaela y Súnchales. De ser caracterizada como polo lácteo en este confín agrícola, junto con el Chaco oriental fue reconvertido en un uso agrícola cada vez más intensivo. Esta deforestación ha provocado mayores inundaciones y un proceso dependiente de fertilizantes (ya desaparece el dominio de los suelos molisoles). Asimismo,  existe un vínculo muy fuerte con Resistencia,  Formosa y Asunción por la disposición de las carreteras viales y una convergencia agroindustrial en varios polos económicos. Primeramente, en Avellaneda y Reconquista, pero también en Rafaela y Rosario.
            `,
            imgs: [
              {
                src: "/Transfronterizas_Regionales/regionales6.png",
                alt: "regionales6",
                class: "regionales6",
              },
            ],
            links: [
              {
                name: "El Chaco sin bosque",
                url: "https://unesdoc.unesco.org/ark:/48223/pf0000216727",
              },
            ],
          },
          {
            title: "Bosque de Calden y ambientes de borde",
            info: `La franja o arco que bordea el Pastizal Pampeano (tradicional espacio pampeano) es ocupado por bosques nativos,  achaparrados (de la familia Prosopis) que conforman la Eco-región del Espinal. El bosque de Caldén es el que más se mantiene, en el lado occidental y suroccidental de la región Pampeana. Así, en provincias como La Pampa se han creado áreas protegidas como el Parque Luro (la mayor reserva mundial de Caldenes) para el resguardo de la especie arbórea endémica. Si bien la deforestación ya no se practica (a diferencia de la era agroexportadora, que fue la más activa), los incendios forestales y el avance de los agroecosistemas han puesto en jaque esta reserva crucial -además de otras especies autóctonas, como el cardenal amarillo-, en una transición de suelos que se tornan más pedregosos y arenosos, con un aumento de vegetación arbustiva hacia el occidente. En el año 2023 se frustró la creación de un parque nacional más en el área de Victorica, aunque existe un fuerte debate entre la sociedad, incluso por la expansión de especies introducidas como el jabalí que ya llevan más de un siglo y se expande hacia el Oeste de la provincia de Buenos Aires. 
            `,
            imgs: [
              {
                src: "/Transfronterizas_Regionales/regionales7.png",
                alt: "regionales7",
                class: "regionales7",
              },
            ],
            links: [
              {
                name: "Reserva Parque Luro",
                url: "https://ridaa.unq.edu.ar/handle/20.500.11807/2980",
              },
            ],
          },
          {
            title: "Patagonia Bonarense",
            info: `El río Negro separa las ciudades de Carmen de Patagones con Viedma. La segunda, además de ser capital provincial tiene beneficios patagónicos y provoca una constante movilidad de bonaerense que asisten a trabajar (mejores sueldos), aunque en  los precios de los productos o mercaderías no difieren demasiado.  A su vez,  ambas localidades son atravesadas por la Ruta Nacional 3, desde donde circulan miles de transportes de carga con lejanos destinos australes y un turismo en alza, especialmente con destino a Puerto Madryn y Las Grutas. También el riego ha sido motor de desarrollo en esta Patagonia de transición, cuyos habitantes rara vez resuelven sus demandas en La Plata o Capital Federal (a casi 1000 kms), siendo su vínculo mayor con Bahía Blanca. Algo similar sucede con las localidades de Río Colorado y La Adela, en las provincias de Río Negro y La Pampa, respectivamente.
            `,
            imgs: [
              {
                src: "/Transfronterizas_Regionales/regionales8.png",
                alt: "regionales8",
                class: "regionales8",
              },
            ],
          },
          {
            title: "Malargüe y Payunia",
            info: `El sur de Mendoza al igual que la frontera meridional de La Pampa guardan un vínculo especial con Patagonia Norte, en su área central. Forman parte de la Cuenca Neuquina y, por ende, se inscriben como áreas petroleras. También existen campos de volcanes inactivos como Payunia, con alguna extensión de estos en el extremo oeste pampeano. Y, como y transición con Patagonia se encuentra la única pista de esquí septentrional: Las Leñas. Estos lugares son muy visitados además por su condición de postal en la larga travesía por Ruta Nacional 40. Sin embargo, como todo contexto petrolero subyacen problemáticas tales como las asimétricas en los precios para arrendar viviendas,  entre otros rubros o sectores,  en parte favorecidos por el dinero circulante. Esto explica los precios a los que también se expone el turismo, inclusive en las termas de Cacheuta, camino a Mendoza capital.
            `,
            imgs: [
              {
                src: "/Transfronterizas_Regionales/regionales9.png",
                alt: "regionales9",
                class: "regionales9",
              },
            ],
          },
          {
            title: "Pampa Patagonica",
            info: `Se trata de una localidad pampeana, que a su vez es la más joven del país (fundada el 30/11/2006), ubicada a orillas del curso medio del río Colorado, a la vera del Embalse de Casa de Piedra. Su lago artificial da lugar al turismo (pesca, balneario y deportes náuticos), aunque el proyecto fundacional también incluyó el aprovechamiento del agua con fines productivos, mediante el riego destinado a la fruticultura (principalmente viñedos, granadas y pistachos), la horticultura y usos agropecuarios (tomas ganaderas, por ejemplo). 
            A pesar de que se anhelaba un impulso de la mano del turismo, máxime teniendo en cuenta su paso obligado a Patagonia Norte por la Ruta Nacional 152, por ahora esto no ha sido posible. Tampoco ha sido favorecido este lugar con el avance de los pozos petroleros localizados a tan solo 50 kms del lugar, ya más próximo a la Colonia 25 de Mayo (La Pampa), donde hoy se debate entre el auge de esa actividad y las bondades del riego. 
            A esta política turística se pasaron por alto algunas potencialidades propias del geoturismo, que comprenden todo el extremo meridional de La Pampa, ya que hasta la era Mesozoica definían un extenso litoral, antes del ascenso de la Plataforma Patagónica. No solamente el río Colorado exhibe ese límite geológico y paleontológico, sino también grandes barrancos y áreas con diversas sedimentitas marinas, conteniendo, restos fósiles identificados dentro de la Fm. Roca y Fm. Jagüel cuya edad relativa es Cretácica-Terciaria. Complementariamente, el área de Casa de Piedra presenta depósitos volcániclásticos de origen aluvial o de eventos asociados, cuya muestra excede las geoformas o el relieve en general. Por ello, es común encontrar geodas y ágatas en sitios geológicos poco explorados. De hecho, tampoco se ha invertido en la mejora de la infraestructura, salvo la refacción de una pileta climatizada y una bodega, donde si se ha apostado. Aun así, si más de un centenar quisiera hospedarse al mismo tiempo en el lugar no habría disponibilidad, ya que cerró el único hotel y se depende del alquiler de cabañas y la dependencia de una única proveeduría. Como se observa en las imágenes al pie, cerca de 300 viviendas fueron construidas, entre inversión pública y privada, más un centro comercial para que se radiquen dos docenas de emprendedores, aunque la población local no supera las 150 personas de los 10.000 habitantes que se esperaba a la segunda década de vida. 
            `,
            imgs: [
              {
                src: "/Transfronterizas_Regionales/regionales10.png",
                alt: "regionales10",
                class: "regionales10",
              },
            ],
          },
          {
            title: "Nuevo Cuyo",
            info: `La provincia de La Rioja se autoproclama como Nuevo Cuyo, sobre todo sus autoridades políticas. Tradicionalmente se instituía como región de Sierras Pampeanas, que en sí es una visión físico-natural de concebir el área. Por ello, la mayoría de los especialistas en el tema coinciden que forma parte del NOA, aunque reconocen una transición o semejanza del oriente en cuanto al desarrollo del riego y las plantaciones de vid y olivos, es decir con Cuyo. Pero también se distingue una mega minería asociada al resto del NOA, al igual que San Juan, en especial en Famatina. Fuera de esta discusión, la mayor parte de la población riojana se vincula más con Córdoba capital, ya sea por la oferta universitaria,  la complejidad en los sistemas de salud, la amplia disponibilidad de servicios,  el comercio,  etc. Asimismo,  parte de este territorio guarda fuerte vínculos con Catamarca. Ambas lideran la alta proporción de empleados públicos y están entre las 6 provincias más expulsoras de población activa. Uno de los problemas mayores es que no ha sabido explorar suficientemente el turismo (lugares irónicos como las termas de Fiambala) y no cuenta con infraestructura vial de fácil accesibilidad, salvo para quienes lo hacen en tránsito para la Región de Coquimbo, en Chile.
            `,
            imgs: [
              {
                src: "/Transfronterizas_Regionales/regionales11.png",
                alt: "regionales11",
                class: "regionales11",
              },
            ],
          },
        ],
      },
    },

    {
      name: "antartida",
      docs: {
        title: "Antartida",
        info: `Referir a la Antártida Argentina amerita un análisis diferente a las islas australes, que también integran la provincia con capital en Ushuaia, entre ellas las que están usurpadas por el Reino Unido de Gran Bretaña e Irlanda del Norte. La porción del continente blanco reclamado por Argentina (porción triangular definida por los 60º y 90º de Latitud Sur; y de Este a Oeste por los 25º a 74º de Latitud Sur) forma parte de un espacio común global, sometido al Tratado Antártico (1959), motivo por el cual su espacio se superpone con superficie pretendida por Chile y el Reino Unido de Gran Bretaña e Irlanda del Norte, dado a la situación materializada en el Canal de Beagle desde 1984, y el conflicto de Malvinas y las demás islas del Atlántico Sur en el segundo caso. Así, por el momento, todas las naciones que tienen bases estables no pueden desarrollar actividades militares, comerciales y otras, sobre todo, aquellas que pongan en riesgo la paz mundial y la reserva de los campos de hielo y su fauna asociada. De hecho, menos del 1% constituyen áreas libres de hielo. Por ende, su visita al lugar, distante a unos 1.000 kilómetros de Sudamérica es muy difícil ante la inexistencia de un transporte público. Y sus pobladores lo hacen generalmente por campañas semestrales bien preparadas (el frío polar es extremo y solo en verano la temperatura supera los 10 grados en días excepcionales), con permisos afines a la investigación científica, el resguardo ambiental y el arraigo de la proclama territorial, más allá de que la consideremos parte de un territorio provincial. No obstante, en los años 90 , distintos cruceros internacionales ofrecen recorridos por esas frías aguas en verano, algunos con punto de salida en Ushuaia, aunque con riesgos asociados a los deshielos o el caso contrario, el difícil acceso a algunos lugares ante el congelamiento. `,
        imgs: [
          {
            src: "./Antartida/banner-antartida.webp",
            alt: "antartida-banner",
            class: "antartida-banner",
          },
        ],
        links: [
          {
            name: "Oficial Antartida",
            url: "https://cancilleria.gob.ar/es/iniciativas/dna/divulgacion/sobre-la-antartida",
          },
          {
            name: "Soberania de la Antartida",
            url: "https://vocesenelfenix.economicas.uba.ar/soberania-argentina-en-la-antartida-un-recorrido-desde-comienzos-del-siglo-xx-hasta-la-firma-del-tratado-antartico/",
          },
          {
            name: "Desde Ushuaia hasta la peninsula de la Antartida",
            url: "https://viajes.nationalgeographic.com.es/a/ushuaia-hasta-peninsula-antartica_8997",
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
