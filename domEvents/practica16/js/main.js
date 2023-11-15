let users = [];
let inputName = document.getElementById("nombre_input");
let inputEmail = document.getElementById("exampleInputEmail1");
let inputPhoto = document.getElementById("foto_input");
let chageButtom = document.getElementById("changeButtom");
let usersCard = document.getElementById("usersCard")
let form = document.getElementById("form1")
let nameFilter = document.getElementById("name_filter")
let title = ""

form.addEventListener("submit", (event) => {
    event.preventDefault(); //previene que el botón del formulario refresque la página
    
    const name = inputName.value;
    const email = inputEmail.value;
    const photo = inputPhoto.value;
    const id = Date.now();
    let userObject = { name, email, photo, id };
    users.push(userObject);
    printCard(users);
    form.reset();
});

const cardCreation = (user) => {
    let divCard = document.createElement("div");
    divCard.classList.add("card", "col", "mb-4");

    let img = document.createElement("img");
    img.classList.add("card-img-top");
    img.setAttribute("src", user.photo);

    let divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");

    let h5Name = document.createElement("h5");
    h5Name.classList.add("card-title");
    h5Name.innerText = user.name;

    let cardEmail = document.createElement("p");
    cardEmail.classList.add("card-text");
    cardEmail.innerText = user.email;

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("type", "button"); // Cambiado a "button"
    deleteButton.classList.add("btn", "btn-primary");
    deleteButton.innerText = "Borrar";
    deleteButton.addEventListener("click", () => {
        borrar(user);
    });

    divCardBody.append(h5Name, cardEmail);
    divCard.append(img, divCardBody, deleteButton);
    usersCard.append(divCard);
    return usersCard;
}

const printCard = (users) => {
    usersCard.innerHTML = "";
    users.forEach(user => {
        cardCreation(user);
    });
}

nameFilter.addEventListener("input", function() {
    const filtroValor = nameFilter.value.toLowerCase();
    const usuariosFiltrados = users.filter(user => user.name.toLowerCase().includes(filtroValor));
    printCard(usuariosFiltrados);
  });

const borrar = (user) => {
    const index = users.indexOf(user); //indexOf ubica el índice en donde inicia un substring "toggle a working" working = 9
    {
        users.splice(index, 1);
        printCard(users);
    }
}