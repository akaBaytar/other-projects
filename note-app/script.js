const addButton = document.querySelector(".add-note");

addButton.addEventListener("click", () => addNewNote());

function addNewNote() {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
    <div class="tools">
        <button 
            class="edit" 
            title="Edit this note">
                <i class="bi bi-pencil-square"></i>
        </button>
        <button 
            class="pin" 
            title="Pin this note">
                <i class="bi bi-pin-angle"></i>
        </button>
        <button 
        class="clear" 
        title="Clear this note">
            <i class="bi bi-stars"></i>
        </button>
        <button 
            class="delete" 
            title="Delete this note">
                <i class="bi bi-trash"></i>
        </button>
    </div>
    <div class="main">
<textarea>
when you pin your note, they appear as markdown. 

# heading 
        
## subheading
        
*italic*
        
**bold**
        
***bold and italic***
        
- list item 1
- list item 2
</textarea>
    </div>
    `;

  const editButton = note.querySelector(".edit");
  const pinButton = note.querySelector(".pin");
  const clearButton = note.querySelector(".clear");
  const deleteButton = note.querySelector(".delete");
  const textarea = note.querySelector("textarea");
  const main = note.querySelector(".main");

  deleteButton.addEventListener("click", () => {
    note.remove();
  });

  clearButton.addEventListener("click", () => {
    textarea.value = "";
  });

  editButton.addEventListener("click", () => {
    textarea.toggleAttribute("readonly");
    textarea.classList.toggle("edit");
    main.classList.toggle("edit");
  });

  pinButton.addEventListener("click", () => {
    textarea.setAttribute("readonly", "readonly");
    editButton.style.opacity = "0.5";
    editButton.setAttribute("disabled", "disabled");
    clearButton.style.opacity = "0.5";
    clearButton.setAttribute("disabled", "disabled");
    pinButton.style.opacity = "0.5";
    pinButton.setAttribute("disabled", "disabled");
    main.innerHTML = marked.parse(textarea.value);
    main.classList.add("edit");
  });
  
  document.body.appendChild(note);
}
