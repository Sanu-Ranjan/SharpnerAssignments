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
  console.log(event.target.className);

  if (event.target.className == "editEntry") {
    console.log("edit used");
    console.log(event.target.parentElement);
    let info = event.target.parentElement.firstChild.textContent.split("-");
    console.log(info);
    document.getElementById("amount").value = info[0];
    document.getElementById("description").value = info[2];
    document.getElementById("category").value = info[1].trim();
  }
  event.target.parentElement.remove();
});
