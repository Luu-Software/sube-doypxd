/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/

boton.addEventListener("click", () => {
  let subeRegistrado = registrada.value;
  let distanciaViaje = distancia.value;

  let resultado = 0;

  if (subeRegistrado) {
    if (distanciaViaje <= 3) {
      resultado = 715.24;
    } else if (distanciaViaje <= 6) {
      resultado = 794.74;
    } else if (distanciaViaje <= 12) {
      resultado = 855.97;
    } else if (distanciaViaje <= 27) {
      resultado = 917.24;
    } else {
      tarifa.innerText = "¡Distancia demasiado grande! No tenemos tarifas disponibles.";
    }
  }
  else {
    if (distanciaViaje <= 3) {
      resultado = 1137.23;
    } else if (distanciaViaje <= 6) {
      resultado = 1263.64;
    } else if (distanciaViaje <= 12) {
      resultado = 1360.99;
    } else if (distanciaViaje <= 27) {
      resultado = 1458.41;
    } else {
      tarifa.innerText = "¡Distancia demasiado grande! No tenemos tarifas disponibles.";
    }
  };
  if (!(resultado === 0)) {
  tarifa.innerText = "El costo equivalente de la tarifa seria de " + resultado + " ARS";
  };
});
