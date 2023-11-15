//Ejercicio 8: pasar las siguientes funciones convencionales a funciones flecha:
function getTriangleArea(base, height) {
    let area = (base * height) / 2;
    return area;
  }
  
  function checkIfIsEven(number) {
    let result = number % 2 === 0;
    return result;
  }
  
  function getRandomKoder(kodersArray) {
    let number = Math.floor(Math.random() * kodersArray.length);
    let koder = kodersArray[number];
    return koder;
  }
  
//Respuesta:
  const getTriangleArea = (base, height) => 
     area = (base * height) / 2;

     console.log(getTriangleArea(8,20))

const checkIfIsEven = (number) =>
        result = number % 2 === 0;
    
    console.log(checkIfIsEven(14))

const getRandomKoder = (kodersArray) => 
       koder = kodersArray[Math.floor(Math.random() * kodersArray.length)];

kodersArray = [
    "Angela",
    "Anais",
    "Alejandro",
    "Dante",
    "Jacob",
    "Jorge",
    "Karla",
    "Lalo",
    "Luis",
    "Oswaldo"

]

console.log(getRandomKoder(kodersArray))

let kodersArray2 = [
    {name: "Alejandro", lastname: "Sanchez"},
    {name: "Karla Ameyali", lastname: "Hernandez Lorenzo"},
    {name: "Angela Donaji", lastname: "Garcia Garcia"},
    {name: "Armando", lastname: "García Miranda"},
    {name: "Anais", lastname: "Laguna Torres"},
    {name: "Raul", lastname: "Gomez Sotelo"},
    {name: "Rodolfo", lastname: "Ramirez Morales"},
    {name: "Jorge Luis", lastname: "Juarez Reyes"},
    {name: "Ulises", lastname: "Flores Grande"},
    {name: "Ricardo", lastname: "Gomez Duran"},
    {name: "Jose Alejandro", lastname: "Sanchez Cruz"},
    {name: "Eduardo", lastname: "Montiel Luna"}
]

const initials = (kodersArray2) => {
  kodersArray2.forEach ((koder) => {console.log(koder.name.split(" ").charAt(0)+" "+koder.lastname.split(" ").charAt(0))})
  };

//Solución del profe. estudiarla(!)
const getInitials2 = (kodersArray2) => {
  let koderInitials = [];
  kodersArray2.forEach((koder) => {
    //console.log(koder);
    let { name, lastname } = koder;
    //console.log(name);
    let nameArray = name.split(" ");
    //console.log(nameArray2);
    let nameInitials = "";
    let lastnameInitials = "";
    nameArray2.forEach((word) => {
      console.log(word);
      let initial = word.charAt(0);
      console.log(initial);
      nameInitials += `${initial}. `;
    });

    let lastnameArray = lastname.split(" ");
    lastnameArray.forEach((word) => {
      let initial = word.charAt(0);
      console.log(initial);
      lastnameInitials += `${initial}. `;
    });
    console.log(nameInitials);
    console.log(lastnameInitials);
    koderInitials.push(`${nameInitials} ${lastnameInitials}`);
  });
  console.log(koderInitials);
};

getInitials2(otherArray);