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
    info: "A software platform used for building applications based on containers small and lightweight execution environments",
  },
  {
    id: 4,
    name: "Jolly Roger",
    info: "A software platform used for building applications based on containers small and lightweight execution environments",
  },
  {
    id: 5,
    name: "Swashbucklerr",
    info: "A software platform used for building applications based on containers small and lightweight execution environments",
  },
  {
    id: 6,
    name: "Davy Jones' Locker",
    info: "A software platform used for building applications based on containers small and lightweight execution environments",
  },
];

const app1 = document.querySelector("#app1");
const app2 = document.querySelector("#app2");

const renderToDom = (packageCards) =>{

  let domString = "";

  for(let card of packageCards){
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
