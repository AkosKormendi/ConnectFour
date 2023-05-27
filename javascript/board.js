export class Board {
    constructor()
    {
        this.board = [,];

        for(let i = 0; i < 6; i++)
        {
            for(let j = 0; j < 7; j++)
            {
                this.board[i,j] = new Tile("placeholder","images/ConnectFourCell.svg");
            }
        }
    }
}

class Tile {
    constructor(player, image)
    {
        this.player = player;
        this.image = image;
    }
}