//handling form submission
class Expense {
  constructor(amt, description, category) {
    this.amount = amt;
    this.description = description;
    this.category = category;
  }
}

document.getElementById("expenseForm").addEventListener("submit", (event) => {
  event.preventDefault();
  let entry = new Expense(
    event.target.amount.value,
    event.target.description.value,
    event.target.category.value
  );

  let listItem = document.createElement("li");
  listItem.className = "expenseList";
  listItem.textContent = ` ${entry.amount} - ${entry.category} - ${entry.description} `;

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "deleteEntry";
  deleteBtn.textContent = "Delete Entry";

  let editBtn = document.createElement("button");
  editBtn.className = "editEntry";
  editBtn.textContent = "Edit Expense";

  listItem.appendChild(deleteBtn);
  listItem.appendChild(editBtn);

  document.getElementById("entries").append(listItem);
});

document.getElementById("entries").addEventListener("click", (event) => {
  console.log(event.target);
  event.target.parentElement.remove();
});
