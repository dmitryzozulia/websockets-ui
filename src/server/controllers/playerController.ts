import { WebSocket } from 'ws';
import { db } from '../db/DataBase';
import { frontendRegistration, Player } from '../types/types';
import { PlayerModel } from '../models/player';

export const registerPlayer = (
  ws: WebSocket,
  message: frontendRegistration,
) => {
  const { name, password } = message.data;
  const existingPlayer = db.getPlayer(name);

  if (existingPlayer) {
    if (existingPlayer.password === password) {
      ws.send(
        JSON.stringify({
          type: 'reg',
          data: JSON.stringify({
            name: existingPlayer.name,
            index: existingPlayer.index,
            error: false,
            errorText: 'noErorr',
          }),
          id: 0,
        }),
      );
    } else {
      ws.send(
        JSON.stringify({
          type: 'reg',
          data: JSON.stringify({
            name: '',
            index: 0,
            error: true,
            errorText: 'Wrong login or password',
          }),
          id: 0,
        }),
      );
    }
  } else {
    const newPlayer: Player = new PlayerModel(name, password);
    db.addPlayer(newPlayer);
    ws.send(
      JSON.stringify({
        type: 'reg',
        data: JSON.stringify({
          name: newPlayer.name,
          index: newPlayer.index,
          error: false,
          errorText: 'no Error',
        }),
        id: 0,
      }),
    );
  }
  console.log(db.getAllPlayers());
};
