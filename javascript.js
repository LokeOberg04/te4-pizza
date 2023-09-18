import menu from './menu.js'

console.log("js loaded...")

console.log(menu)
let pizzaList = document.getElementById("pizzaList")
function showMenu(id) {

    console.log(menu[id].type)
    menu[id].pizzor.forEach((pizza) => {

        let pizzaItem = document.createElement("li")
        let pizzaText = document.createElement("p")
        pizzaText.innerHTML = pizza.name + "<br><hr>" + pizza.ingredients + "<br>" + pizza.price
        console.log("Pizza Name: " + pizza.name)

        console.log("Pizza Ingredients: " + pizza.ingredients)

        console.log("Pizza Price: " + pizza.price)

        console.log("...")
        pizzaItem.appendChild(pizzaText)
        pizzaList.appendChild(pizzaItem)
    })

}

showMenu(0);