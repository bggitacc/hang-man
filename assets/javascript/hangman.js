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
var resetFlag = true;
var hangManImgArr = ["assets/images/frame-1.jpg", "assets/images/frame-2.jpg", "assets/images/frame-3.jpg", "assets/images/frame-4.jpg", "assets/images/frame-5.jpg", "assets/images/frame-6.jpg", "assets/images/frame-7.jpg", "assets/images/frame-8.jpg"];
var computerChoices = ["antisec", "botnet", "phishing", "hacking", "compiler", "cookie", "doxing", "firewall", "hacktivist", "hash","adware","anonymous"];

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


    document.getElementById("sw").innerHTML = newString;

    document.getElementById("demo").innerHTML = "<p align='center'>Can You Guess What The Word Is?</p>";

    document.getElementById("hangmanImg").innerHTML = "<img id='hangman' src='assets/images/frame0.jpg'>";



    match = false;
    dupicateChar = false;
    outOfRange = false;
    wrongCharList = "";
    guessed = "";
    wrongKey = 8;
    winGame = 0;

    document.getElementById("guesses-remaning").innerHTML = wrongKey;


    return {

        computerGuess: computerGuess,
        newCharacter: newCharacter,
        wordLength: wordLength,
    }



}

document.getElementById("sw").innerHTML = "<br><p align='center'><span id='character0' class='hw' style='color:#fff;'>PRESS A KEY TO PLAY</span></p>";

// set listener for key press

document.onkeyup = function keyStroke(event) {


    if (resetFlag) {

        newWord();

        resetFlag = false;

        return;

    }

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

    //wrong guess

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

        document.getElementById("demo").innerHTML = "<p align='center'>Computer Wins This Time !</p>";

        document.getElementById("sw").innerHTML = "<br><p align='center'><span id='character0' class='hw' style='color:#fff;'>PRESS A KEY TO CONTINUE</span></p>";

        document.getElementById("userGuess").innerHTML = "<p align='center'>The word was - " + computerGuess + "</p>";

        console.log("you loose!")

        resetFlag = true;

        return;

    }

    // end of game player wins

    if (winGame === wordLength) {

        winner++;

        var a = new Audio("http://www.moviesoundscentral.com/sounds/old_school/awesome.wav");

        a.play();

        document.getElementById("winner").innerHTML = winner;


        document.getElementById("demo").innerHTML = "<p align='center'>Good Job You Win!</p>";

        document.getElementById("sw").innerHTML = "<br><p align='center'><span id='character0' class='hw' style='color:#fff;'>PRESS A KEY TO CONTINUE</span></p>";

        document.getElementById("userGuess").innerHTML = "<p align='center'></p>";

        console.log("you loose!")

        resetFlag = true;

        return;

    }

    //  reset flags wait for key press

    match = false;
    dupicateChar = false;
    outOfRange = false;

};