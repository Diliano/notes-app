const NotesModel = require('./notesModel');

describe('NotesModel', () => {

  let notesModel;

  beforeEach(() => {
    notesModel = new NotesModel();
  });

  it('constructs with an empty notes list', () => {
    expect(notesModel).toBeInstanceOf(NotesModel);
    expect(notesModel.getNotes()).toEqual([]);
  });

  it('add a note to the list', () => {
    notesModel.addNote('Buy milk');
    notesModel.addNote('Go to the gym');
    expect(notesModel.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  });

  it('resets the list to empty when called', () => {
    notesModel.addNote('Buy milk');
    notesModel.addNote('Go to the gym');
    notesModel.reset();
    expect(notesModel.getNotes()).toEqual([]);
  });

});