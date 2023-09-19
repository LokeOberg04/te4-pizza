import menu from './menu.js'

console.log("js loaded...")

console.log(menu)
let pizzaList = document.getElementById("pizzaList")
function showMenu(id) {

    console.log(menu[id].type)
    menu[id].pizzor.forEach((pizza) => {

        let pizzaItem = document.createElement("li")
        let pizzaName = document.createElement("h5")
        let div = document.createElement("div")
        let pizzaText = document.createElement("p")
        let pizzaPrice = document.createElement("p")

        pizzaName.innerHTML = pizza.name
        pizzaPrice.innerHTML = pizza.price
        pizzaText.innerHTML = pizza.ingredients + "<br><hr>"

        div.classList.add("menuDiv")
        pizzaItem.classList.add("menuItem")
        pizzaName.classList.add("menuItemName")
        pizzaText.classList.add("menuItemText")
        pizzaPrice.classList.add("menuItemPrice")

        console.log("Pizza Name: " + pizza.name)

        console.log("Pizza Ingredients: " + pizza.ingredients)

        console.log("Pizza Price: " + pizza.price)

        console.log("...")
        div.appendChild(pizzaName)
        div.appendChild(pizzaPrice)
        pizzaItem.appendChild(div)
        pizzaItem.appendChild(pizzaText)
        pizzaList.appendChild(pizzaItem)
    })

}

showMenu(2);