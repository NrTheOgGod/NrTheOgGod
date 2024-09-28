const input = document.getElementById("input");

function check() {

  const y = input.value.split("").reverse().join("");

  if (y === input.value) {
    alert("yea");
  }
  else  {
    alert("no");
  }

  return 0;
}

