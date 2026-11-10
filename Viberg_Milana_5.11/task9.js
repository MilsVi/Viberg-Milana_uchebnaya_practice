const regularBtn = document.getElementById("regular");
const arrowBtn = document.getElementById("arrow");

regularBtn.addEventListener("click", function(event){
    console.log(this);
    console.log(event.currentTarget);
});

arrowBtn.addEventListener("click", (event) => {
    console.log(this);
    console.log(event.currentTarget);
});

/*В обычной функции this ссылается на элемент, вызвавший событие (кнопку), потому что addEventListener устанавливает контекст вызова. В стрелочной функции this не имеет своего контекста и берётся из внешнего окружения (глобальный объект window), поэтому выводит не кнопку. В обоих случаях event.currentTarget корректно указывает на элемент с обработчиком, так как это свойство, не зависящее от this.*/