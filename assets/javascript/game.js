

var wins = 0;
var losses = 0;




var yourGuessesText = document.getElementById("crystal2");

var randomNum = Math.floor((Math.random() * 50) + 1); {

    $("#number").text(randomNum);

}

$(document).ready(function () {
   
      
        $("#button-1").on("click", function () {
            var randomNum1 = Math.floor((Math.random() * 10) + 1); {
                $("#crystal2").text(randomNum1);
                
                console.log(randomNum1)
            }
        });
        $("#button-2").on("click", function () {
            var randomNum2 = Math.floor((Math.random() * 10) + 1); {
                $("#crystal2").text(randomNum2);
               
                console.log(randomNum2)
            }
        });
        $("#button-3").on("click", function () {
            var randomNum3 = Math.floor((Math.random() * 10) + 1); {
                $("#crystal2").text(randomNum3);
                console.log(randomNum3)
            }
        });
        $("#button-4").on("click", function () {
            var randomNum4 = Math.floor((Math.random() * 10) + 1); {
                $("#crystal2").text(randomNum4);
               
                
                console.log(randomNum4)
            }
        });
    
        yourGuessesText.textContent += randomNum1 + randomNum2 + randomNum3 + randomNum4;
});
