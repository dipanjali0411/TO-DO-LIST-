let tasks = [];

const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const clearCompletedButton = document.getElementById('clearCompletedButton');

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

clearCompletedButton.addEventListener('click', clearCompleted);

function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      toggleComplete(index);
    });
    taskItem.appendChild(checkbox);

    const taskText = document.createElement('span');
    taskText.textContent = task.text;
    if (task.completed) {
      taskItem.classList.add('completed');
    }
    taskItem.appendChild(taskText);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteTask(index);
    });
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
  });
}

function addTask() {
  const text = taskInput.value.trim();
  if (text !== '') {
    tasks.push({ text: text, completed: false });
    taskInput.value = '';
    renderTasks();
  }
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function clearCompleted() {
  tasks = tasks.filter(task => !task.completed);
  renderTasks();
}

renderTasks();