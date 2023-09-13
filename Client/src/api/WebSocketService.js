import io from 'socket.io-client';

const SERVER_URL = 'http://localhost:8080'; // Replace with your Spring Boot server URL

const socket = io(SERVER_URL);

function connectToWebSocket(onConnect, onDisconnect, onMessage) {
  socket.connect();

  socket.on('connect', () => {
    console.log('Connected to WebSocket server');
    onConnect(); // Callback function when connected
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from WebSocket server');
    onDisconnect(); // Callback function when disconnected
  });

  socket.on('chatMessage', (message) => {
    console.log('Received message:', message);
    onMessage(message); // Callback function when a message is received
  });
}

function sendMessage(message) {
  socket.emit('chatMessage', message);
}

export { connectToWebSocket, sendMessage };
