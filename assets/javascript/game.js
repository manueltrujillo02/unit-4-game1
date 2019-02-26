var randomNum = Math.floor((Math.random() * 50) + 1); {

        $("#number").text(randomNum);
    
    }
    
    
    $(document).ready(function () {
        var randomNum1 = Math.floor((Math.random() * 10) + 1);
        var randomNum2 = Math.floor((Math.random() * 10) + 1);
        var randomNum3 = Math.floor((Math.random() * 10) + 1);
        var randomNum4 = Math.floor((Math.random() * 10) + 1);
        var wins = 0;
        var losses = 0;
        var result = 0;
        var resultText = $("#yourguess");
        $("#yourguess").text(result);
    
        $("#button1").on("click", function () {
    
            $("#yourguess").text(result += randomNum1);
            console.log(randomNum1)
    
            if (result === randomNum) {
                wins++
                console.log(wins)
                alert("you won")
            }
            if (result > randomNum) {
                losses++
                console.log(losses)
                alert("you lost")
            }
        });
        
        $("#button2").on("click", function () {
    
            $("#yourguess").text(result += randomNum2);
            console.log(randomNum2)
    
            if (result === randomNum) {
                wins++
                console.log(wins)
                alert("you won")
            }
            if (result > randomNum) {
                losses++
                console.log(losses)
                alert("you lost")
            }
    
        });
       
        $("#button3").on("click", function () {
    
            $("#yourguess").text(result += randomNum3);
            console.log(randomNum3)
    
            if (result === randomNum) {
                wins++
                console.log(wins)
                alert("you won")
            }
            if (result > randomNum) {
                losses++
                console.log(losses)
                alert("you lost")
            }
        });
       
        $("#button4").on("click", function () {
    
            $("#yourguess").text(result += randomNum4);
            console.log(randomNum4)
    
            if (result === randomNum) {
                wins++
                console.log(wins)
                alert("you won")
            }
            if (result > randomNum) {
                losses++
                console.log(losses)
                alert("you lost")
            }
        });
    
    });
    