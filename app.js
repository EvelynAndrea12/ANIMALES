const animales = [
  {
    nombre: "Perro",
    tipo: "doméstico",
    imagen: "https://cdn.pixabay.com/photo/2016/02/19/11/53/dog-1209744_960_720.jpg",
    sonido: "https://www.soundjay.com/animal/dog-bark-1.mp3"
  },
  {
    nombre: "León",
    tipo: "salvaje",
    imagen: "https://cdn.pixabay.com/photo/2017/01/14/12/59/lion-1972770_960_720.jpg",
    sonido: "https://www.soundjay.com/animal/lion-roar.mp3"
  },
  {
    nombre: "Delfín",
    tipo: "marino",
    imagen: "https://cdn.pixabay.com/photo/2014/09/07/21/52/dolphin-438622_960_720.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  }
];

function cargarAnimales(lista) {
  const galeria = document.getElementById("galeria");
  galeria.innerHTML = "";
  lista.forEach(animal => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${animal.nombre}</h3>
      ${animal.imagen ? <img src="${animal.imagen}" alt="${animal.nombre}"/> : ""}
      {animal.video ? <video controls><source src="${animal.video}" type="video/mp4"></video> : ""}
      {animal.sonido ? <audio controls><source src="${animal.sonido}" type="audio/mp3"></audio> : ""}
    `;

    galeria.appendChild(card);
  });
}

function filtrar(tipo) {
  if (tipo === "todos") {
    cargarAnimales(animales);
  } else {
    const filtrados = animales.filter(animal => animal.tipo === tipo);
    cargarAnimales(filtrados);
  }
}

window.onload = () => cargarAnimales(animales);