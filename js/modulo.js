import { sumar,multiplicar, restar, dividir

 } from "./javascript.js"


console.log("Suma:", sumar(2,5));
console.log("Multiplicación:", multiplicar(3,3));
console.log("Resta:", restar(10,1));
console.log("División:", dividir(12,4));

// GUARDAMOS el resultado en variables
let resultadoSuma = sumar(2, 5);
let resultadoMultiplicacion = multiplicar(3, 3);
let resultadoResta = restar(10, 1);
let resultadoDivision = dividir(12, 4);

console.log("Suma:", resultadoSuma);
console.log("Multiplicación:", resultadoMultiplicacion);
console.log("Resta:", resultadoResta);
console.log("División:", resultadoDivision);


window.calcular = function (event, tipo) {
  event.preventDefault();

  const form = event.target;

  // leer valores de inputs por NAME 
  const a = Number(form.a.value);
  const b = Number(form.b.value);

  // validación básica: si no son números 
  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.log("Error: introduce números válidos");
    return; // остановимся тут (выходим из функции)
  }

  // elegir la operación según "tipo" 
  let resultado;

  switch (tipo) {
    case "suma":
      resultado = sumar(a, b);
      break;

    case "resta":
      resultado = restar(a, b);
      break;

    case "multi":
      resultado = multiplicar(a, b);
      break;

    case "div":
      if (b === 0) {
        console.log("Error: no se puede dividir por 0");
        document.getElementById("resultadodiv").textContent = "Error: división por 0";
        return;
      }
      resultado = dividir(a, b);
      break;

    default:
      console.log("Tipo de operación no válida");
      return;
  }


  console.log(`Operación ${tipo}:`, resultado);


  const salida = document.getElementById(`resultado${tipo}`);
  salida.textContent = `resultado: ${resultado}`;
};