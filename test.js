// Base inicial
const restaurantes = [
  {
    "imagen": "americana.jpg",
    "nombre": "Panda Expres",
    "ubicacion": "Polanco",
    "costo": "$",
    "tipoComida": "Asiática",
    "servicioDomicilio": "sí",
    "mapa": "https://goo.gl/maps/4ZC1XaoghE22"
  },
  
  {
    "imagen": "vegetariana.jpg",
    "nombre": "Green Grass Condesa",
    "ubicacion": "Condesa",
    "costo": "$$",
    "tipoComida": "Vegetariana",
    "servicioDomicilio": "sí",
    "mapa":"https://goo.gl/maps/f8BepYmfBu52"
    
  },
  {
    "imagen": "asiatica.jpg",
    "nombre": "Sushi MX Antojería Japonesa",
    "ubicacion": "Escandón",
    "costo": "$$",
    "tipoComida": "Asiática",
    "servicioDomicilio": "sí",
    "mapa":"https://goo.gl/H1QpgC"
  },
  { 
    "imagen": "americana.jpg",
    "nombre": "Pinche Gringo BBQ",
    "ubicacion": "Anzures",
    "costo": "$$$$",
    "tipoComida": "Americana",
    "servicioDomicilio": "sí",
    "mapa": "https://goo.gl/U1hVna"
  },
  { 
    "imagen": "mexicana.jpg",
    "nombre": "WeliK",
    "ubicacion": "Roma",
    "costo": "$",
    "tipoComida":"Mexicana",
    "servicioDomicilio":"",
    "mapa":"https://goo.gl/maps/SyQjpXHxTS62"
  },
  { 
    "imagen": "mexicana.jpg",
    "nombre": "Taquería la Roma",
    "ubicacion": "Roma",
    "costo": "$$",
    "tipoComida":"Mexicana",
    "servicioDomicilio":"no",
    "mapa":"https://goo.gl/maps/RuEA1ZTnheq"
  },
  {
    "imagen": "mexicana.jpg",
    "nombre": "El Parnita",
    "ubicacion": "Roma Norte",
    "costo": "$$",
    "tipoComida":"Mexicana",
    "servicioDomicilio":"sí",
    "mapa":"https://goo.gl/maps/Xy54s2hStKC2"
  },
  {
    "imagen": "asiatica.jpg",
    "nombre": "Mog Bistro",
    "ubicacion": "Roma Norte",
    "costo": "$$$",
    "tipoComida":"Asiática",
    "servicioDomicilio":"sí",
    "mapa":"https://goo.gl/maps/gKQLcMZ87nv"
  },
  {
    "imagen": "argentina.jpg",
    "nombre": "Quebracho Condesa",
    "ubicacion": "Condesa",
    "costo": "$$$",
    "tipoComida":"Argentina",
    "servicioDomicilio":"sí",
    "mapa":"https://goo.gl/maps/untoNYvUFdJ2"
  },
  {
    "imagen": "argentina.jpg",
    "nombre": "Escarapela Condesa",
    "ubicacion": "Condesa",
    "costo": "$$$",
    "tipoComida":"Argentina",
    "servicioDomicilio":"si",
    "mapa":"https://goo.gl/maps/xoBeQDK6HWR2"
  },
  {
    "imagen": "española.jpg",
    "nombre": "Centro Castellano Camino Real",
    "ubicacion": "Anzures",
    "costo": "$$$",
    "tipoComida":"Española",
    "servicioDomicilio":"no",
    "mapa":"https://goo.gl/maps/Q4JuruUo8er"
  },
  {
    "imagen": "española.jpg",
    "nombre": "Torre de Castilla",
    "ubicacion": "Polanco",
    "costo": "$$$$",
    "tipoComida":"Española",
    "servicioDomicilio":"sí",
    "mapa":"https://goo.gl/maps/pmpk5HNyxau"
  },
  {
    "imagen":"española.jpg",
    "nombre": "Casa Hervia Polanco",
    "ubicación": "Polanco",
    "costo": "$$$",
    "tipoComida":"española",
    "servicioDomicilio":"sí",
    "mapa":"https://goo.gl/maps/VPEKjAhCCB12"
  },
  {
    "imagen":"española.jpg",
    "nombre": "La Marroquina",
    "ubicacion": "Polanco",
    "costo": "$$$$",
    "tipoComida":"española",
    "servicioDomicilio":"Sí",
    "mapa":"https://goo.gl/maps/dxKrdjp2yCn"
  },
  {
    "imagen": "italiana.jpg",
    "nombre": "Antica Forneria",
    "ubicacion": "Portales Norte",
    "costo": "$$$",
    "tipoComida":"Italiana",
    "servicioDomicilio":"Sí",
    "mapa":"https://goo.gl/maps/6wqwYkhpxW72"
  },
  {
    "imagen": "italiana.jpg",
    "nombre": "Macelleria Roma",
    "ubicacion": "Roma Norte",
    "costo": "$$",
    "tipoComida":"Italina",
    "servicioDomicilio":"í",
    "mapa":"Macelleria Roma"
  },
  {
    "imagen": "italiana.jpg",
    "nombre": "Trattoria Giacovanni",
    "ubicacion": "Condesa",
    "costo": "$$$",
    "tipoComida":"Italiana",
    "servicioDomicilio":"Sí",
    "mapa":"https://goo.gl/maps/cx6a5ap9dZw"
  },
  {
    "imagen": "italiana.jpg",
    "nombre": "Vecchio Forno",
    "ubicacion": "Roma Norte",
    "costo": "$$$$",
    "tipoComida":"Italina",
    "servicioDomicilio":"Sí",
    "mapa":"https://goo.gl/maps/Pjfw9oCFCfT2"
  },
  {
    "imagen": "italiana.jpg",
    "nombre": "Casa D´Italia",
    "ubicacion": "Condesa",
    "costo": "$$$$",
    "tipoComida":"Italina",
    "servicioDomicilio":"Sí",
    "mapa":"https://goo.gl/maps/ZE6bCU826RQ2"
  },
  {
    "nombre": "italiana.jpg",
    "nombre": "Los Cancinos Cabrera",
    "ubicacion": "",
    "costo": "",
    "tipoComida":"",
    "servicioDomicilio":"",
    "mapa":""
  },
  {
    "imagen":"vegetariana.jpg",
    "nombre": "Forever Polanco",
    "ubicacion": "Polanco",
    "costo": "$$$",
    "tipoComida":"Vegetariana",
    "servicioDomicilio":"sí",
    "mapa":"https://goo.gl/maps/Vocx9YqcgwS2"
  },
  {
    "imagen":"vegetariana.jpg",
    "nombre": "Vegan Inc.",
    "ubicacion": "Polanco",
    "costo": "$$",
    "tipoComida":"Vegetariana",
    "servicioDomicilio":"sí",
    "mapa":"https://goo.gl/maps/JnNqC6Cyt9x"
  },
  {
    "imagen":"vegetariana.jpg",
    "nombre": "Cosecha Natural",
    "ubicacion": "Polanco",
    "costo": "$$",
    "tipoComida":"Vegetariana",
    "servicioDomicilio":"sí",
    "mapa":"https://goo.gl/maps/xCp8PcqfTds"
  },
  {
    "imagen":"vegetariana.jpg",
    "nombre": "Fresh Garden Salads",
    "ubicacion": "Polanco",
    "costo": "$$",
    "tipoComida":"Vegetariana",
    "servicioDomicilio":"sí",
    "mapa":"https://goo.gl/maps/GivaGbFC5RT2"
  },
  {
    "imagen":"vegetariana.jpg",
    "nombre": "Pan Comido Anzures",
    "ubicacion": "Anzures",
    "costo": "$$$",
    "tipoComida":"Vegetariana",
    "servicioDomicilio":"sí",
    "mapa":"https://goo.gl/maps/xCq12GdwV272"
  },
  {
    "imagen":"americana.jpg",
    "nombre": "Buffalucas",
    "ubicacion": "Condesa",
    "costo": "$$$",
    "tipoComida":"Americana",
    "servicioDomicilio":"sí",
    "mapa":"https://goo.gl/maps/snmHMRTgQCP2"
  },
  {
    "imagen":"vegetariana.jpg",
    "nombre": "Forever Polanco",
    "ubicacion": "Polanco",
    "costo": "$$$",
    "tipoComida":"Vegetariana",
    "servicioDomicilio":"sí",
    "mapa":"https://goo.gl/maps/Vocx9YqcgwS2"
  },
  {
    "imagen":"americana.jpg",
    "nombre": "Merendero Condesa",
    "ubicacion": "Condesa",
    "costo": "$$",
    "tipoComida":"Americana",
    "servicioDomicilio":"sí",
    "mapa":"https://goo.gl/maps/ZY2wXSLCix82"
  },
  {
    "imagen":"americana.jpg",
    "nombre": "Bawa Bawa Barbacue",
    "ubicacion": "Roma Norte",
    "costo": "$$",
    "tipoComida":"americana",
    "servicioDomicilio":"sí",
    "mapa":"https://goo.gl/maps/RafKVihXx3R2"
  },
  {
    "imagen":"argentina.jpg",
    "nombre": "La Pizzeria Argentina",
    "ubicacion": "Roma Sur",
    "costo": "$$$",
    "tipoComida":"Argentina",
    "servicioDomicilio":"sí",
    "mapa":"https://goo.gl/maps/Cu4g4o8oLAA2"
  },
];
let seleccion = '';
const contenedor = document.getElementById('seleccionRestaurante');

