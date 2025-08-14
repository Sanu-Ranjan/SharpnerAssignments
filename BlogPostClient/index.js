console.log("working");
const BACKEND = `http://localhost:3000`;

const post = document.getElementById("entries");

const form = document.getElementById("blogForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const blog = {
    title: formData.get("title"),
    author: formData.get("author"),
    content: formData.get("content"),
  };

  console.log(blog);

  try {
    const blogpost = await axios.post(`${BACKEND}/blogs`, {
      title: blog.title,
      author: blog.author,
      content: blog.content,
    });
    console.log(blogpost);
  } catch (error) {
    console.log(error.message);
  }
});

async function displayBlogs() {
  let blogposts;
  try {
    const {
      data: { data: blogs },
    } = await axios.get(`${BACKEND}/blogs`);
    console.log(blogs);
    blogposts = blogs;
  } catch (error) {
    console.log(error.message);
  }

  blogposts.forEach((e) => {
    const div = document.createElement("div");

    div.innerHTML = `<p>Tilte: ${e.title}</p>
      <br />
      <p>Author: ${e.author}</p>
      <br />
      <p>${e.content}</p>
      <br />
      <p></p>
      <button 
      data-id="${e.id}"  onclick="comment(this)">Comment</button>`;

    //   e.Comments.forEach((comment)=>{
    //     let div2 = document.createElement("div");
    //     div2.innerHTML
    //   })

    post.appendChild(div);
  });
}

displayBlogs();
