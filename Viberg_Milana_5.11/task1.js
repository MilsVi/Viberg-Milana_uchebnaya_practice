let titleElement = document.getElementById("title");
let descriptionElement = document.getElementById("description");
let buttonElement = document.getElementById("change");

buttonElement.addEventListener("click", function() {
    titleElement.textContent = "Добро пожаловать!";
    descriptionElement.textContent = "Мы изучаем JS и DOM";
});