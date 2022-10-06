'use script';

window.addEventListener('DOMContentLoaded', () => {

    function getNowDate() {
        const now = new Date(),
              hours = now.getHours(),
              minutes = (now.getMinutes()<10?'0':'') + now.getMinutes(),
              day = now.getDate(),
              month = now.getMonth() + 1,
              year = now.getFullYear();

        return `${hours}:${minutes} ${day}.${month}.${year}`;
    }

    const tasksDB = {
        backlog: [
            {name: 'Выучить JS', createDate: getNowDate()},
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
