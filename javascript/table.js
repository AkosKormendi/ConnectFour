import { Board } from "./board.js";


//  TODO: create a gamestate that encompasses these variables
let player1 = "";
let player2 = "";
let gameBoard = new Board();
let round = 1;
let winner;

gameStartButton.addEventListener("click", () => StartGame());

function GenerateTable()
{
    //  Reset table
    gameTable.innerHTML = "";
    //  Generate table
    for(let i = 0; i < 6; i++)
    {
        let tr = document.createElement("tr");
        for(let j = 0; j < 7; j++)
        {
            let td = document.createElement("td");
            let img = document.createElement("img");
            img.addEventListener("click", (ev) => {

                if(winner != null)
                {
                    return;
                }

                let column = GetColumn(ev.target.parentNode);

                if(round == 1)
                {
                    gameBoard.PlaceTile(column, "images/ConnectFourRedCell.svg", player1);
                    round = 2;
                } 
                else 
                {
                    gameBoard.PlaceTile(column, "images/ConnectFourYellowCell.svg", player2);
                    round = 1;
                }
                
                GenerateTable();
            });
            img.src = gameBoard.board[i][j].image;
            td.appendChild(img);
            tr.appendChild(td);
        }
        gameTable.appendChild(tr);
    }

    winner = gameBoard.CheckForWin();

    if(winner != null)
    {
        console.log(winner);
    }
}

function StartGame()
{
    gameContainer.style.display = "flex";
    menuContainer.style.display = "none";

    player1 = player1Name.value;
    player2 = player2Name.value;

    winner = null;

    gameBoard = new Board();

    GenerateTable();

    console.log(player1);
    console.log(player2);
}

function GetColumn(td) {
    return td.cellIndex;
}