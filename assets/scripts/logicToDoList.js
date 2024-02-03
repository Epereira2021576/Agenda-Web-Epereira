document.addEventListener('DOMContentLoaded', function () {
  let tasksArray = JSON.parse(localStorage.getItem('tasks')) || [];

  function addTask(task) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';

    const taskLabel = document.createElement('label');
    taskLabel.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Borrar';
    deleteButton.addEventListener('click', function () {
      const index = tasksArray.indexOf(task);
      tasksArray.splice(index, 1);
      taskItem.remove();
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.addEventListener('click', function () {
      const index = tasksArray.indexOf(task);
      editTask(index);
    });

    function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasksArray));
    }

    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskLabel);
    taskItem.appendChild(deleteButton);
    taskItem.appendChild(editButton);

    document.getElementById('task-list').appendChild(taskItem);
  }

  function editTask(index) {
    const newTask = prompt('Ingresa la nueva descripción de la tarea');
    if (newTask) {
      tasksArray[index] = newTask;
      document
        .getElementById('task-list')
        .children[index].querySelector('label').textContent = newTask;
    }
  }

  document
    .getElementById('task-form')
    .addEventListener('submit', function (event) {
      event.preventDefault();
      const taskInput = document.getElementById('task-input');
      if (taskInput.value.trim() !== '') {
        tasksArray.push(taskInput.value);
        addTask(taskInput.value);
        taskInput.value = '';
        saveTasks();
      }
    });

  tasksArray.forEach((task) => {
    addTask(task);
  });
});
