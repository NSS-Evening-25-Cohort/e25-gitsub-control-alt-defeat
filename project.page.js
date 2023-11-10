let projects = [
  {
    id: 1,
    title: "Example 1",
    Private: true,
    description: "",
    updated: "44 seconds ago",
  },
  {
    id: 2,
    title: "my-goals",
    Private: false,
    description: "",
    updated: "7 hours ago",
  },
  {
    id: 3,
    title: "Sample My Goals",
    Private: false,
    description: "Goals for the NSS Bootcamp",
    updated: "1 minute ago",
  },
];
const startProjectPage = () => {
  let app1 = document.querySelector("#app1");
  let app2 = document.querySelector("#app2");

  const displayProjects = (array) => {
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
    app1.innerHTML = list;
  };

  displayProjects(projects);

  const displayForm = () => {
    const form = `<form id="form">
    <div class="mb-3">
      <label for="title-input" class="titleLabel">Project Board Name</label>
      <input type="text" class="titleInput" id="title-input" placeholder="title">
    </div>
    <div class="mb-3">
      <label for="desc-input" class="descLabel">Description</label>
      <input type="text" class="descInput" id="desc-input" placeholder="description">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>`;
    app2.innerHTML = form;
  };

  displayForm();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newItem = {
      id: projects.length + 1,
      title: document.querySelector("#title-input").value,
      description: document.querySelector("#desc-input").value,
    };
    projects.push(newItem);
    displayProjects(projects);
    form.reset();
  });
};

startProjectPage();
