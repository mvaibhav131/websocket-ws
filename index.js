const WebSocket = require('ws');

const webSocketServer = new WebSocket.Server({ port: 9000 });

webSocketServer.on('connection', (socket) => {
    console.log('New client connected');

   socket.on("message", (message) =>{
    // if server receives a message from the client, it will console log it
    console.log(`Received Message to Server: ${message}`);

    // now after the message is received, we will send it back to the client
    socket.send(`Server Received: ${message}`)
   })
   socket.on("error", (err) => {console.log(`Error: ${err}`)})

   socket.on("close",() => {console.log("Client Websocket Disconnected")})

   // send the Message to the client when the connection is established from the server

   socket.send("Server Connected to Client")

});

console.log('WebSocket server is running on ws://localhost:9000');
