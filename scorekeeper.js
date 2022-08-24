const player1Button = document.querySelector('#player1button');
const player2Button = document.querySelector('#player2button');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const resetButton = document.querySelector('#reset');
const scoreChanger = document.querySelector('#play');




//first set scores and some conditions
let p1Score = 0;
let p2Score = 0;
let winningScore = 0;
let isGameOver = false;
//conditionals for player1 and adding classlist
player1Button.addEventListener('click', function(){
    if(!isGameOver){
        p1Score +=1;
        if(p1Score === winningScore){
            isGameOver = true;
            player1.classList.add('win');
            player2.classList.add('lose');
            
        }
        player1.textContent = p1Score;
    }

    
})
//same for player2
player2Button.addEventListener('click', function(){
    if(!isGameOver){
        p2Score +=1;
        if(p2Score === winningScore){
            isGameOver = true;
            player2.classList.add('win');
            player1.classList.add('lose');
        }
        player2.textContent = p2Score;
    }

    
})
//change the score to playe to 4 or 7 etc.
scoreChanger.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})


//reset button that reset whole game and reset classes that are added for winner or loser
resetButton.addEventListener('click', reset)
function reset(){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    player1.textContent = 0;
    player2.textContent = 0;
    player1.classList.remove('win','lose');
    player2.classList.remove('win','lose');
}



