function fetchWithTimeout(url, ms) {
    const fetchPromise = fetch(url);
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Таймаут')), ms)
    );
  
    return Promise.race([fetchPromise, timeoutPromise]);
  }
  
fetchWithTimeout('https://wttr.in/Moscow?format=j1', 100)
    .then(data => console.log('Данные:', data))
    .catch(error => console.log('Ошибка:', error.message));
  
fetchWithTimeout('https://wttr.in/Moscow?format=j1', 5000)
    .then(data => console.log('Данные получены!'))
    .catch(error => console.log('Ошибка:', error.message));