const overviewPage = () => {
  let user = {
    userPhoto: `"("./images/tomJones.jpg")"`,
    name: "Tom Jones",
    userId: "TommyJ",
    tagLine:
      "Doing big things and being awesome. Seriously the greatest. Built different.",
    stats: "10mil Followers - 27 following -500",
    location:
      `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  </svg>` +
      " " +
      "&nbsp " +
      `<a href="https://www.youtube.com/watch?v=XqZsoesa55w">London, England</a>`,
    email:
      `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg>` +
      " " +
      "&nbsp " +
      `<a href="https://www.youtube.com/watch?v=XqZsoesa55w">github@tomJones.com</a>`,
    website:
      `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
</svg>` +
      " " +
      "&nbsp " +
      `<a href="https://www.youtube.com/watch?v=XqZsoesa55w">https://www.tomjones.com</a>`,
    twitter:
      `<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
</svg>` +
      " " +
      "&nbsp " +
      `<a href="https://www.youtube.com/watch?v=XqZsoesa55w">@TommyJoJo</a>`,
    highlights:
      `<div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-snow" viewBox="0 0 16 16">
    <path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793V8.866l-3.4 1.963-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.884-.237a.5.5 0 1 1 .26-.966l1.848.495L7 8 3.6 6.037l-1.85.495a.5.5 0 0 1-.258-.966l.883-.237-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849L7.5 7.134V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 1 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v3.927l3.4-1.963.496-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l3.4 1.963 1.849-.495a.5.5 0 0 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-3.4-1.963v3.927l1.353 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5z"/>
  </svg>` +
      " " +
      "&nbsp " +
      `Arctic Code Vault Contributor</div>` +
      `<div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>` +
      " " +
      "&nbsp " +
      "Git Hub Star" +
      `</div> <div>` +
      `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
  </svg>` +
      " " +
      "&nbsp " +
      "PRO" +
      `</div>`,
    organizations: "",
    sponsors: "",
  };

  let pageState = "home";
  const homeButton = document.getElementById("home");
  const repoButton = document.getElementById("repositories");
  const projectsButton = document.getElementById("projects");
  const packagesButton = document.getElementById("packages");
  const app1Header = document.getElementById("app1Header");
  const app2Header = document.getElementById("app2Header");
  const app3Header = document.getElementById("app3Header");
  const sidebar = document.getElementById("sidebar");
  app1Header.innerHTML = reposIcon + " Repositories:";

  homeButton.addEventListener("click", () => {
    renderRepoPage();
    pageState = "home";
    showPageState();
  });

  repoButton.addEventListener("click", () => {
    renderRepoPage();
    pageState = "repoPage";
    showPageState();
  });

  projectsButton.addEventListener("click", () => {
    renderProjectPage();
    pageState = "projectPage";
    showPageState();
  });

  packagesButton.addEventListener("click", () => {
    renderPackagePage();
    pageState = "packagePage";
    app1Header.innerHTML = packagesIcon + " Packages:";
    showPageState();
  });
  const addBorder = "1px solid rgb(255, 148, 244)";
  const showPageState = () => {
    if (pageState === "home") {
      homeButton.style.borderBottom = addBorder;
    } else {
      homeButton.style.borderBottom = "none";
    }
    if (pageState === "repoPage") {
      repoButton.style.borderBottom = addBorder;
    } else {
      repoButton.style.borderBottom = "none";
    }
    if (pageState === "projectPage") {
      projectsButton.style.borderBottom = addBorder;
    } else {
      projectsButton.style.borderBottom = "none";
    }
    if (pageState === "packagePage") {
      packagesButton.style.borderBottom = "1px solid rgb(255, 148, 244)";
    } else {
      packagesButton.style.borderBottom = "none";
    }
  };
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
    <a href="https://www.youtube.com/watch?v=XqZsoesa55w"><button type="button" class="btn btn-secondary">
        Follow
      </button></a>
      <a href="https://www.youtube.com/watch?v=XqZsoesa55w"><button type="button" class="btn btn-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
    </svg> &nbsp Sponsor
      </button></a>
      <a href="https://www.youtube.com/watch?v=XqZsoesa55w"><button type="button" class="btn btn-secondary">
        ...
      </button></a>
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

  //RENDER SEARCH RESULTS
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

  const clearSearch = () => {
    app1.removeAttribute("style");
    app1.innerHTML = "";
    app2.innerHTML = "";
    app3.innerHTML = "";
    app1Header.innerHTML = "";
    app2Header.innerHTML = "";
    app3Header.innerHTML = "";
    app2.removeAttribute("style");
    app3.removeAttribute("style");
  };

  //SEARCH FUNCTION
  const search = (event) => {
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
    app1Header.innerHTML = reposIcon + " Repositories:";
    app2Header.innerHTML = projectsIcon + " Projects:";
    app3Header.innerHTML = packagesIcon + " Packages:";

    const addDivider =
      "border-bottom:solid 1px rgb(83, 83, 83); margin-bottom:2%; padding-bottom:2%";

    //ADD DIVIDERS TO DIV ELEMENTS
    app1.setAttribute("style", addDivider);
    app2.setAttribute("style", addDivider);
    app3.setAttribute("style", addDivider);

    if (eventLC.length === 0) {
      clearSearch();
      if (pageState === "home") {
        renderRepoPage();
      } else if (pageState === "repoPage") {
        renderRepoPage();
      } else if (pageState === "projectPage") {
        renderProjectPage();
      } else if (pageState === "packagePage") {
        renderPackagePage();
      }
    }
    if (searchResultRepos.length === 0) {
      app1.innerHTML = "No Results Found.";
    }
    if (searchResultProjects.length === 0) {
      app1.style.justifyContent = "center";
      app2.innerHTML = "No Results Found.";
      app2.style.height = "auto";
      app2.style.display = "flex";
      app2.style.flexDirection = "row";
      app2.style.alignItems = "center";
      app2.style.justifyContent = "center";
    }
    if (searchResultPackage.length === 0) {
      app3.innerHTML = "No Results Found.";
    }
  };

  document.querySelector("#searchInput").addEventListener("keyup", search);

  //DO THE THANG
  renderSidebar();
  showPageState();
};

overviewPage();
