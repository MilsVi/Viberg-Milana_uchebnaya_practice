const employee = {
    name: "Алина",
    position: "Разработчик",
    department: "IT-отдел"
};

employee.showCard = function () {
    console.log("Имя:", this.name);
    console.log("Должность:", this.position);
    console.log("Отдел:", this.department);
};

employee.showCard();
/*this ссылается на объект employee, все данные выводятся корректно*/

const show = employee.showCard;
show();
/*Контекст теряется, this = window, выводится undefined*/

const boundShow = employee.showCard.bind(employee);
boundShow();
/*Принудительно привязывает this к объекту, контекст сохраняется*/

function showCardInCity(city) {
    console.log("Имя:", this.name);
    console.log("Должность:", this.position);
    console.log("Отдел:", this.department);
    console.log("Город:", city);
}

showCardInCity.call(employee, "Москва");
/*Вызывает функцию с указанным this и аргументами по одному*/

showCardInCity.apply(employee, ["Санкт-Петербург"]);
/*То же, что call(), но аргументы передаются массивом*/

const regularBtn = document.querySelector("#regularBtn");
const arrowBtn = document.querySelector("#arrowBtn");

regularBtn.addEventListener("click", function (event) {
    console.log("Обычная функция:");
    console.log("this:", this);
    console.log("event.currentTarget:", event.currentTarget);
});
/*this = кнопка (элемент, на котором событие)*/

arrowBtn.addEventListener("click", (event) => {
    console.log("Стрелочная функция:");
    console.log("this:", this);
    console.log("event.currentTarget:", event.currentTarget);
});
/*this = window (берётся из внешнего окружения), event.currentTarget = кнопка*/