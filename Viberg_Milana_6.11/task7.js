const urls = [
    'https://wttr.in/Moscow?format=j1',
    'https://wttr.inn/Moscow?format=j1',
    'https://wttr.in/London?format=j1'
];
  
const promises = urls.map(url => fetch(url));
  
  Promise.allSettled(promises)
    .then(results => {
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          console.log(`Запрос ${index + 1}: OK`);
        } else {
          console.log(`Запрос ${index + 1}: Ошибка — ${result.reason}`);
        }
      });
    });