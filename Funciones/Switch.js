/* 
    Vamos a crear un consejero de nombre para mi mascota, este consejero necesita saber qué especie es tu mascota (perro, gato, ave) y ofrecer el siguiente nombre
        perro -> Milaneso
        gato -> Michiflais
        ave -> Piolín

    si la especie no es conocida por el consejero, nos debe decir que no conoce esa especie
*/

function nombreMascota (especie){
switch (especie){
    case "perro":
        console.log("Milaneso")
        break;
    case "gato":
        console.log("Michiflais")
        break;
    case "ave":
        console.log("Piolín")
        break;
    default:
        console.log("no conozco esa especie.")
        break;
    }
}

nombreMascota ("conejo");


/*
    tenemos un calculador de dados. Este calculador requiere saber los puntos que obtuviste en cada dado ( considerando dos dados).
    Una vez que le digas los números te debe avisar si ganaste o perdiste considerando las siguientes combinaciones ganadoras:

    2,2
    4,6
    1,1

    cualquier otra combinación se considera perdedora
    los dados sólo tienen puntos del 1 al 6
*/

function calculadoraDados (n1, n2){
   if (n1 > 6 && n2 > 6){
       console.log ("el dado debe tener 6 lados")
        }
    else if (n1===2 && n2===2){
        console.log ("la combinación es ganadora")
    }
    else if (n1===4 && n2===6){
        console.log ("la combinación es ganadora")
    }
    else if (n1===1 && n2===1){
        console.log ("la combinación es ganadora")
    }
    else {
        console.log("no es ganador")
    }
    }
    
    calculadoraDados (2,2);