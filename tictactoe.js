var heading=document.querySelector(".heading")
const btnLight = document.querySelector(".btn-light");
var header=document.querySelector(".heading")
var btnXO=document.querySelectorAll(".btnXO")
const center = document.querySelector(".center");
const start = document.querySelector(".start");
var begin=document.querySelector(".begin")
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
var temp
btnXO.forEach(button=>
    button.addEventListener('click', function(e) {
       CURRENT_PLAYER=e.target.innerHTML
       if(e.target.classList.contains("selected")){
        e.target.classList.remove("selected")
       }
       else{
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

    begin.addEventListener("click", function() {
        heading.innerHTML= CURRENT_PLAYER+" TURN"
        temp=CURRENT_PLAYER
        console.log(heading.innerHTML)
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
restartBtn.addEventListener("click",restart)

cells.forEach((cell)=>{
    cell.addEventListener("click",function(e){
        
        if(gameOver==false){
            id=e.target.id
            if(spaces[id]==null)
            {   spaces[id]=CURRENT_PLAYER
                count+=1
                const playerWon=playerHasWon()
                if(playerWon!=false){
                    var winningCombination=playerWon
                    const winningCell=winningCombination.map(index=>cells[index])
                    winningCell.forEach(cell=>
                    {
                        cell.classList.add('winning-cell')
                    })
                    e.target.innerHTML=CURRENT_PLAYER
                    gameOver=true
                    if(CURRENT_PLAYER==temp){
                        header.innerHTML="PLAYER 1 WON"
                    }
                    else{
                        header.innerHTML="PLAYER 2 WON"
                    }
                }
                else if(playerWon==false && count==9){
                    header.innerHTML="IT'S A TIE"
                }
                e.target.innerHTML=CURRENT_PLAYER
                if(CURRENT_PLAYER==X_PLAYER){
                    CURRENT_PLAYER=O_PLAYER
                }
                else{
                    CURRENT_PLAYER=X_PLAYER
                }
                if(gameOver==false){
                    heading.innerHTML= CURRENT_PLAYER+" TURN"
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
    const winningCombos=[[0, 1, 2], [3, 4, 5], [6, 7, 8],[0, 3, 6], [1, 4, 7], [2, 5, 8],[0, 4, 8], [2, 4, 6]]
    for (var i=0;i< winningCombos.length;i++){
        const [a,b,c]=winningCombos[i]
        if(spaces[a] && spaces[a]==spaces[b] && spaces[a]==spaces[c]){
            return [a,b,c]
        }
    }
    return false 
}