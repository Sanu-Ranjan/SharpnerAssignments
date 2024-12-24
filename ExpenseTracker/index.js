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
    event.target.amount,
    event.target.description,
    event.target.category
  );

  let listItem = document.createElement("li");
  listItem.textContent = `${entry.amount} - ${entry.category} - ${entry.description} `;
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete Entry";
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit Expense";
});
