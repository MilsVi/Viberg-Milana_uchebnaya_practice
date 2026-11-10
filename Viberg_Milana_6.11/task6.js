function getThreeCitiesWeather() {
    const urls = [
        "https://wttr.in/Moscow?format=j1",
        "https://wttr.in/London?format=j1",
        "https://wttr.in/Paris?format=j1"
    ];

    const promises = urls.map(function(url) {
        return fetch(url).then(function(response) {
            return response.json();
        });
    });
    Promise.all(promises)
        .then(function(results) {
            
            const moscowTemp = results[0].current_condition[0].temp_C;
            const londonTemp = results[1].current_condition[0].temp_C;
            const parisTemp = results[2].current_condition[0].temp_C;

            console.log("Москва: " + moscowTemp + "C");
            console.log("Лондон: " + londonTemp + "C");
            console.log("Париж: " + parisTemp + "C");
        })
        .catch(function(error) {
            console.log("Ошибка: " + error.message);
        });
}

getThreeCitiesWeather();