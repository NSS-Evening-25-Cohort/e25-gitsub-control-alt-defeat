const cards = [
  {
    id: 1,
    name: "Jesse",
    description: "Testy",
    keys: "netlify",
    language: "javascript",
    favorite: "yes",
    forks: 12,
    issues: 2,
    updates: 9
  },
  {
    id: 2,
    name: "Howard",
    description: "string",
    keys: "netlify",
    language: "javascript",
    favorite: "yes",
    forks: 12,
    issues: 2,
    updates: 9
  },
  {
    id: 3,
    name: "testero",
    description: "string",
    keys: "netlify",
    language: "javascript",
    favorite: "yes",
    forks: 12,
    issues: 2,
    updates: 9
  },
  {
    id: 4,
    name: "testero",
    description: "string",
    keys: "netlify",
    language: "javascript",
    favorite: "yes",
    forks: 12,
    issues: 2,
    updates: 9
  },
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
        <h5 class="card-title">${card.name}</h5>
        <p class="card-text">${card.description}</p>
      </div>
    </div>`;
  });
  console.log(domString);
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
    <input type="text" class="form-control" id="repo-name" >
    <label for="description" class="form-label">Description</label>
    <input type="text" class="form-control" id="description" >
    <button type="submit" class="btn btn-primary">Create Repo</button>
  </form>`;
  renderToDom('#app1', domString);
  document.querySelector('#repoForm').addEventListener('submit', createRepo);
}

const startApp = () => {
  renderRepo(cards);
  newRepoForm();
}

startApp();
