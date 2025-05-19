export interface Player {
  name: string;
  password: string;
  index: number | string;
  wins: number;
}
export interface Room {
  roomId: number | string;
  roomUsers: Player[];
}
export interface frontendRegistration {
  type: 'reg';
  data: {
    name: string;
    password: string;
  };
  id: 0;
}
