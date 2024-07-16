const reset = document.getElementById("reset");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const mo = document.getElementById("mo");
let count = 0;

plus.onclick = function() {
    count++;
    mo.textContent = count;
}

minus.onclick = function() {
    count--;
    mo.textContent = count;
}

reset.onclick = function() {
    count = 0;
    k.textContent = j;
}
