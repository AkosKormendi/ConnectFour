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

    PlaceTile(index, img, player)
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
                this.board[i][index].player = player;
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
                if( this.board[i][j].image !== "images/ConnectFourCell.svg" &&
                    this.board[i][j].image === this.board[i][j+1].image &&
                    this.board[i][j+1].image === this.board[i][j+2].image &&
                    this.board[i][j+2].image === this.board[i][j+3].image)
                    {
                        winner = this.board[i][j].player;
                    }
            }
        }

        //  Check for columns of 4
        for(let j = 0; j < 7; j++)
        {
            for(let i = 0; i < 3; i++)
            {
                if( this.board[i][j].image !== "images/ConnectFourCell.svg" &&
                    this.board[i][j].image === this.board[i+1][j].image &&
                    this.board[i+1][j].image === this.board[i+2][j].image &&
                    this.board[i+2][j].image === this.board[i+3][j].image)
                    {
                        winner = this.board[i][j].player;
                    }
            }
        }

        //  Check for left to right diagonals of 4
        for(let i = 0; i < 3; i++)
        {
            for(let j = 0; j < 4; j++)
            {
                if( this.board[i][j].image !== "images/ConnectFourCell.svg" &&
                    this.board[i][j].image === this.board[i+1][j+1].image &&
                    this.board[i+1][j+1].image === this.board[i+2][j+2].image &&
                    this.board[i+2][j+2].image === this.board[i+3][j+3].image)
                    {
                        winner = this.board[i][j].player;
                    }
            }
        }

        //  Check for right to left diagonals of 4
        for(let i = 0; i < 3; i++)
        {
            for(let j = 6; j > 2; j--)
            {
                if( this.board[i][j].image !== "images/ConnectFourCell.svg" &&
                    this.board[i][j].image === this.board[i+1][j-1].image &&
                    this.board[i+1][j-1].image === this.board[i+2][j-2].image &&
                    this.board[i+2][j-2].image === this.board[i+3][j-3].image)
                    {
                        winner = this.board[i][j].player;
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