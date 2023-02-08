

let displayNumber = document.getElementById("count-el");
let incrementEl = document.getElementById("increment-btn");
//Save btn
let saveEl = document.getElementById("save-btn");
//Previous Entry Display
let prevEntry = document.getElementById("save-el");
let count = 0;




//Setting start display number to always be 0
function startCounter() {
  count = 0;
  displayNumber.textContent = 0;
}

//Incrementing numbers on click
incrementEl.addEventListener('click', function() {
    count += 1;
    console.log("works");
    displayNumber.textContent = count;

});


//Saving # and displaying undder previous entries
saveEl.addEventListener('click', function() {
    savedNumber = count + " - ";
    prevEntry.textContent += savedNumber;
    startCounter();
});

