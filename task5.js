let usernameInput = document.getElementById("username");
let resultParagraph = document.getElementById("result");

usernameInput.value = "Новое имя студента";
resultParagraph.textContent = usernameInput.value;