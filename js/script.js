'use script';

window.addEventListener('DOMContentLoaded', () => {

    const tasksDB = {
        backlog: [
            {name: 'Выучить JS', createDate: 'method'},
            {name: 'Выучить React', createDate: 'method'}
        ],

        inProgress: [
            {name: 'Поесть', createDate: 'method'},
            {name: 'Перестать тупить', createDate: 'method'}
        ],

        done: [
        
            {name: 'Погладить Тошу', createDate: 'method'},
            {name: 'Пройти Divinity', createDate: 'method'}
        ],

        trash: [
            {name: 'Сходить погулять', createDate: 'method'},
            {name: 'Прочитать новости', createDate: 'method'}
        ]   
    };

    function getNowDate() {
        const now = new Date(),
              hours = now.getHours(),
              minutes = (now.getMinutes()<10?'0':'') + now.getMinutes(),
              day = now.getDate(),
              month = now.getMonth() + 1,
              year = now.getFullYear();

        return `${hours}:${minutes} ${day}.${month}.${year}`;
    }

    class card {
        constructor(name) {
            this.name = name;
            this.getCreateDate();
        }

        getCreateDate() {
            this.createDate = getNowDate();
        }

        getCompletionDate() {
            this.completionDate = getNowDate();
        }

        render() {
            const newTask = document.createElement('div');
            newTask.classList.add('taskboard__item', 'task');

            newTask.innerHTML = `
                <div class="task__body">
                    <p class="task__view">${this.name}</p>
                    <input class="task__input" type="text" value="${this.name}">
                </div>
                <button class="task__edit" type="button" aria-label="Изменить"></button>
            `;

            document.querySelector('.taskboard__group--backlog .taskboard__list').append(newTask);
            console.log(this);
        }
    }

    new card('Покурить').render();

    console.log(tasksDB);

    const newTaskInput = document.querySelector('#add-task'),
          addNewTaskBtn = document.querySelector('button[type="submit"]');

    addNewTaskBtn.addEventListener('click', function(event) { // Слушатель для сабмита
        event.preventDefault();

        createNewTaskCard(newTaskInput.value);
        newTaskInput.value = '';
    });

    function createNewTaskCard(value) {
        const div = document.createElement('div');
        div.className = 'taskboard__item task';

        div.innerHTML = `        
              <div class="task__body">
                <p class="task__view">${value}</p>
                <input class="task__input" type="text" value="${value}">
              </div>
              <button class="task__edit" type="button" aria-label="Изменить"></button>
        `;

        const backlogTaskList = document.querySelector('article.taskboard__group--backlog .taskboard__list');
        backlogTaskList.append(div);
    }

});
