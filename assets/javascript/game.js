


// variables//
var wins =0;
var losses =0;
var guessesLeft= 9;
var randomLetters=['a','b','c','d','f','g','h',
'i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var newLetter=""; // used as temp variable for new letter generated//
var currentGuess=[];//array to hold guessed letters//





// get first random letter compLetter//

var compLetter = randomLetters[Math.floor(Math.random() * randomLetters.length)];

// console.log(compLetter);

// function for updating guesses left to screen //

function countGuessesLeft() {
	
	document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;

//    console.log(guessesLeft);

}

// display wrong guessess so far on screen //

function yourGuesses() {

	document.getElementById("guessesSoFar").innerHTML = "Guesses so far: " + currentGuess+' ';

// console.log(currentGuess);

}



// Playing the game when user presses key//

document.onkeydown = function(event) {
	guessesLeft--;

	var yourGuess = String.fromCharCode(event.keyCode).toLowerCase();

// assigns keycode from event to var yourGuess//
//converts to  lower case keycode//

	currentGuess.push(yourGuess);
	
//adds yourGuess to current guess array//
	
	countGuessesLeft();
	yourGuesses();


	if (yourGuess === compLetter){
		wins++;
		document.getElementById("wins").innerHTML = "Wins: " + wins;
		newGame();
	} 
	else if (guessesLeft === 0) {
		losses++;
		document.getElementById("loses").innerHTML = "Loses: " + losses;
		
		newGame();
	}
  };



//new game with new computer guess//

	function newGame() {
	guessesLeft = 9; 			 //reset game to start//
	currentGuess = [];			 //clear curentGuess array//
	var newLetter = randomLetters[Math.floor(Math.random() * randomLetters.length)];
	compLetter=newLetter; 		//assign newLetter generated to compLetter//
   
	
	// console.log(compLetter);
    

}

















