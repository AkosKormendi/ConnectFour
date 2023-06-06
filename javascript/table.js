import { GameState } from "./classes/state.js";

//  TODO: create a gamestate that encompasses these variables

let gameState;

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

                if(gameState.Winner != null)
                {
                    return;
                }

                let column = GetColumn(ev.target.parentNode);

                if(gameState.Round == 1)
                {
                    gameState.Board.PlaceTile(column, gameState.Player1);
                    gameState.Round = 2;
                } 
                else 
                {
                    gameState.Board.PlaceTile(column, gameState.Player2);
                    gameState.Round = 1;
                }
                
                GenerateTable();
            });
            img.src = gameState.Board.Board[i][j].image;
            td.appendChild(img);
            tr.appendChild(td);
        }
        gameTable.appendChild(tr);
    }

    gameState.Winner = gameState.Board.CheckForWin();

    if(gameState.Winner != null)
    {
        console.log(gameState.Winner);
    }
}

function StartGame()
{
    gameContainer.style.display = "flex";
    menuContainer.style.display = "none";

    gameState = new GameState(player1Name.value,player2Name.value,"images/ConnectFourRedCell.svg", "images/ConnectFourYellowCell.svg");

    GenerateTable();
}

function GetColumn(td) {
    return td.cellIndex;
}