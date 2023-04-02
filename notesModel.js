class NotesModel {

  constructor() {
    this.notes = [];
  }

  addNote(note) {
    this.notes.push(note);
  }

  setNotes(notes) {
    this.notes = notes;
  }

  getNotes() {
    return this.notes;
  }

  reset() {
    this.notes = [];
  }

};

module.exports = NotesModel;