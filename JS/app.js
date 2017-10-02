/*----- constants -----*/



/*----- app's state (variables) -----*/
var inPlay = false;
var win = false;
var currentTurn = 'X';
var xOwns = [];
var oOwns = [];

/*----- cached element references -----*/

var r1c1 = document.getElementById('r1c1');
var r1c2 = document.getElementById('r1c2');
var r1c3 = document.getElementById('r1c3');
var r2c1 = document.getElementById('r2c1');
var r2c2 = document.getElementById('r2c2');
var r2c3 = document.getElementById('r2c3');
var r3c1 = document.getElementById('r3c1');
var r3c2 = document.getElementById('r3c2');
var r3c3 = document.getElementById('r3c3');

var tiles = document.querySelectorAll("div.container div div");
var resetButton = document.querySelector('.reset');
var display = document.getElementById('display');
/*----- event listeners -----*/

tiles.forEach(function(i){
  i.addEventListener("click", handleClick);
});

resetButton.addEventListener('click', function(){
  clearBoard();
});

/*----- functions -----*/



function handleClick(evt){
  if (currentTurn === "X"){
    if (oOwns.indexOf(evt.target.id) !== -1){
      return;
    } else {
      xOwns.push(evt.target.id);
      evt.target.textContent = "O";
    }
  } else if(currentTurn === "O") {
    if (xOwns.indexOf(evt.target.id) !== -1){
      return; }else{
        oOwns.push(evt.target.id);
        evt.target.textContent = "O";
      }
    }
    evt.target.classList.add(currentTurn);
    console.log(evt.target.id);
    winCheck();
    // nextTurn();
  }

function nextTurn(){
  currentTurn === "X" ? currentTurn = "O" : currentTurn = "X";
  display.textContent = "Ready Player " + currentTurn;

}

function clearBoard() {
  // allCells.forEach(function(i){
  //   i.classList.add('blue');
  // });
  resetTiles();
	// $('.tile').removeClass('played');
	// $('.tile').removeClass('O-play');
	// $('.tile').removeClass('X-play');
	// $('.tile').html('');
	// $('.tile').addClass('free');

  xOwns = [];
  oOwns = [];

}

function winCheck(){
if (xOwns.indexOf("r1c1") === -1 && xOwns.indexOf("r1c2") === -1 && xOwns.indexOf("r1c3") === -1){
  alert('win');
} else {
  nextTurn();
}
}

function resetTiles(){
  for (var i = 0; i < tiles.length; i++ ){
    tiles[i].classList.remove('X');
    tiles[i].classList.remove('O');

  }
}
