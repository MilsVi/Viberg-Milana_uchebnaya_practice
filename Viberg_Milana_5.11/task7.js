const product = {name: "Наушники", price: 5000};
function showProduct(discount, city) {
    const finalPrice =this.price - discount;
    console.log(`Товар: ${this.name}, Цена со скидкой: ${finalPrice}, Город: ${city}`);
}
showProduct.call(product, 500, "Москва");
showProduct.apply(product, [500, "Санкт-Петербург"]);

/*Оба метода первым параметром принимают this, но call() принимает последующие аргументы через запятую(по отдельности), а apply() принимает их в виде единого массива.*/