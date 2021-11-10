var computerNumber = 53;
var nGuesses = 0;

function guess() {
    var result="";

    var number = parseInt(document.getElementById("user").value);
    nGuesses++;

    if (number == computerNumber) {
        result = "You're right!";
    } else if (number < computerNumber) {
        result = "Too low!";
    } else {
        result = "Too high!";
    }

    document.getElementById("hint").value = result;
    document.getElementById("guesses").value = nGuesses;
    return true;
}