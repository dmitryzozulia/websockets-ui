import { httpServer } from './http_server/index';
import { wss } from './server/server';
import { registerPlayer } from './server/controllers/playerController';
import { db } from './server/db/DataBase';

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

wss.on('connection', (ws) => {
  ws.on('message', (message: string) => {
    try {
      const parsed = JSON.parse(message);
      if (typeof parsed.data === 'string') {
        parsed.data = JSON.parse(parsed.data);
      }
      registerPlayer(ws, parsed);
    } catch (err) {
      ws.send(JSON.stringify({ type: 'error', data: 'Invalid JSON', id: 0 }));
    }
  });
  ws.on('close', () => {
    // Connection closed
  });
});
