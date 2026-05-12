/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar  | Tarifa Social
0-3 km	    | $ 715.24	            | $ 1137.23               | $ 339,18
3-6 km	    | $ 794.74		          | $ 1263.64               | $ 376,88
6-12 km	    | $ 855.97		          | $ 1360.99               | $ 405,91
12-27 km	  | $ 917.24		          | $ 1458.41               | $ 434,97
*/

boton.addEventListener("click", () => {
  let distanciaViaje = distancia.value;
  let resultado = 0;

  if (transporte.value === "colectivo") {
    // explico, aca hize una variable de estructura porque no quiero hacer tantos else, voy a usar "for"
    let tarifasSociales = [
      {
        "distanciaMax": 3,
        "tarifa": 339.18
      },
      {
        "distanciaMax": 6,
        "tarifa": 376.88
      },
      {
        "distanciaMax": 12,
        "tarifa": 405.91
      },
      {
        "distanciaMax": 27,
        "tarifa": 434.97
      }
    ];
    if (registrada.value === "si") {
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
    else if (registrada.value === "no") {
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
    } else if (registrada.value === "social") {
      for (elemento of tarifasSociales) {
        if (distanciaViaje <= elemento.distanciaMax) {
          elemento.tarifa = resultado;
          // detener el loop
          console.log(elemento);
          break;
        }
      }
    };
  };

  if (!(resultado === 0)) {
    tarifa.innerText = "El costo equivalente de la tarifa seria de " + resultado + " ARS";
  };
});
