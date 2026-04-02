const postsContainer = document.getElementById('posts');

let posts = [];

//challenge 4:caricamento

postsContainer.innerHTML = "Caricamento...";

//fetch dei dati dall'API,trasformazione in json e renderizzazione dei primi 5 post nella pagina
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    posts = data;
    renderPosts(posts);
  })

  //challenge 4: gestione errori, nel caso in cui la chiamata all'API non vada a buon fine. 
  
  .catch(error => {
    postsContainer.innerHTML = "Errore nel caricamento dei post";
    console.error(error);
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
  // console.log(title,body);

  //gestione input vuoti, con alert
  if (!title || !body) {
  alert("Compila tutti i campi");
  return;
}

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


// logica di ricerca dei post
const searchInput = document.getElementById('search');

  searchInput.addEventListener('input', function() {
      const value = searchInput.value.toLowerCase();

      const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(value)
      );

    renderPosts(filteredPosts);
});