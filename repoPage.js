const reposIcon = `              <svg
xmlns="http://www.w3.org/2000/svg"
width="16"
height="16"
fill="currentColor"
class="bi bi-pc-display-horizontal"
viewBox="0 0 16 16"
>
<path
  d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z"
/>
</svg>`;

const starIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
</svg>`;

const starIconFill = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>`;

const repos = [
  {
    id: 1,
    name: "Hackbeard the Digital Marauder",
    description:
      'Hackbeard the Digital Marauder sails through the treacherous waters of the Dark Web, leading a crew on the Ghostly Grid, a notorious platform known for outmaneuvering cyber threats with his legendary encryption algorithm, "The Obsidian Cipher."',
    keys: "netlify",
    language: "javascript",
    favorite: 1,
    forks: 12,
    issues: 2,
    updates: "Updated 1 days ago",
  },
  {
    id: 2,
    name: 'Binary Bart "The Code Buccaneer"',
    description:
      'Binary Bart "The Code Buccaneer" commands the Bit-Raider, a vessel in cyberspace where he crafts "Plunderloops," a revolutionary code that can infiltrate any system, allowing him to liberate open-source projects from the clutches of corporate buccaneers.',
    keys: "netlify",
    language: "javascript",
    favorite: 24,
    forks: 12,
    issues: 2,
    updates: "Updated on Dec 15, 1843",
  },
  {
    id: 3,
    name: "Captain CyberSails",
    description:
      'Captain CyberSails steers the Silicon Scallywag, a digital ship with a virtual reality deck where he develops "The Sea of Codes," a virtual oceanic world where coders can navigate through complex algorithms and engage in hackathons as if they were epic sea battles.',
    keys: "netlify",
    language: "javascript",
    favorite: 89,
    forks: 12,
    issues: 2,
    updates: "Updated 100 days ago",
  },
  {
    id: 4,
    name: "Anne Rack-It, the Data Plunderer",
    description:
      'Anne Rack-It, the Data Plunderer, captains the Query Queen, a sleek and fast database ship that uses her famed "Cache & Conquer" technique to optimize data retrieval, making her the most feared and respected data pirate on the high info-seas.',
    keys: "netlify",
    language: "javascript",
    favorite: 109234,
    forks: 12,
    issues: 2,
    updates: "Updated 10 days ago",
  },
];

const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

const renderRepo = (array) => {
  let domString = "";
  array.forEach((card) => {
    domString += `<div class="card" style="width: 18rem;">
      <div class="card-body" style="height:540px"; >
        <h5 class="card-title">${card.name}</h5>
        <p class="card-text">${card.description}</p>
        <div class="footer">
          <p class="keys">${card.keys}</p>
          <p class="language"><img src="https://www.vhv.rs/dpng/d/443-4431349_yellow-circle-png-transparent-png-download.png" alt="Language" /> ${card.language}</p>
          <p class="favorite">${starIcon} ${card.favorite}</p>
          <p class="forks"><img src="./images/whiteForkIcon.png" alt="forks" />${card.forks}</p>
          <p class="issues">Issues: ${card.issues}</p>
          <p class="updates">${card.updates}</p>
        </div>
      </div>
      <button type="button" class="star-btn" data-id="${card.id}">
    ${starIconFill} Star
</button>
    </div>`;
  });
  renderToDom("#app1", domString);
};

const createRepo = (e) => {
  e.preventDefault();
  const newRepo = {
    id: repos.length + 1,
    name: document.getElementById("repo-name").value,
    description: document.getElementById("description").value,
    favorite: 0,
    forks: 0,
    issues: 0,
    updates: "Updated just now",
  };
  repos.push(newRepo);
  renderRepo(repos);
  addFavoriteEventListener();
};

const newRepoForm = () => {
  const domString = `<form id="repoForm" class="mb-3">
    <label for="repo-name" class="form-label">Repository Name</label>
    <input type="text" class="form-control" id="repo-name" >
    <label for="description" class="form-label">Description</label>
    <input type="text" class="form-control" id="description" >
    <button type="submit" class="btn btn-primary">Create Repo</button>
  </form>`;
  renderToDom("#app2", domString);
  document.querySelector("#repoForm").addEventListener("submit", createRepo);
};

const addFavoriteEventListener = () => {
  const starButtons = document.querySelectorAll(".star-btn");
  starButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const repoId = parseInt(event.currentTarget.getAttribute("data-id"));
      incrementFavorite(repoId);
    });
  });
};

const incrementFavorite = (id) => {
  const repoIndex = repos.findIndex((repo) => repo.id === id);
  if (repoIndex !== -1) {
    repos[repoIndex].favorite += 1;

    renderRepo(repos);
    addFavoriteEventListener();
  }
};

const renderRepoPage = () => {
  app1Header.innerHTML = reposIcon + " Repositories:";
  renderRepo(repos);
  newRepoForm();
  addFavoriteEventListener();
};

renderRepoPage();
