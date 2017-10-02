/*----- constants -----*/



/*----- app's state (variables) -----*/

var win = false;
var currentTurn;
var currentTurn = 'X';
var xOwns = [];
var oOwns = [];

/*----- cached element references -----*/

// var r1c1 = document.getElementById('1');
// var r1c2 = document.getElementById('2');
// var r1c3 = document.getElementById('3');
// var r2c1 = document.getElementById('4');
// var r2c2 = document.getElementById('5');
// var r2c3 = document.getElementById('6');
// var r3c1 = document.getElementById('7');
// var r3c2 = document.getElementById('8');
// var r3c3 = document.getElementById('9');

var tiles = document.querySelectorAll("div.container div div");
var resetButton = document.querySelector('.reset');
var display = document.getElementById('display');
/*----- event listeners -----*/





/*----- functions -----*/

function initialize(){
  //initialize reset button
  resetButton.addEventListener('click', function(){
    clearBoard();
  });
// set listeners for tiles
tiles.forEach(function(i){
  i.addEventListener("click", handleClick);
});
  display.textContent = 'Player X Begin!';
}

function handleClick(evt){
  if (currentTurn === "X"){
    if (oOwns.indexOf(evt.target.id) !== -1){
      return;
    } else {
      xOwns.push(evt.target.id);
    }
  } else if(currentTurn === "O") {
    if (xOwns.indexOf(evt.target.id) !== -1){
      return; }else{
        oOwns.push(evt.target.id);
      }
    }
    evt.target.classList.add(currentTurn);
    console.log(evt.target.id);
    winCheck();
  }

function nextTurn(){
  currentTurn === "X" ? currentTurn = "O" : currentTurn = "X";
  display.textContent = "Ready Player " + currentTurn;

}

function clearBoard() {
  // allCells.forEach(function(i){
  //   i.classList.add('blue');
  // });
  xOwns = [];
  oOwns = [];
  resetTiles();
  currentTurn = "X";
  display.textContent = "Player X Begin!";
  resetButton.textContent = "Reset";
  // intitialize();
	// $('.tile').removeClass('played');
	// $('.tile').removeClass('O-play');
	// $('.tile').removeClass('X-play');
	// $('.tile').html('');
	// $('.tile').addClass('free')
}

function winCheck(){
  if(currentTurn === "X"){
    if (xOwns.indexOf("1") !== -1 && xOwns.indexOf("2") !== -1 && xOwns.indexOf("3") !== -1 ){
      xWins();
    } else if (xOwns.indexOf("4") !== -1 && xOwns.indexOf("5") !== -1 && xOwns.indexOf("6") !== -1 ){
      xWins();
    } else if (xOwns.indexOf("7") !== -1 && xOwns.indexOf("8") !== -1 && xOwns.indexOf("9") !== -1 ){
      xWins();
    } else if (xOwns.indexOf("1") !== -1 && xOwns.indexOf("4") !== -1 && xOwns.indexOf("7") !== -1 ){
      xWins();
    } else if (xOwns.indexOf("2") !== -1 && xOwns.indexOf("5") !== -1 && xOwns.indexOf("8") !== -1 ){
      xWins();
    } else if (xOwns.indexOf("3") !== -1 && xOwns.indexOf("6") !== -1 && xOwns.indexOf("9") !== -1 ){
      xWins();
    } else if (xOwns.indexOf("1") !== -1 && xOwns.indexOf("5") !== -1 && xOwns.indexOf("9") !== -1 ){
      xWins();
    } else if (xOwns.indexOf("3") !== -1 && xOwns.indexOf("5") !== -1 && xOwns.indexOf("7") !== -1 ){
      xWins();
    } else if(xOwns.length >= 4){
      tieGame();
    } else {
      nextTurn();
    }
  } else {
    if (oOwns.indexOf("1") !== -1 && oOwns.indexOf("2") !== -1 && oOwns.indexOf("3") !== -1 ){
      oWins();
    } else if (oOwns.indexOf("4") !== -1 && oOwns.indexOf("5") !== -1 && oOwns.indexOf("6") !== -1 ){
      oWins();
    } else if (oOwns.indexOf("7") !== -1 && oOwns.indexOf("8") !== -1 && oOwns.indexOf("9") !== -1 ){
      oWins();
    } else if (oOwns.indexOf("1") !== -1 && oOwns.indexOf("4") !== -1 && oOwns.indexOf("7") !== -1 ){
      oWins();
    } else if (oOwns.indexOf("2") !== -1 && oOwns.indexOf("5") !== -1 && oOwns.indexOf("8") !== -1 ){
      oWins();
    } else if (oOwns.indexOf("3") !== -1 && oOwns.indexOf("6") !== -1 && oOwns.indexOf("9") !== -1 ){
      oWins();
    } else if (oOwns.indexOf("1") !== -1 && oOwns.indexOf("5") !== -1 && oOwns.indexOf("9") !== -1 ){
      oWins();
    } else if (oOwns.indexOf("3") !== -1 && oOwns.indexOf("5") !== -1 && oOwns.indexOf("7") !== -1 ){
      oWins();
    } else if (oOwns.length >=4) {
      tieGame();
    } else {
      nextTurn();
    }
  }
}

function xWins(){
  display.textContent = "X Wins!";
  resetButton.textContent = "Play Again?";
}

function oWins(){
  display.textContent = "O Wins!";
  resetButton.textContent = "Play Again?";
}

function tieGame(){
  display.textContent = "Stalemate.  Deadlock.  Tie.  Play Again?";
  tiles.forEach(function(i){
    i.removeEventListener("click", handleClick);
    i.style.backgroundColor = "grey";
  });
    // display.textContent = 'Player X Begin!';
}

function resetTiles(){
  for (var i = 0; i < tiles.length; i++ ){
    tiles[i].classList.remove('X');
    tiles[i].classList.remove('O');

  }
}

initialize();
