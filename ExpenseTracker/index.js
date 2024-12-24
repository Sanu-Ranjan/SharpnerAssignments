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
  deleteBtn.addEventListener("click", (event) => {
    event.target.parentElement.remove();
  });

  let editBtn = document.createElement("button");
  editBtn.className = "editEntry";
  editBtn.textContent = "Edit Expense";
  editBtn.addEventListener("click", (event) => {
    let [amt, category, description] =
      event.target.parentElement.firstChild.textContent.split("-");

    document.getElementById("amount").value = amt;
    document.getElementById("description").value = description;
    document.getElementById("category").value = category.trim();
    event.target.parentElement.remove();
  });

  listItem.appendChild(deleteBtn);
  listItem.appendChild(editBtn);

  document.getElementById("entries").append(listItem);
  document.getElementById("amount").value = "";
  document.getElementById("description").value = "";
  document.getElementById("category").value = "Food";
});
