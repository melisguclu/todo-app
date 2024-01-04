
/* add items */
const inputBox = document.querySelector('.create-new-todo input'); 
const todoList = document.querySelector('.todo-list ul');

inputBox.addEventListener('keypress', (event) => {
    if(event.charCode === 13 && inputBox.value.length > 0){
        let text = inputBox.value;
        addNewTodo(text);
        inputBox.value = " ";
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

    newTodo.classList.add('new-todo');
    todoList.append(newTodo);
    updateItemCount(1);

}

/* remove items */
const isDone = document.querySelector('.checkbox');

todoList.addEventListener('click', (event) => {
    if(event.target.classList.contains('remove')){
        updateItemCount(-1);
        event.target.parentElement.remove();
    }
});


/* count items left */
const itemsLeftSpan = document.querySelector('.items-left span');
itemsLeftSpan.innerHTML =document.querySelectorAll('.list').length;

/*update items left */
function updateItemCount(number){
    itemsLeftSpan.innerHTML = + itemsLeftSpan.innerHTML + number;
}


const checkboxes = document.querySelectorAll('.new-todo input[type="checkbox"]');

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('checkbox')) {
      const listItem = event.target.closest('.new-todo');
      if (event.target.checked) {
        listItem.classList.add('checked');
        updateItemCount(-1);
      } else {
        listItem.classList.remove('checked');
        updateItemCount(1);
      }
    }
  });








