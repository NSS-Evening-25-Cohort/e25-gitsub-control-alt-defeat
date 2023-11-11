const packagesIcon = `              <svg
xmlns="http://www.w3.org/2000/svg"
width="16"
height="16"
fill="currentColor"
class="bi bi-box"
viewBox="0 0 16 16"
>
<path
  d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"
/>
</svg>`;

const packages = [
  {
    id: 1,
    name: "Ahoy",
    info: "Ahoy there, me hearties! The sun be settin' on the horizon, and the crew be gatherin' on deck. We be chartin' a course to find the hidden treasure on Skull Island. Hoist the Jolly Roget and prepare to set sail for adventure and riches.",
  },
  {
    id: 2,
    name: "Matey",
    info: "Arr, matey! Pass me the grog and let's raise a toast to the finest crew a pirate ever sailed with.",
  },
  {
    id: 3,
    name: "Landlubber",
    info: "Avast, ye scurvy landlubber! If ye can't tie a proper knot, ye'll be swabbin' the decks for the rest of the voyage",
  },
  {
    id: 4,
    name: "Jolly Roger",
    info: "The sight of the Jolly Roger flying high above the pirate ship struck fear into the hearts of any sailer unlucky enough to cross their path.",
  },
  {
    id: 5,
    name: "Swashbuckler",
    info: "That swashbuckler, Captain Blackbeard, swung from the rigging, cutlass in hand, and boarded the merchant ship with a gleam is his eye and thirst for adventure.",
  },
  {
    id: 6,
    name: "Davy Jones' Locker",
    info: "If ye don't heed the call of the sea, ye might just find yerself in Davy Jones' locker, where no man returns.",
  },
];

function renderPackagePage() {
  const packageForm = [{}];
  const app1 = document.querySelector("#app1");
  const app2 = document.querySelector("#app2");
  app1Header.innerHTML = packagesIcon + " Packages:";

  const renderToDom = (packages) => {
    let domString = "";

    for (let card of packages) {
      domString += `<div class="card" style="width: 18rem;">
  <div class="card-body"> 
  <button id="deletecard--${card.id}" type="button" class="btn-close" aria-label="Close"></button>
    <h5 class="cardHeader">${card.name}</h5>
    <p class="card-text">${card.info}</p>
    <button type="button" class="btn btn-secondary">Learn More</button>
  </div>
</div>`;
    }
    const app1 = document.querySelector("#app1");
    app1.innerHTML = domString;
  };
 

  renderToDom(packages);

  app1.addEventListener('click', (event) => {
    if (event.target.id.includes("deletecard")){
      const [ , id] = event.target.id.split("--");
      const index = packages.findIndex(event => event.id === Number(id));
      packages.splice(index, 1);
      renderToDom(packages);
    }
  });

  const formToDom = (packageForm) => {
    let formString = "";

    for (let form of packageForm) {
      formString += `<form>
  <div class="mb-3">
  Project Board Name
  <input type="text" class="form-control" class="packageForm" id="projectBoardName" aria-describedby="emailHelp">
  </div>
  <div class="form-group mb-3">
      <label for="exampleFormControlTextarea1" id="descriptionName" class="packageForm">Description<i>(Optional)</i></label>
      <textarea class="form-control" id="projectDescription" rows="3"></textarea>
    </div>
    <button type="submit" class="btn btn-success">Create Project</button>
</form>`;
    }
    const app2 = document.querySelector("#app2");
    app2.innerHTML = formString;
  };

  formToDom(packageForm);
  const form = document.querySelector("form");

  const createPackage = (event) => {
    event.preventDefault();

    const newPackage = {
      id: packages.length + 1,
      name: document.getElementById("projectBoardName").value,
      info: document.getElementById("projectDescription").value,
    };
    packages.push(newPackage);
    renderToDom(packages);
    form.reset();
  };

  form.addEventListener("submit", createPackage);
  
}
renderPackagePage();
