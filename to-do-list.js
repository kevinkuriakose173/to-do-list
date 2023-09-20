const toDoList = [];

displayToDoList();

function addToDo() {
    const inputNameElement = document.querySelector('.js-name-input');
    const inputDateElement = document.querySelector('.js-date-input');
    const name = inputNameElement.value; 
    const dueDate = inputDateElement.value;
    toDoList.push({name, dueDate});  

    inputNameElement.value = '';
    inputDateElement.value = '';
    displayToDoList();
}

document.querySelector('.js-add-button').addEventListener('click', () => {
    addToDo();
})

function displayToDoList() {
    let todoListHTML =``;
    for(let i = 0; i < toDoList.length; i++){
        const toDoObject = toDoList[i];
        const { name, dueDate } = toDoObject;
        const html = `
            <div class="item-name">
                <p>${name}</p>
            </div>
            <div class="item-date">
                <p>${dueDate}</p>
            </div>
            <div class="button">
                <button class="js-delete-button delete-button">Delete</button> 
            </div>
        `;
        todoListHTML += html;
    }   

    document.querySelector(`.js-list`).innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                toDoList.splice(index, 1); 
                displayToDoList(); 
        });
    });
}