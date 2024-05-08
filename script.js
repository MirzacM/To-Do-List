const inputtdl = document.querySelector(".textarea");
const buttontdl = document.querySelector(".buttoninput");
const listtdl = document.querySelector(".todolist");

document.body.addEventListener("pointermove", (e) => {
  const { currentTarget: el, clientX: x, clientY: y } = e;
  const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
  el.style.setProperty("--posX", x - l - w / 2);
  el.style.setProperty("--posY", y - t - h / 2);
});

function clickButton(e) {
  e.preventDefault();
  addTodo();
}

// adding todoList
function addTodo() {
  const itemall = document.createElement("div");
  itemall.classList.add("itemall");

  const item = document.createElement("p");
  item.classList.add("item");
  item.innerText = inputtdl.value;
  itemall.appendChild(item);

  if (inputtdl.value === "") return;

  const checkbutton = document.createElement("button");
  checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkbutton.classList.add("check-button");
  itemall.appendChild(checkbutton);

  const trashbutton = document.createElement("button");
  trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  trashbutton.classList.add("trash-button");
  itemall.appendChild(trashbutton);

  listtdl.appendChild(itemall);
  inputtdl.value = "";
}

// checking and delete todoList
function okdel(e) {
  const item = e.target;

  // check
  if (item.classList[0] === "check-button") {
    const todolist = item.parentElement;
    todolist.classList.toggle("checklist");
  }

  // delete
  if (item.classList[0] === "trash-button") {
    const todolist = item.parentElement;
    todolist.remove();
  }
}

buttontdl.addEventListener("click", clickButton);
listtdl.addEventListener("click", okdel);
