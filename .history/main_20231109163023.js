const packageCards =[
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

const packageForm =[
  
  {
  id: 1,
  name:"",
  description:"",
}
    

];

const app1 = document.querySelector("#app1");
const app2 = document.querySelector("#app2");

const renderToDom = (packageCards) =>{

  let domString = "";

  for(let card of packageCards){
    <div class="packageHeader"><h3>Create a new project</h3>
      <p>Coordinate,track,and update your work in one place, so projects stay transparent and on schedule.</p>
    </div>
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body"> 
      <h5 class="cardHeader">${card.name}</h5>
      <p class="card-text">${card.info}</p>
      <button type="button" class="btn btn-secondary">Learn More</button>
    </div>
  </div>`
  }
  const app1 = document.querySelector("#app1")
  app1.innerHTML = domString
}
renderToDom(packageCards)

const form = document.querySelector("form");

const formToDom = (packageForm) =>{

  let formString = "";

  for(let form of packageForm){
    formString += `<form>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" id="boardName">Project board name</label>
    <input type="text" class="form-control" class="packageForm" id="projectBoardName" aria-describedby="emailHelp">
  </div>
  <div class="form-group mb-3">
    <label for="exampleFormControlTextarea1" id="descriptionName" class="packageForm">Description<i>(Optional)</i></label>
    <textarea class="form-control" id="projectDescription" rows="3"></textarea>
  </div>
  </div>
  <button type="submit" class="btn btn-success">Create Project</button>  
</form>`
  }
  const app2 = document.querySelector("#app2")
  app2.innerHTML = formString
}

formToDom(packageForm)


const createPackage = (event) =>{
  event.preventDefault();
  
  const newPackage = {
    id: packageCards.length +1,
    name: document.querySelector("#projectBoardName").value,
    info: document.querySelector("#projectDescription").value,
  }
  packageCards.push(newPackage);
  renderToDom(packageCards);
  form.reset();
}
form.addEventListener("submit", createPackage)
