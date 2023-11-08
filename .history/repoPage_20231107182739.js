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
    description: 'Captain CyberSails steers the Silicon Scallywag, a digital ship with a virtual reality deck where he develops "The Sea of Codes," a virtual oceanic world where coders can navigate through complex algorithms and engage in hackathons as if they were epic sea battles.',
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
    description: 'Anne Rack-It, the Data Plunderer, captains the Query Queen, a sleek and fast database ship that uses her famed "Cache & Conquer" technique to optimize data retrieval, making her the most feared and respected data pirate on the high info-seas.',
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
        <p>K</p>
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
