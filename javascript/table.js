import { Board } from "./board.js";


//  TODO: create a gamestate that encompasses these variables
let player1 = "";
let player2 = "";
let gameBoard = new Board();


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

                let column = GetColumn(ev.target.parentNode);
                gameBoard.PlaceTile(column, "images/ConnectFourRedCell.svg");

                GenerateTable();
            });
            img.src = gameBoard.board[i][j].image;
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

function GetColumn(td) {
    return td.cellIndex;
}

GenerateTable();