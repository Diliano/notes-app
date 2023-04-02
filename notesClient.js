class NotesClient {

  async createNote(note) {
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
      console.error("Error:", error);
    }
  }
  
  async loadNotes(callback) {
    const response = await fetch('http://localhost:3000/notes');
    const notes = await response.json();
    callback(notes);
  }

};

module.exports = NotesClient;