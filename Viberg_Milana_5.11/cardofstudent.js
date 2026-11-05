const card = document.querySelector('#studentCard');
const nameEl = document.querySelector('#studentName');
const addBtn = document.querySelector('#addBtn');
const editBtn = document.querySelector('#editBtn');
const hideBtn = document.querySelector('#hideBtn');
const newDiscipline = document.querySelector('#newDiscipline');
const disciplinesList = document.querySelector('#disciplines');

editBtn.addEventListener('click', function () {
    nameEl.textContent = 'Петров Пётр Петрович';
});


hideBtn.addEventListener('click', function () {
    card.classList.add('hidden');
    card.style.display = 'none';
});

addBtn.addEventListener('click', function () {
    const text = newDiscipline.value;

    if (text !== '') {
        const li = document.createElement('li');
        li.textContent = text;
        disciplinesList.append(li);
        newDiscipline.value = '';
    }
});