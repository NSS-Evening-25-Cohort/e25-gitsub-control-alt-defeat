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
  updates: 9
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
const createRepo = (e) => {
  e.preventDefault();
    const newRepo = {
      id: cards.length + 1,
      repoName: document.getElementById('repo-name').value,
      description: document.getElementById('description').value
    }
    cards.push(newRepo);
    renderRepo(cards)
}
const newRepoForm = () => {
  const domString = `<form id="repoForm" class="mb-3">
  <label for="repo-name" class="form-label">Repository Name</label>
  <input type="text" class="form-control" id="repo-name" required>
  <label for="description" class="form-label">Description</label>
  <input type="text" class="form-control" id="description" required>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;
renderToDom('#app1', domString);
document.querySelector('#repoForm').addEventListener('submit', () => {
  createRepo(event);
})
}

const startApp = () => {
  renderRepo(cards);
  newRepoForm();
}
startApp();
