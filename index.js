
/* add items */
const inputBox = document.querySelector('.create-new-todo input'); 
const todoList = document.querySelector('.todo-list ul');

inputBox.addEventListener('keypress', (event) => {
    if(event.charCode === 13 && inputBox.value.length > 0){
        let text = inputBox.value;
        addNewTodo(text);
        console.log(inputBox.value);
        inputBox.value = "";
    }
    
});


function addNewTodo(text){
    const newTodo = document.createElement('li');

    newTodo.innerHTML = 
    `
        <label class="list-element">
        <input class="checkbox" type="checkbox"> 
        <span class="text">${text}</span>
        </label>
        <span class="remove"></span> 
    `;

    // add class name to newTodo
    newTodo.classList.add('row');

    todoList.append(newTodo);









}


