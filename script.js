// A list of empty arrays to add the user data if needed for future functions or data collection
let typeArray = [];
let nameArray = [];
let dateArray = [];
let amountArray = [];

// A list of global variables that will be used in the code to collect information from the HTML file
const currencyTypeSelect = document.getElementById("currencyType");
const nameSelect = document.getElementById("name");
const dateSelect = document.getElementById("date");
const amountSelect = document.getElementById("amount");
let tablePlaceholder = document.getElementById("tablePlaceholder");
const getExpenses = document.getElementById("calculateExpenses");

// The starter function that begins the whole process
getExpenses.addEventListener("click", calculateExpenses);

// the main function that contains the functions that need to move in line
function calculateExpenses() {
  extractExpenses();
  removePlaceholder();
}

// extracts all the user information and uses dot notation and arguments so that they can be utilized as a parameter in future functions.
function extractExpenses() {
  const currencyTypeValue = currencyTypeSelect.value;
  const nameValue = nameSelect.value;
  const dateValue = dateSelect.value;
  const amountValue = amountSelect.value;
  inputExpenses(currencyTypeValue, nameValue, dateValue, amountValue);
  appendExpenses([currencyTypeValue, nameValue, dateValue, amountValue]);
}

// adds in all the user information into the empty arrays above
function inputExpenses(currencyTypeValue, nameValue, dateValue, amountValue) {
  typeArray.push(currencyTypeValue);
  nameArray.push(nameValue);
  dateArray.push(dateValue);
  amountArray.push(amountValue);
}

// removes the placeholder held to explain to the user where the information will go
function removePlaceholder() {
  tablePlaceholder.remove();
}

/* adds in a new row and columns to the table div via simple JS methods in HTML with all the user information
the forEach loop is used so that this function can be used contionusly to add as much information as needed.*/
function appendExpenses(values) {
  let newRow = document.createElement("tr");

  values.forEach((value) => {
    const newCell = document.createElement("td");
    newCell.textContent = value;
    newRow.appendChild(newCell);
  });

  const tbody = document.querySelector(".adjustCells");
  tbody.appendChild(newRow);
}
