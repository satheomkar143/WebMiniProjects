const addBtn = document.getElementById("add-btn");

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach(note =>{
    addNewNote(note);
  })
}


addBtn.addEventListener("click", () => {
  addNewNote();
});

function addNewNote(text='') {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
  <div class="notes">
    <div class="tools">
      <button class="edit-btn"><i class="fas fa-edit"></i></button>
      <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? '':"hidden"}"></div>
    <textarea name="" id="" cols="30" rows="10" class="${text ? "hidden" : ''}"></textarea>
  </div>
  `;

  const editBtn = note.querySelector(".edit-btn");
  const deleteBtn = note.querySelector(".delete-btn");

  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  textArea.value= text; 
  main.innerHTML = marked(text);

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  deleteBtn.addEventListener("click", () => {
    note.remove();
    updateLS();
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);

    updateLS();
  });

  document.body.appendChild(note);
}

function updateLS() {
  const notesText = document.querySelectorAll("textarea");

  const notes = [];

  notesText.forEach((note) => {
    notes.push(note.value);
  });

  localStorage.setItem("notes", JSON.stringify(notes));
}
