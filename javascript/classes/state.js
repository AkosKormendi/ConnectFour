import { Board } from "./board.js";
import { Player } from "./player.js";

export class GameState {
    constructor(name1, name2, img1, img2)
    {
        this.Board = new Board();
        this.Player1 = new Player(name1, img1);
        this.Player2 = new Player(name2, img2);
        this.Turn = 1;
        this.IsWon = false;
        this.Winner = null;
    }
}