import { Player, Room } from '../types/types';

class DataBase {
  private players: Player[] = [];
  private rooms: Room[] = [];
  //private games: Game[] = [];

  public addPlayer(player: Player): void {
    this.players.push(player);
  }

  public getPlayer(name: string): Player | undefined {
    return this.players.find((player) => player.name === name);
  }

  public getAllPlayers(): Player[] {
    return this.players;
  }

  public createRoom(room: Room): void {
    this.rooms.push(room);
  }
}

export const db = new DataBase();