for (let i = 0; i < restaurantes.length; i++) {
  seleccion += `<li>${restaurantes[i].nombre}</li>`;
  contenedor.innerHTML = seleccion;
}

// reset filters
document.getElementById('reset-filter').addEventListener('click', function () {
  seleccion = ''
  for (let i = 0; i < restaurantes.length; i++) {
    seleccion += `<li>${restaurantes[i].nombre}</li>`;
    contenedor.innerHTML = seleccion;
  }
})

// filtro de precio
const filtroCostos = document.getElementById('filtro-costos');

filtroCostos.addEventListener('change', function() {

  console.log(filtroCostos.value)

  if (filtroCostos.value === 'bajo') {
    seleccion = ''
    for (let i = 0; i < restaurantes.length; i++) {
      if ( restaurantes[i].costo === '$' ) {
        console.log('condiciona objeto')
        seleccion += `<div class="cardRestaurante">
                <img src="img/${restaurantes[i].imagen}" alt="">
                <p>Nombre: ${restaurantes[i].nombre}</p>
                <p>ubicación: ${restaurantes[i].ubicacion}</p>
                <p>Costo: ${restaurantes[i].costo}</p>
                <p>Tipo de Comida: ${restaurantes[i].tipoComida}</p>
                <p>Servicio a Domicilio: ${restaurantes[i].servicioDomicilio}</p>
                <a href="${restaurantes[i].mapa}" target="_blank">ver ubicación</a>
                 `;
        contenedor.innerHTML = seleccion;
      }   
    }
  }
  else if (filtroCostos.value === 'medio') {  
    seleccion = ''
    for (let i = 0; i < restaurantes.length; i++) {  
      if ( restaurantes[i].costo === '$$' ) {
        console.log('condiciona objeto')
        seleccion += `<div class="cardRestaurante">
        <img src="img/${restaurantes[i].imagen}" alt="">
        <p>Nombre: ${restaurantes[i].nombre}</p>
        <p>ubicación: ${restaurantes[i].ubicacion}</p>
        <p>Costo: ${restaurantes[i].costo}</p>
        <p>Tipo de Comida: ${restaurantes[i].tipoComida}</p>
        <p>Servicio a Domicilio: ${restaurantes[i].servicioDomicilio}</p>
        <a href="${restaurantes[i].mapa}" target="_blank">ver ubicación</a>
         `;
        contenedor.innerHTML = seleccion;
      }
    }
  }
  else if (filtroCostos.value === 'alto') {  
    seleccion = ''
    for (let i = 0; i < restaurantes.length; i++) {  
      if ( restaurantes[i].costo === '$$$' ) {
        console.log('condiciona objeto')
        seleccion += `<div class="cardRestaurante">
        <img src="img/${restaurantes[i].imagen}" alt="">
        <p>Nombre: ${restaurantes[i].nombre}</p>
        <p>ubicación: ${restaurantes[i].ubicacion}</p>
        <p>Costo: ${restaurantes[i].costo}</p>
        <p>Tipo de Comida: ${restaurantes[i].tipoComida}</p>
        <p>Servicio a Domicilio: ${restaurantes[i].servicioDomicilio}</p>
        <a href="${restaurantes[i].mapa}" target="_blank">ver ubicación</a>
         `;
        contenedor.innerHTML = seleccion;
      }
    }
  }
  else if (filtroCostos.value === 'muy-alto') {  
    seleccion = ''
    for (let i = 0; i < restaurantes.length; i++) {  
      if ( restaurantes[i].costo === '$$$$' ) {
        console.log('condiciona objeto')
        seleccion += `<div class="cardRestaurante">
        <img src="img/${restaurantes[i].imagen}" alt="">
        <p>Nombre: ${restaurantes[i].nombre}</p>
        <p>ubicación: ${restaurantes[i].ubicacion}</p>
        <p>Costo: ${restaurantes[i].costo}</p>
        <p>Tipo de Comida: ${restaurantes[i].tipoComida}</p>
        <p>Servicio a Domicilio: ${restaurantes[i].servicioDomicilio}</p>
        <a href="${restaurantes[i].mapa}" target="_blank">ver ubicación</a>
         `;
        contenedor.innerHTML = seleccion;
      }
    }
  }
  
// filtro de Tipo de Comida
// const filtroComida = document.getElementById('filtro-tipoComida');

// filtroComida.addEventListener('change', function() {

//   console.log(filtro-tipoComida.value)

  // if (filtroComida.value === 'americana') {
  //   seleccion = ''
  //   for (let i = 0; i < restaurantes.length; i++) {
  //     if ( restaurantes[i].tipoComida === 'tipoComida' ) {
  //       console.log('condiciona objeto')
  //       seleccion += `<div class="cardRestaurante">
  //               <p>Nombre: ${restaurantes[i].nombre}</p>
  //               <p>ubicación: ${restaurantes[i].ubicación}</p>
  //               <p>Costo: ${restaurantes[i].costo}</p>
  //               <p>Tipo de Comida: ${restaurantes[i].tipoComida}</p>
  //               <p>Servicio a Domicilio: ${restaurantes[i].servicioDomicilio}</p>
  //                `;
  //       contenedor.innerHTML = seleccion;
  //     }   
  //   }
  // }
  // else if (filtroCostos.value === 'medio') {  
  //   seleccion = ''
  //   for (let i = 0; i < restaurantes.length; i++) {  
  //     if ( restaurantes[i].costo === '$$' ) {
  //       console.log('condiciona objeto')
  //       seleccion += `<div class="cardRestaurante">
  //               <p>Nombre: ${restaurantes[i].nombre}</p>
  //               <p>ubicación: ${restaurantes[i].ubicación}</p>
  //               <p>Costo: ${restaurantes[i].costo}</p>
  //               <p>Tipo de Comida: ${restaurantes[i].tipoComida}</p>
  //               <p>Servicio a Domicilio: ${restaurantes[i].servicioDomicilio}</p>
  //                 `;
  //       contenedor.innerHTML = seleccion;
  //     }
  //   }
  // }
  // else if (filtroCostos.value === 'alto') {  
  //   seleccion = ''
  //   for (let i = 0; i < restaurantes.length; i++) {  
  //     if ( restaurantes[i].costo === '$$$' ) {
  //       console.log('condiciona objeto')
  //       seleccion += `<div class="cardRestaurante">
  //               <p>Nombre: ${restaurantes[i].nombre}</p>
  //               <p>ubicación: ${restaurantes[i].ubicación}</p>
  //               <p>Costo: ${restaurantes[i].costo}</p>
  //               <p>Tipo de Comida: ${restaurantes[i].tipoComida}</p>
  //               <p>Servicio a Domicilio: ${restaurantes[i].servicioDomicilio}</p>
  //                 `;
  //       contenedor.innerHTML = seleccion;
  //     }
  //   }
  // }
  // else if (filtroCostos.value === 'muy-alto') {  
  //   seleccion = ''
  //   for (let i = 0; i < restaurantes.length; i++) {  
  //     if ( restaurantes[i].costo === '$$$$' ) {
  //       console.log('condiciona objeto')
  //       seleccion += `<div class="cardRestaurante">
  //               <p>Nombre: ${restaurantes[i].nombre}</p>
  //               <p>ubicación: ${restaurantes[i].ubicación}</p>
  //               <p>Costo: ${restaurantes[i].costo}</p>
  //               <p>Tipo de Comida: ${restaurantes[i].tipoComida}</p>
  //               <p>Servicio a Domicilio: ${restaurantes[i].servicioDomicilio}</p>
  //                 `;
  //       contenedor.innerHTML = seleccion;
  //     }
  //   }
  // }

});
