function checkWeather(temperature) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (temperature > 0) {
        resolve("Тепло!");
      } else {
        reject(new Error("Холодно!"));
      }
    }, 1000);
  });
}
  

checkWeather(5)
  .then((result) => {
    console.log("Результат:", result); 
  })
  .catch((error) => {
    console.error("Ошибка:", error.message);
  });
  
checkWeather(-5)
  .then((result) => {
    console.log("Результат:", result);
  })
  .catch((error) => {
    console.error("Ошибка:", error.message);
  });