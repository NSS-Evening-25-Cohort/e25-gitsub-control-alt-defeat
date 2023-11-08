const cards = [
  {
    id: 1,
    name: 'Hackbeard the Digital Marauder',
    description: 'Jack Tar hogshead swab gangway square-rigged rum parrel scuttle lee Chain Shot. Come about Pieces of Eight marooned maroon rum reef sails Spanish Main Yellow Jack matey salmagundi. Parley grog ballast Davy Jones Locker coxswain quarter line Arr fathom warp.',
    keys: 'netlify',
    language: 'javascript',
    favorite:'yes',
    forks: 12,
    issues: 2,
    updates: 9
  },
  {
    id: 2,
    name: 'Binary Bart "The Code Buccaneer"',
    description: 'Yawl spike Brethren of the Coast scourge of the seven seas rum clipper long boat square-rigged mutiny tackle. Chase guns mizzenmast pinnace ho jack knave piracy landlubber or just lubber jib hornswaggle. Mizzen swing the lead ballast driver tack crack Jennys tea cup coffer boom aft hulk.',
    keys: 'netlify',
    language: 'javascript',
    favorite:'yes',
    forks: 12,
    issues: 2,
    updates: 9
  },
  {
    id: 2,
    name: 'Binary Bart "The Code Buccaneer"',
    description: 'Yawl spike Brethren of the Coast scourge of the seven seas rum clipper long boat square-rigged mutiny tackle. Chase guns mizzenmast pinnace ho jack knave piracy landlubber or just lubber jib hornswaggle. Mizzen swing the lead ballast driver tack crack Jennys tea cup coffer boom aft hulk.',
    keys: 'netlify',
    language: 'javascript',
    favorite:'yes',
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
