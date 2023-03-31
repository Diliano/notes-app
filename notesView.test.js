/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

describe ('NotesView', () => {

  let model;
  let view;

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    model = new NotesModel();
    view = new NotesView(model);
  });

  it('displays all notes', () => {
    model.addNote('First note');
    model.addNote('Second note');

    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toBe(2);
  });

  it('adds a new note and displays it', () => {
    const addNoteButtonEl = document.querySelector('#add-note-button');

    const inputEl = document.querySelector('#note-input');
    inputEl.value = 'secret note';

    addNoteButtonEl.click();

    const notes = document.querySelectorAll('.note');
    
    expect(notes.length).toBe(1);
    expect(notes[0].textContent).toEqual('secret note');
  });

});