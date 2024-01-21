
/* add items */
const inputBox = document.querySelector('.create-new-todo input'); 
const todoList = document.querySelector('.todo-list ul');

inputBox.addEventListener('keypress', (event) => {
    if(event.charCode === 13 && inputBox.value.length > 0 && inputBox.value.trim() !== ""){
        let text = inputBox.value;
        addNewTodo(text);
        inputBox.value = " ";
        if(recentFilter != "all"){
          addSelectedClass();
          showAll();
          recentFilter = "all";
        }    

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
    const isChecked = event.target.checked;

    if (isChecked && filterOptions[1].classList.contains('selected-filter')) {
      listItem.style.display = 'none';
    } else if (!isChecked && filterOptions[2].classList.contains('selected-filter')) {
      listItem.style.display = 'none';
    } else {
      listItem.style.display = 'flex';
    }

    if (isChecked) {
      listItem.classList.add('checked');
      updateItemCount(-1);
    } else {
      listItem.classList.remove('checked');
      updateItemCount(1);
    }
  }
});


/* filter items */
const filterOptions = document.querySelectorAll('.filter-option');
let recentFilter = "all";

function showAll(){
    const todoListAll = document.querySelectorAll('.new-todo');
    filterOptions[0].classList.add('selected-filter');
    todoListAll.forEach((item) => {
        item.style.display = 'flex';
    });
}
function showActive(){
    const todoListAll = document.querySelectorAll('.new-todo');
    todoListAll.forEach((item) => {
        if (item.classList.contains('checked')) {
          item.style.display = 'none';
        } else {
          item.style.display = 'flex';
        }
      });
}
function showCompleted(){
    const todoListAll = document.querySelectorAll('.new-todo');
    todoListAll.forEach((item) => {
        if (item.classList.contains('checked')) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
}

function addSelectedClass(){
  filterOptions.forEach((option) => {
    option.classList.remove('selected-filter');
  });
}

filterOptions.forEach((option) => {
    option.addEventListener('click', () => {
        if(option.classList.contains('all')){
            showAll();
            addSelectedClass();
            option.classList.add('selected-filter');
            recentFilter = "all";
        }
        else if(option.classList.contains('active')){
            showActive();
            addSelectedClass();
            option.classList.add('selected-filter');
            recentFilter = "active";
        }
        else if(option.classList.contains('completed')){
            showCompleted();
            addSelectedClass();
            option.classList.add('selected-filter');
            recentFilter = "completed";
        }
    });
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

/* dark mode */
const darkMode = document.querySelector('.dark-light-theme-btn');

darkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark'); 

});



