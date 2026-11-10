const employee = {
    name: "Дмитрий",
    position: "Веб-разработчик",
    showInfo(){
        console.log(`${this.name}, ${this.position}`);
    } 
};
employee.showInfo();
const showInfo2 = employee.showInfo;
showInfo2();
const showInfo3 = employee.showInfo.bind(employee);
showInfo3();
const secondEmployee = {
    name: "Анна",
    position: "Техник"
};

const secondEmployeeShowInfo = employee.showInfo.bind(secondEmployee);
secondEmployeeShowInfo();
