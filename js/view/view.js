
const body = document.querySelector("body");

function showbord(bord){
    body.innerHTML = "";

    const bordE = document.createElement("div");
    bordE.classList.add("container")

    for(let i = 0;i<bord.length;i++){
        const row = document.createElement("div");
        row.classList.add("row")

        for(let x = 0;x<bord[i].length*2;x++){
            const tile = document.createElement("div");
            tile.classList.add("col");

            if((i+x)%2===0){
                if(bord[i][Math.floor(x/2)]!= 0){
                    const vies = document.createElement("div")
                    vies.classList.add("vies")
                    vies.addEventListener("click",onViesClick)
                    if(selected){
                        if(i==selected.row && Math.floor(x/2) == selected.col) {
                            vies.classList.add("selected")
                        }
                    }
                    if(bord[i][Math.floor(x/2)] == 1){
                        vies.classList.add("p1")
                    }else if(bord[i][Math.floor(x/2)] == 2){
                        vies.classList.add("p2")
                    }
                    tile.appendChild(vies)
                }else{
                    tile.addEventListener("click", (e) => onTileClick(e, i, Math.floor(x/2)));
                }
                tile.classList.add("colord")
            }

            row.appendChild(tile);
        }
        bordE.appendChild(row)
    }

    body.appendChild(bordE);
}

