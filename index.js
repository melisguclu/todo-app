
/* add items */
const inputBox = document.querySelector('.create-new-todo input'); 
const todoList = document.querySelector('.todo-list ul');

inputBox.addEventListener('keypress', (event) => {
    if(event.charCode === 13 && inputBox.value.length > 0 && inputBox.value.trim() !== ""){
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
    if(event.target.classList.contains('remove') ){
        event.target.parentElement.remove();
        if(!event.target.parentElement.classList.contains('checked')){
            updateItemCount(-1);
        }
    }
});


/* count items left */
const itemsLeftSpan = document.querySelector('.items-left span');
itemsLeftSpan.innerHTML =document.querySelectorAll('.new-todo').length;


/*update items left */
function updateItemCount(number){
    itemsLeftSpan.innerHTML = + itemsLeftSpan.innerHTML + number;
}

/* mark items as completed */
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


/* filter items */
const filterOptions = document.querySelector('.filter');

filterOptions.addEventListener('click', (event) => {
  const todoListAll = document.querySelectorAll('.new-todo');
  const filterItems = filterOptions.querySelectorAll('div');
  filterItems.forEach((item) => {
    item.style.color = ''; 
  });
  event.target.style.color = '#3A7BFD';
  
  
  if (event.target.classList.contains('all')) {
    todoListAll.forEach((item) => {
      item.style.display = 'flex';
    });
  } else if (event.target.classList.contains('active')) {
    todoListAll.forEach((item) => {
      if (item.classList.contains('checked')) {
        item.style.display = 'none';
      } else {
        item.style.display = 'flex';
      }
    });
  } else if (event.target.classList.contains('completed')) {
    todoListAll.forEach((item) => {
      if (item.classList.contains('checked')) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }
});


/* clear completed items */
const clearOption = document.querySelector('.clear');

clearOption.addEventListener('click', () => {
  const todoListAll = document.querySelectorAll('.new-todo');
  todoListAll.forEach((item) => {
    if (item.classList.contains('checked')) {
      item.remove();
    }
  });
});


/* drag and drop */
const list = document.querySelector('.list');
new Sortable(list, {
  animation: 350,
});




