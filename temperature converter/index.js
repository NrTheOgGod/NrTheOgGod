const x = document.getElementById("boxy");
const mo = document.getElementById("mo");
const cell = document.getElementById("cell");
const farhan = document.getElementById("farhan");
const button = document.getElementById("button");

button.onclick = function() {
     
    const value = parseFloat(x.value);
    let result;

    if (cell.checked) {
        result = (value * (9 / 5)) + 32;

    } else if (farhan.checked) {
        result = (value - 32) * (5 / 9);

    }

    mo.innerText = result.toFixed(1); 
}
