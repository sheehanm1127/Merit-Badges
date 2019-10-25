/* Guessing Game code with guessValidator function */
var answer = Math.floor(Math.random()*100)+1;
console.log(answer);
var guess = 0;
var tries = 0;
while (guess != answer) {
	guess = prompt("Guess my number between 1 and 100");
		if (guess == "q") {
			break;
		}
		if (guessValidator(guess) == true) {
	tries++;
	if (guess < answer) {
		alert("Too low!")
	}
	else if (guess > answer) {
		alert("Too high!")
	}
		}
	else {
		alert("Invalid guess, try again")
	}
}
if (guess == answer) {
	alert("You got it in " + tries + " tries!") 
}
else {
	alert("Quitter!") 
}

/* 
function guessValidator 
checks if guess is within valid range of (1-100)
return false if guess is not valid
return true is guess is valid
@param guess
@return boolean
*/

 function guessValidator(guess) {
	 if (guess > 1 && guess < 101) {
		 return true;
	 }
	 else {
		 return false;
	 }
 }
