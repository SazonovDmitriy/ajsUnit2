import character from './domain.js';

export class Game {
    start() {
      console.log('game started');
    }
  }
  
  export class GameSavingData {
  }
  
  export function readGameSaving() {
  }
  
  export function writeGameSaving() {
  }

const defaultGame = new GameSavingData();

export default defaultGame;