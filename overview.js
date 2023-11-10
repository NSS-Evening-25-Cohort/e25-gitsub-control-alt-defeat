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

const search = (event) => {
  //SEARCH PACKAGES
  const eventLC = event.target.value.toLowerCase();
  const searchResultPackage = packageCards.filter(
    (item) =>
      item.name.toLowerCase().includes(eventLC) ||
      item.info.toLowerCase().includes(eventLC)
  );
  const searchResultRepos = repos.filter(
    (item) =>
      item.name.toLowerCase().includes(eventLC) ||
      item.description.toLowerCase().includes(eventLC) ||
      item.language.toLowerCase().includes(eventLC)
  );
  const searchResultProjects = projects.filter(
    (item) =>
      item.title.toLowerCase().includes(eventLC) ||
      item.description.toLowerCase().includes(eventLC)
  );
};

document.querySelector("#searchInput").addEventListener("keyup", search);

function rednerSearchResults() {}
