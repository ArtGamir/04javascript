let token = localStorage.getItem("token");
let isLogged = token;
// const existToken = ()=>{
//     if (!token){
//         let listContainer = document.getElementById("logout-container")
// listContainer.classList.add("d-none")
//     }
// }
let loginButton = document.getElementById("login-button")
let logoutButton = document.getElementById("logout-button")
let formContainer = document.getElementById("form-container")
let listContainer = document.getElementById("logout-container")
// listContainer.classList.add("d-none")
const login = () => {
    /*aquí simulamos que nos  llegó un token*/
    let token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOjM3LCJuYW1lIjoiSm9obiBEb2UiLCJpYXQiOjE1MTYyMzkwMjIsImF2YXRhciI6InNvbWUgdXJsIn0.8QCJeN7GXddZduC4b-cOfSRSOpualiTQwNk-VmhD_gU";
    localStorage.setItem("token", token);
    // formContainer.innerHTML = ""
    // formContainer.classList.add("d-none")
    // listContainer.classList.remove("d-none")
};
loginButton.addEventListener("click", ()=>{
    // alert("diste click en el boton login")
    formContainer.classList.add("d-none")
    listContainer.classList.remove("d-none")
    login()
})
logoutButton.addEventListener("click", ()=>{
    // alert("diste click en el boton login")
    logout()
})
const logout = () => {
    localStorage.removeItem("token");
    // listContainer.innerHTML = ""
    listContainer.classList.add("d-none")
    formContainer.classList.remove("d-none")
};