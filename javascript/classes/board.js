export class Board {
    constructor()
    {
        this.Board = [];

        for(let i = 0; i < 6; i++)
        {
            this.Board[i] = [];
            for(let j = 0; j < 7; j++)
            {
                this.Board[i][j] = new Tile("placeholder","images/ConnectFourCell.svg");
            }
        }
    }

    PlaceTile(index, player)
    {
        //  Checks if the top cell is filled
        if(this.Board[0][index].image !== "images/ConnectFourCell.svg")
        {
            return;
        }

        //  Checks from the bottom up which tile is free
        for(let i = 5; i >= 0; i--)
        {
            if(this.Board[i][index].image === "images/ConnectFourCell.svg")
            {
                this.Board[i][index].image = player.Image;
                this.Board[i][index].player = player.Name;
                break;
            }
        }
    }

    CheckForWin()
    {
        let winner = null;

        //  Check for rows of 4
        for(let i = 0; i < 6; i++)
        {
            for(let j = 0; j < 4; j++)
            {
                if( this.Board[i][j].image !== "images/ConnectFourCell.svg" &&
                    this.Board[i][j].image === this.Board[i][j+1].image &&
                    this.Board[i][j+1].image === this.Board[i][j+2].image &&
                    this.Board[i][j+2].image === this.Board[i][j+3].image)
                    {
                        winner = this.Board[i][j].player;
                    }
            }
        }

        //  Check for columns of 4
        for(let j = 0; j < 7; j++)
        {
            for(let i = 0; i < 3; i++)
            {
                if( this.Board[i][j].image !== "images/ConnectFourCell.svg" &&
                    this.Board[i][j].image === this.Board[i+1][j].image &&
                    this.Board[i+1][j].image === this.Board[i+2][j].image &&
                    this.Board[i+2][j].image === this.Board[i+3][j].image)
                    {
                        winner = this.Board[i][j].player;
                    }
            }
        }

        //  Check for left to right diagonals of 4
        for(let i = 0; i < 3; i++)
        {
            for(let j = 0; j < 4; j++)
            {
                if( this.Board[i][j].image !== "images/ConnectFourCell.svg" &&
                    this.Board[i][j].image === this.Board[i+1][j+1].image &&
                    this.Board[i+1][j+1].image === this.Board[i+2][j+2].image &&
                    this.Board[i+2][j+2].image === this.Board[i+3][j+3].image)
                    {
                        winner = this.Board[i][j].player;
                    }
            }
        }

        //  Check for right to left diagonals of 4
        for(let i = 0; i < 3; i++)
        {
            for(let j = 6; j > 2; j--)
            {
                if( this.Board[i][j].image !== "images/ConnectFourCell.svg" &&
                    this.Board[i][j].image === this.Board[i+1][j-1].image &&
                    this.Board[i+1][j-1].image === this.Board[i+2][j-2].image &&
                    this.Board[i+2][j-2].image === this.Board[i+3][j-3].image)
                    {
                        winner = this.Board[i][j].player;
                    }
            }
        }

        return winner;
    }
}

class Tile {
    constructor(player, image)
    {
        this.player = player;
        this.image = image;
    }
}