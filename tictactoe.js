const btnLight = document.querySelector(".btn-light");
var header=document.querySelector(".heading")
var btnXO=document.querySelectorAll(".btnXO")
const center = document.querySelector(".center");
const start = document.querySelector(".start");
begin=document.querySelector(".begin")
const starter = document.querySelector(".starter");
const restartBtn=document.querySelector(".restart");
const cells = document.querySelectorAll(".cell")
var selected= document.querySelector(".selected");
var spaces = new Array(9).fill(null);
var gameOver=false
var a=0
var b=0
var c=0
const X_PLAYER='X'
const O_PLAYER='O'
var CURRENT_PLAYER
var count=0
btnXO.forEach(button=>
    button.addEventListener('click', function(e) {
       CURRENT_PLAYER=e.target.innerHTML
       if(e.target.classList.contains("selected")){
        e.target.classList.remove("selected")
       }
       else{
        console.log(e)
        e.target.classList.add("selected");
       }
       if(e.target.innerHTML=='X'){
        document.querySelector(".btnO").classList.remove("selected")
       }
       if(e.target.innerHTML=='O'){
        document.querySelector(".btnX").classList.remove("selected")
       }
        }
    ))

    {begin.addEventListener("click", function() {
        if(CURRENT_PLAYER=="X"|| CURRENT_PLAYER=='O'){
        center.style.display = 'flex';
        start.style.display = 'none';
        starter.style.height = '0vh';
        btnXO.style.display='none';
        }
        else{
            var text="Please select your symbol";
            document.querySelector(".symbol").innerHTML=text
        }
})
}
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
                    var winningCombination=[a,b,c]
                    const winningCell=winningCombination.map(index=>cells[index])
                    winningCell.forEach(cell=>
                    {
                        cell.classList.add('winning-cell')
                    })
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
    var winningCombination=[a,b,c]
    const winningCell=winningCombination.map(index=>cells[index])
    winningCell.forEach(cell=>
    {
        cell.classList.remove('winning-cell')
    })
    cells.forEach((cell)=>{
        id=cell.id
        spaces[id]=null
        cell.innerHTML=''
    })
    CURRENT_PLAYER=X_PLAYER
    gameOver=false
}
function playerHasWon(){
    if(spaces[0]!=null &&((spaces[0]==spaces[1])&& (spaces[0]==spaces[2] ))){
        a=0
        b=1
        c=2
        return true
    }
    else if(spaces[3]!=null &&((spaces[3]==spaces[4])&& (spaces[3]==spaces[5] ))){
        a=3
        b=4
        c=5
        return true
    }
    else if(spaces[6]!=null &&((spaces[6]==spaces[7])&& (spaces[6]==spaces[8] ))){
        a=6
        b=7
        c=8
        return true
    }
    else if(spaces[0]!=null &&((spaces[0]==spaces[3])&& (spaces[0]==spaces[6] ))){
        a=0
        b=3
        c=6
        return true
    }
    else if(spaces[1]!=null &&((spaces[1]==spaces[4])&& (spaces[1]==spaces[7] ))){
        a=1
        b=4
        c=7
        return true
    }
    else if(spaces[2]!=null &&((spaces[2]==spaces[5])&& (spaces[2]==spaces[8] ))){
        a=2
        b=5
        c=8
        return true
    }
    else if(spaces[0]!=null &&((spaces[0]==spaces[4])&& (spaces[0]==spaces[8] ))){
        a=0
        b=4
        c=8
        return true
    }
    else if(spaces[2]!=null &&((spaces[2]==spaces[4])&& (spaces[2]==spaces[6]))){
        a=2
        b=4
        c=6
        return true
       }
    else if(count==9)
       {
        return false 
       }
}