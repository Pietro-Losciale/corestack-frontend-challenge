const postsContainer = document.getElementById('posts');

let posts = [];



//fetch dei dati dall'API,trasformazione in json e renderizzazione dei primi 5 post nella pagina
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    posts = data;
    renderPosts(posts);
  });



  //render e ciclo dei primi 5 post in home
function renderPosts(posts) {
  postsContainer.innerHTML = "";



  //  aggiunta dinamica delle card per ogni post. 
  posts.slice(0, 5).forEach(post => {
    postsContainer.innerHTML += `
      <div class="col-md-4">

      <div class="card mb-5 mt-5 w-100">
        <img src="https://picsum.photos/300/200" class="card-img-top w-100">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.body}</p>
        </div>
      </div>

      </div>
    `;
  });
}


// logica di aggiunta di nuovi post

const form = document.getElementById('postForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();


  // costanti per salvare i dati inseriti nel form, catturati da getElementById//

   const title = document.getElementById('title').value;
   const body = document.getElementById('body').value;
  console.log(title,body);

  // creazione di un nuovo post con i dati inseriti nel form
  const newPost = {
    id: Date.now(),
    title: title,
    body: body
  };

  // aggiunta del nuovo post IN CIMA alla lista dei post
  posts.unshift(newPost);

  // renderizzazione dei post aggiornati
  renderPosts(posts);
});