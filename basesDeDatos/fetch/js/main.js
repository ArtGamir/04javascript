//declaración de elementos
let productCard = document.getElementById ("productCard")

//product registration
let productReg = document.getElementById ("regButton")

productReg.addEventListener ("click", async() =>{
    let name = document.getElementById ("name_input").value
    let description = document.getElementById ("desc_input").value
    let picture = document.getElementById ("pic_input").value
    let price = Number(document.getElementById ("price_input").value)
    let productObject = {name, description, picture, price}
    if (name && description && picture && price){
        return productObject
    } else {
        
    }

    //---método POST---
    const createProduct = async (productObject) => {
        let response = await fetch (
            "https://primerdatabase-e3229-default-rtdb.firebaseio.com/products.json",
            {
                method: "POST",
                body: JSON.stringify(productObject)
            }
        )
        let data = await response.json()
        return data
    }
    let response = await createProduct(productObject)
    console.log(response)
})

//card creation
const createCard = (product) => {

    let divCard = document.createElement("div");
    divCard.classList.add("card", "col", "mb-4");

    let img = document.createElement("img");
    img.classList.add("card-img-top");
    img.setAttribute("src", product.picture);

    let divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body");

    let h5Name = document.createElement("h5");
    h5Name.classList.add("card-title");
    h5Name.innerText = product.name;

    let cardDesc = document.createElement("p");
    cardDesc.classList.add("card-text");
    cardDesc.innerText = product.description;

    let h5Price = document.createElement("h5");
    h5Price.classList.add("card-title");
    h5Price.innerText = "$" + product.price;

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("type", "button"); 
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
        deleteProduct(product);
    });

    divCardBody.append(h5Name, cardDesc, h5Price);
    divCard.append(img, divCardBody, deleteButton);
    productCard.append(divCard);
    return productCard;
}

//card print
 //---método GET---
const getAllProducts = async () => {
    let response = await fetch(
        "https://primerdatabase-e3229-default-rtdb.firebaseio.com/products.json"
    )
    let data = await response.json()
    return data
}

/*const printCard = async () => {
    let users = await getAllProducts()
    let current = productCard.innerHTML
    Object.values(products).products.forEach ((product => {
        let userHtml = createCard(product);
        productCard.innerHTML = current + userHtml
    }))
}

printCard()*/

//product delet
 //---método DELETE---
const deleteProduct = async (productId) => {
    let response = await fetch (
        `https://primerdatabase-e3229-default-rtdb.firebaseio.com/products/${productId}/.json`,
        {
            method: "DELETE"
        }
        
    )
    let data = await response.json()
    return data
}

printCard()