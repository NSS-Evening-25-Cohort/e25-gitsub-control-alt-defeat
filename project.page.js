
let projects = [
  {
    id: 1,
    title: 'Example 1',
    Private: true,
    description: '',
    updated: '44 seconds ago'
  },
  {
    id: 2,
    title: 'my-goals',
    Private: false,
    description: '',
    updated: '7 hours ago'
  },
  {
    id: 3,
    title: 'Sample My Goals',
    Private: false,
    description: 'Goals for the NSS Bootcamp',
    updated: '1 minute ago'
  }
]

let app1 = document.querySelector('#app1');
let app2 = document.querySelector('#app2');

const displayProjects = (array) => {
let list = [];
  for (object of array) {
    let newItem = 
    `<div class="m-4">
      <dl class="row">
          <dt class="col-sm-3">${object.title}</dt>
          <dd class="col-sm-9">${object.description}</dd>
      </dl>
    </div>`
    list += newItem
  }
  app1.innerHTML = list
}

displayProjects(projects);

const displayForm = () => {
 const form = 
 `<form id="form">
  <div class="mb-3">
    <label for="title-input" class="titleLabel">Project Title</label>
    <input type="text" class="titleInput" id="title-input" placeholder="title">
  </div>
  <div class="mb-3">
    <label for="desc-input" class="descLabel">Description</label>
    <input type="text" class="descInput" id="desc-input" placeholder="description">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;
app2.innerHTML = form;
}

displayForm();

console.log(form);
console.log(app1);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newItem = {
    id: projects.length + 1,
    title: document.querySelector('#title-input').value,
    description: document.querySelector('#desc-input').value,
  }
  projects.push(newItem);
  displayProjects(projects);
  form.reset(); 
})
