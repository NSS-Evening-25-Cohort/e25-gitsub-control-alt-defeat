const cards = [
  {
  id:1,
  name: "testero",
  description: "string",
  keys: "netlify",
  language: "javascript",
  favroite: "yes",
  forks: 12,
  issues: 2,
  updates: 9,
  favroite: "yes"
}];

const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML += textToRender;
}
const renderRepo = (array) => {
  let domString = "";
  array.forEach((card) => {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>`;  
  });
  renderToDom('#app2', domString);
}
// const createRepo = (e) => {
//   e.preventDefault();
//     const newRepo = {
//       id: cards.length + 1,
//       fisrstName: document.getElementById('')
//     }
// }
const newRepoForm = () => {
  const domString = `<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Repository Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@John">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Repository Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@John">
</div>
</div>`;
renderToDom('#app1', domString);
document.querySelector('#app1').addEventListener('submit', () => {
  
})
}

const startApp = () => {
  renderRepo(cards);
  newRepoForm();
}
startApp();
