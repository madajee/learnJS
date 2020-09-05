const axios = require('axios');
const _ = require('underscore');

function todosList(todos) {
    let arr = Object.values(todos);
    return arr;
}

axios.get('https://jsonplaceholder.typicode.com/todos')
.then((response) => {
    let todosArrUnderscore = todosList(response.data);
    const unCompletedTodos = _.filter(todosArrUnderscore, element => element.userId == 5 && element.id > 98);
    console.log("----------- Uncompleted Todos -------------");
    console.log(unCompletedTodos);
    const completedTodos = _.map(unCompletedTodos, element => {element.completed = true; return element;});
    console.log("----------- Completed Todos -------------");
    console.log(completedTodos);
})
.catch(error => {
    console.log(error);
});

/*axios.get('https://jsonplaceholder.typicode.com/todos')
.then((response) => {
    let todosArr = todosList(response.data);
    console.log('Total Todos: ' + todosArr.length);
    console.log('Completed Flag for Title: ' 
        + todosArr[99].title + ' ' + todosArr[99].completed);
    const todosForUser5 = todosArr
        .filter(element => element.userId == 5)
        .map(element => {element.completed = true; return element;});
        //console.log(todosForUser5);
    console.log('Total Todos for User 5: ' + todosForUser5.length);
    console.log('Completed Flag for Title: ' 
        + todosForUser5[19].title + ' ' 
        + todosArr[19].completed + '\n');
    const concatenatedTitleForUser5 =  todosForUser5
        .reduce((acc, element) => acc + element.title, "");
    console.log(concatenatedTitleForUser5);
})
.catch(error => {
    console.log(error);
});*/

function clickHandler () {
    console.log('click event');
}
console.log('waiting 3 second with a callback to click handler');
setTimeout (clickHandler, 3000);



