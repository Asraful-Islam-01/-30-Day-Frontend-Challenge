const valueEl = document.getElementById("value");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

let count = 0;
function updateValue() {
  valueEl.textContent = count;
}

incrementBtn.addEventListener("click", () => {
  count++;
  updateValue();
});

decrementBtn.addEventListener("click", () => {
count--;
updateValue();
} );

resetBtn.addEventListener("click", () => {
    count = 0;
    updateValue();
});

