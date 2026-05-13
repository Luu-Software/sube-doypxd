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

  if (transporte.value === "nacional") {
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
        resultado = 959.71;
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
        resultado = 1525.94;
      }
    } else if (registrada.value === "social") {
      if (distanciaViaje <= 3) {
        resultado = 339.18;
      } else if (distanciaViaje <= 6) {
        resultado = 376.88;
      } else if (distanciaViaje <= 12) {
        resultado = 405.91;
      } else if (distanciaViaje <= 27) {
        resultado = 434.97;
      } else {
        resultado = 431.86;
      }
    };
  } else if (transporte.value === "provincia") {
    if (registrada.value === "si") {
      if (distanciaViaje <= 3) {
        resultado = 968.57;
      } else if (distanciaViaje <= 6) {
        resultado = 1089.64;
      } else if (distanciaViaje <= 12) {
        resultado = 1210.71;
      } else if (distanciaViaje <= 27) {
        resultado = 1452.85;
      } else {
        resultado = 1708.07;
      }
    }
    else if (registrada.value === "no") {
      if (distanciaViaje <= 3) {
        resultado = 1937.14;
      } else if (distanciaViaje <= 6) {
        resultado = 2179.28;
      } else if (distanciaViaje <= 12) {
        resultado = 2421.42;
      } else if (distanciaViaje <= 27) {
        resultado = 2905.70;
      } else {
        resultado = 3416.14;
      }
    } else if (registrada.value === "social") {
      if (distanciaViaje <= 3) {
        resultado = 435.85;
      } else if (distanciaViaje <= 6) {
        resultado = 490.33;
      } else if (distanciaViaje <= 12) {
        resultado = 544.81;
      } else if (distanciaViaje <= 27) {
        resultado = 653.78;
      } else {
        resultado = 768.63;
      }
    };
  } else if (transporte.value === "caba") {
    if (registrada.value === "si") {
      if (distanciaViaje <= 3) {
        resultado = 753.74;
      } else if (distanciaViaje <= 6) {
        resultado = 837.52;
      } else if (distanciaViaje <= 12) {
        resultado = 902.04;
      } else if (distanciaViaje <= 27) {
        resultado = 966.61;
      } else {
        tarifa.innerText = "¡Distancia demasiado grande! No tenemos tarifas disponibles.";
      }
    }
    else if (registrada.value === "no") {
      if (distanciaViaje <= 3) {
        resultado = 1198.45;
      } else if (distanciaViaje <= 6) {
        resultado = 1331.66;
      } else if (distanciaViaje <= 12) {
        resultado = 1434.24;
      } else if (distanciaViaje <= 27) {
        resultado = 1536.91;
      } else {
        tarifa.innerText = "¡Distancia demasiado grande! No tenemos tarifas disponibles.";
      }
    } else if (registrada.value === "social") {
      if (distanciaViaje <= 3) {
        resultado = 339.18;
      } else if (distanciaViaje <= 6) {
        resultado = 376.88;
      } else if (distanciaViaje <= 12) {
        resultado = 405.91;
      } else if (distanciaViaje <= 27) {
        resultado = 434.97;
      } else {
        tarifa.innerText = "¡Distancia demasiado grande! No tenemos tarifas disponibles.";
      }
    }
  };

  if (!(resultado === 0)) {
    tarifa.innerText = "El costo equivalente de la tarifa seria de " + resultado + " ARS";
  };
});
