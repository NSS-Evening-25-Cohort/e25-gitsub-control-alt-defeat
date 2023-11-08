
let user = {
  userPhoto: `"("./images/tomJones.jpg")"`,
  name: "Tom Jones",
  userId: "TommyJ",
  tagLine:
    "Doing big things and being awesome. Seriously the greatest. Built different.",
  stats: "10mil Followers - 27 following -500",
  location: "London, Englad",
  email: "github@tomJones.com",
  website: "https://www.tomjones.com",
  twitter: "@TommyJoJo",
  highlights: `"Artict Code Vault Contributor <br>
  Git Hub Star <br> PRO"`,
  organizations: "",
  sponsors: "",
};

const userPhoto = document.querySelector("userPhoto");
const realName = document.querySelector("realName");
const userName = document.querySelector("userName");
const tagLine = document.querySelector("tagLine");
const stats = document.querySelector("stats");
const personalInfo = document.querySelector("personalInfo");
const highlights = document.querySelector("highlights");
const sponsors = document.querySelector("sponsors");

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
      <h5>${card.name}</h5>
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
