import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItemList();
    getCategoryList();
  }, []);

  async function getItemList() {
    try {
      const response = await axios.get("http://localhost:3000/api/inventory");
      setItems(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCategoryList() {
    try {
      const response = await axios.get("http://localhost:3000/api/category");
      setCategories(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  function ItemRow({ item, setItems }) {
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const newQuantity =
        item.quantity - parseInt(formData.get("quantity"), 10);
      if (isNaN(newQuantity) || newQuantity < 0) {
        return alert("Enter a valid quantity");
      }

      try {
        const res = await axios.put("http://localhost:3000/api/inventory", {
          id: item.id,
          quantity: newQuantity,
        });

        if (res.data?.data) {
          const updated = res.data.data;
          setItems((prev) =>
            prev.map((it) =>
              it.id === item.id ? { ...it, quantity: updated.quantity } : it
            )
          );
        }
        getItemList();
      } catch (err) {
        console.error(err);
        alert("Update failed");
      }
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <span>Name: {item.name}</span> | <span>Price: {item.price}</span> |{" "}
          <span>Category: {item.category?.description}</span> |{" "}
          <span>Quantity: {item.quantity}</span> |{" "}
          <label>
            Sold Quantity:{" "}
            <input type="number" name="quantity" defaultValue={1} />
          </label>{" "}
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const form = e.target;
      const name = form.name.value.trim();
      const categoryDesc = form.category.value.trim();
      const quantity = form.quantity.value;
      const price = form.price.value;

      if (!name || !categoryDesc) {
        return alert("Name and Category are required");
      }

      let categoryObj = categories.find(
        (c) => c.description.toLowerCase() === categoryDesc.toLowerCase()
      );

      if (!categoryObj) {
        const res = await axios.post("http://localhost:3000/api/category", {
          description: categoryDesc,
        });
        categoryObj = res.data.data;
        setCategories((prev) => [...prev, categoryObj]);
      }

      const addItems = await axios.post("http://localhost:3000/api/inventory", {
        name,
        categoryId: categoryObj.id,
        quantity,
        price,
      });

      const body = addItems.data;
      if (body && (body.success === true || body.sucess === true)) {
        setItems((prev) => [...prev, body.data]);
      }

      form.reset();
    } catch (error) {
      console.log("error: ", error);
    }
  }

  return (
    <>
      <div>
        <div>
          <form id="addItemForm" onSubmit={handleSubmit}>
            <label>
              Name: <input type="text" name="name" required />
            </label>
            <label>
              Choose or add a category:
              <input list="categories" name="category" required />
              <datalist id="categories">
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.description} />
                ))}
              </datalist>
            </label>
            <label>
              Quantity: <input type="number" name="quantity" required />
            </label>
            <label>
              Price: <input type="number" step="0.01" name="price" required />
            </label>
            <button type="submit">Add Item</button>
          </form>
        </div>
        <div id="itemsContainer">
          {items.map((item) => (
            <ItemRow key={item.id} item={item} setItems={setItems} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
