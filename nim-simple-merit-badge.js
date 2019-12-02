/* Nim Simple By Marshall Sheehan */

/* Initialize Globals */

var again = true;
var games = 0;
var count = 0;
var next = 0;

/* Main */

alert("Let\'s play Nim!");
while (again == true) {	
	count = 0;	
	turn = 0;	
	next = games%2;	
	while (count < 21){		
		if (next == 0) {
			count = cpuTurn(count);
		}		
		else count = userTurn(count);		
		if (count < 21) {
			next = nextSwitch(next);
		}	
	}
	again = declareWinner(next);
}
alert("Thanks for playing!");

/* Functions */

/* 
function cpuTurn() 
* creates turn for cpu; generate random number between 1 and 3 (alert int to player)
* Param none
* Return boolean
*/

function cpuTurn(count){	
	var goodTurn = false;	
	var turn = 0;	
	while (goodTurn == false) {		
		turn = Math.floor(Math.random()*3)+1;		
		if (turn == 1 || turn > 1 && count+turn < 21) goodTurn = true;	
	}	
	alert("CPU counts " + turn);	
	count += turn;	
	alert("Count is now " + count);	
	return count;
}

/* 
function userTurn() 
* prompts user for turn amount and validates user's input 
* Param none
* Return boolean
*/

function userTurn(count) {	
	var goodTurn = false;	
	var turn = 0;	
	while (goodTurn == false) {	
		turn = prompt("Enter 1, 2 or 3");		
		if (turn > 0 && turn < 4 && Math.floor(turn) == turn) goodTurn = true;		
		else {
			alert("Invalid count. Enter 1,2 or 3.");
		}	
	}	
	count += Number(turn);	
	alert("Count is now " + count);	
	return count;
}

/* 
function nextSwitch(next) 
* Checks next value and with that information determines who goes first in next game
* Param next
* Return int 
*/

function nextSwitch(next){	
	if (next == 0) {
		next = 1;
	}	
	else {
		next = 0;
	}	
	return next;
}

/* 
function declareWinner(next) 
* Checks next value and with that information declares winner
* Param next
* Return none
*/

function declareWinner(next){	
	if (next == 0) {
		winner = "You";
	}	
	else {
		winner = "I";
	}	
	alert(winner + " won!");	
	games++;	
	again = confirm("Press OK to play again, press Cancel to quit.");
	return again;
}
