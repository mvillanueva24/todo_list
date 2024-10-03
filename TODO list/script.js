document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.querySelector('#task-list');
    const eliminarTodoButtonutton = document.querySelector('#eliminar-todo');
    const marcarTodoButton = document.querySelector('#marcar-todo');
    const desmarcarTodoButton = document.querySelector('#desmarcar-todo');  

    const controls = document.querySelector('#controls');
    function updateControls() {
        const tasks = document.querySelectorAll('li');
        if (tasks.length > 1) {
            controls.style.display = 'block';
        } else {
            controls.style.display = 'none';
        }
    }


    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `${taskText} <button class="delete">Eliminar</button>`;


        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });


        li.querySelector('.delete').addEventListener('click', (e) => {
            e.stopPropagation();
            li.remove();
            updateControls();
        });

        taskList.appendChild(li);
        updateControls();
    }

    const taskInput = document.querySelector('#task-input');
    const addTaskButton = document.querySelector('#add-task');
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });


    eliminarTodoButtonutton.addEventListener('click', () => {
        taskList.innerHTML = '';
        updateControls();
    });

    marcarTodoButton.addEventListener('click', () => {
        document.querySelectorAll('li').forEach(li => {
            li.classList.add('completed');
        });
    });

    desmarcarTodoButton.addEventListener('click', () => {
        document.querySelectorAll('li').forEach(li => {
            li.classList.remove('completed');
        });
    });
});
