/*Función Suma*/

function sumaDosNumeros (numero1, numero2) {
 let result = numero1 + numero2;
    return result;
  }

  let suma = sumaDosNumeros (6,9)

console.log(suma)

/*Función Multiplicación*/
function multiplicaDosNumeros (numero1, numero2) {
    let result = numero1 * numero2;
       return result;
     }
   
     let multiplicacion = multiplicaDosNumeros (3,2)
   
   console.log(multiplicacion)


/*Función Resta*/
   function restaDosNumeros (numero1, numero2) {
    let result = numero1 - numero2;
       return result;
     }
   
     let resta = restaDosNumeros (8,4)
   
   console.log(resta)


/*Función División*/
   function divideDosNumeros (numero1, numero2) {
    let result = numero1 / numero2;
       return result;
     }
   
     let divide = divideDosNumeros (12,4)

     console.log(divide)

     
/*Función Módulo*/
     function modDosNumeros (numero1, numero2) {
      let result = numero1 % numero2;
         return result;
       }
     
       let mod = modDosNumeros (13,4)
     
     console.log(mod)


/*Función Mayor de dos números*/

function mayorDeDosNumeros (numero1, numero2) {
  if (numero1 > numero2){
    return `${numero1}es el mayor`
  } else if (numero1 < numero2){
    return `${numero2} es el mayor`
  } else {
    return `los números son iguales`
  }
}

let elMayorEs = mayorDeDosNumeros (28,45)
     
     console.log(elMayorEs)

/*Función Par o Non*/