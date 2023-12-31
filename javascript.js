fetch('menu.json')
    .then((response) => response.json())
    .then((menu) => {

        console.log("js loaded...")

        document.getElementById("karta").remove();

        document.getElementById("prev").hidden = false;
        document.getElementById("next").hidden = false;
        document.getElementById("dots").hidden = false;
        document.getElementById("aboutP").classList.remove("aboutP")

        let EECounter = 0;

        let easterEggButton = document.getElementById("vackerPizza")

        easterEggButton.onclick = function () {
            easteregg()
        };

        let deliciousText = document.getElementById("deliciousText")
        let slogan = document.getElementById("slogan")

        deliciousText.onclick = function () {
            if (deliciousText.innerText == "Delicious") {
                deliciousText.innerText = "Suspicious"
                slogan.innerText = "Suspicious but Delicious"
            } else {
                deliciousText.innerText = "Delicious"
                slogan.innerText = "Där hembakat möter fryst"
            }
        };

        function delay(time) {
            return new Promise(resolve => setTimeout(resolve, time));
        }



        async function easteregg() {
            EECounter++;
            if (EECounter == 5) {
                easterEggButton.src = "./images/italianboi.png"
                await delay(100)
                easterEggButton.style.height = "1000px";
                easterEggButton.style.width = "1900px";
                await delay(250);
                easterEggButton.style.height = "3rem";
                easterEggButton.style.width = "4rem";
                easterEggButton.style.filter = "brightness(200%)"
                easterEggButton.style.boxShadow = "12px 12px 40px 20px #ffffff"
                iconChanger()
            }
        }

        async function iconChanger() {
            while (true) {
                easterEggButton.src = "./images/italianboi.png"
                await delay(1000);
                easterEggButton.src = "./images/deliciousPizza.png"
                await delay(1000);
            }
        }

        let menuButtons = document.getElementById("menuButtons")
        let pizzaButton = document.getElementById("ordinarie")
        pizzaButton.classList.add("menuButton", "menuButtonFocus")
        pizzaButton.innerHTML = "Ordinarie"
        let vegetarianButton = document.getElementById("vegetarian")
        vegetarianButton.classList.add("menuButton")
        vegetarianButton.innerHTML = "Vegetarian"
        let bakedButton = document.getElementById("inbakad")
        bakedButton.classList.add("menuButton")
        bakedButton.innerHTML = "Inbakad"
        let specialButton = document.getElementById("special")
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
                let pizzaName = document.createElement("p")
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
    });