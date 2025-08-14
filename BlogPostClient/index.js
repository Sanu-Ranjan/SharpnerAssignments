console.log("working");

const post = document.getElementById("entries");

const form = document.getElementById("blogForm");

const content = document.getElementById("content");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const blog = {
    title: formData.get("title"),
    author: formData.get("author"),
    content: formData.get("content"),
  };
  console.log(blog);
});
