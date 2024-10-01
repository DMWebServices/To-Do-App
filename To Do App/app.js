// Variables
const btn = document.getElementById('add-todo-btn');
const completedBtn = document.getElementById('complete-todo');
const deletedBtn = document.getElementById('delete-todo');
const addToDoInput = document.getElementById('add-todo-input').value;

btn.addEventListener('click', () => {
    document.getElementById('todo-app-content').append(addToDoInput);
});

deletedBtn.addEventListener('click', () => {
    document.getElementById('todo-app-content').textContent(' ');
    console.log('Works!');
})

// function addToDoItem() {
   
//     console.log(addToDoInput.value);
// }

// addToDoItem();


