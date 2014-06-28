"use strict";
var prompt = require("sync-prompt").prompt;


function printBoard(board) {
  var
    i = 0,
    n = board.length;

  // keep in mind that this is poorly-written JavaScript code
  // we will learn not to use for loops in JavaScript
  for(i; i < n; i++) {
      console.log(board[i].join(""));
    }
}


function checkBoard(board) {
  var x = "XXX",
      o = "OOO",
      empty = "***";

      var col1 = board[0][0] + board[1][0] + board[2][0];
      var col2 = board[0][1] + board[1][1] + board[2][1];
      var col3 = board[0][2] + board[1][2] + board[2][2];

      var row1 = board[0][0] + board[0][1] + board[0][2];
      var row2 = board[1][0] + board[1][1] + board[1][2];
      var row3 = board[2][0] + board[2][1] + board[2][2];

      var dR = board[0][0] + board[1][1] + board[2][2];
      var dL = board[0][2] + board[1][1] + board[2][0];

      if(row1 === x || col1 === x || row2 === x || col2 === x
          || row3 === x || col3 === x || dR === x || dL === x) {
        console.log("X wins!");
      }
      else if(row1 === o || col1 === o || row2 === o || col2 === o
                || row3 === o || col3 === o || dR === o || dL === o) {
        console.log("O wins!");
      }
      else if(row1 != empty && col1 != empty && row2 != empty && col2 != empty
                && row3 != empty && col3 != empty && dR != empty && dL != empty) {
        console.log("Nobody wins :P");
        return false;
      }
}


// entry point for the game
function gameLoop() {
  var
    board = [ ["*", "*", "*"],
              ["*", "*", "*"],
              ["*", "*", "*"] ],
    xTurn,// = true,
    position = null;

  var nickname = prompt("Choose nickname: ");
  var otherNickname = prompt("Choose other nickname: ");


  var randInt = Math.random();
  if(randInt < 0.51) {
    console.log("It's " + nickname + "'s turn");
    xTurn = true;
  }
  else {
    console.log("It's " + otherNickname + "'s turn");
    xTurn = false;
  }

  while(true) {
    if(checkBoard(board) === false) {
      break;
    }


    console.log("This is the current state of the board:");
    printBoard(board);

    if(xTurn) {
      console.log("Place X below");
    } else {
      console.log("Place O below");
    }

    // this is blocking prompt
    position = prompt("x y -> ");
    console.log(position);

    var arr = position.split(" ");
    var pX = parseInt(arr[0], 10);
    var pY = parseInt(arr[1], 10);

    if(pX < 0 || pX > 3 || pY < 0 || pY > 3){
      console.log("Invalid field!")
      return false;
    }

    if(board[pX - 1][pY - 1] === "*" && xTurn === true) {
      board[pX - 1][pY - 1] = "X";
      xTurn = !xTurn;
    }
    else if (board[pX - 1][pY - 1] === "*" && xTurn === false) {
      board[pX - 1][pY - 1] = "O";
      xTurn = !xTurn;
    }
    else if (board[pX - 1][pY - 1] != "*" ){
      console.log("This position is busy! Try another one");
    }



  }
}

gameLoop();
