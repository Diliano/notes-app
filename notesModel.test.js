const NotesModel = require('./notesModel');

describe('NotesModel', () => {

  let model;

  beforeEach(() => {
    model = new NotesModel();
  });

  it('constructs with an empty notes list', () => {
    expect(model).toBeInstanceOf(NotesModel);
    expect(model.getNotes()).toEqual([]);
  });

  it('add a note to the list', () => {
    model.addNote('Buy milk');
    expect(model.getNotes()).toEqual(['Buy milk']);
  });

  it('adds multiple notes to the list', () => {
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
  });

  it('resets the list to empty when called', () => {
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });

});