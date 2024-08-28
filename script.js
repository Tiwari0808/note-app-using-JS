const createBtn = document.querySelector('.note-btn');
const notesContainer = document.querySelector('.notes-container');

createBtn.addEventListener('click', () => {
    let newNotes = document.createElement('p');
    let img = document.createElement('img');

    newNotes.setAttribute('contenteditable', 'true');
    newNotes.className = 'input-box';
    img.src = "images/delete.png";

    notesContainer.appendChild(newNotes).appendChild(img);
})

notesContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        restoreData();
    } else if (e.target.tagName === 'P') {
        mern = document.querySelectorAll('.input-box')
        mern.forEach(nt => {
            nt.onkeyup = function () {
                restoreData();
            }
        })
    }
})

restoreData = () => {
    localStorage.setItem('data', notesContainer.innerHTML);
}

showData = () => {
    notesContainer.innerHTML = localStorage.getItem('data');
}

showData();
