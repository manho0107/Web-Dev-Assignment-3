/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35;
let dayCounter = 0;
let totalCost = 0;
const dayButtons = document.querySelectorAll('.day-selector li');
const fullDayButton = document.getElementById('full');
const halfDayButton = document.getElementById('half');
const calculatedCostElement = document.getElementById('calculated-cost');
const clearButton = document.getElementById('clear-button');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function toggleDay() {
  if (!this.classList.contains('clicked')) {
    this.classList.add('clicked');
    dayCounter++;
  } else {
    this.classList.remove('clicked');
    dayCounter--;
  }
  recalculateTotalCost();
}

dayButtons.forEach(function(button) {
  button.addEventListener('click', toggleDay);
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays() {
  dayButtons.forEach(function(button) {
    button.classList.remove('clicked');
  });
  dayCounter = 0;
  totalCost = 0;
  calculatedCostElement.innerHTML = totalCost;
}

clearButton.addEventListener('click', clearDays);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function setRate(isFullDay) {
  fullDayButton.classList.toggle('clicked', isFullDay);
  halfDayButton.classList.toggle('clicked', !isFullDay);
  dailyRate = isFullDay ? 35 : 20;
  recalculateTotalCost();
}

fullDayButton.addEventListener('click', function() {
  setRate(true);
});
halfDayButton.addEventListener('click', function() {
  setRate(false);
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculateTotalCost() {
  totalCost = dayCounter * dailyRate;
  calculatedCostElement.innerHTML = totalCost;
}