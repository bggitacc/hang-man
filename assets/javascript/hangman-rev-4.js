// variable list

var wrongKey = 8;
var match = false;
var winGame = 0;
var guessed = "";
var dupicateChar = false;
var tempChar = "";
var outOfRange = false;
var winner = false;
var looser = 0;
var newString = "<br><p align='center'>";
var wrongCharList ="";
var computerGuess = "";
var wordLength = 0;
var newCharacter = "";
var userGuess = "";
var hangManImgArr = ["assets/images/frame-1.jpg","assets/images/frame-2.jpg","assets/images/frame-3.jpg","assets/images/frame-4.jpg","assets/images/frame-5.jpg","assets/images/frame-6.jpg","assets/images/frame-7.jpg","assets/images/frame-8.jpg"];


      // select word function

function newWord(computerGuess){

  var computerChoices = ["antisec","botnet","phishing","hacking","compiler","cookie","doxing","firewall","hacktivist","hash"];

  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  computerGuess = computerGuess.toUpperCase();

   return computerGuess;

 }

    // select word computer

computerGuess = newWord(computerGuess);

newCharacter = Array.from(computerGuess);



var wordLength = computerGuess.length;

    // build span hidden word

  for (i = 0; i < wordLength; i++) {


  newString += "<span id='character" + i + "' class='hw'>X</span>";
  
}

newString += "</p>";




      // print hidden word to screen

    document.getElementById("sw").innerHTML = newString;




  document.onkeyup = function(event) {

        // Determine which key was pressed
        var userGuess = event.keyCode;
        	console.log(userGuess);

        		// back to string old browser no event.key support

        	backToChr = String.fromCharCode(userGuess);

        	console.log(backToChr);

        	
          // check for key out of range
      
     if (userGuess < 65 || userGuess > 90) {

     		outOfRange = true;

     		document.getElementById("demo").innerHTML = "<p align='center'>Please Select A-Z Only!</p>";

        	console.log("Out of Range");

        }

        // check for match letter

tempChar = guessed.search(backToChr);

 if (tempChar < 0 ) {

	dupicateChar = false;

  guessed += " " + backToChr;

  

   }

  else {
	
			dupicateChar = true;

			document.getElementById("demo").innerHTML = "<p align='center'>Duplicate Guess!</p>";
		console.log("Duplicate Guess");

	}

      //check for duplicates


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

  // User wins game


if (winGame === wordLength) {
	winner++;
	document.getElementById("demo").innerHTML = "<p align='center'>You Win!</p>";
    document.getElementById("winner").innerHTML = winner;
	     console.log("You Win!");
       winner = true;
}
 
  // display wrong guess


if (!match && !outOfRange && !dupicateChar) {

	wrongCharList += backToChr + " ";

  document.getElementById("demo").innerHTML = "<p align='center'>Wrong Guess Try Again!</p>";
    document.getElementById("userGuess").innerHTML = "<p align='center'>Missed Letters : " + wrongCharList + "</p>";
      wrongKey--;
        document.getElementById("guesses-remaning").innerHTML = wrongKey;
          document.getElementById("hangmanImg").innerHTML = "<img id='hangman' src='" + hangManImgArr[wrongKey] + "''>";
        
}

  // end of game computer wins

if (wrongKey < 1) {

    looser++;

    document.getElementById("demo").innerHTML = "<p align='center'>Sorry Computer Wins This Game!</p>";
      document.getElementById("looser").innerHTML = looser;
          console.log("Game Over");
}    

  // missed letters


    if (!dupicateChar && !outOfRange && !match) {

      
      document.getElementById("userGuess").innerHTML = "<p align='center'>Missed Letters : " + guessed + "</p>";
    }
   //  reset flags wait for key press


    match = false; 
    dupicateChar = false;
    outOfRange = false;  
        
      };