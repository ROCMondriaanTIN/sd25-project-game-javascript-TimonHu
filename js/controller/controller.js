let selected;

function getbordposfromelement(e){
    const vies = e.currentTarget;
    const tile = vies.parentElement;
    const row = tile.parentElement;

    const rowIndex = Array.from(row.parentElement.children).indexOf(row);
    const tileIndex = Array.from(row.children).indexOf(tile);

    const colIndex = Math.floor(tileIndex / 2);

    return { row: rowIndex, col: colIndex };
}

function onViesClick(e){
    const pos = getbordposfromelement(e);

    selected = pos;
    showbord(bord)

}

function onTileClick(e, x, y) {
    console.log(bord)

    if (!selected) return;

    const piece = bord[selected.row][selected.col];
    if (piece === 0) return;

    const dir = piece === 1 ? 1 : -1;
    const rowDiff = x - selected.row;

    const isEvenRow = selected.row % 2 === 0;

    let allowedCols;

    if (isEvenRow) {
        // even rows
        allowedCols = piece === 1
            ? [selected.col, selected.col - 1]
            : [selected.col, selected.col - 1];
    } else {
        // odd rows
        allowedCols = piece === 1
            ? [selected.col, selected.col + 1]
            : [selected.col, selected.col + 1];
    }

    if (allowedCols.includes(y) && bord[x][y] === 0) {
        if (rowDiff !== dir) {
            console.log("rowdiff")
            selected = null;
            showbord(bord);
            return;
        }

        bord[x][y] = piece;
        bord[selected.row][selected.col] = 0;
    }else{
        //console.log(bord[selected.row][allowedCols[0]],bord[selected.row][allowedCols[1]])
        if(bord[selected.row][allowedCols[0]]===0||bord[selected.row][allowedCols[1]]===0){
            console.log("slaan")
            if (isEvenRow) {
                // even rows
                allowedSlaanCols = piece === 1
                    ? [selected.col+1, selected.col - 2]
                    : [selected.col+1, selected.col - 2];
            } else {
                // odd rows
                allowedSlaanCols = piece === 1
                    ? [selected.col-1, selected.col + 2]
                    : [selected.col-1, selected.col + 2];
            }
            
            if(allowedSlaanCols.includes(y) && bord[x][y] === 0){
                console.log(selected.col,y)
                if(selected.col==y){
                    bord[x-1][y] = 0;
                }else{
                    console.log("hi")
                    if(selected.col>y){
                        bord[selected.row+1][selected.col] = 0;
                    }else{
                        bord[selected.row-1][selected.row.col] = 0;
                    }
                }

                bord[x][y] = piece;
                bord[selected.row][selected.col] = 0;
            }
        }
    }

    selected = null;
    showbord(bord);
}


