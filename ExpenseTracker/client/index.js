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
      li.innerHTML = `Amount:${e.amount} Category:${e.category} Description:${e.description}
       <button onclick = "deleteExpense(${e.id},this)" >Delete</button> 
       <button 
       data-id="${e.id}" 
       data-amount="${e.amount}" 
       data-description="${e.description}" 
       data-category="${e.category}"
       onclick = "edit(this)" >Edit</button>`;
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

const edit = (btn) => {
  const { id, amount, description, category } = btn.dataset;
  const editForm = document.createElement("form");
  editForm.innerHTML = `<label>
        Enter Expense Amount:
        <input id="amount" name="amount" type="text" value="${amount}" required />
      </label>
      <label>
        Enter Description: <input id="description" name="description"
        type="text" value="${description}" required></label
      >
      <label
        >Choose Category:
        <select id="category" name="category">
          <option value="Food">Food</option>
          <option value="Rent">Rent</option>
          <option value="Pet">Pet Expense</option>
          <option value="Electricity">Electricity</option>
          <option value="Gas">Gas</option>
          <option value="Broad Band">Broad Band</option>
          <option value="Clothes">Clothes</option>
        </select value="${category}"></label
      >
      <button id="editExpense" type="submit" >submit changes</button>`;

  editForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(editForm);
    console.log(
      formData.get("amount"),
      formData.get("description"),
      formData.get("category")
    );

    try {
      await axios.put(`${BACKEND}/expenses/${id}`, {
        amount: formData.get("amount"),
        description: formData.get("description"),
        category: formData.get("category"),
      });
      loadExpenseList();
    } catch (error) {
      console.log(error);
    }
  });

  btn.parentElement.replaceChildren(editForm);
};

loadExpenseList();
