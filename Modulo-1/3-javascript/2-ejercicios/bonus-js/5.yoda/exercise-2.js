const notesContainer = document.querySelector('.notesContainer')
const deleteButton = document.querySelector('button');

const getNotes = () => {
fetch("http://localhost:3000/diary")
.then((res) => res.json())
.then((response) => {
    console.log('fetch:', response);
    const orderedNotes = response.sort((a,b) => 
    a.date.replaceAll('-','' ) - b.date.replaceAll('-','' ));  
printNotes(orderedNotes);
})
}


const printNotes = (notes) => {
notes.map((note) => {

const noteTemplate = `
<div id="noteCard">
<h3>${note.title}</h3>
<h5>${note.date}</h5>
<p>${note.description}</p>
</div>
`
notesContainer.innerHTML += noteTemplate;
});

const handleDelete = () => {
    const notesCards = document.querySelectorAll('#noteCard');
    notesCards.forEach((noteCard) => noteCard.remove())
}

deleteButton.addEventListener('click', handleDelete)
}

getNotes()














