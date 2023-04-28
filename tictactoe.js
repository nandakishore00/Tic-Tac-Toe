const btnLight = document.querySelector(".btn-light");
var header=document.querySelector(".heading")
const center = document.querySelector(".center");
const start = document.querySelector(".start");
const starter = document.querySelector(".starter");
const restartBtn=document.querySelector(".restart");
const cells = document.querySelectorAll(".cell")
var spaces = new Array(9).fill(null);
var gameOver=false
const X_PLAYER='X'
const O_PLAYER='O'
let CURRENT_PLAYER='X'
var count=0
start.addEventListener("click", function() {
    center.style.display = 'flex';
    start.style.display = 'none';
    starter.style.height = '0vh';
})
restartBtn.addEventListener("click",restart)
cells.forEach((cell)=>{
    cell.addEventListener("click",function(e){
        if(gameOver==false){
            id=e.target.id
            if(spaces[id]==null)
            {   spaces[id]=CURRENT_PLAYER
                count+=1
                const playerWon=playerHasWon()
                if(playerWon==true){
                    e.target.innerHTML=CURRENT_PLAYER
                    gameOver=true
                    if(CURRENT_PLAYER=='X'){
                        header.innerHTML="PLAYER 1 WON"
                    }
                    else{
                        header.innerHTML="PLAYER 2 WON"
                    }
                }
                else if(playerWon==false){
                    header.innerHTML="IT'S A TIE"
                }
                e.target.innerHTML=CURRENT_PLAYER
                if(CURRENT_PLAYER==X_PLAYER){
                    CURRENT_PLAYER=O_PLAYER
                }
                else{
                    CURRENT_PLAYER=X_PLAYER
                }
            }
    }
        })
    })
function restart(){
    header.innerHTML="TIC-TAC-TOE"
    count=0
    cells.forEach((cell)=>{
        id=cell.id
        spaces[id]=null
        cell.innerHTML=''
    })
    CURRENT_PLAYER=X_PLAYER
    gameOver=false
}
function playerHasWon(){
    if(spaces[0]!=null &&((spaces[0]==spaces[1])&& (spaces[0]==spaces[2] ))||
       spaces[3]!=null &&((spaces[3]==spaces[4])&& (spaces[3]==spaces[5] ))||
       spaces[6]!=null &&((spaces[6]==spaces[7])&& (spaces[6]==spaces[8] ))||
       spaces[0]!=null &&((spaces[0]==spaces[3])&& (spaces[0]==spaces[6] ))||
       spaces[1]!=null &&((spaces[1]==spaces[4])&& (spaces[1]==spaces[7] ))||
       spaces[2]!=null &&((spaces[2]==spaces[5])&& (spaces[2]==spaces[8] ))||
       spaces[0]!=null &&((spaces[0]==spaces[4])&& (spaces[0]==spaces[8] ))||
       spaces[2]!=null &&((spaces[2]==spaces[4])&& (spaces[2]==spaces[6]))){
        return true
       }
       else if(count==9)
       {
        return false 
       }
}