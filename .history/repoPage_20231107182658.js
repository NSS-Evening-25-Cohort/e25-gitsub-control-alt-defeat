const cards = [
  {
    id: 1,
    name: 'Hackbeard the Digital Marauder',
    description: 'Hackbeard the Digital Marauder sails through the treacherous waters of the Dark Web, leading a crew on the Ghostly Grid, a notorious platform known for outmaneuvering cyber threats with his legendary encryption algorithm, "The Obsidian Cipher."',
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
    description: 'Binary Bart "The Code Buccaneer" commands the Bit-Raider, a vessel in cyberspace where he crafts "Plunderloops," a revolutionary code that can infiltrate any system, allowing him to liberate open-source projects from the clutches of corporate buccaneers.',
    keys: 'netlify',
    language: 'javascript',
    favorite:'yes',
    forks: 12,
    issues: 2,
    updates: 9
  },
  {
    id: 2,
    name: 'Captain CyberSails',
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
    name: 'Anne Rack-It, the Data Plunderer',
    description: 'Yawl spike Brethren of the Coast scourge of the seven seas rum clipper long boat square-rigged mutiny tackle. Chase guns mizzenmast pinnace ho jack knave piracy landlubber or just lubber jib hornswaggle. Mizzen swing the lead ballast driver tack crack Jennys tea cup coffer boom aft hulk.',
    keys: 'netlify',
    language: 'javascript',
    favorite:'yes',
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
