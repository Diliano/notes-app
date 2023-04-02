class NotesView {

  constructor(model, client) {
    this.model = model;
    this.client = client;

    this.mainContainerEl = document.querySelector('#main-container');

    this.addNoteButtonEl = document.querySelector('#add-note-button');

    this.addNoteButtonEl.addEventListener('click', async () => {
      const inputEl = document.querySelector('#note-input').value;
      await this.client.createNote(inputEl, () => {
        this.displayError();
      });
      this.displayNotesFromApi();
      document.querySelector('#note-input').value = '';
    })

  }

  displayNotesFromApi() {
    this.client.loadNotes(
      (notes) => {
        this.model.setNotes(notes);
        this.displayNotes();
      },
      () => {
        this.displayError();
      }
    );
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

  displayError() {
    const errorEl = document.createElement('div');
    errorEl.className = 'error';
    errorEl.textContent = 'Oops, something went wrong!';
    this.mainContainerEl.append(errorEl);
  }

};

module.exports = NotesView;