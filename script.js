
const cells=document.querySelectorAll('[cell]')
let winner=document.querySelector('#winner')
let currentPlayer='X';
let places=['','','','','','','','',''];
let gameRunning=true;
const winConditions=
[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[6,4,2]
]

initializeGame();

function initializeGame(){
    cells.forEach(cell => {
        cell.addEventListener('click',cellClicked);
    });
    
}
function cellClicked(){
    const cellIndex=this.getAttribute('cell-index');

    if(places[cellIndex]!="" ||!gameRunning){
        return;
    }
    
    updateCell(this,cellIndex);
}

function updateCell(cell,index){
    places[index]=currentPlayer;
    cell.textContent=currentPlayer;
    checkWinner(index);
    changePlayer();
}

function changePlayer(){
    currentPlayer=(currentPlayer==='X') ? 'O':'X';
}

function checkWinner(index){

    const row=index/3;
    const column=index%3;

    if(places[row])
    if(a!='' && b!='' && c!='' && a==b && b==c){
        winner.textContent=`${currentPlayer} wins!`
         gameRunning=false;
    }
}
