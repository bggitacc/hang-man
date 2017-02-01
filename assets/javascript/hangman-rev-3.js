var wrongKey = 8;
var match = false;
var matched = 0;
var winGame = 0;
var guessed = "";
var dupicateChar = false;
var tempChar = "";
var outOfRange = false;
var winner = 0;
var looser = 0;
var newString = "<br><p align='center'>";
var firstChoice = true;
var wrongCharList ="";
var computerGuess = "";
var wordLength = 0;
var newCharacter = "";
var userGuess = "";
var replayStatus = true;
var computerChoices = ["antisec","botnet","phishing","hacking","compiler","cookie","doxing","firewall","hacktivist","hash"];









  

computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

   




computerGuess = computerGuess.toUpperCase();


newCharacter = Array.from(computerGuess);



wordLength = computerGuess.length;



// to uppercase word

computerGuess = computerGuess.toUpperCase();


for (i = 0; i < wordLength; i++) {


  newString += "<span id='character" + i + "' class='hw'>X</span>";
  
}

newString += "</p>";



document.getElementById("sw").innerHTML = newString;




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

tempChar = guessed.search(backToChr);

 if (tempChar < 0 ) {

	dupicateChar = false;

  guessed += backToChr;

  

   }

  else {
	
			dupicateChar = true;

			document.getElementById("demo").innerHTML = "<p align='center'>Duplicate Guess!</p>";
		console.log("Duplicate Guess");

	}


if (!outOfRange && !dupicateChar)  {

                for (i = 0; i < wordLength; i++) {



			           if (backToChr === newCharacter[i].toUpperCase()) {


                      var match = true;

                      winGame++;
  
                      document.getElementById("demo").innerHTML = "<p align='center'>Correct!</p>";
          
          
                    document.getElementById("character" + i).innerHTML = newCharacter[i];
                    document.getElementById("character" + i).style.color = "#fff";

        console.log(match);

          }	

        
				
			}
}



if (winGame === wordLength) {
	winner++;
	document.getElementById("demo").innerHTML = "<p align='center'>You Win!</p>";
    document.getElementById("reset").innerHTML = "Play Again";
    document.getElementById("winner").innerHTML = winner;
	console.log("You Win!");
}
        


if (!match && !outOfRange && !dupicateChar) {

	wrongCharList += backToChr + " ";

  document.getElementById("demo").innerHTML = "<p align='center'>Wrong Guess Try Again!</p>";

   document.getElementById("userGuess").innerHTML = "<p align='center'>Missed Letters : " + wrongCharList + "</p>";

	wrongKey--;

 


}




if (wrongKey < 1) {
    looser++;
    document.getElementById("demo").innerHTML = "<p align='center'>Sorry Computer Wins This Game!</p>";
	document.getElementById("reset").innerHTML = "Play Again";
    
 console.log("Game Over");

 document.getElementById("looser").innerHTML =  looser;

wrongKey = 8;

 document.getElementById("guesses-remaning").innerHTML =  wrongKey;
}    

    match = false; 
    dupicateChar = false;
    outOfRange = false;
    
    console.log(dupicateChar);
    console.log(outOfRange);
    console.log(match);



   
    
    
     
        
      };