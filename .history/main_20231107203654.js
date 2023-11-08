const packageCards =[
  {
    id: 1,
    name: "Docker",
    info: "A software platform used for building applications based on containers small and lightweight execution environments",
  },
  {
    id: 2,
    name: "Docker",
    info: "A software platform used for building applications based on containers small and lightweight execution environments",
  },
  {
    id: 3,
    name: "Docker",
    info: "A software platform used for building applications based on containers small and lightweight execution environments",
  },
  {
    id: 4,
    name: "Docker",
    info: "A software platform used for building applications based on containers small and lightweight execution environments",
  },
  {
    id: 5,
    name: "Docker",
    info: "A software platform used for building applications based on containers small and lightweight execution environments",
  },
  {
    id: 6,
    name: "Docker",
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
