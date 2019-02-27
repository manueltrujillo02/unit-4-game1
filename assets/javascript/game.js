

var randomNum1 = 0;
var randomNum2 = 0;
var randomNum3 = 0;
var randomNum4 = 0;
var randomNum = 0;

function resetGame (){

    randomNum = Math.floor((Math.random() * 120 ) + 1); 
    $("#number").text("RANDOM NUMBER: " + randomNum);

    
        randomNum1 = Math.floor((Math.random() * 12) + 1);
        randomNum2 = Math.floor((Math.random() * 12) + 1);
        randomNum3 = Math.floor((Math.random() * 12) + 1);
        randomNum4 = Math.floor((Math.random() * 12) + 1);
};

$(document).ready(function () {

resetGame()
  

    var wins = 0;
    var losses = 0;
    var result = 0;

    $("#losses").text("LOSSES: " + losses)
    $("#wins").text("WINS: " + wins)
    $("#yourguess").text("YOUR GUESS: " + result);

    $("#button1").on("click", function () {
        $("#yourguess").text(result += randomNum1);

        if (result === randomNum) {
            wins++
            console.log(wins)
            $("#wins").text("WINS: " + wins)
            result = 0
            $("#yourguess").text("YOUR GUESS: " + result);
            resetGame();
        }

        if (result > randomNum) {
            losses++
            console.log(losses)
            $("#losses").text("LOSSES: " + losses)
            result = 0
            $("#yourguess").text("YOUR GUESS: " + result);
            resetGame();
        }

        if (losses === 5) {
            alert("YOU LOST!")
        }

        if (wins === 3) {
            alert("YOU WON!")
        
        }

        
    });

    $("#button2").on("click", function () {
        $("#yourguess").text(result += randomNum2);

        if (result === randomNum) {
            wins++
            console.log(wins)
            $("#wins").text("WINS: " + wins)
            result = 0
            $("#yourguess").text("YOUR GUESS: " + result);
            resetGame();
        }

        if (result > randomNum) {
            losses++
            console.log(losses)
            $("#losses").text("LOSSES: " + losses)
            result = 0
            $("#yourguess").text("YOUR GUESS: " + result);
            resetGame();
        }

        if (losses === 5) {
            alert("YOU LOST!")
        }

        if (wins === 3) {
            alert("YOU WON!")
        }

        
    });

    $("#button3").on("click", function () {
        $("#yourguess").text(result += randomNum3);

        if (result === randomNum) {
            wins++
            console.log(wins)
            $("#wins").text("WINS: " + wins)
            result = 0
            $("#yourguess").text("YOUR GUESS: " + result);
            resetGame();
        }

        if (result > randomNum) {
            losses++
            console.log(losses)
            $("#losses").text("LOSSES: " + losses)
            result = 0
            $("#yourguess").text("YOUR GUESS: " + result);
            resetGame();
        }

        if (losses === 5) {
            alert("YOU LOST!")
        }

        if (wins === 3) {
            alert("YOU WON!")
        }

        
    });

    $("#button4").on("click", function () {
        $("#yourguess").text(result += randomNum4);
        console.log(randomNum4)

        if (result === randomNum) {
            wins++
            console.log(wins)
            $("#wins").text("WINS: " + wins)
            result = 0
            $("#yourguess").text("YOUR GUESS: " + result);
            resetGame();
        }

        if (result > randomNum) {
            losses++
            console.log(losses)
            $("#losses").text("LOSSES: " + losses)
            result = 0
            $("#yourguess").text("YOUR GUESS: " + result);
            resetGame();
        }
        if (losses === 5) {
            alert("YOU LOST!")
        }

        if (wins === 3) {
            alert("YOU WON!")
        }

        
    });

});

// each button should reset random number if player looses or wins 
    // each button should have a number assigned to it 
        // each button should be able to add the number assigned to it to your guess

// randomNum should generate a random number at the begging of the game 
    // randomNum should reset if player wins or looses 

// your guess should start out at 0
    // your guess should reset if player wins or looses 

// wins should be able to add to your score by 1 everytime you win
// losses should be able to add 1 to your losses 

