const amqp = require('amqplib');
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
    const completedTodos = _.map(unCompletedTodos, element => {connect(element); return element;});
    console.log("----------- Published Todos -------------");
    console.log(completedTodos);
})
.catch(error => {
    console.log(error);
});


async function connect(userdata) {
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();
        const result  = await channel.assertQueue("todos");
        channel.sendToQueue("todos", Buffer.from(JSON.stringify(userdata)) );
        console.log(`Todos sent successfully ${JSON.stringify(userdata)}`);
    }
    catch (ex) {
        console.error(ex);
    }
}