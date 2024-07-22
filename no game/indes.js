let attempts = 0;
let variableR = Math.floor(Math.random() * 101); // Random number generate


document.getElementById('submitGuess').onclick = function () {
    attempts++;
    const inputElement = document.getElementById('input'); // input feom the box
    let answer = parseInt(inputElement.value, 10); // Convert input value to integer

    if (isNaN(answer) || answer < 0 || answer > 100) {
        window.alert("Please enter a valid number dumbass");
    } else if (answer > variableR) {
        window.alert("Too big");
    } else if (answer < variableR) {
        window.alert("Too small");
    } else if (answer === variableR) {
        window.alert("Alright, you win! It took you " + attempts + " attempts.");
        // Reset the game
        attempts = 0;
        variableR = Math.floor(Math.random() * 101); // Generate a new random number
        inputElement.value = ''; // Clear the input field
    }
};
