import { randomUUID } from 'node:crypto';
import { Player } from 'server/types/types';

export class PlayerModel implements Player {
  name: string;
  password: string;
  index: number | string;
  wins: number;

  constructor(name: string, password: string) {
    this.index = randomUUID();
    this.password = password;
    this.name = name;
    this.wins = 0;
  }

  updateWins() {
    this.wins += 1;
  }
}
