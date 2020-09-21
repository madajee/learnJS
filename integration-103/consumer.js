const amqp = require('amqplib');

connect();
async function connect() {
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();
        const result  = await channel.assertQueue("todos");
        channel.consume("todos", message => {
            const input = JSON.parse(message.content.toString());
            console.log(`Received todo with input ${JSON.stringify(input)}`);
            channel.ack(message);
        });
        console.log("Waiting for messages...");
    }
    catch (ex) {
        console.error(ex);
    }
}