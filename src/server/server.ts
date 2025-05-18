import { WebSocketServer } from 'ws';

export const wss = new WebSocketServer({ port: 3000 }, () => {
  console.log('WebSocket server started on ws://localhost:3000');
});
