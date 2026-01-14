'use strict'

const body = document.querySelector("body");

function showbord(bord){
    body.innerHTML = "";

    const bordE = document.createElement("div");
    bordE.classList.add("container")

    for(let i = 0;i<bord.length;i++){
        const row = document.createElement("div");
        row.classList.add("row")

        for(let x = 0;x<bord[i].length;x++){
            const tile = document.createElement("div");
            tile.classList.add("col");

            if((i+x)%2===0){

            }

            row.appendChild(tile);
        }
        bordE.appendChild(row)
    }

    body.appendChild(bordE);
}

