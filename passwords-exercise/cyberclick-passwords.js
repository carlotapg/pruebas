const fs = require("fs");

//creamos una array a partir de input facilitado
const testsArr = fs.readFileSync("input.txt", "utf8").toString().split("\n");

//PRIMERA PARTE

function primeraValidacion(array) {
  let counter = 0;

  array.forEach((test) => {
    // por cada elemento de la array:

    const input = test.split(":"); //divide regla y password
    const password = input[1]; // define segundo elemento de la array como password
    const regla = input[0].split(" "); // divide regla en numeros y letra
    const nums = regla[0].split("-"); // define primero elemento de la array como numeros y los divide en mínimo y máximo
    const letra = regla[1]; //define segundo elemento de la array como letra
    const minimo = Number(nums[0]); // mínimas ocurrencias -> pasamos el string a número
    const maximo = Number(nums[1]); // máximas ocurrencias -> pasamos el string a número

    const ocurrencias = password.split(letra).length - 1; // numero de veces que letra aparece en password

    //actualizamos contador cuando el numero de ocurrencias es igual o mayor al mínimo, E igual o menor al maximo
    if (ocurrencias >= minimo && ocurrencias <= maximo) {
      counter += 1;
    }
    console.log(counter);
  });

  return counter;
}

// descomentar para ejecutar tests:
// primeraValidacion(testsArr);

// SEGUNDA PARTE

function segundaValidacion(array) {
  let counter = 0;

  array.forEach((test) => {
    // por cada elemento de la array, seguimos mismo procedimiento para separar sus distintas partes
    const input = test.split(":");
    const password = input[1];
    const regla = input[0].split(" ");
    const nums = regla[0].split("-");
    const letra = regla[1];
    const indice1 = Number(nums[0]) - 1; // restamos 1 para compensar índice 0
    const indice2 = Number(nums[1]) - 1;
    console.log(indice1, indice2);

    //chequeamos si los índices coinciden con la letra

    const primero = password[indice1] === letra;
    const segundo = password[indice2] === letra;

    // si únicamente uno de los dos índices coincide con la letra, actualizamos contador

    if (primero && segundo) {
      counter += 0;
    } else if (!primero && !segundo) {
      counter += 0;
    } else if (primero || segundo) {
      counter += 1;
    }
    console.log(counter);
  });

  return counter;
}

// para ejectuar tests:
segundaValidacion(testsArr);
