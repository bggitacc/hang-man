// variable list
var wrongKey = 8;
var match = false;
var winGame = 0;
var guessed = "";
var dupicateChar = false;
var tempChar = "";
var outOfRange = false;
var winner = 0;
var looser = 0;
var winnerReset = false;
var loserReset = false;
var newString = "";
var wrongCharList = "";
var computerGuess = "";
var wordLength = 0;
var newCharacter = "";
var userGuess = "";
var resetFlag = false;
var hangManImgArr = ["assets/images/frame-1.jpg", "assets/images/frame-2.jpg", "assets/images/frame-3.jpg", "assets/images/frame-4.jpg", "assets/images/frame-5.jpg", "assets/images/frame-6.jpg", "assets/images/frame-7.jpg", "assets/images/frame-8.jpg"];
var computerChoices = ["antisec", "botnet", "phishing", "hacking", "compiler", "cookie", "doxing", "firewall", "hacktivist", "hash"];

// select word function



var a = new Audio("http://www.moviesoundscentral.com/sounds/playgames.wav");

//var a = new Audio("assets/audio/badfeeling.mp3");

a.play();

function newWord() {



    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    computerGuess = computerGuess.toUpperCase();

    newCharacter = Array.from(computerGuess);

    wordLength = computerGuess.length;

    newString = "<br><p align='center'>";

    // build span hidden word

    for (i = 0; i < wordLength; i++) {


        newString += "<span id='character" + i + "' class='hw'>X</span>";

    }

    newString += "</p>";


    return {

        computerGuess: computerGuess,
        newCharacter: newCharacter,
        wordLength: wordLength,
        newString: newString
    }



}

// Pull values from function


//var result = newWord();

computerGuess = result.computerGuess;
newCharacter = result.newCharacter;
wordLength = result.wordLength;
newString = result.newString;


// print hidden word to screen

document.getElementById("sw").innerHTML = result.newString;

document.getElementById("demo").innerHTML = "<p align='center'>Can You Guess What The Word Is?</p>";


// set listener for key press

document.onkeyup = function keyStroke(event) {




    // Determine which key was pressed
    var userGuess = event.keyCode;


    // back to string old browser no event.key support

    backToChr = String.fromCharCode(userGuess).toUpperCase();


    // check for key out of range

    if (userGuess < 65 || userGuess > 90) {


        outOfRange = true;

        document.getElementById("demo").innerHTML = "<p align='center'>Please Select A-Z Only!</p>";

    }

    // check for match letter

    tempChar = guessed.search(backToChr);

    if (tempChar < 0) {

        dupicateChar = false;

        guessed += " " + backToChr;



    } else {

        dupicateChar = true;

        document.getElementById("demo").innerHTML = "<p align='center'>Duplicate Guess!</p>";


    }

    //check for match


    if (!outOfRange && !dupicateChar) {

        for (i = 0; i < wordLength; i++) {



            if (backToChr === newCharacter[i].toUpperCase()) {


                match = true;

                winGame++;

                document.getElementById("demo").innerHTML = "<p align='center'>Correct!</p>";
                document.getElementById("character" + i).innerHTML = newCharacter[i];
                document.getElementById("character" + i).style.color = "#fff";




            }



        }
    }

    // User wins game




    // display wrong guess



    if (!match && !outOfRange && !dupicateChar) {

        wrongCharList += backToChr + " ";
        wrongKey--;

        document.getElementById("demo").innerHTML = "<p align='center'>Wrong Guess Try Again!</p>";

        document.getElementById("userGuess").innerHTML = "<p align='center'>Missed Letters : " + wrongCharList + "</p>";

        document.getElementById("guesses-remaning").innerHTML = wrongKey;

        document.getElementById("hangmanImg").innerHTML = "<img id='hangman' src='" + hangManImgArr[wrongKey] + "''>";



    }

    // end of game computer wins

    if (wrongKey < 1) {

        looser++;

        var a = new Audio("http://www.moviesoundscentral.com/sounds/waterboy/suck.wav");

        a.play();

        document.getElementById("looser").innerHTML = looser;
        console.log("Game Over");

        var result = newWord();

        computerGuess = result.computerGuess;
        newCharacter = result.newCharacter;
        wordLength = result.wordLength;
        newString = result.newString;

        match = false;
        dupicateChar = false;
        outOfRange = false;
        wrongCharList = "";
        guessed = "";
        wrongKey = 8;
        winGame = 0;

        resetFlag = true;

        document.getElementById("sw").innerHTML = newString;

        document.getElementById("demo").innerHTML = "<p align='center'>Computer Wins! Here is a new Word</p>";




        document.getElementById("userGuess").innerHTML = "<p align='center'></p>";

        document.getElementById("guesses-remaning").innerHTML = wrongKey;

        return;

    }

    if (winGame === wordLength) {
        winner++;

        var a = new Audio("http://www.moviesoundscentral.com/sounds/old_school/awesome.wav");

        a.play();

        document.getElementById("winner").innerHTML = winner;

        var result = newWord();

        computerGuess = result.computerGuess;
        newCharacter = result.newCharacter;
        wordLength = result.wordLength;
        newString = result.newString;

        match = false;
        dupicateChar = false;
        outOfRange = false;
        wrongCharList = "";
        guessed = "";
        wrongKey = 8;
        winGame = 0;

        resetFlag = true;


        // print hidden word to screen

        document.getElementById("sw").innerHTML = newString;

        document.getElementById("demo").innerHTML = "<p align='center'>You Win! Here is a new Word</p>";

        document.getElementById("userGuess").innerHTML = "<p align='center'></p>";

        document.getElementById("guesses-remaning").innerHTML = wrongKey;

        document.getElementById("userGuess").innerHTML = "<p align='center'></p>";

        return;


    }



    //  reset flags wait for key press

    match = false;
    dupicateChar = false;
    outOfRange = false;




};