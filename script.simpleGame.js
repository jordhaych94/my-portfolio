let goal = Math.floor(Math.random() * 100) + 1;

let task = document.getElementById('task'); // store element in variable.
task.innerHTML = `Can You Click ${goal} Times?`; // apply goal amount to game.

let displayAmount = document.getElementById('displayAmount'); // store element in variable.
displayAmount.value = 0; // set initial value of the input.

// add eventlistners to buttons.
let oneClick = document.getElementById("addOneBtn");
oneClick.addEventListener("click", function () {
    addToCounter(1);
});

let TenClick = document.getElementById("addTenBtn");
TenClick.addEventListener("click", function () {
    addToCounter(10);
});

let HundredClick = document.getElementById("addHundredBtn");
HundredClick.addEventListener("click", function () {
    addToCounter(100);
});

let reset = document.getElementById("resetBtn");
reset.addEventListener("click", function () {
    counter = 0;
    displayAmount.value = counter;
    oneClick.disabled = false;
    TenClick.disabled = false;
    HundredClick.disabled = false;
});


// Functions.
let counter = 0;

function addToCounter(amount) {
    counter += amount;
    displayAmount.value = counter;
    console.log(`add ${amount} button clicked`);
    if (counter >= goal) {
        alert(`You made it to ${goal} clicks! Congratulations!`);

        // Disable buttons to prevent further clicks after winning.
        oneClick.disabled = true;
        TenClick.disabled = true;
        HundredClick.disabled = true;
    }
}
