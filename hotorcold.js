var lastGuess = 0;									//stores the users last guess, to compare if it was warmer or colder
var realNum = Math.floor((Math.random()*100)+1); 	//a random number in between 1 and 100


$(document).ready(function(){									//jQuery that adds the results of the guess to the result div
	$("#button").click(function(){								//when the guess button is clicked
	$('.result').empty();										//result div is emptied
	var write = guessUpdate(document.getElementById("guess").value);
	$('.result').append('<p>' + write + '</p>');				//and new results are added
	$('#guess').val("");    									//empties the input field
	});
	
	//this resets the game if the user clicks the reset button
	$("#reset").click(function(){						//when the reset button is clicked
	document.body.style.backgroundColor="#C0C0C0"		//resets the background to gray
	realNum = Math.floor((Math.random()*100)+1); 		//resets the random number
	lastGuess = 0;										//resets the last guess
	$('#guess').val("");    							//empties the input field
	$('.result').empty();								//empties the result div
	$('.result').append("<p>The game has been reset.</p>");	//notifies the user of the reset
	});
	});
	
function guessUpdate(guess) {						
	var currentGuess = guess;		//number that the user guessed
	var outputString = "";			//keeps track of the things that will be output on the page
	
	//this corrects the user if they pick a number out of range:
	if ((isNaN(parseInt(currentGuess))) || currentGuess > 100 || currentGuess < 1) {
		outputString = "You didn't pick a valid number in between 1 and 100, please guess again.";
		return outputString;								//notifies the user
	}
	
	var str1 = "You guessed " + currentGuess + " and you are ";
	
	if (currentGuess == realNum) {						//if the user guessed correctly
		outputString = "You guessed right!";	
		document.body.style.backgroundColor="#C0C0C0"   //resets the background to white
		realNum = Math.floor((Math.random()*100)+1); 	//resets the random number
		lastGuess = 0;									//resets the last guess
		return outputString;							//tells the user they guessed correctly
		}
	
	var distance = Math.abs(realNum - currentGuess);	//distance between user's guess and the correct number
	var lastDistance = Math.abs(realNum - lastGuess);	//distance between user's last guess and the correct number
	var str2 = ""; 										//to compare whether they are warmer or colder
	var str3 = "";
	
	if (distance <= 10) {								//this if else... statement determines what temperature to output
		str2 = "hot!";
		document.body.style.backgroundColor="#F01515"; 	//sets the background color to the appropriate color based on the guess
		}
		else if (distance <= 25 && distance > 10) 
		{
		str2 = "warm!"; 
		document.body.style.backgroundColor="#D53131"; 
		}
		else if (distance <= 50 && distance > 25)
		{
		str2 = "lukewarm!";
		document.body.style.backgroundColor="#E519AF"; 
		}
		else if (distance <= 75 && distance > 50)
		{
		str2 = "cold!";
		document.body.style.backgroundColor="#6D33E5"; 
		}
		else if (distance <= 100 && distance > 75)
		{
		str2 = "freezing!";
		document.body.style.backgroundColor="#110BC4"; 
		}

	if (lastGuess == 0) {					//if there was no last guess
		lastGuess = currentGuess;			//then the user's guess becomes the last guess
		outputString = str1.concat(str2); 	//output string is formed without telling whether guess was warmer or colder
		return outputString;				//because there was no last guess
		}
		
		
		/*this if else...statement compares the distance between the user's guess and the correct number to the distance
		between the user's last guess and the correct number. Adds whether they are hotter or colder to the output string*/
	if (distance < lastDistance) {			
			str3 = " Also, you are warmer than your last guess.";
			}
			else if (distance > lastDistance)
			{
			str3 = " Also, you are colder than your last guess."
			}
			else if (distance == lastDistance)
			{
			str3 = " And you are equally as warm as your last guess."
			}
	
	lastGuess = currentGuess;					//last guess is now set 
	outputString = str1.concat(str2,str3);		//result is output
	return outputString;						
}
