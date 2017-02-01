var wrongKey = 8;
var match = false;
var matched = 0;
var winGame = 0;
var guessed = " ";
var dupicateChar = false;
var tempChar = "";
var outOfRange = false;
var winner = 0;
var looser = 0;
var newString = "<br><p align='center'>";
var firstChoice = true;

// array

var computerChoices = ["antisec","botnet","phishing","hacking","compiler","cookie","doxing","firewall","hacktivist","hash"];
    var userGuess = "";
// random word

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// to uppercase word

computerGuess = computerGuess.toUpperCase();

// word to array

newCharacter = Array.from(computerGuess);

// test



var wordLength = computerGuess.length;




for (i = 0; i < wordLength; i++) {


	newString += "<span id='character" + i + "' class='hw'>X</span>";
  
//document.getElementById("secretword").innerHTML = newString;
   
    
}

newString += "</p>"

window.onload = function what() {

  document.getElementById("sw").innerHTML = newString;



};



  document.onkeyup = function(event) {

        // Determine which key was pressed
        var userGuess = event.keyCode;
        	console.log(userGuess);

        		// back to string old browser no event.key support

        	backToChr = String.fromCharCode(userGuess);
        	console.log(backToChr);

        	

      
     if (userGuess < 65 || userGuess > 90) {

     		outOfRange = true;

     		document.getElementById("demo").innerHTML = "<p align='center'>Please Select A-Z Only!</p>";

        	console.log("Out of Range");

        	
  }

for (i = 0; i < guessed.length; i++) {

	tempChar = guessed.charAt(i);

	if (backToChr === tempChar) {
			dupicateChar = true;


			document.getElementById("demo").innerHTML = "<p align='center'>Duplicate Guess!</p>";
		console.log("Duplicate Guess");

	}
}

if (!outOfRange && !dupicateChar)  {

for (i = 0; i < wordLength; i++) {

			if (backToChr === newCharacter[i]) {

  
              document.getElementById("demo").innerHTML = "<p align='center'>Correct!</p>";
          var match = true;
          winGame++;
          console.log(match);
        document.getElementById("character" + i).innerHTML = newCharacter[i];
        document.getElementById("character" + i).style.color = "#fff";


  

			}	
				
			}
}



if (winGame === wordLength) {
	winner++;
	document.getElementById("demo").innerHTML = "<p align='center'>You Win!</p>";
    document.getElementById("playagain").innerHTML = "<button class'btn'>Play Again</button>";
    document.getElementById("winner").innerHTML = "Your score is " + winner + " games!";
	console.log("You Win!");
}
        


if (!match && !outOfRange && !dupicateChar) {

	document.getElementById("demo").innerHTML = "<p align='center'>Wrong Guess Try Again!</p>";

	wrongKey--;
}




if (wrongKey < 1) {
    looser++;
    document.getElementById("demo").innerHTML = "<p align='center'>Sorry Computer Wins This Game!</p>";
	document.getElementById("playagain").innerHTML = "<button class'btn'>Play Again</button>";
    document.getElementById("winner").innerHTML = "<p align='center'>Computer won " + looser + " games!</p>";

	console.log("Game Over");
}    


    
    console.log(dupicateChar);
    console.log(outOfRange);
    console.log(match);

    if (!dupicateChar && !outOfRange && !match) {

      guessed += backToChr + " ";
      document.getElementById("userGuess").innerHTML = "<p align='center'>Missed Letters : " + guessed + "</p>";
    }
    
    match = false; 
    dupicateChar = false;
    outOfRange = false;  
        
      };