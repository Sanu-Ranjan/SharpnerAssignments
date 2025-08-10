//handling form submission

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
      li.innerHTML = `Amount:${e.amount} Category:${e.category} Description:${e.description} <button onclick = "deleteExpense(${e.id})" >Delete</button> <button onclick = "edit(${e.id})" >Edit</button>`;
      list.appendChild(li);
    });
  } catch (error) {
    console.log(error.message);
  }
};

const deleteExpense = async (expenseId) => {
  try {
    await axios.delete(`${BACKEND}/expenses/${expenseId}`);
    loadExpenseList();
  } catch (error) {
    console.log(error.message);
  }
};

loadExpenseList();
