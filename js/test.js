
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
                <img src="${restaurantes[i].imagen}" alt="">
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
        <img src="${restaurantes[i].imagen}" alt="">
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
        <img src="${restaurantes[i].imagen}" alt="">
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
        <img src="${restaurantes[i].imagen}" alt="">
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
