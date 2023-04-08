let type_array = [];
let name_array = [];
let date_array = [];
let amount_array = [];

const currencyTypeSelect = document.getElementById("currencyType");
const nameSelect = document.getElementById("name");
const dateSelect = document.getElementById("date");
const amountSelect = document.getElementById("amount");
const tablePlaceholder = document.getElementById("tablePlaceholder");
const expensesRow = document.getElementById("expensesRow");

function calculateExpenses() {
  extractExpenses();
  inputExpenses();
  removePlaceholder();
  appendExpenses();
}

function extractExpenses() {
  currencyTypeSelect, nameSelect, dateSelect, amountSelect;
  inputExpenses(currencyTypeSelect, nameSelect, dateSelect, amountSelect);
}

function inputExpenses(
  currencyTypeSelect,
  nameSelect,
  dateSelect,
  amountSelect
) {
  type_array.shift(currencyTypeSelect);
  name_array.shift(nameSelect);
  date_array.shift(dateSelect);
  amount_array.shift(amountSelect);
}

function removePlaceholder(tablePlaceholder) {
  tablePlaceholder.remove();
}

function appendExpenses([currencyTypeSelect, nameSelect, dateSelect, amountSelect], expensesRow);
{
  const newRow = document.createElement("tr");

  values.forEach(value => {
    const newCell = document.createElement("td");
    newCell.textContent = value;
    newRow.appendChild(newCell);
  });

  expensesRow.appendChild(newRow);
}

