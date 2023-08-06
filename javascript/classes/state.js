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

    PlaceTile(ev)
    {
        if(this.Winner != null)
        {
            return false;
        }

        let column = this.#getColumn(ev.target.parentNode);

        if(this.Round == 1)
        {
            let isPlaced = this.Board.PlaceTile(column, this.Player1);

            if(isPlaced)
            {
                this.Round = 2;
                return true;
            }
        } 
        else 
        {
            let isPlaced = this.Board.PlaceTile(column, this.Player2);

            if(isPlaced)
            {
                this.Round = 1;
                return true;
            }
        }
        
        return false;
    }

    
    #getColumn(td) {
        return td.cellIndex;
    }
}