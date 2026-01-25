let selected;

const pturn = document.querySelector("#turn")

let turn = 1;

function getbordposfromelement(e){
    const vies = e.currentTarget;
    const tile = vies.parentElement;
    const row = tile.parentElement;

    const rowIndex = Array.from(row.parentElement.children).indexOf(row);
    const tileIndex = Array.from(row.children).indexOf(tile);

    const colIndex = Math.floor(tileIndex);

    return { row: rowIndex, col: colIndex };
}

function onViesClick(e){
    const pos = getbordposfromelement(e);
    let piece = bord[pos.row][pos.col];

    if (turn === 1) { // White's turn
        if (piece === 2 || piece === 4) return; // Can't move black pieces or black kings
    } else { // Black's turn
        if (piece === 1 || piece === 3) return; // Can't move white pieces or white kings
    }
    selected = pos;
    showbord(bord)

}

function onTileClick(e, x, y) {
    if (!selected) return;

    let piece = bord[selected.row][selected.col];
    if (piece === 0) return;
    if (turn === 1) { // White's turn
        if (piece === 2 || piece === 4) return; // Can't move black pieces or black kings
        pturn.innerHTML = "black's turn"
    } else { // Black's turn
        if (piece === 1 || piece === 3) return; // Can't move white pieces or white kings
        pturn.innerHTML = "white's turn"
    }

    const isEvenRow = selected.row % 2 === 0;

    let allowedCols;

    if(piece === 1){//white
        allowedCols = []
        allowedCols.push([selected.row+1,selected.col+1])
        allowedCols.push([selected.row+1,selected.col-1])
        
    }else if(piece === 2){//black
        allowedCols = []
        allowedCols.push([selected.row-1,selected.col+1])
        allowedCols.push([selected.row-1,selected.col-1])
    }else if(piece === 3){//white dam
        allowedCols = []
        allowedCols.push([selected.row+1,selected.col+1])
        allowedCols.push([selected.row+1,selected.col-1])
        allowedCols.push([selected.row-1,selected.col+1])
        allowedCols.push([selected.row-1,selected.col-1])
    }else if(piece === 4){//white or black dam
        allowedCols = []
        allowedCols.push([selected.row+1,selected.col+1])
        allowedCols.push([selected.row+1,selected.col-1])
        allowedCols.push([selected.row-1,selected.col+1])
        allowedCols.push([selected.row-1,selected.col-1])
    }

    const isValidMove = allowedCols.some(([row, col]) => row === x && col === y);

    const isValidJump = Math.abs(selected.row - x) === 2 && Math.abs(selected.col - y) === 2;

    if (isValidMove || isValidJump) {
        if (isValidJump) {
            const middleRow = Math.floor((selected.row + x) / 2);
            const middleCol = Math.floor((selected.col + y) / 2);
            const middlePiece = bord[middleRow][middleCol];

            if (middlePiece === 0 || middlePiece === piece) {
                return;
            }
            bord[middleRow][middleCol] = 0;
        }

        bord[selected.row][selected.col] = 0;
        if(x == 0 && piece == 2){
            piece = 4
        }else if(x == 9 && piece == 1){
            piece = 3
        }
        bord[x][y] = piece;
    }
   

    selected = null;
    turn = turn === 1 ? 2 : 1;
    showbord(bord);
}


