// JavaScript source code
let boop = document.getElementById("Boop");

boop.addEventListener("click", () => {
    document.getElementById("text").innerText = "Beep Boop"
    document.body.style.backgroundColor = "red";
});

if (document.body.style.backgroundColor == "red") {
  boop.addEventListener("click", () => {
      document.body.style.backgroundColor = "white";
  });

}
