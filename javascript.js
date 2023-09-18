import menu from './menu.js'

console.log("js loaded...")

console.log(menu)
let pizzaList = document.createElement("ul")
function showMenu(id) {

    console.log(menu[id].type)
    menu[id].pizzor.forEach((pizza) => {

        let pizzaItem = document.createElement("li")
        let pizzatext = document.createElement("p")
        pizzatext.innerHTML = "\nPizza Name: " + pizza.name + "\nPizza Ingredients: " + pizza.ingredients + "\nPizza Price: " + pizza.price
        console.log("Pizza Name: " + pizza.name)

        console.log("Pizza Ingredients: " + pizza.ingredients)

        console.log("Pizza Price: " + pizza.price)

        console.log("...")
    })

}

showMenu(0);