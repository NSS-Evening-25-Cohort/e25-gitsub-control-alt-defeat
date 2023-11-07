const cards = [
  {
    id: 1,
    name: "testero",
    description: "string",
    keys: "netlify",
    language: "javascript",
    favorite: "yes",
    forks: 12,
    issues: 2,
    updates: 9
  }
];

const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender; 
}

const renderRepo = (array) => {
  let domString = "";
  array.forEach((card) => {
    domString += `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${card.name}</h5> <!-- Use card data -->
        <h6 class="card-subtitle mb-2 text-muted">${card.language}</h6>
        <p class="card-text">${card.description}</p>
        <a href="#" class="card-link">${card.keys}</a>
        <a href="#" class="card-link">${card.favorite ? 'Favorite' : ''}</a>
      </div>
    </div>`;
  });
  renderToDom('#app2', domString);
}

const createRepo = (e) => {
  e.preventDefault();
  const newRepo = {
    id: cards.length + 1,
    name: document.getElementById('repo-name').value,
    description: document.getElementById('description').value,
  }
  cards.push(newRepo);
  renderRepo(cards);
}

const newRepoForm = () => {
  const domString = `<form id="repoForm" class="mb-3">
    <label for="repo-name" class="form-label">Repository Name</label>
    <input type="text" class="form-control" id="repo-name" required>
    <label for="description" class="form-label">Description</label>
    <input type="text" class="form-control" id="description" required>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>`;
  renderToDom('#app1', domString);

  // Attach the event listener to the form now
  document.querySelector('#repoForm').addEventListener('submit', createRepo);
}

const startApp = () => {
  renderRepo(cards);
  newRepoForm();
}

startApp();
