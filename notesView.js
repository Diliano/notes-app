class NotesView {

  constructor(model) {
    this.model = model;

    this.mainContainerEl = document.querySelector('#main-container');

    this.addNoteButtonEl = document.querySelector('#add-note-button');

    this.addNoteButtonEl.addEventListener('click', () => {
      const inputEl = document.querySelector('#note-input').value;
      this.model.addNote(inputEl);
      this.displayNotes();
    })
  }

  displayNotes() {
    const noteElements = document.querySelectorAll('.note');
    noteElements.forEach((noteEl) => {
      noteEl.remove();
    });

    const notes = this.model.getNotes();
    
    notes.forEach((note) => {
      const noteEl = document.createElement('div')
      noteEl.className = 'note';
      noteEl.textContent = note;
      this.mainContainerEl.append(noteEl);
    });
  }

};

module.exports = NotesView;