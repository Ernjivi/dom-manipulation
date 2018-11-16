// cache del DOM
var myApp = document.querySelector('#myApp');
var player1Area = myApp.querySelector('#player1');
var player2Area = myApp.querySelector('#player2');
var result = myApp.querySelector('#result');
var play = myApp.querySelector('#play');
// function que regrese piedra papel o tijera

function rockPaperScissors(){
  return Math.floor(Math.random() * 3);
}

// // function que evalue que jugador gano
// // game(player1, player2);
function game(){
  var player1 = rockPaperScissors();
  var player2 = rockPaperScissors();
  var options = ['rock', 'paper', 'scissors'];

  if (player1 > player2 && player1 - player2 != 2){
    render(options[player1], options[player2], 'player1');
  } else if (player2 > player1 && player2 - player1 != 2){
    render(options[player1], options[player2], 'player2');
  } else if (player1 === player2){
    render(options[player1], options[player2], 'draw');
  }
}

// // function que dibuje en el DOM
// // resultados de los jugadores y quien gano
function render(player1, player2, hoWon){
  player1Area.textContent = player1;
  player2Area.textContent = player2;
  result.textContent = hoWon;
}

// declarar un eventlistener para el botón de jugar.
play.addEventListener('click', game)