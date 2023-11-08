let app1 = document.querySelector('#app1');
let app2 = document.querySelector('#app2');


const displayForm = () => {
 const form =
 `<div class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">Email address</label>
 <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
 <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
 <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>`;
app2.innerHTML = form;
}

const projectList = () => {
const list = `<div class="container">
  <div class="row">
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div>`
app1.innerHTML = list;
}

displayForm();
projectList();
