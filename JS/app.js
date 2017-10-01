/*----- constants -----*/
var inPlay = false;
var win = false;

var r1c1 = document.getElementById('11');
var r1c2 = document.getElementById('12');
var r1c3 = document.getElementById('13');
var r2c1 = document.getElementById('21');
var r2c2 = document.getElementById('22');
var r2c3 = document.getElementById('23');
var r3c1 = document.getElementById('31');
var r3c2 = document.getElementById('32');
var r3c3 = document.getElementById('33');

var currentTurn = 'x';
/*----- app's state (variables) -----*/
var table = document.querySelector('table');

var resetButton = document.querySelector('.reset');
/*----- cached element references -----*/
/*----- event listeners -----*/
table.addEventListener('click', handleClick);
resetButton.addEventListener('click', function(){
  clearBoard();
});

/*----- functions -----*/
function handleClick(evt){
  evt.target.classList.add("blue");

};

function clearBoard() {
  document.classList.remove("blue");
	// $('.tile').removeClass('played');
	// $('.tile').removeClass('O-play');
	// $('.tile').removeClass('X-play');
	// $('.tile').html('');
	// $('.tile').addClass('free');
  alert("reset");

}

function nextTurn (){
  currentTurn = "x" ? currentTurn = "o" : currentTurn = "x";
}
