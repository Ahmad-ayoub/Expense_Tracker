// A list of global variables that will be used in the code to collect information from the HTML file
const currencyTypeSelect = document.getElementById("currencyType");
const nameSelect = document.getElementById("name");
const dateSelect = document.getElementById("date");
const amountSelect = document.getElementById("amount");
const tablePlaceholder = document.getElementById("tablePlaceholder");
const addExpenses = document.getElementById("addExpensesButton");
const dltbtn = document.createElement("button");
const tableBody = document.getElementById("tableBody");

// The starter function that begins the whole process
addExpenses.addEventListener("click", addExpensesButton);

// the main function that contains the functions that need to move in line
function addExpensesButton() {
  const expense = {
    type: currencyTypeSelect.value,
    name: nameSelect.value,
    date: dateSelect.value,
    amount: amountSelect.value,
  };
  appendExpenses(expense);
  removePlaceholder();
}

// removes the placeholder held to explain to the user where the information will go
function removePlaceholder() {
  tablePlaceholder.remove();
}

/* 
adds in a new row and columns to the table div via simple JS methods in HTML with all the user information
the forEach loop is used so that this function can be used contionusly to add as much information as needed.
*/
function appendExpenses(expense) {
  const newExpenseRow = document.createElement("tr");
  const expenseType = document.createElement("td");
  const expenseName = document.createElement("td");
  const expenseDate = document.createElement("td");
  const expenseAmount = document.createElement("td");

  expenseType.textContent = expense.type;
  expenseName.textContent = expense.name;
  expenseDate.textContent = expense.date;
  expenseAmount.textContent = expense.amount;

  newExpenseRow.appendChild(expenseType);
  newExpenseRow.appendChild(expenseName);
  newExpenseRow.appendChild(expenseDate);
  newExpenseRow.appendChild(expenseAmount);

  tableBody.appendChild(newExpenseRow);
  appendDeleteBtn(newExpenseRow);
}
/*
Adds a delete button to each row on the far right to allow the user to selectively choose which row they want to delete
*/
//debugger;
function appendDeleteBtn(newRow) {
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", () => {
    newRow.remove();
  });

  const deleteButtonCell = document.createElement("td");
  deleteButtonCell.appendChild(deleteButton);
  newRow.appendChild(deleteButtonCell);
}
