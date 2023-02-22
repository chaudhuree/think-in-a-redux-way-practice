const Increment = document.getElementById("increment");
const Decrement = document.getElementById("decrement");
const ShowElement = document.getElementById("showEl");

let count = 0;
Increment.addEventListener("click", function () {
  count++;
  ShowElement.innerHTML = count;
});
Decrement.addEventListener("click", function () {
  count--;
  if(count < 0) {
    count = 0;
  }
  ShowElement.innerHTML = count;
});
