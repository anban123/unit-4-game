// Homework Due 6.6.19 //

// The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 
// Here's how the app works:

// There will be four crystals displayed as buttons on the page.
// Each crystal should have a random hidden value between 1 - 12.

// The player will be shown a random number at the start of the game.
// The random number shown at the start of the game should be between 19 - 120.

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.

// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.

// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// Option 1 Game design notes

//START OF GAME NOTES:

//so jQuery will load first  ??
$(document).ready(function () {

//Global Variables
var wins = 0;
var losses = 0;

//other possible variables
var userTotalScore = 0;
var crystalsTotalScore = Math.floor(Math.random() * (120-19 + 1) + 19);  // the crystal values added up 19-120 /random generate number between 19-120
var crystalImages = ["assets/images/pinkCrystal.png", "assets/images/redCrystal.png", "assets/images/galaxyCrystal.png", "assets/images/rainbowCrystal.png"];

//resets and gives my crystals values and displays their images
function crystals() {
    $("#crystals").empty();     
    console.log("Crystal Function")
   //new random number,
   for (var i = 0; i < crystalImages.length; i++) {
       var img = $("<img>");
       img.attr("src", crystalImages[i]);
       img.addClass("images");
       img.attr("crystalValue", Math.floor(Math.random() * 12) + 1) 
       $("#crystals").append(img);
   }
}
crystals()

//reset function
function reset() {
    crystals();
    userTotalScore = 0;
    crystalsTotalScore = Math.floor(Math.random() * (120-19 + 1) + 19); //Math.floor(Math.random()*(max-min+1)+min)
    $("#goal-number").text(crystalsTotalScore);
}

//on click event
$(document).on("click", ".images", function() {
    console.log($(this).attr("crystalValue"));
    var score = $(this).attr("crystalValue");
    userTotalScore += parseInt(score);
    $("#user-total-score").text(userTotalScore);
    
    
    if (userTotalScore === crystalsTotalScore) {   //if win - add win, reset crystals, reset userTotalScore
        wins++;
        $("#wins").text(wins);
        alert("You Won!!!!!")
        reset();
        
    }   else if (userTotalScore > crystalsTotalScore) {   //if lose
        losses++;
        $("#losses").text(losses);
        alert("You Lost!!!")
        reset();
   }



   
}) 
reset();
})






