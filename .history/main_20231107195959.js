const packageCards =[
  {
    id: 1,
    name: "Docker",
    info: "A software platform used for building applications based on containers small and lightweight execution environments",
    Beta: false
  },
  {
    id: 2,
    name: "Docker",
    info: "A software platform used for building applications based on containers small and lightweight execution environments",
    Beta: false
  },
  {
    id: 3,
    name: "Docker",
    info: "A software platform used for building applications based on containers small and lightweight execution environments",
    Beta: false
  },
  {
    id: 4,
    img: "image",
    name: "Docker",
    info: "A software platform used for building applications based on containers small and lightweight execution environments",
    Beta: false
  },
  {
    id: 5,
    imageURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.creativebloq.com%2Fnews%2Ftwitter-logo-history&psig=AOvVaw3y8LYKl_CxiwL2W_oTsGUa&ust=1699413723681000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKD7mcz3sIIDFQAAAAAdAAAAABAE",
    name: "Docker",
    info: "A software platform used for building applications based on containers small and lightweight execution environments",
    Beta: false
  },
  {
    id: 6,
    name: "Docker",
    info: "A software platform used for building applications based on containers small and lightweight execution environments",
    imageURL: "https://st4.depositphotos.com/2274151/28310/v/380/depositphotos_283101808-stock-illustration-beta-stamp-beta-square-grunge.jpg"
  },
];

const app1 = document.querySelector("#app1");
const app2 = document.querySelector("#app2");

const renderToDom = (packageCards) =>{

  let domString = "";

  for(let card of packageCards){
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body"> 
      <h5>${card.name}</h5>
      <p class="card-text">${card.info}</p>
      <button type="button" class="btn btn-secondary">Learn More</button>
      ${card.image}
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
