const NotesModel = require('./notesModel');

describe('NotesModel', () => {

  it('constructs with an empty notes list', () => {
    // const notesModel = new NotesModel();
    expect(notesModel).toBeInstanceOf(NotesModel);
    expect(notesModel.getNotes()).toEqual([]);
  });

  it('add a note to the list', () => {
    const notesModel = new NotesModel();
    notesModel.addNote('Buy milk');
    notesModel.addNote('Go to the gym');
    expect(notesModel.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  });

  it('resets the list to empty when called', () => {
    const notesModel = new NotesModel();
    notesModel.addNote('Buy milk');
    notesModel.addNote('Go to the gym');
    notesModel.reset();
    expect(notesModel.getNotes()).toEqual([]);
  });

});