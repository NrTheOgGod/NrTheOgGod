var j;
const k  = document.getElementById("mo");
const l = document.getElementById("l");

l.onclick = function() { 
    j = Math.floor(Math.random() * 1000000) + 1;
    k.textContent = j; 
}