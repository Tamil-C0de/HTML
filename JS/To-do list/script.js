const addTodoButton = document.getElementById('addTodo');
const todoinput = document.getElementById('todoinput');
const todoList = document.getElementById('todoList');

function createTodoItem(tasktext) {
    const li = document.createElement('li');
    li.textContent = tasktext;

    li.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    const removeElement = document.createElement('button');
    removeElement.textContent = '❌';
    removeElement.classList.add('remove-btn');
    removeElement.addEventListener('click', function () {
        li.remove();
    })

    li.appendChild(removeElement);
    todoList.appendChild(li);
}

addTodoButton.addEventListener('click', function () {
    const tasktext = todoinput.value.trim();

    if (tasktext !== '') {
        createTodoItem(tasktext);
        todoinput.value = '';
    }
});

todoinput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTodoButton.click();
    }
});