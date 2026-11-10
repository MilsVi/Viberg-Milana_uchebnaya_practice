const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');

function updateCount() {
    taskCount.textContent = taskList.children.length;
}

addBtn.addEventListener('click', function () {

    const text = taskInput.value;

    if (text !== '') {

        const li = document.createElement('li');
        li.textContent = text + ' ';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Удалить';

        deleteBtn.addEventListener('click', function () {
            li.remove();
            updateCount();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        taskInput.value = '';
        updateCount();
    }
});