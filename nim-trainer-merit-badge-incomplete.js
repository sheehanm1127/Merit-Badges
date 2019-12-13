/* 
 * Nim Simple - Marshall
 ***NOT COMPLETE***
 * Note: Global variables have been passed as parameters.  This is not best practice, but helpful for tracking.
 */

/* Initialize Globals */
var again = true; 
var games=0; 
var count=0;
var next=0;

/* Main */
alert("Let\'s play Nim!");
while (again == true) {
	count=0;
	turn=0;
	gameType = pickGame();
	next=games%2;
	while (count < 21){
		if (next == 0) {
			if (gameType == "simple") {
				cpuTurn(count);
			}
			else {
				cpuTrainer(count);
			}
		}
		else {
			count = userTurn(count);
			alert("Count is now "+count);
		}
		if (count < 21) next=nextSwitch(next);
	}
	again = declareWinner(next);
}
alert("Nice playing with you!");

/* Functions */

/* Pick Game: prompts user for what type of nim game they would like to play; simple or trainer */
function pickGame(gameType) {
	var gameType = prompt("What type of game would you like to play? Please input 'simple' for Nim Simple and 'trainer' for Nim Trainer.");
	return gameType;
}

/* CPU Turn -- random turn but not purposely losing or going over 21 */
function cpuTurn(count){
	let goodTurn = false;
	let turn=0;
	while (goodTurn == false) {
		turn = Math.floor(Math.random()*3)+1;
		if (turn == 1 || turn > 1 && count+turn < 21) goodTurn = true;
	}
	alert("CPU counts "+turn);
	count += turn;
	alert("Count is now " + count);
	return count;
}

/* CPU Trainer: creates CPU turn trying to win (using the remainder of count divided by 4) */
function cpuTrainer(count) {
	if (count%4 != 0) {
		turn = 4 - (count%4);
	}
	else if (count == 20) {
		turn = 1;
	}
	else {
		turn = Math.floor(Math.random()*3)+1;
	}
	alert("CPU counts " + turn);
	count+=turn;
	alert("Count is now " + count);
	return count;
}

/* User Turn: prevents entering invalid turns */
function userTurn(count) {
	let goodTurn = false;
	let turn=0;
	while (goodTurn == false) {
		turn = prompt("Enter 1, 2 or 3");
		if (turn > 0 && turn < 4 && Math.floor(turn)==turn) goodTurn=true;
		else alert("Invalid input. Enter 1,2 or 3.");
	}
	count += parseInt(turn);
	return count;
}

/* Next Switch: changes turns */
function nextSwitch(next){
	if (next==0) next = 1;
	else next = 0;
	return next;
}

/* Declare Winner: Specifies winner value and asks for play again input */
function declareWinner(next){
	if (next==0) winner = "You";
	else winner = "I";
	alert(winner + " won!");
	games++;
	again = confirm("Press OK to play, Cancel to quit.");
	return again;
}
