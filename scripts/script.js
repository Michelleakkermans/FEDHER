// JavaScript Document
console.log("hi");

var deMenuButton = document.querySelector("header button");
var deNav = document.querySelector("header nav");

deMenuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    deNav.classList.add("open");
}

// stap 1 - zoek sluiten button op
var deSluitButton = document.querySelector("header nav button")

// stap 2 - laat die button luisteren naar kliks
deSluitButton.addEventListener("click", sluitMenu)

// stap 3 - in de functie verwijder de class van de nav == remove is weggaan en add is toevoegen
function sluitMenu(){
  deNav.classList.remove("open");
}
