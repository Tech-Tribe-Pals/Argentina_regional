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
