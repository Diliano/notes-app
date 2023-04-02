class NotesClient {

  async loadNotes(callback) {
    const response = await fetch('http://localhost:3000/notes');
    const notes = await response.json();
    callback(notes);
  }

};

module.exports = NotesClient;