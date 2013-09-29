var lastGuess = 0;
var realNum = Math.floor((Math.random()*100)+1); 

$(document).ready(function(){
	$("#button").click(function(){
	var write = guessUpdate(document.getElementById("guess").value);
	$('#container').append('<p>' + write + '</p>');
	});
	});

function guessUpdate(guess) {
	var currentGuess = guess;
	var outputString = "";
	
	if (currentGuess > 100 || currentGuess < 1) {
		outputString = "You didn't pick a number in between 1 and 100, please guess again.";
		return outputString;
	}
	
	var str1 = "You guessed " + currentGuess + " and you are ";
	
	if (currentGuess == realNum) {
		outputString = "You guessed right!";
		realNum = Math.floor((Math.random()*100)+1); 
		lastGuess = 0;
		return outputString;
		}
	
	var distance = Math.abs(realNum - currentGuess);
	var lastDistance = Math.abs(realNum - lastGuess);
	var str2 = ""; 
	var str3 = "";
	
	if (distance <= 10) {
		str2 = "hot!";
		}
		else if (distance <= 25 && distance > 10) 
		{
		str2 = "warm!"; 
		}
		else if (distance <= 50 && distance > 25)
		{
		str2 = "lukewarm!";
		}
		else if (distance <= 75 && distance > 50)
		{
		str2 = "cold!";
		}
		else if (distance <= 100 && distance > 75)
		{
		str2 = "freezing!";
		}

	if (lastGuess == 0) {
		lastGuess = currentGuess;
		outputString = str1.concat(str2); 
		return outputString;
		}
		
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
	
	lastGuess = currentGuess;
	outputString = str1.concat(str2,str3);
	return outputString;
}
