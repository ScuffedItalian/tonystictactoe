function checkRows(board) {
    for (let row of board) {
        if (row[0] !== null && row[0] === row[1] && row[1] === row[2]) {
            return true; // Row has a winner
        } 
    }
   
    for (let col = 0; col < 3; col++) {
        if (board[0][col] !== null && board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
            return true
        } 
    }
    if (
        board[0][2] !== null &&
        board[0][2] == board[1][1] &&
        board[1][1] == board[2][0]
    ) { 
        return true
    }
    if (
        board[0][0] !== null &&
        board[0][0] == board[1][1] &&
        board[1][1] == board[2][2]
    ) {
        return true
    }
    return false
}



let gameEnded = false;

// Making sure the DOM loaded.
document.addEventListener("DOMContentLoaded", function domLoad() {
    const vertext = document.getElementById("ver");
    vertext.addEventListener('click', () => {
        alert("!#DEV INFO#!\n Version 0.0.1\n Future Updates: Unlikely...\n")
        
    })

    const githubLogo = document.getElementById('github');
    githubLogo.addEventListener('click', () => {
        window.location.href = "https://github.com/ScuffedItalian"
    })




    //After DOM loaded

    //Creating gameboard matrix
    //0 = X
    //1 = O
    let gameboardMat = [
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ]

    const gameCell = document.querySelectorAll('th')
    const winText = document.getElementById('wTXT')
    let currentTurn = 0;
    gameCell.forEach(cell => {
        cell.addEventListener('click', () => {
            if(gameEnded) {
                
                return;
            }
            currentTurn = (currentTurn === 0) ? 1 : 0; 
            let clickedCellNum = Number(cell.getAttribute("data-cell"))
            
            
            switch (clickedCellNum) {
                case 0:
                    if(gameboardMat[0][0] === null) {
                        gameboardMat[0][0] = currentTurn
                        if (currentTurn == 1) {
                            cell.textContent = "O"
                        } else { cell.textContent = "X"}
                    }
                    break;
                case 1:

                    if(gameboardMat[0][1] == null) {
                        gameboardMat[0][1] = currentTurn
                        if (currentTurn == 1) {
                            cell.textContent = "O"
                        } else { cell.textContent = "X"}
                    }
                    break;
                case 2:

                    if(gameboardMat[0][2] == null) {
                        gameboardMat[0][2] = currentTurn
                        if (currentTurn == 1) {
                            cell.textContent = "O"
                        } else { cell.textContent = "X"}
                    }
                    break;
                case 3:

                    if(gameboardMat[1][0] == null) {
                        gameboardMat[1][0] = currentTurn
                        if (currentTurn == 1) {
                            cell.textContent = "O"
                        } else { cell.textContent = "X"}
                    }
                    break;
                case 4:

                    if(gameboardMat[1][1] == null) {
                        gameboardMat[1][1] = currentTurn
                        if (currentTurn == 1) {
                            cell.textContent = "O"
                        } else { cell.textContent = "X"}
                    }
                    break
                case 5:

                    if(gameboardMat[1][2] == null) {
                        gameboardMat[1][2] = currentTurn
                        if (currentTurn == 1) {
                            cell.textContent = "O"
                        } else { cell.textContent = "X"}
                    }
                    break
                case 6:

                    if(gameboardMat[2][0] == null) {
                        gameboardMat[2][0] = currentTurn
                        if (currentTurn == 1) {
                            cell.textContent = "O"
                        } else { cell.textContent = "X"}
                    }
                    break
                case 7:

                    if(gameboardMat[2][1] == null) {
                        gameboardMat[2][1] = currentTurn
                        if (currentTurn == 1) {
                            cell.textContent = "O"
                        } else { cell.textContent = "X"}
                    }
                    break;
                case 8:

                    if(gameboardMat[2][2] == null) {
                        gameboardMat[2][2] = currentTurn
                        if (currentTurn == 1) {
                            cell.textContent = "O"
                        } else { cell.textContent = "X"}
                    }
                default:
                    break;
                
            }
            if (checkRows(gameboardMat)) { 
                gameEnded = true
                if(currentTurn === 1){
                    alert("O Wins!")
                } else {
                    alert("X Wins!")
                }
                console.log("Game ended!")
            }

        })    
    });
    
})