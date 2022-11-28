const StockProductos = [
  {
    id: "silla-01",
    nombre: "Silla de Escritorio Tokio",
    categoria: "silla",
    cantidad: 1,
    descripcion: "Silla de escritorio Tokio con apoyacabezas regulable",
    precio:78.399,
    img: "./img/silladeescritoriotokio.jpeg",
  },

  {
    id:"silla-02",
    nombre: "Silla de comedor Saurus",
    categoria: "silla",
    cantidad: 1,
    descripcion: "Silla de comedor apilable patas de caño",
    precio:7.099,
    img: "./img/sillacomedorapilable.png",
  },

  {
    id: "silla-03",
    nombre: "Silla de Comedor Micaela",
    categoria: "silla",
    cantidad: 1,
    descripcion: "Silla de comedor enfundada",
    precio:39.999,
    img: "./img/silladecomedorenfundada.png",
  },
  {
    id: "silla-04",
    nombre: "Silla Gerencial",
    categoria: "silla",
    cantidad: 1,
    descripcion: "Silla de oficina ejecutiva color blanca",
    precio:77.595,
    img: "./img/silladeoficinagerencial.jpeg",
  },
  {
    id: "silla-05",
    nombre: "Silla Eames",
    categoria: "silla",
    cantidad: 1,
    descripcion: "Silla base madera color negro",
    precio: 77.591,
    img: "./img/sillaeamesbasemadera.png",
  },
  {
    id: "silla-06",
    nombre: "Silla de Jardín París",
    categoria: "silla",
    cantidad: 1,
    descripcion: "Silla de Jardín plástica apilable reforzada",
    precio: 2.499,
    img: "./img/sillaplasticaapilablejardin.png",
  },
  {
    id: "sillon-01",
    nombre: "Sillón Francia",
    categoria: "sillon",
    cantidad: 1,
    descripcion: "Sillón esquinero rinconero 280 x 180 cm",
    precio: 276.908,
    img: "./img/sillonesquinero1.png",
  },
  {
    id:"sillon-02",
    nombre: "Sillón América",
    categoria: "sillon",
    cantidad: 1,
    descripcion: "Sillón esquinero rinconero 225 x 160 cm",
    precio: 245.901,
    img: "./img/sillonesquinero2.png",
  },
  {
    id: "sillon-03",
    nombre: "Sillón Escandinavo",
    categoria: "sillon",
    cantidad: 1,
    descripcion: "Sillón Escandinavo 3 cuerpos",
    precio: 170.907,
    img: "./img/sofaescandinavo.jpeg",
  },
  {
    id: "sillon-04",
    nombre: "Sofá sillón Katia",
    categoria: "sillon",
    cantidad: 1,
    descripcion: "Sofá Sillón 3 cuerpos",
    precio: 147.898,
    img: "./img/sofasillon1.png",
  },
  {
    id: "sillon-05",
    nombre: "Sofá sillón Moderno",
    categoria: "sillon",
    cantidad: 1,
    descripcion: "Sofá Sillón 3 cuerpos",
    precio: 162.997,
    img: "./img/sofasillon2.png",
  },
  {
    id: "mesa-01",
    nombre: "Barra desayunador Nórdico",
    categoria: "mesa",
    cantidad: 1,
    descripcion: "Barra desayunador madera paraíso 125cm",
    precio: 76.996,
    img: "./img/barradesayunador.jpeg",
  },
  {
    id: "mesa-02",
    nombre: "Mesa de Comedor Keops",
    categoria: "mesa",
    cantidad: 1,
    descripcion: "Mesa de comedor extensible madera paraíso 150cm",
    precio: 112.599,
    img: "./img/mesacomedorextensible.png",
  },
  {
    id: "mesa-03",
    nombre: "Mesa de comedor Escandinava",
    categoria: "mesa",
    cantidad: 1,
    descripcion: "Mesa de comedor madera 160cm",
    precio: 94.899,
    img: "./img/mesaescandinava.jpeg",
  },
  {
    id: "mesa-04",
    nombre: "Mesa de jardín Alaska",
    categoria: "mesa",
    cantidad: 1,
    descripcion: "Mesa de jardín redonda plástica 90cm",
    precio: 6.879,
    img: "./img/mesajardin.jpeg",
  },
  {
    id: "mesa-05",
    nombre: "Mesa de jardín Ensueño",
    categoria: "mesa",
    cantidad: 1,
    descripcion: "Mesa De Jardin Plastica Simil Rattan Exterior 150 X 90",
    precio: 24.695,
    img: "./img/mesadejardinensueño.jpeg",
  },
  {
    id: "juegodecomedor-01",
    nombre: "Juego de Comedor Italia",
    tipo: "juegodecomedor",
    cantidad: 1,
    descripcion: "Juego De Comedor Mesa Rectangular 120cm + 4 Sillas Eames",
    precio: 62.495,
    img: "./img/juegocomedorrectangular.png",
  },
  {
    id:"juegodecomedor-02" ,
    nombre: "Juego de Comedor Zurich",
    categoria: "juegodecomedor",
    cantidad: 1,
    descripcion: "Juego De Comedor Mesa Redonda 90cm + 4 Sillas Eames",
    precio: 62.378,
    img: "./img/juegodecomedorredonda.png",
  },
  {
    id: "juegodecomedor-03",
    nombre: "Juego de Comedor Milán",
    categoria: "juegodecomedor",
    cantidad: 1,
    descripcion: "Juego De Comedor Mesa Eames Madera 70 X 70 + 2 Sillas ",
    precio: 40.396,
    img: "./img/juegomesaeames.jpeg",
  },
  {
    id: "juegodecomedor-04",
    nombre: "Juego de Comedor Florencia",
    categoria: "juegodecomedor",
    cantidad: 1,
    descripcion: "Juego De Comedor Mesa Redonda Vidrio 100cm + 4 Sillas Eames",
    precio: 62.493,
    img: "./img/juegomesaredondavidrio.jpeg",
  },
  {
    id: "juegodecomedor-05",
    nombre: "Juego de Comedor Florencia",
    categoria: "juegodecomedor",
    cantidad: 1,
    descripcion: "Juego De Comedor Mesa Redonda Vidrio 100cm + 4 Sillas Eames",
    precio: 68.976,
    img: "./img/juegomesaredondavidrio.jpeg",
  },
  {
    id: "juegodecomedor-06",
    nombre: "Juego de Comedor Sauvage",
    tipo: "juegodecomedor",
    cantidad: 1,
    descripcion: "Juego De Comedor Mesa Redonda 90cm + 2 Sillas Eames",
    precio: 43.998,
    img: "./img/juegodecomedorparados.jpeg",
  },
  {
    id: "juegodecomedor-07",
    nombre: "Juego de Comedor Claire",
    categoria: "juegodecomedor",
    cantidad: 1,
    descripcion: "Juego Comedor Mesa de Madera 120 X 80 + 4 Sillas Eames",
    precio: 65.777,
    img: "./img/juegodecomedorclaire.jpeg",
  },
  {
    id: "juegodejardin-01",
    nombre: "Juego de Jardín Normandí",
    categoria: "juegodejardin",
    cantidad: 1,
    descripcion: "Juego de Jardín 4 Sillones + Mesa ratona 70 x 70 Simil Ratan",
    precio: 61.399,
    img: "./img/juegodejardinplastico.jpeg",
  },
  
]
