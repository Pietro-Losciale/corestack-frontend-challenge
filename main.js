const postsContainer = document.getElementById('posts');

let posts = [];



//fetch dei dati dall'API,trasformazione in json e renderizzazione dei primi 5 post nella pagina
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    posts = data;
    renderPosts(posts);
  });

  
function renderPosts(posts) {
  postsContainer.innerHTML = "";

  posts.slice(0, 5).forEach(post => {
    postsContainer.innerHTML += `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <hr/>
    `;
  });
}