const WebSocket = require('ws');

/**
 * WebSocket Server
 *
 * Creates a WebSocket server listening on port 9000.
 *
 * The server handles the following events:
 * 1. connection - Triggered when a client connects.
 * 2. message    - Triggered when the server receives a message.
 * 3. error      - Triggered when a WebSocket error occurs.
 * 4. close      - Triggered when the client disconnects.
 *
 * Server URL:
 * ws://localhost:9000
 */
const PORT = 9000;

const webSocketServer = new WebSocket.Server({
    port: PORT,
});

/**
 * Handle new WebSocket client connections.
 */
webSocketServer.on('connection', (socket) => {
    console.log('New client connected');

    /**
     * Send a welcome message to the client
     * immediately after the connection is established.
     */
    socket.send('Server connected to client');

    /**
     * Handle messages received from the client.
     *
     * The server logs the received message and
     * sends an acknowledgement back to the same client.
     */
    socket.on('message', (message) => {
        console.log(`Received message from client: ${message}`);

        socket.send(`Server received: ${message}`);
    });

    /**
     * Handle WebSocket errors.
     */
    socket.on('error', (error) => {
        console.error(`WebSocket error: ${error.message}`);
    });

    /**
     * Handle client disconnection.
     */
    socket.on('close', () => {
        console.log('Client WebSocket disconnected');
    });
});

/**
 * Log the WebSocket server URL when the server starts.
 */
console.log(`WebSocket server is running on ws://localhost:${PORT}`);
