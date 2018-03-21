arr = [
    'Проснуться в 6:00',
    'Сделать ДЗ',
    'Погулять с собакой',
    'Приготовить на завтрак оладьи',
];

var list = document.querySelector('.my-list');

for (var i = 0; i < arr.length; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = arr[i];
    list.appendChild(listItem);
}

var btn = document.querySelector('.add');
btn.addEventListener('click', function(){
    var newTask = prompt('Введите новую задачу:');
    if (newTask === '' || newTask == null) {
        return;
    }
    var listItem = document.createElement('li');
    listItem.textContent = newTask;
    list.appendChild(listItem);
});

list.addEventListener('click', function(ev) {
debugger
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('strike');
    }
});