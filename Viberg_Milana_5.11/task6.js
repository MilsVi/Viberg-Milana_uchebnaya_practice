const student1 = {
    name: "Алина",
    group: "2ВР-1-25"
}
const student2 = {
    name: "Максим",
    group: "2ВР-2-25"
};

function showInfo() {
    console.log(this.name, this.group);
}
student1.showInfo = showInfo;
student2.showInfo = showInfo;
student1.showInfo();
student2.showInfo();
let std1Show = student1.showInfo;
std1Show();

/*При вызове student1.showInfo() и student2.showInfo() this ссылается на соответствующий объект, поэтому выводятся правильные имя и группа. При вызове через переменную std1Show() связь с объектом теряется — this становится undefined или window, поэтому выводится undefined undefined.*/