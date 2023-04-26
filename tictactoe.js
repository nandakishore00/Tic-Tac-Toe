const btnLight = document.querySelector(".btn-light");
const center = document.querySelector(".center");
const start = document.querySelector(".start");
const starter = document.querySelector(".starter");
const restartBtn=document.querySelector(".restart");
const spaces = new Array(9).fill(0);
const X_PLAYER='X'
const O_PLAYER='O'
let CURRENT_PLAYER=X_PLAYER
start.addEventListener("click", function() {
    center.style.display = 'flex';
    start.style.display = 'none';
    starter.style.height = '0vh';
})
const cells = document.querySelectorAll(".cell")
    cells.forEach((cell)=>{
        cell.addEventListener("click",function(e){
            if(e.target.innerHTML=='')
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
restartBtn.addEventListener("click",restart)
function restart(){
    cells.forEach((cell)=>{
        cell.innerHTML=''
    })
    CURRENT_PLAYER=X_PLAYER
}