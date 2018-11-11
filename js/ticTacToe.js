const cells = document.getElementsByTagName('td');
const player1Score = document.getElementById('player1')
const player2Score = document.getElementById('player2')
const tieCounter = document.getElementById('tie')
const restart = document.getElementById('restart')
const checkbox = document.getElementById('mode')
const comment = document.querySelector('.hidden')
let xRound = [];
let xPlayer=0;
let oRound = [];
let oPlayer=0;
let tie=0;
let player=false;
let clickCounter=0;
let emptyCells=[];
const win = ["1,2,3","4,5,6","7,8,9","1,4,7","2,5,8","3,6,9","1,5,9","3,5,7"];

if (checkbox.checked) {
    newGameVsPc ()
    console.log('Checked');
} else {
    newGame()
}

checkbox.onclick = function (event) {
    if (checkbox.checked) {
        console.log('Checked');
        xPlayer=0; oPlayer=0;tie=0;
        comment.classList.remove('hidden')
        newGameVsPc ()
    } else {
        console.log('Not Checked');
        xPlayer=0; oPlayer=0;tie=0;
        comment.classList.add('hidden')
        newGame()
    }
}

function newGame () {
    for (i=0; i<cells.length; i++) {
        if (checkbox.checked){return}
        cells[i].onclick = function (event) {
            clickCounter++
            player = !player
            fill(event.target);
        }
    }
}

function fill () {
    if (event.target.innerHTML==''){
        if (player) {
            event.target.innerHTML = 'X';
            xRound.push(event.target.id);
            xRound.sort()
            winOrNot() 
            tieOrNot()
        }
        else if (!player) {
            event.target.innerHTML = 'O';
            oRound.push(event.target.id);
            oRound.sort()
            winOrNot() 
            tieOrNot()                    }
    }
    else {
        alert('Choose a free space!')
        clickCounter--;
        player=!player;
    }    
}

function winOrNot () {
    if (cells[0].innerHTML == 'X' && cells[1].innerHTML == 'X' && cells[2].innerHTML == 'X' || 
        cells[3].innerHTML == 'X' && cells[4].innerHTML == 'X' && cells[5].innerHTML == 'X' || 
        cells[6].innerHTML == 'X' && cells[7].innerHTML == 'X' && cells[8].innerHTML == 'X' || 
        cells[0].innerHTML == 'X' && cells[3].innerHTML == 'X' && cells[6].innerHTML == 'X' || 
        cells[1].innerHTML == 'X' && cells[4].innerHTML == 'X' && cells[7].innerHTML == 'X' || 
        cells[2].innerHTML == 'X' && cells[5].innerHTML == 'X' && cells[8].innerHTML == 'X' || 
        cells[0].innerHTML == 'X' && cells[4].innerHTML == 'X' && cells[8].innerHTML == 'X' || 
        cells[2].innerHTML == 'X' && cells[4].innerHTML == 'X' && cells[6].innerHTML == 'X') {
        xPlayer++
        clickCounter--
        player1Score.innerHTML='Player 1 <br>' + xPlayer + ' wins'
        setTimeout(function() {alert('Player 1 wins!');restartGame()},100)
    }
    else 
    if (cells[0].innerHTML == 'O' && cells[1].innerHTML == 'O' && cells[2].innerHTML == 'O' || 
        cells[3].innerHTML == 'O' && cells[4].innerHTML == 'O' && cells[5].innerHTML == 'O' || 
        cells[6].innerHTML == 'O' && cells[7].innerHTML == 'O' && cells[8].innerHTML == 'O' || 
        cells[0].innerHTML == 'O' && cells[3].innerHTML == 'O' && cells[6].innerHTML == 'O' || 
        cells[1].innerHTML == 'O' && cells[4].innerHTML == 'O' && cells[7].innerHTML == 'O' || 
        cells[2].innerHTML == 'O' && cells[5].innerHTML == 'O' && cells[8].innerHTML == 'O' || 
        cells[0].innerHTML == 'O' && cells[4].innerHTML == 'O' && cells[8].innerHTML == 'O' || 
        cells[2].innerHTML == 'O' && cells[4].innerHTML == 'O' && cells[6].innerHTML == 'O') {
        oPlayer++
        clickCounter--
        player2Score.innerHTML='Player 2 <br>' + oPlayer + ' wins'
        setTimeout(function() {alert('Player 2 wins!');restartGame()},100)
    }
}

function tieOrNot() {
    if (clickCounter==9)  {  
        tie++
        tieCounter.innerHTML='Players tied <br>' + tie + ' times'
        setTimeout(function() {alert("It's a tie!");restartGame()},100)
    }
}

function restartGame () {
    for (i=0; i<cells.length; i++) {
        cells[i].innerHTML='';
    }
    oRound=[]
    xRound=[]
    clickCounter=0
}

  
function newGameVsPc () {
    for (i=0; i<cells.length; i++) {
        if (!checkbox.checked){return}
        cells[i].onclick = function (event) {
            clickCounter++
            player = !player
            if (player) {
                if (event.target.innerHTML==''){
                    event.target.innerHTML = 'X';
                    xRound.push(event.target.id);
                    xRound.sort()
                    winOrNot() 
                    tieOrNot()
                } else {
                    alert('Choose a free space!')
                    clickCounter--;
                    player=!player;
                }        
            } else if (!player) {
                for (i=0; i<cells.length;i++) {
                    if (cells[i].innerHTML=="") {
                        emptyCells.push(i)
                        var random =emptyCells[(Math.floor(Math.random()*emptyCells.length))]
                    }
                }
                cells[random].innerHTML='O';
                emptyCells=[]
                winOrNot() 
                tieOrNot()
            }
        }
        // setTimeout(function() {
        //     for (i=0; i<cells.length;i++) {
        //         cells[i].onclick = function () {
        //             console.log('Iwaschanged')
        //             if (!player) {
        //                 for (i=0; i<cells.length;i++) {
        //                 if (cells[i].innerHTML=="") {
        //                     emptyCells.push(i)
        //                     cells[emptyCells[(Math.floor(Math.random()*emptyCells.length))]].innerHTML='O';
        //                     winOrNot() 
        //                     tieOrNot()}
        //                 }
        //             }
        //         }
        //     }
        // },500)
    }    
                    
}


// reset.onclick = function (event) {
//     newGame();
// }

// const win = {
//     horizontal:["'1','2','3'","'4','5','6'","'7','8','9'"],
//     vertical:["'1','4','7'","'2','5','8'","'3','6','9'"],
//     diognal:["'1','5','9'","'3','5','7'"],
// }


// setTimeout(alert('hi'),5000)
//loop all cells
// if((xRound.length != 5 || oRound.length != 4) && (xRound.length != 4 || oRound.length != 5))
// if (xRound.toString().match(/1,2,3|4,5,6|7,8,9|1,4,7|2,5,8|3,6,9|1,5,9|3,5,7/g))
// if (oRound.toString().match(/1,2,3|4,5,6|7,8,9|1,4,7|2,5,8|3,6,9|1,5,9|3,5,7/g))