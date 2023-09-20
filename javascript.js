import menu from './menu.js'

console.log("js loaded...")

document.getElementById("prev").hidden = false;
document.getElementById("next").hidden = false;

let menuButtons = document.getElementById("menuButtons")
let pizzaButton = document.createElement("button")
pizzaButton.classList.add("menuButton", "menuButtonFocus")
pizzaButton.innerHTML = "Ordinarie"
let vegetarianButton = document.createElement("button")
vegetarianButton.classList.add("menuButton")
vegetarianButton.innerHTML = "Vegetarian"
let bakedButton = document.createElement("button")
bakedButton.classList.add("menuButton")
bakedButton.innerHTML = "Inbakad"
let specialButton = document.createElement("button")
specialButton.classList.add("menuButton")
specialButton.innerHTML = "Specialare"

menuButtons.append(pizzaButton, vegetarianButton, bakedButton, specialButton)

let pizzaList = document.getElementById("pizzaList")
function showMenu(id) {

    while (pizzaList.firstChild) {
        pizzaList.removeChild(pizzaList.lastChild);
    }

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

        div.appendChild(pizzaName)
        div.appendChild(pizzaPrice)
        pizzaItem.appendChild(div)
        pizzaItem.appendChild(pizzaText)
        pizzaList.appendChild(pizzaItem)
    })

}

function toggleFocus(id) {
    pizzaButton.classList.remove("menuButtonFocus")
    vegetarianButton.classList.remove("menuButtonFocus")
    bakedButton.classList.remove("menuButtonFocus")
    specialButton.classList.remove("menuButtonFocus")
    id.classList.add("menuButtonFocus")
}

showMenu(0);

pizzaButton.onclick = function () { showMenu(0); toggleFocus(pizzaButton) };
vegetarianButton.onclick = function () { showMenu(1); toggleFocus(vegetarianButton) };
bakedButton.onclick = function () { showMenu(2); toggleFocus(bakedButton) };
specialButton.onclick = function () { showMenu(3); toggleFocus(specialButton) };

document.getElementById("prev").onclick = function () { plusSlides(-1); };
document.getElementById("next").onclick = function () { plusSlides(1); };
document.getElementById("dot1").onclick = function () { currentSlide(1); };
document.getElementById("dot2").onclick = function () { currentSlide(2); };
document.getElementById("dot3").onclick = function () { currentSlide(3); };

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
