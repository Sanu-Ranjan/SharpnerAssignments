const productForm = document
  .getElementById("productForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("submit working");
    const product = event.target.product.value;
    console.log(product);

    axios({
      method: "post",
      url: "http://localhost:3000/products",
      data: {
        product: product,
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
