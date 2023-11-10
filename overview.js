let user = {
  userPhoto: `"("./images/tomJones.jpg")"`,
  name: "Tom Jones",
  userId: "TommyJ",
  tagLine:
    "Doing big things and being awesome. Seriously the greatest. Built different.",
  stats: "10mil Followers - 27 following -500",
  location: "London, England",
  email: "github@tomJones.com",
  website: "https://www.tomjones.com",
  twitter: "@TommyJoJo",
  highlights: `Artict Code Vault Contributor <br>
  Git Hub Star <br> PRO`,
  organizations: "",
  sponsors: "",
};

const sidebar = document.getElementById("sidebar");

function renderSidebar() {
  sidebar.innerHTML = `
  <div id="sidebar">
    <div class="userPhoto"></div>
    <div class="realName">${user.name}</div>
    <div class="userName">${user.userId}</div>
    <div class="tagLine">
${user.tagLine}
    </div>
    <div class="buttonRowSide">
      <button type="button" class="btn btn-secondary">
        Follow
      </button>
      <button type="button" class="btn btn-secondary">
        Sponsor
      </button>
      <button type="button" class="btn btn-secondary">
        ...
      </button>
    </div>
    <div class="stats">${user.stats}</div>
    <div class="personalInfo">
      <ul>${user.location}</ul>
      <ul>${user.email}</ul>
      <ul>${user.website}</ul>
      <ul>${user.twitter}</ul>
    </div>
    <div class="highlights">
      <h1>Highlights</h1>
${user.highlights}
    </div>
    <div class="organizations">
      <h1>Organizations</h1>${user.organizations}
    </div>
    <div class="sponsors">
      <h1>Sponsors</h1>${user.sponsors}
    </div>
  </div>`;
}

renderSidebar();

const searchRenderRepos = (array) => {
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
      <button type="button">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Star_Outline.svg/2144px-Star_Outline.svg.png" alt="favorite"> Star
      </button>
    </div>`;
  });
  document.getElementById("app1").innerHTML = domString;
};

const searchRenderProjects = (array) => {
  let list = [];
  for (object of array) {
    let newItem = `<div class="container">
      <div class="row-4">
        <div class="col-3">${object.title}</div>
        <div class="col-3">${object.description}</div>
      </div>
    </div>`;
    list += newItem;
  }
  app2.innerHTML = list;
};

const searchRenderPackages = (array) => {
  let domString = "";

  for (let card of array) {
    domString += `<div class="card" style="width: 18rem;">
<div class="card-body"> 
  <h5 class="cardHeader">${card.name}</h5>
  <p class="card-text">${card.info}</p>
  <button type="button" class="btn btn-secondary">Learn More</button>
</div>
</div>`;
  }
  const app3 = document.getElementById("app3");
  app3.innerHTML = domString;
};

const search = (event) => {
  //SEARCH PACKAGES
  const eventLC = event.target.value.toLowerCase();
  const searchResultProjects = projects.filter(
    (item) =>
      item.title.toLowerCase().includes(eventLC) ||
      item.description.toLowerCase().includes(eventLC)
  );
  const searchResultRepos = repos.filter(
    (item) =>
      item.name.toLowerCase().includes(eventLC) ||
      item.description.toLowerCase().includes(eventLC) ||
      item.language.toLowerCase().includes(eventLC)
  );
  const searchResultPackage = packages.filter(
    (item) =>
      item.name.toLowerCase().includes(eventLC) ||
      item.info.toLowerCase().includes(eventLC)
  );
  //RENDER RESULTS
  searchRenderRepos(searchResultRepos);
  searchRenderProjects(searchResultProjects);
  searchRenderPackages(searchResultPackage);
  //CREATE NEW HEADERS
};

document.querySelector("#searchInput").addEventListener("keyup", search);
