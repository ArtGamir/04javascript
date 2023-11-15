/*Se ingresa una palabra y regresa dos palabras:
Una construida con las letras de posición non
y otra construida con las letras de posición par*/

function divWord(text) {
    let charCount = text.length
    let oddWord = ""
    let evenWord = ""

for (let i=0; i<=charCount; i++) {
    let currentChar = text.charAt(i)
    i % 2 === 0 ? (evenWord += currentChar) : (oddWord += currentChar)
}
console.log("Palabra con nones:", oddWord)
console.log("Palabra con pares:", evenWord)
}

divWord("Alexandria")

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