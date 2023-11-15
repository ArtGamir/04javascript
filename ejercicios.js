//Ejercicio 1: 
function caracteresNombre(texto, numero) {
    numero > texto.length ? "Error: El número excede la cantidad de caracteres del texto." : forFunction(texto, numero)
}
function forFunction(texto, numero){
    let subcadena = "";
    for (let i = 0; i <= numero; i++) {
    subcadena += texto[i];
    }
    console.log(subcadena);
}
caracteresNombre("israel", 1);

/*Ejercicios 2*/  
function contarLongitudes(texto) {
    let palabras = texto.split(' ');  // Divide el texto en palabras
  
    let pares = 0;
    let nones = 0;
  
    palabras.forEach(palabra => {
      const longitud = palabra.length;
      if (longitud % 2 === 0) {
        pares++;
      } else {
        nones++;
      }
    });
  
    return { pares, nones };
  }
  
  let texto = "La mejor forma de predecir el futuro es creándolo";
  let resultado = contarLongitudes(texto);
  
  console.log("-pares:", resultado.pares);
  console.log("-nones:", resultado.nones);

/*Ejercico 3: Se requiere generar las iniciales de una persona usando su nombre completo.
        -> Israel Salinas Martínez
        <- I. S. M. */
function inicialGen (name){
  let objectName = name.split(" ")
  let iniciales = " "
  for (i=0; i<objectName.length; i++){
    iniciales += objectName[i].charAt(0)+"."+" "
   } 
   console.log(iniciales)
}

inicialGen ("Berenice Verver Y Vargas Altamirano")

/*Ejercico 4: Teniendo en cuenta el siguiente texto: 
"Si esperas a estar listo, esperarás toda la vida"
Queremos obtener una nueva frase que contenga sólo las palabras en posición non
-> "Esperas estar esperarás la "*/
function frasesNon(frase){
  let wordsArray = frase.split(" ")
  let newphrase = " "
}
frasesNon("Si esperas a estar listo, esperarás toda la vida")

/*Ejercicio 5: Se requiere solicitar el nombre, edad, y correo de una persona, y crear una lista de personas
*/



/*Ejercico 6: 
  1.- Entregar el promedio general del score de los koders
  2.- Obtener una nueva lista que contenga únicamente aquellos koders cuyo score sea mayor que 9
  3.- Saber cuantos koders hay de alguna generación específica:
      1 -> no hay koders de esta generación
      9 -> hay 1 koder de la generación 9
      12 -> hay 2 koders de la generación 12
*/
let koders = [
  {
    name: "Said Barrera",
    generation: 12,
    score: 9.2,
  },
  {
    name: "Helena Fuentes",
    generation: 8,
    score: 8.7,
  },
  {
    name: "Gerardo Cabrera",
    generation: 12,
    score: 9.9,
  },
  {
    name: "Brenda Guerrero",
    generation: 8,
    score: 8.4,
  },
  {
    name: "Alejandro Fuentes",
    generation: 7,
    score: 8.6,
  },
  {
    name: "Sandra Tellez",
    generation: 9,
    score: 9.9,
  },
];

//VARIABLE GLOBAL PARA EL NUMERO DE ELEMENTOS DEL OBJETO
let cantidadElementos = koders.length;
function promedioTotal(koders) {
  let score = 0;
  let promedio = 0;
  for (i = 0; i < cantidadElementos; i++) {
    score += koders[i].score;
  }
  promedio = score / cantidadElementos;
  return promedio;
}
let total = promedioTotal(koders);
console.log(total);
//---------------------------------------------
function mayorNueve(koders) {
  let nombres = [];
  for (i = 0; i < cantidadElementos; i++) {
    if (koders[i].score > 9) {
      nombres.push(koders[i].name);
    }
  }
  return nombres;
}
let nombresmayornueve = mayorNueve(koders);
console.log(nombresmayornueve);
//---------------------------------------------
function generacion(koders, generacion) {
  let cantidadKoders = 0;
  for (let i = 0; i < cantidadElementos; i++) {
    if (koders[i].generation == generacion) {
      cantidadKoders++;
    }
  }
   return cantidadKoders>0 ? "hay: " +cantidadKoders+ " koders en la generacion "+ generacion  : "No existen Koeders en esa generacion"
}
let estudiantes = generacion(koders, 12);
console.log(estudiantes);
