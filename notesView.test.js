/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

describe ('NotesView', () => {

  it('displays all notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote('First note');
    model.addNote('Second note');
    view.displayNotes();
    expect(document.querySelectorAll('div.note').length).toBe(2);
  });

});