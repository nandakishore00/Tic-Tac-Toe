const btnLight = document.querySelector(".btn-light");
const center = document.querySelector(".center");
const start = document.querySelector(".start");
const starter = document.querySelector(".starter");
const X_PLAYER='X'
const O_PLAYER='O'
let CURRENT_PLAYER=X_PLAYER
btnLight.addEventListener("click", function() {
    center.style.display = 'flex';
    start.style.display = 'none';
    starter.style.height = '0vh';
})
const spaces = new Array(9).fill(0);
const cells = document.querySelectorAll(".cell")
    cells.forEach((cell)=>{
        cell.addEventListener("click",function(e){
            if(!e.target.id)
            {
                e.target.innerHTML=CURRENT_PLAYER
                if(CURRENT_PLAYER==X_PLAYER){
                    CURRENT_PLAYER=O_PLAYER
                }
                else{
                    CURRENT_PLAYER=X_PLAYER
                }
            }
           
        })
    })