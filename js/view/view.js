
const body = document.querySelector("body");

function showbord(bord){
    let isthereblack = false;
    let istherewhite = false;

    const oldbord = document.querySelector(".container")
    if (oldbord) {
        oldbord.remove();
    }

    const bordE = document.createElement("div");
    bordE.classList.add("container")

    for(let i = 0;i<bord.length;i++){
        const row = document.createElement("div");
        row.classList.add("row")

        for(let x = 0;x<bord[i].length;x++){
            const tile = document.createElement("div");
            tile.classList.add("col");

            if(bord[i][x]!= 0){
                const vies = document.createElement("div")
                vies.classList.add("vies")
                vies.addEventListener("click",onViesClick)

                if(selected){
                    if(i==selected.row && x == selected.col) {
                        vies.classList.add("selected")
                    }
                }

                if(bord[i][x] == 1){
                    vies.classList.add("p1")
                    istherewhite = true;
                }else if(bord[i][x] == 2){
                    vies.classList.add("p2")
                    isthereblack = true;
                }else if(bord[i][x] == 3){
                    vies.classList.add("p1dam")
                    istherewhite = true;
                }else if(bord[i][x] == 4){
                    vies.classList.add("p2dam")
                    isthereblack = true;
                }
                

                tile.appendChild(vies)
            }else{
                tile.addEventListener("click", (e) => onTileClick(e, i, x));
            }

            if((i+x)%2===0){
                tile.classList.add("colord")
            }
            row.appendChild(tile);
        }
        bordE.appendChild(row)
    }

    if(!isthereblack){
        console.log("white won")
        alert("white won")
        window.location.reload();
    }
    if(!istherewhite){
        console.log("black won")
        alert("black won")
        window.location.reload();
    }

    body.appendChild(bordE);
}

