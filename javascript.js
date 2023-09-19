import menu from './menu.js'

console.log("js loaded...")

console.log(menu)
let pizzaList = document.getElementById("pizzaList")
function showMenu(id) {

    console.log(menu[id].type)
    menu[id].pizzor.forEach((pizza) => {

        let pizzaItem = document.createElement("li")
        let pizzaName = document.createElement("h5")
        let pizzaText = document.createElement("p")
        let pizzaPrice = document.createElement("p")

        pizzaName.innerHTML = pizza.name + "<br><hr>"
        pizzaText.innerHTML = pizza.ingredients
        pizzaPrice.innerHTML = pizza.price

        pizzaItem.classList.add("menuItem")
        pizzaName.classList.add("menuItemName")
        pizzaText.classList.add("menuItemText")
        pizzaPrice.classList.add("menuItemPrice")

        console.log("Pizza Name: " + pizza.name)

        console.log("Pizza Ingredients: " + pizza.ingredients)

        console.log("Pizza Price: " + pizza.price)

        console.log("...")
        pizzaItem.appendChild(pizzaName)
        pizzaItem.appendChild(pizzaText)
        pizzaItem.appendChild(pizzaPrice)
        pizzaList.appendChild(pizzaItem)
    })

}

showMenu(0);