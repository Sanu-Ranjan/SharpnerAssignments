const BACKEND = "http://localhost:3000";

class Expense {
  constructor(amt, description, category) {
    this.amount = amt;
    this.description = description;
    this.category = category;
  }
}

const list = document.getElementById("entries");
const form = document.getElementById("expenseForm");

const loadExpenseList = async () => {
  list.innerHTML = ``;
  try {
    const {
      data: { data },
    } = await axios.get(`${BACKEND}/expenses`);

    data.forEach((e) => {
      const li = document.createElement("li");
      li.innerHTML = `Amount:${e.amount} Category:${e.category} Description:${e.description} <button onclick = "deleteExpense(${e.id},this)" >Delete</button> <button onclick = "edit(${e.id},this)" >Edit</button>`;
      list.appendChild(li);
    });
  } catch (error) {
    console.log(error.message);
  }
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const expense = new Expense(
    formData.get("amount"),
    formData.get("description"),
    formData.get("category")
  );
  console.log(expense);
  try {
    await axios.post(`${BACKEND}/expenses`, {
      amount: expense.amount,
      description: expense.description,
      category: expense.category,
    });
    loadExpenseList();
  } catch (error) {
    console.log(error.message);
  }
});

const deleteExpense = async (expenseId, btn) => {
  try {
    await axios.delete(`${BACKEND}/expenses/${expenseId}`);
    btn.parentElement.remove();
  } catch (error) {
    console.log(error.message);
  }
};

loadExpenseList();
