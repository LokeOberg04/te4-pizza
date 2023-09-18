import menu from './menu.js'

console.log("js loaded...")

console.log(menu)

function showMenu(id) {

    console.log(menu[id].type)
    menu[id].pizzor.forEach((pizza) => {

        console.log("Pizza Name: " + pizza.name)

        console.log("Pizza Ingredients: " + pizza.ingredients)

        console.log("Pizza Price: " + pizza.price)

        console.log("...")
    })

}

showMenu(0);