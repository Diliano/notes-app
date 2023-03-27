const NotesModel = require('./notesModel');

describe('NotesModel', () => {

  it('constructs with an empty notes list', () => {
    const notesModel = new NotesModel();
    expect(notesModel).toBeInstanceOf(NotesModel);
    expect(notesModel.getNotes()).toEqual([]);
  });



});