/* Guess Validate by Marshall */

var games = 0;
var again = true;
var totalTurns = 0;
while (again == true) {
	games++;
	var turns = 0;
	var guess = 0;
	var answer = Math.floor(Math.random()*100)+1;
	console.log(answer);
	while (guess != answer){
		guess = prompt("Guess my number (1-100).");
		if (guess == "q"){
			alert("You quit.");
			break;
		}
		if (validate(guess) == true){
			turns++;
			if (guess < answer){
				alert("Too low!");
			}
			else if (guess > answer){
				alert("Too high!");
			}
			else if (guess == answer) {
				alert(gameStats(turns));
			}
		}
		else alert("Invalid guess, try again.");
	}
	again = newGame();
}

/* Function validate
 * Ensures guess is a valid integer within answer range
 * @param guess
 * @return boolean
 */
 
function validate(guess){
	if (guess > 0 && guess < 101){
		return true;
	}
	else {
		return false;
	}
}

/* Function gameStats
 * Alerts the player of their turns for that game, number of games they have played, average turns per game
 * @param turns
 * @return none
*/

function gameStats(turns) {
	alert("You got it in " + turns + " turns!");
	totalTurns = totalTurns + turns;
	var averageTurns = totalTurns / games;
	alert("You have won " + games + " games, and on average have won in " + averageTurns + " turns.");
}

/* Function newGame
 * Asks player if they would like to play again, begins new game or ends game
 * @param none
 * @return boolean
*/

function newGame() {
	again = prompt("Would you like to play again? y = yes");
	if (again = "y") {
		return true;
	}
	else {
		alert("Thank you for playing!");
		return false;
	}
}
