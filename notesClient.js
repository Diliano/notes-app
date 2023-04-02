class NotesClient {

  async createNote(note, errorCallback) {
    try {
      const data = { content: note };
      const response = await fetch('http://localhost:3000/notes', {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      errorCallback();
    }
  }

  async loadNotes(callback, errorCallback) {
    try {
      const response = await fetch('http://localhost:3000/notes');
      const notes = await response.json();
      callback(notes);
    } catch (error) {
      errorCallback();
    }
  }

};

module.exports = NotesClient;