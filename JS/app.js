/*----- constants -----*/



/*----- app's state (variables) -----*/

var currentTurn = 'X';
var xOwns = [];
var oOwns = [];
var xCount;
var oCount;
xCount = 0;
oCount = 0;

/*----- cached element references -----*/

var clearButton = document.querySelector('.clear');
var tiles = document.querySelectorAll("div.container div div");
var resetButton = document.querySelector('.reset');
var display = document.getElementById('display');
var xSkor = document.querySelector('#xSkor');
var oSkor = document.querySelector('#oSkor');

/*----- event listeners -----*/

function initialize(){
// set listeners for tiles
tiles.forEach(function(i){
  i.addEventListener("click", handleClick);
});
 //initialize reset button
resetButton.addEventListener('click', function(){
  clearBoard();
  handleClick();
});
  display.textContent = 'Player X Begin!';
  xSkor.innerHTML = xCount;
  oSkor.innerHTML = oCount;
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
    winCheck();
  }

  //clear score count
    clearButton.addEventListener('click', function(){
      clearCount();
    });

/*----- functions -----*/

function nextTurn(){
  currentTurn === "X" ? currentTurn = "O" : currentTurn = "X";
  display.textContent = "Ready Player " + currentTurn;
}

function clearBoard() {
  xOwns = [];
  oOwns = [];
  currentTurn = "X";
  display.textContent = "Player X Begin!";
  resetButton.textContent = "Reset";
  resetButton.style.color = '#2D3142';
  resetTiles();
}

function clearCount(){
  xCount = 0;
  oCount = 0;
  xSkor.textContent = xCount;
  oSkor.textContent = oCount;
  resetButton.style.color = '#2D3142';
  clearBoard();
  initialize();
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
  xCount += 1;
  xSkor.textContent = xCount;
  display.textContent = "X Wins!";
  resetButton.textContent = "Play Again?";
  resetButton.style.color = '#EF8354';
  clearBoard();
  initialize();
}

function oWins(){
  oCount += 1;
  oSkor.textContent = oCount;
  display.textContent = "O Wins!";
  resetButton.textContent = "Play Again?";
  resetButton.style.color = '#EF8354';
  clearBoard();
  initialize();
  // setTimeoutclearBoard();
    //remove listeners:
  // tiles.forEach(function(i){
  //   i.removeEventListener("click", handleClick);
  //   i.style.backgroundColor = "grey";
  // });
}

function tieGame(){
  display.textContent = "Stalemate.  Deadlock.  Tie.";
  //remove listeners:
  // tiles.forEach(function(i){
  //   i.removeEventListener("click", handleClick);
  //   i.style.backgroundColor = "grey";
  // });
  resetButton.textContent = "Play Again?";
  resetButton.style.color = '#EF8354';
    // resetTiles()
}

function resetTiles(){
  for (var i = 0; i < tiles.length; i++ ){
    tiles[i].classList.remove('X');
    tiles[i].classList.remove('O');
  }
}

initialize();



// Jim's Example re: state

// on html
/* <main>
  <div id="0-box"></div>
  <div id="1-box"></div>
  <div id="2-box"></div>
  <div id="3-box"></div>
</main> */



// var data;

// document.querySelector("main")
// .addEventListener('click', function(evt){
// 	//var idx = parseInt(evt.target.id);
//   var idx = evt.target.id.charAt(0);
//   data[idx]++;
//   render();
// });

// function init(){
// 	data = [2, 4, 3, 9];
// }

// function render(){
// 	data.forEach(function(num, idx){
//   	var box = document.getElementById(idx + "-box").textContent = num;
//   });
// }

// init();
// render();