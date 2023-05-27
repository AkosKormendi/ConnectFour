function GenerateTable()
{
    for(let i = 0; i < 6; i++)
    {
        let tr = document.createElement("tr");
        for(let j = 0; j < 7; j++)
        {
            let td = document.createElement("td");
            let img = document.createElement("img");
            img.src = "images/ConnectFourCell.svg";
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
}

GenerateTable();