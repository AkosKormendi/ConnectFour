export class Board {
    constructor()
    {
        this.board = [];

        for(let i = 0; i < 6; i++)
        {
            this.board[i] = [];
            for(let j = 0; j < 7; j++)
            {
                this.board[i][j] = new Tile("placeholder","images/ConnectFourCell.svg");
            }
        }
    }

    PlaceTile(index, img)
    {
        //  Checks if the top cell is filled
        if(this.board[0][index].image !== "images/ConnectFourCell.svg")
        {
            return;
        }

        //  Checks from the bottom up which tile is free
        for(let i = 5; i >= 0; i--)
        {
            if(this.board[i][index].image === "images/ConnectFourCell.svg")
            {
                this.board[i][index].image = img;
                break;
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