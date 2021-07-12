let btn = document.querySelector('.rs');

const newNote = () =>{
    const note = document.createElement('div');
    note.classList.add('notes');
    const htmlData = `
     <div class="btn">
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <textarea class="text" rows="30" cols="36"></textarea>`
    note.insertAdjacentHTML("afterbegin",htmlData);
    const del = note.querySelector('.delete');

del.addEventListener('click',()=>{
    note.remove();
})
   
    document.body.appendChild(note);

}



btn.addEventListener('click',()=>{
    newNote()
});

