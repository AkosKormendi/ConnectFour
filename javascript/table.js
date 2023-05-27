import { Board } from "./board.js";


//  TODO: create a gamestate that encompasses these variables
let player1 = "";
let player2 = "";
let gameBoard = new Board();

function GenerateTable()
{
    for(let i = 0; i < 6; i++)
    {
        let tr = document.createElement("tr");
        for(let j = 0; j < 7; j++)
        {
            let td = document.createElement("td");
            let img = document.createElement("img");
            img.src = gameBoard.board[i,j].image;
            td.appendChild(img);
            tr.appendChild(td);
        }
        gameTable.appendChild(tr);
    }
}

function StartGame()
{
    gameContainer.style.display = "flex";
    menuContainer.style.display = "none";

    player1 = player1Name.value;
    player2 = player2Name.value;

    console.log(player1);
    console.log(player2);
}

GenerateTable();