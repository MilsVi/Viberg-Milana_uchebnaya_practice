async function getWeather() {
  try {
    const response = await fetch('https://wttr.in/Moscow?format=j1');
    const data = await response.json();
    console.log(data);

    const temperature = data.current_condition[0].temp_C;
    const humidity = data.current_condition[0].humidity;
    const weather = data.current_condition[0].weather[0].value;
    console.log(`Температура: ${temperature}C`);
    console.log(`Влажность: ${humidity}%`);
    console.log(`Погода: ${weather}`);
    
  } catch (error) {
    console.error('Ошибка:', error.message);
  }
}
getWeather();