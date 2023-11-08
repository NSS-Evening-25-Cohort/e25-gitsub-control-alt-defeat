const cards = [
  {
    id: 1,
    name: 'Hackbeard the Digital Marauder',
    description: 'Hackbeard the Digital Marauder sails through the treacherous waters of the Dark Web, leading a crew on the Ghostly Grid, a notorious platform known for outmaneuvering cyber threats with his legendary encryption algorithm, "The Obsidian Cipher."',
    keys: 'netlify',
    language: 'javascript',
    favorite:'1',
    forks: 12,
    issues: 2,
    updates: 'Updated 1 days ago'
  },
  {
    id: 2,
    name: 'Binary Bart "The Code Buccaneer"',
    description: 'Binary Bart "The Code Buccaneer" commands the Bit-Raider, a vessel in cyberspace where he crafts "Plunderloops," a revolutionary code that can infiltrate any system, allowing him to liberate open-source projects from the clutches of corporate buccaneers.',
    keys: 'netlify',
    language: 'javascript',
    favorite:'24',
    forks: 12,
    issues: 2,
    updates: 'Updated on Dec 15, 1843'
  },
  {
    id: 3,
    name: 'Captain CyberSails',
    description: 'Captain CyberSails steers the Silicon Scallywag, a digital ship with a virtual reality deck where he develops "The Sea of Codes," a virtual oceanic world where coders can navigate through complex algorithms and engage in hackathons as if they were epic sea battles.',
    keys: 'netlify',
    language: 'javascript',
    favorite:'89',
    forks: 12,
    issues: 2,
    updates: 'Updated 100 days ago'
  },
  {
    id: 2,
    name: 'Anne Rack-It, the Data Plunderer',
    description: 'Anne Rack-It, the Data Plunderer, captains the Query Queen, a sleek and fast database ship that uses her famed "Cache & Conquer" technique to optimize data retrieval, making her the most feared and respected data pirate on the high info-seas.',
    keys: 'netlify',
    language: 'javascript',
    favorite:'109,234',
    forks: 12,
    issues: 2,
    updates: 'Updated 10 days ago'
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
        <div class="footer">
          <p class="keys">${card.keys}</p>
          <p class="language"><img src="https://www.vhv.rs/dpng/d/443-4431349_yellow-circle-png-transparent-png-download.png" alt="Language" /> ${card.language}</p>
          <p class="favorite"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Star_Outline.svg/2144px-Star_Outline.svg.png" alt="favorite" />${card.favorite}</p>
          <p class="forks"><img src="https://www.svgrepo.com/show/326651/git-branch-outline.svg" alt="forks" />${card.forks}</p>
          <p class="issues">Issues: ${card.issues}</p>
          <p class="updates">${card.updates}</p>
        </div>
      </div>
      <button type="button" class="btn btn-primary">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Star_Outline.svg/2144px-Star_Outline.svg. png" alt="favorite"> Star
        </button>
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
