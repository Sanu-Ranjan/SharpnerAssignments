const BACKEND = "http://localhost:3000/users";

const form = document.getElementById("userForm");
const tableBody = document.querySelector("#dataTable tbody");
const totalUsersEl = document.getElementById("totalUsers");

async function fetchUsers() {
  try {
    const res = await axios.get(BACKEND);
    const users = res.data.data;
    console.log(users);
    tableBody.innerHTML = "";
    users.forEach((user) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td><button onclick="deleteUser('${user.id}')">Delete</button></td>
      `;
      tableBody.appendChild(tr);
    });

    totalUsersEl.textContent = `Total Users: ${users.length}`;
  } catch (err) {
    console.error(err);
    alert("Error fetching users");
  }
}

async function addUser(userData) {
  try {
    await axios.post(BACKEND, userData);
    fetchUsers();
  } catch (err) {
    console.error(err);
    alert("Error adding user");
  }
}

async function deleteUser(id) {
  try {
    await axios.delete(`${BACKEND}/${id}`);
    fetchUsers();
  } catch (err) {
    console.error(err);
    alert("Error deleting user");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const userData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
  };

  addUser(userData);
  form.reset();
});

fetchUsers();
